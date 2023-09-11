import * as tf from '@tensorflow/tfjs';
class AngleCalculator{
    constuctor(){

    }

    vec2Cos(u, v){
      const dot = tf.sum(tf.mul(u, v));
      const uMag = tf.norm(u);
      const vMag = tf.norm(v);
      const ret = tf.div(dot, tf.mul(uMag, vMag))
      tf.dispose([dot, uMag, vMag]);
      return ret; 
    }
    
    crossProduct(vec1, vec2) {
      vec1 = vec1.dataSync();
      vec2 = vec2.dataSync();
      const x = vec1[1] * vec2[2] - vec1[2] * vec2[1];
      const y = vec1[2] * vec2[0] - vec1[0] * vec2[2];
      const z = vec1[0] * vec2[1] - vec1[1] * vec2[0];
      return [x, y, z];
    }

    getSimpleAngle(A, B, C) { 
        const BA = tf.sub(A, B);
        const BC = tf.sub(C, B);
        const cosineAngle = tf.tidy(()=>this.vec2Cos(BA, BC));
        const radian = tf.acos(cosineAngle);
        const angle = radian.mul(180 / Math.PI);
      
        // Memory clean up
        tf.dispose([BA, BC, cosineAngle, radian]);
      
        return angle.dataSync()[0];
    }

    getSurfacesAngle(A, B, C, D, E, F){
      // 從右肩到右臀的向量
      const AB = tf.sub(B, A); //[12, 24]
      // 從右肩到左臀的向量
      const AC = tf.sub(C, A); //[12, 23]
      // 計算兩向量的外積
      const cross_product1 = this.crossProduct(AB, AC);
      // 從右膝到左膝的向量
      const DE = tf.sub(E, D); //[25, 26]
      // 從右膝到右臀的向量
      const DF = tf.sub(F, D); //[25, 26]
      // 計算兩向量的外積
      const cross_product2 = this.crossProduct(DE, DF);
      // 計算兩向量外積夾角  

      const cosineAngle = tf.tidy(()=>this.vec2Cos(cross_product1, cross_product2));
    
      const radian = tf.acos(cosineAngle);
      const angle = radian.mul(180 / Math.PI);
      // Memory clean up
      tf.dispose([cross_product1, cross_product2, cosineAngle, radian]);
      return angle.dataSync()[0];
    }
    calculate(landmarks, part){
      let angle = 0;
      if(!part.type)
        return 0;
      switch(part.type){
        case "": {
          angle = 0;
          break;
        }
        case "simple": {
          const A = landmarks[part.joints[0]];
          const B = landmarks[part.joints[1]];
          const C = landmarks[part.joints[2]];
          const tA = tf.tensor([A.x, A.y, A.z]);
          const tB = tf.tensor([B.x, B.y, B.z]);
          const tC = tf.tensor([C.x, C.y, C.z]);
          angle = this.getSimpleAngle(tA, tB, tC);
          tf.dispose([tA, tB, tC]);
          break;
        }
        case "surfaces":{
          const A = landmarks[part.joints[0][0]];
          const B = landmarks[part.joints[0][1]];
          const C = landmarks[part.joints[0][2]];
          const D = landmarks[part.joints[1][0]];
          const E = landmarks[part.joints[1][1]];
          const F = landmarks[part.joints[1][2]];
          const tA = tf.tensor([A.x, A.y, A.z]);
          const tB = tf.tensor([B.x, B.y, B.z]);
          const tC = tf.tensor([C.x, C.y, C.z]);
          const tD = tf.tensor([D.x, D.y, D.z]);
          const tE = tf.tensor([E.x, E.y, E.z]);
          const tF = tf.tensor([F.x, F.y, F.z]);
          angle = this.getSurfacesAngle(tA, tB, tC, tD, tE, tF)
          tf.dispose([tA, tB, tC, tD, tE, tF]);
          break;
        }
        default:
          console.log("default");
      }
      return angle;
    }
}
export default AngleCalculator;