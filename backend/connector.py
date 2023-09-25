import mysql.connector 
class MySQLConnection:
    __instance: mysql.connector.connection.MySQLConnection = None 

    def __init__(self, host, user, password, name, port):
        self.host = host
        self.user = user
        self.password = password 
        self.name = name
        self.port = port
        if MySQLConnection.__instance is None:
            MySQLConnection.__instance = mysql.connector.connect(
                host = self.host,
                user = self.user,
                password = self.password,
                database = self.name,
                port = self.port
            )
        else:
            raise Exception("Cannot create another SQL connection")
        
    @staticmethod
    def get_instance(credentials):
        if not MySQLConnection.__instance:
            MySQLConnection(credentials['DB_HOST'], credentials['DB_USER'], credentials['DB_PASS'], credentials['DB_NAME'], credentials['DB_PORT'])
        return MySQLConnection.__instance

    @staticmethod
    def close_instance() -> None:
        MySQLConnection.__instance.close()
