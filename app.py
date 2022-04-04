from flask import Flask, request
from flaskext.mysql import MySQL
from flask_cors import CORS, cross_origin

import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Adjust for your MySQL db
db = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'password'
app.config['MYSQL_DATABASE_DB'] = 'survey'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
db.init_app(app)


@app.route('/answer', methods=['POST'])
@cross_origin()
def getJSON():
    answers = request.get_json()
    values = (answers["question1"], answers["question2"], answers["question3"], json.dumps(answers))
    writeToDB(values)
    return "Success"


def writeToDB(val):
    # Adjust for your table
    sql = "INSERT INTO data (name, surname, answer, answersJSON) VALUES (%s, %s,%s, %s)"

    connection = db.connect()
    cursor = connection.cursor()
    cursor.execute(sql, val)
    connection.commit()
