from flask import Flask
from flask import redirect
from flask import request
from flask import render_template
from flask import url_for
from flask import Response
from flask_login import LoginManager, UserMixin, \
                                login_required, login_user, logout_user, current_user

from sqlalchemy import create_engine, MetaData, Table
import json

engine = create_engine('sqlite:////tmp/test.db', convert_unicode=True)
metadata = MetaData(bind=engine)
con = engine.connect()

# Add all the table names here.
assets = Table('assets', metadata, autoload=True)


app = Flask(__name__)

# Change these value if login credentials for admin user needs to be changed.
ADMIN_USERNAME = 'admin'
ADMIN_PASSWORD = 'admin'

# config
app.config.update(
    DEBUG = True,
    SECRET_KEY = 'secret_xxx'
)

# flask-login
login_manager = LoginManager()
login_manager.init_app(app)

# Basic user model. Just supports admin.
class User(UserMixin):

    def __init__(self, id):
        self.id = id
        self.name = ADMIN_USERNAME
        self.password = ADMIN_PASSWORD

    def __repr__(self):
        return "%d/%s/%s" % (self.id, self.name, self.password)

@app.route("/", methods=['GET', 'POST'])
def index():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if (username == ADMIN_USERNAME and password == ADMIN_PASSWORD):
            user = User(1)
            login_user(user)
            return redirect(url_for('dashboard'))
        else:
            return "Wrong Credentials"
    return Response('''
        <form action="" method="post">
            <p><input type=text name=username>
            <p><input type=password name=password>
            <p><input type=submit value=Login>
        </form>
        ''')

@app.route("/dashboard", methods=['GET', 'POST'])
@login_required
def dashboard():
    return "Dashboard template "

@app.route("/logout")
@login_required
def logout():
    logout_user()
    return Response('<p>Logged out</p>')


@app.route("/get_assets", methods=['GET'])
def get_assets():
    # Both of the queries below does the same thing.
    assets.select(assets.c.id == 1).execute().first()
    r = engine.execute('select * from assets where id = :1', [1]).first()
    return json.dumps({'id': r['id']})


# Callback to reload the user object. More details at
# https://flask-login.readthedocs.io/en/latest/#how-it-works.
@login_manager.user_loader
def load_user(userid):
    return User(userid)

if __name__ == "__main__":
    app.run()
