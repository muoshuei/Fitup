from flask import Flask, render_template, Response, send_from_directory
import cv2
import pushup
import mediapipe as mp

app = Flask(__name__, static_url_path='', static_folder='frontend/build', template_folder='frontend/build')

mp_drawing = mp.solutions.drawing_utils
mp_pose = mp.solutions.pose

def gen_frames():  
    camera = cv2.VideoCapture(0)
    if camera.isOpened():
        success, frame = camera.read()
    else:
        success = False
    while success:
        with mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as pose:
            success, frame = camera.read()  # read the camera frame
            if frame is None:
                continue
            else:
                # Recolor image to RGB
                image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
                image.flags.writeable = False
                # Make detection
                results = pose.process(image)
                # Recolor back to BGR
                image.flags.writeable = True
                image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

                
                image = pushup.draw_on_image(image, results)

                ret, buffer = cv2.imencode('.jpg', image)
                if not ret:
                    continue

                image = buffer.tobytes()
            yield (b'--frame\r\n'
                    b'Content-Type: image/jpeg\r\n\r\n' + image + b'\r\n')  # concat frame one by one and show result

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video_feed', methods= ['GET'])
def video_feed():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    host = '127.0.0.1'
    port = 8000
    debug = False
    options = None
    app.run(host, port, debug, options)
