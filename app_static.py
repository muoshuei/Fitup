from flask import Flask, render_template, jsonify
from auth import generate_access_token

app = Flask(__name__)
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/api/user/<user_id>')
def get_user_data(user_id):
    print(f"{user_id}")
    response = jsonify({"test": f"{user_id} as data"})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
    host = '127.0.0.1'
    port = 8000
    debug = True
    options = None
    app.run(host, port, debug, options)
