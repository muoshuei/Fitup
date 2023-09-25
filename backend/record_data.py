from connector import MySQLConnection
from db_config import *
import random
import datetime
credentials = {
   "DB_HOST" : DB_HOST,
   "DB_USER" : DB_USER,
   "DB_PASS" : DB_PASS,
   "DB_NAME" : DB_NAME,
   "DB_PORT" : DB_PORT
}
range_map = {"s": 7, "ar": 4, "c": 5, "ab": 5, "l": 5, "p": 1}
parts = ["s", "ar", "c", "ab", "l", "p"]

db = MySQLConnection.get_instance(credentials)

cursor = db.cursor()

query = "INSERT INTO record(accuracy, time, count, date, user_id, exercise_id) VALUES(%s,%s,%s,%s,%s,%s);"
for i in range(0, 100):
    accuracy = round(random.random(), 4)
    time = random.randint(27, 91)
    count = random.choice([8, 10, 12, 16])
    rand_days = random.randint(1, 7)
    dt = datetime.datetime.now() - datetime.timedelta(days=rand_days)
    date = str(dt.date())
    user_id = random.randint(1, 4)
    part = random.choice(parts)
    index = random.randint(1, range_map[part])
    exercise_id = part + str(index)
    cursor.execute(query, (accuracy, time, count, date, user_id, exercise_id))
db.commit()
cursor.close()
db.close()
