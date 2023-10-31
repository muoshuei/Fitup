from flask import Blueprint, jsonify, request

from db_config import DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT
from connector import  MySQLConnection
from helper import Helper
import datetime
from auth import generate_access_token
credentials = {
   "DB_HOST" : DB_HOST,
   "DB_USER" : DB_USER,
   "DB_PASS" : DB_PASS,
   "DB_NAME" : DB_NAME,
   "DB_PORT" : DB_PORT
   }

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route('/menu/<user_id>', methods=['GET'])
def get_menu(user_id):
   print(user_id)
   db = MySQLConnection.get_instance(credentials=credentials)
   cursor = db.cursor()
   cursor.execute(f"SELECT preference_string FROM user_info WHERE user_id = {user_id}")
   pre_str = cursor.fetchone()[0]
   parsed_obj = Helper.parse_preference_string(pre_str)
   db.commit()
   cursor.close()
   response = jsonify({"list": parsed_obj})
   return response

@api_blueprint.route('/menu', methods=['PUT'])
def add_menu():
   data = request.get_json()
   user_id = data["user_id"]
   menu_id = data["menu_id"]
   print(user_id, menu_id)
   db = MySQLConnection.get_instance(credentials=credentials)
   menu_index = Helper.get_menu_index_from_menu_id(menu_id)
   cursor = db.cursor()
   cursor.execute(f"SELECT preference_string FROM user_info WHERE user_id = {user_id}")
   pre_str = cursor.fetchone()[0]
   new_pre_str = Helper.add_from_menu_index(pre_str, menu_index)
   query = "UPDATE user_info SET preference_string=%s WHERE user_id = %s"
   cursor.execute(query, (new_pre_str, user_id))
   db.commit()
   cursor.close()
   response = jsonify({"status": True})
   return response

@api_blueprint.route('/menu', methods=['DELETE'])
def delete_menu():
   data = request.get_json()
   user_id = data["user_id"]
   menu_id = data["menu_id"]
   print(user_id, menu_id)
   db = MySQLConnection.get_instance(credentials=credentials)
   menu_index = Helper.get_menu_index_from_menu_id(menu_id)
   cursor = db.cursor()
   cursor.execute(f"SELECT preference_string FROM user_info WHERE user_id = {user_id}")
   pre_str = cursor.fetchone()[0]
   new_pre_str = Helper.delete_from_menu_index(pre_str, menu_index)
   query = "UPDATE user_info SET preference_string=%s WHERE user_id = %s"
   cursor.execute(query, (new_pre_str, user_id))
   db.commit()
   cursor.close()
   response = jsonify({"status": True})
   return response


@api_blueprint.route('/train', methods=['POST'])
def save_train_data():
   data = request.get_json()
   print(data)
   user_id = data['user_id']
   accuracy=data['accuracy']
   time = data['time']
   count = data['count']
   date = data['date']
   exercise_id = data['exercise_id']
   print(user_id,time,accuracy,count,date,exercise_id)
   db = MySQLConnection.get_instance(credentials)
   cursor = db.cursor()
   cursor.execute("INSERT INTO record(accuracy, time, count, date, user_id, exercise_id) VALUES(%s,%s,%s,%s,%s,%s)",(round(accuracy,4),time,count,date,user_id,exercise_id))
   db.commit()
   cursor.close()
   response = jsonify({"status": True})
   return response

@api_blueprint.route('/info', methods=['POST'])
def change_info():
   data = request.get_json()
   height=data['height'] 
   weight=data['weight']
   user_id=data['user_id']
   db = MySQLConnection.get_instance(credentials)
   cursor = db.cursor(buffered=True)
   query = "UPDATE user_info SET height = %s, weight = %s WHERE user_id = %s"
   cursor.execute(query, (height, weight, user_id))   
   db.commit()
   cursor.close()
   return jsonify({"status": True})

@api_blueprint.route('/userdata', methods=['PUT'])
def update_info():
   db = MySQLConnection.get_instance(credentials)
   data = request.get_json()
   cursor = db.cursor(buffered=True)

   user_id = data['id']

   if "menu_id" in data:
      menu_id = data['menu_id']
      menu_index = Helper.get_menu_index_from_menu_id(menu_id)
      query = "SELECT preference_string FROM user_info WHERE user_id = %s"
      cursor.execute(query, (user_id, ))
      pre_str = cursor.fetchone()[0]
      new_pre_str = Helper.toggle_from_menu_index(pre_str, menu_index)
      query = "UPDATE user_info SET preference_string=%s WHERE user_id = %s"
      cursor.execute(query, (new_pre_str, user_id))
   else:
      height = data['height'] 
      weight = data['weight']
      query = "UPDATE user_info SET height = %s, weight = %s WHERE user_id = %s"
      cursor.execute(query, (height, weight, user_id))   
   
   query = "SELECT u.user_id, u.account, i.height, i.weight, i.age, i.name, i.gender, i.preference_string "\
               "FROM user AS u "\
               "LEFT JOIN user_info AS i "\
               "ON u.user_id = i.user_id "\
               "WHERE u.user_id=%s;"
   cursor.execute(query, (user_id,))
   user = cursor.fetchone()
   (id, acc, h, w, age, name, gender, p_str) = user
   bmi = w / h / h * 10000
   user_data = {
      "id": id,
      "account": acc,
      "height": h,
      "weight": w,
      "age": age,
      "name": name,
      "gender": gender,
      "preferenceList": Helper.parse_preference_string(p_str),
      "bmi": bmi
   }
   res={"status": True, "user": user_data}
   db.commit()
   cursor.close()
   return jsonify(res)

@api_blueprint.route('/info/<user_id>', methods=['GET'])
def get_info(user_id):
   db = MySQLConnection.get_instance(credentials)
   cursor = db.cursor(buffered=True)
   query = "SELECT height, weight, age, name, gender FROM user_info WHERE user_id = %s"
   cursor.execute(query, (user_id, ))   
   result = cursor.fetchone()
   (height, weight, age, name, gender) = result
   obj = {
      "height": height,
      "weight": weight,
      "bmi": (weight / height / height * 10000),
      "age": age,
      "name": name,
      "gender": gender
   }
   db.commit()
   cursor.close()
   return jsonify(obj)

@api_blueprint.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    name=data['name']
    account=data['account']
    password=data['password']
    gender=data['gender']
    height=data['height']
    weight=data['weight']
    age=data['age']

    db = MySQLConnection.get_instance(credentials)
    cursor = db.cursor(buffered=True)
    query = "SELECT * FROM user WHERE account = %s"
    cursor.execute(query,(account,))
    result = cursor.fetchone()
    
    if result is not None:
         print(result)
         res={"status": False}
         db.commit()
         cursor.close()
         return jsonify(res)
    else:
         query = "INSERT INTO user(account,password) VALUES(%s,%s);"
         cursor.execute(query, (account, password))
         query = "SELECT user_id from user WHERE account = %s;"
         cursor.execute(query, (account, ))
         user_id = cursor.fetchone()[0]
         cursor.execute("INSERT INTO user_info(height,weight,age,name,gender,user_id) VALUES(%s,%s,%s,%s,%s,%s);",(height, weight, age, name, gender, user_id))
         res={"status": True}
         db.commit()
         cursor.close()
         return jsonify(res)

@api_blueprint.route('/signin', methods=['POST'])
def signin():
   data = request.get_json()

   account=data['account'] 
   password=data['password']

   db = MySQLConnection.get_instance(credentials)
   cursor = db.cursor(buffered=True)
   query = "SELECT user_id, account, password FROM user WHERE account = %s;"
   cursor.execute(query, (account,))
   result = cursor.fetchone()
   if result is not None:
      if result[2] == password:
         token = generate_access_token((result[1] + str(result[0]))) #123@gmail.com + 1
         expire_date = str((datetime.datetime.now() + datetime.timedelta(days=7)).date())
         query = "INSERT INTO tokens(access_token, expire_time, user_id) VALUES(%s, %s, %s)"
         cursor.execute(query, (token, expire_date, result[0]))
         query = "SELECT u.user_id, u.account, i.height, i.weight, i.age, i.name, i.gender, i.preference_string "\
               "FROM user AS u "\
               "LEFT JOIN user_info AS i "\
               "ON u.user_id = i.user_id "\
               "WHERE u.account = %s;"
         cursor.execute(query, (account,))
         user = cursor.fetchone()
         (id, acc, h, w, age, name, gender, p_str) = user
         bmi = w / h / h * 10000
         user_data = {
            "id": id,
            "account": acc,
            "height": h,
            "weight": w,
            "age": age,
            "name": name,
            "gender": gender,
            "preferenceList": Helper.parse_preference_string(p_str),
            "bmi": bmi
         }
         res={"status": True, "user": user_data, "accessToken": token }
         db.commit()
         cursor.close()
         return jsonify(res)
      else :
         res={"status": False}
         db.commit()
         cursor.close()
         return jsonify(res)    
   else :
      res={"status": False}
      db.commit()
      cursor.close()
      return jsonify(res)

@api_blueprint.route('/chart/avgaccdate/<user_id>', methods=['GET'])
def get_avg_acc_date_data(user_id):
   db = MySQLConnection.get_instance(credentials=credentials)

   cursor = db.cursor()
   query = "SELECT SUM(accuracy * time) / SUM(time) AS avg_accuracy, date, exercise_id FROM record WHERE user_id = %s GROUP BY date, exercise_id"
   cursor.execute(query, (user_id, ))
   result = cursor.fetchall()
   obj = {"records": [{"avg_accuracy": str(round(row[0], 4)), "date": str(row[1]), "exercise_id": row[2]} for row in result]}

   db.commit()
   cursor.close()
   return jsonify(obj)

@api_blueprint.route('/chart/avgacc/<user_id>', methods=['GET'])
def get_avg_acc_data(user_id):
   db = MySQLConnection.get_instance(credentials=credentials)

   cursor = db.cursor()
   query = "SELECT SUM(accuracy * time) / SUM(time) AS avg_accuracy, exercise_id FROM record WHERE user_id = %s GROUP BY exercise_id"
   cursor.execute(query, (user_id, ))
   result = cursor.fetchall()
   obj = {"records": [{"avg_accuracy": str(round(row[0], 4)), "exercise_id": row[1]} for row in result]}

   db.commit()
   cursor.close()
   return jsonify(obj)

@api_blueprint.route('/chart/totaltime/<user_id>', methods=['GET'])
def get_total_time_data(user_id):
   db = MySQLConnection.get_instance(credentials=credentials)

   cursor = db.cursor()
   query = "SELECT SUM(time) AS total_time, date, exercise_id FROM record WHERE user_id = %s GROUP BY date, exercise_id"
   cursor.execute(query, (user_id, ))
   result = cursor.fetchall()
   obj = {"records": [{"total_time": str(row[0]), "date": str(row[1]), "exercise_id": row[2]} for row in result]}
   db.commit()
   cursor.close()
   return jsonify(obj)

@api_blueprint.route('/chart/accsumm/<user_id>', methods=['GET'])
def get_acc_summ_data(user_id):
   db = MySQLConnection.get_instance(credentials=credentials)

   cursor = db.cursor()
   query = 'SELECT SUM(accuracy * time) / SUM(time) AS accuracy, e.part_id '\
               'FROM record AS r '\
               'LEFT JOIN exercise AS e '\
               'ON r.exercise_id = e.exercise_id '\
               'WHERE user_id = %s GROUP BY e.part_id; '
   cursor.execute(query, (user_id, ))
   result = cursor.fetchall()
   obj = {"records": [{"accuracy": str(row[0]), "part_id": str(row[1])} for row in result]}
   db.commit()
   cursor.close()
   return jsonify(obj)

@api_blueprint.route('/chart/counts/<user_id>', methods=['GET'])
def get_counts_data(user_id):
   db = MySQLConnection.get_instance(credentials=credentials)

   cursor = db.cursor()
   query = 'SELECT exercise_id, SUM(count) AS total_count '\
               'FROM record '\
               'WHERE user_id = %s GROUP BY exercise_id; '
   cursor.execute(query, (user_id, ))
   result = cursor.fetchall()
   obj = {"records": [{"exercise_id": str(row[0]), "total_count": str(row[1])} for row in result]}
   
   db.commit()
   cursor.close()
   return jsonify(obj)
    

