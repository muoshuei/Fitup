from flask import Flask, render_template, request, jsonify
import mysql.connector

app = Flask(__name__, static_url_path='', static_folder='./frontend/build', template_folder='./frontend/build')


@app.route('/')
def index():
    return render_template("index.html")
 
@app.route('/train', methods=['POST'])
def process3():
    data = request.get_json()
    id = data['id']
    accuracy=data['accuracy']
    time = data['time']
    count = data['count']
    date = data['date']
    type = data['type']
    print(id,time,accuracy,count,date,type)

    mydb = mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        port="3306",
        password="0000",
        database="fit_database"
    )
    mycursor = mydb.cursor()
    mycursor.execute("INSERT INTO record(correct_rate,exerecise_time,set_number,exerecise_date,id,exereise_name_code) VALUES(%s,%s,%s,%s,%s,%s)",(round(accuracy,4),time,count,date,id,type))
    mydb.commit()
    mycursor.close()
    mydb.close()
    return jsonify()
 
@app.route('/changeinfo', methods=['POST'])
def process2():
   data = request.get_json()

   height=data['height'] 
   weight=data['weight']
   id=data['id']
   mydb = mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        port="3306",
        password="0000",
        database="fit_database"
    )
   cursor = mydb.cursor(buffered=True)
   update_query = "UPDATE user_info SET height = %s, weight = %s WHERE info_id = %s"
   cursor.execute(update_query, (height, weight, "000"+id))   
   cursor.execute("SELECT * FROM user_info WHERE info_id = %s",("000"+id,))
   result=cursor.fetchone()
   print(result)
   res={"height":result[1],"weight":result[2],"age":result[3],"name":result[4],"gender":result[5],"id":result[6]}
   mydb.commit()
   cursor.close()
   mydb.close()
   return jsonify(res)

@app.route('/signin', methods=['POST'])
def process1():
   data = request.get_json()

   mail=data['mail'] 
   password=data['password']

   mydb = mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        port="3306",
        password="0000",
        database="fit_database"
    ) 
   mycursor = mydb.cursor(buffered=True)
   query = "SELECT id FROM users WHERE id = %s"
   mycursor.execute(query,(mail,))
   mailresult=mycursor.fetchone()
   if mailresult is not None:
      query = "SELECT password FROM users WHERE id = %s"
      mycursor.execute(query,(mail,))
      passwordresult=mycursor.fetchone()
      print(mailresult[0])
      if passwordresult[0]==password:
         print(passwordresult[0])
         mycursor.execute("SELECT * FROM user_info WHERE info_id = %s",("000"+mail,))
         result=mycursor.fetchone()
         print(result)
         res={"status": True,"height":result[1],"weight":result[2],"age":result[3],"name":result[4],"gender":result[5],"id":result[6],"bmi":round(result[2] / (result[1] / 100) ** 2, 2)}
         mydb.commit()
         mycursor.close()
         mydb.close()
         return jsonify(res)
      else :
         res={"status": False}
         mydb.commit()
         mycursor.close()
         mydb.close()
         return jsonify(res)    
   else :
      res={"status": False}
      mydb.commit()
      mycursor.close()
      mydb.close()
      return jsonify(res)

@app.route('/signup', methods=['POST'])
def process():
    data = request.get_json()
    
    name=data['name']
    mail=data['mail']
    password=data['password']
    gender=data['gender']
    height=data['height']
    weight=data['weight']
    age=data['age']

    mydb = mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        port="3306",
        password="0000",
        database="fit_database"
    ) 
    mycursor = mydb.cursor(buffered=True)
    query = "SELECT id FROM users WHERE id = %s"
    mycursor.execute(query,(mail,))
    result=mycursor.fetchone()
    
    if result is not None:
         print(result)
         res={"status": False}
         mydb.commit()
         mycursor.close()
         mydb.close()
         return jsonify(res)
    else:
         mycursor.execute("INSERT INTO users(id,password) VALUES(%s,%s)",(mail,password))
         mycursor.execute("INSERT INTO user_info(info_id,height,weight,age,name,gender,id) VALUES(%s,%s,%s,%s,%s,%s,%s)",("000"+mail,height,weight,age,name,gender,mail))
            # 執行查詢
         mycursor.execute("SELECT * FROM user_info;")
            # 擷取所有資料
         rows = mycursor.fetchall()
            # 顯示資料
         for row in rows:
            print(row)
         res={"status": True}
         mydb.commit()
         mycursor.close()
         mydb.close()
         return jsonify(res)
   

if __name__ == '__main__':
    host = '127.0.0.1'
    port = 8000
    debug = True
    options = None
    app.run(host, port, debug, options)
