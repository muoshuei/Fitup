import hashlib
import time
def generate_access_token(user_id: str):
    
    salt = "GJUVQ" # Offset->1 of "FITUP"
    sha = hashlib.sha256()
    t = str(time.time_ns())
    composite = f"{user_id}{salt}{t}"
    data = composite.encode("utf-8")
    sha.update(data)
    hashed = sha.hexdigest()
    return hashed

if __name__ == "__main__":
    token = generate_access_token("ABC")
    print(token)
    print(len(token))
    