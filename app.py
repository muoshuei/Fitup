from flask import Flask, render_template, request, jsonify
import sqlite3

dev = True

template_folder_path = 'frontend/build'
static_folder_path = 'frontend/build'
if not dev:
    template_folder_path = 'temp'
    static_folder_path = 'temp'

app = Flask(__name__, static_url_path='', static_folder=static_folder_path, template_folder=template_folder_path)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/user/<user_id>')
def get_user_data(user_id):
    return {"test":["Test1", "Test2", "Test3"]}

def retrieve_user_data(user_id):
    con = sqlite3.connect('mydatabase1.db')
    c = con.cursor()
    # 執行查詢
    a=c.execute('SELECT * FROM user_data WHERE user_id = (?);', (user_id))
    return 
@app.route('/process', methods=['POST'])
def process():
    data = request.get_json()

# 回傳的json格式如下
#   var obj = {
#     accuracy: accuracyManager.getAccuracy(),
#     time: accuracyManager.getTotalTimeInSeconds(),
#     count: exerciseCount,
#     date: "YYYY/MM/DD",
#     type: exerciseName
#   };

    accuracy=data['accuracy']
    time = data['time']
    count = data['count']
    
    print(time, accuracy, count)
    con = sqlite3.connect('mydatabase1.db')
    c = con.cursor()
    
    c.execute('''
    CREATE TABLE IF NOT EXISTS fitness_record (
        record_id INTEGER  PRIMARY KEY AUTOINCREMENT,
        correct_rate REAL ,
        exerecise_time TEXT ,
        set_number INTEGER 
    );
    ''')
    c.execute('''INSERT INTO fitness_record (correct_rate,exerecise_time,set_number) VALUES (?, ?, ?);''',
                   (accuracy, time, count))
    con.commit()
    # 執行查詢
    a=c.execute('SELECT * FROM fitness_record;')

    # 擷取所有資料
    rows = a.fetchall()

    # 顯示資料
    for row in rows:
        print(row)
    c.close()
    con.close()
    return jsonify(success=True)

if __name__ == '__main__':
    host = '127.0.0.1'
    port = 8000
    debug = True
    options = None
    app.run(host, port, debug, options)
