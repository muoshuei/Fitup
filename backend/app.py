from flask import Flask, render_template, send_from_directory
from api import api_blueprint
from flask_cors import CORS
app = Flask(__name__, static_url_path='', static_folder='../frontend/build', template_folder='../frontend/build')

app.register_blueprint(api_blueprint, url_prefix='/api')

CORS(app, resources={r"*": {"origins": "*"}})


@app.route('/', defaults={'path': ''})
@app.route("/<string:path>")
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")

if __name__ == '__main__':
    # host = '127.0.0.1'
    host = '0.0.0.0'
    port = 8000
    debug = True
    app.run(host, port, debug)
