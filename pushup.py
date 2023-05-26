import cv2
import mediapipe as mp
import numpy as np

mp_drawing = mp.solutions.drawing_utils
mp_pose = mp.solutions.pose

def calculate_angle_3d(a, b, c): 
    a = np.array(a)  # First
    b = np.array(b)  # Mid
    c = np.array(c)  # End
    ba = a - b
    bc = c - b
    dot_product = np.dot(ba, bc)
    norm_ba = np.linalg.norm(ba)
    norm_bc = np.linalg.norm(bc)
    angle = np.arccos(dot_product / (norm_ba * norm_bc))
    return np.degrees(angle)

def draw_on_image(image, results):
    if not results.pose_world_landmarks == None:
        landmarks = results.pose_world_landmarks.landmark
    else:
        landmarks = None
        return image
    # Get coordinates for right side
    x1 = [landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].x,
          landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].y,
          landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].z]
    
    x2 = [landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].x,
          landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].y,
          landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].z]
    
    x3 = [landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].x,
          landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].y,
          landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].z]
    # Get coordinates for left side
    x1_left = [landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].x,
        landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].y,
        landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].z]

    x2_left = [landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].x,
        landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].y,
        landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].z]

    x3_left = [landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].x,
        landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].y,
        landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].z] 
    
    # Calculate angle 
    angle = calculate_angle_3d(x1, x2, x3)
    angle_left = calculate_angle_3d(x1_left, x2_left, x3_left)
    
    # Visualize angle
    cv2.putText(image, "Right Angle: {:.1f}".format(angle),
    (50, 50),
    cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2, cv2.LINE_AA)
    cv2.putText(image, "Left Angle: {:.1f}".format(angle_left), 
    (50, 100), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2, cv2.LINE_AA)
    #只凸顯訓練部位
    lmList = []
    if results.pose_landmarks:
        for id, lm in enumerate(results.pose_landmarks.landmark):
            h, w, c = image.shape
            # print(id, lm)
            cx, cy = int(lm.x * w), int(lm.y * h)
            lmList.append([id, cx, cy])
    #右手臂      
    x1, y1 =lmList[12][1:]
    cv2.circle(image, (x1, y1), 10, (0, 0, 255), cv2.FILLED)
    cv2.circle(image, (x1, y1), 15, (0, 0, 255), 2)
    #左手臂
    x4, y4 =lmList[11][1:]
    cv2.circle(image, (x4, y4), 10, (0, 0, 255), cv2.FILLED)
    cv2.circle(image, (x4, y4), 15, (0, 0, 255), 2)
    #身體
    x7, y7 =lmList[23][1:]
    x8, y8 =lmList[24][1:]
    cv2.circle(image, (x7, y7), 10, (0, 0, 255), cv2.FILLED)
    cv2.circle(image, (x7, y7), 15, (0, 0, 255), 2)
    cv2.circle(image, (x8, y8), 10, (0, 0, 255), cv2.FILLED)
    cv2.circle(image, (x8, y8), 15, (0, 0, 255), 2)
    cv2.line(image, (x4, y4), (x1, y1), (255, 255, 255), 3)
    cv2.line(image, (x7, y7), (x8, y8), (255, 255, 255), 3)
    cv2.line(image, (x1, y1), (x8, y8), (255, 255, 255), 3)
    cv2.line(image, (x4, y4), (x7, y7), (255, 255, 255), 3)
    
    #左腿
    x1, y1 =lmList[24][1:]
    x2, y2 =lmList[26][1:]         
    cv2.line(image, (x1, y1), (x2, y2), (255, 255, 255), 3)
    
    cv2.circle(image, (x1, y1), 10, (0, 0, 255), cv2.FILLED)
    cv2.circle(image, (x1, y1), 15, (0, 0, 255), 2)
    cv2.circle(image, (x2, y2), 10, (0, 0, 255), cv2.FILLED)
    cv2.circle(image, (x2, y2), 15, (0, 0, 255), 2)
    
    #右腿
    x1, y1 =lmList[23][1:]
    x2, y2 =lmList[25][1:]          
    cv2.line(image, (x1, y1), (x2, y2), (255, 255, 255), 3)
    
    cv2.circle(image, (x1, y1), 10, (0, 0, 255), cv2.FILLED)
    cv2.circle(image, (x1, y1), 15, (0, 0, 255), 2)
    cv2.circle(image, (x2, y2), 10, (0, 0, 255), cv2.FILLED)
    cv2.circle(image, (x2, y2), 15, (0, 0, 255), 2)
    return image