from flask import Flask

app = Flask(__name__)

@app.route("/prasanna")
def hello():
	return 'Im Prasanna';

if __name__ == '__main__':
	app.run(port=5002)