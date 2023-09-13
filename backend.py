from flask import Flask, render_template, request, jsonify
import mysql.connector

app = Flask(__name__, static_url_path='', static_folder='build', template_folder='build')


@app.route('/')
def index():
    return render_template("index.html")

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
         res={"status": True}
         mydb.commit()
         mycursor.close()
         mydb.close()
         return jsonify(res)
      else :
         print("banana")
         res={"status": False}
         mydb.commit()
         mycursor.close()
         mydb.close()
         return jsonify(res)    
   else :
      print("apple")
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
