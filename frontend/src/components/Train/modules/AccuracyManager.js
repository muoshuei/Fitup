class Timer {
    constructor(name){
        this.name = name;
        this.startTime = 0;
        this.pauseTime = 0;
        this.timerTime = 0;
        this.pausing = true;
        this.paused = false;
    }

    getCurrentTimeMill(){
        if(this.pausing){
            let totalPauseTime = Date.now()- this.pauseTime;
            let currentTimerTime = Date.now() - this.startTime;
            this.timerTime = currentTimerTime - totalPauseTime;
          }
        else{
          this.timerTime = Date.now() - this.startTime;
        }
          
        return this.timerTime;
    }
    start(){
        if(this.paused){
            this.resume();
        }
        else{
          if(this.pausing){
            this.pausing = false;
            this.startTime = Date.now();
          }
            
        }
        this.paused = false;
      }
      pause(){
        if(this.pausing)
          return
        this.pausing = true;
        this.pauseTime = Date.now();
        this.paused = true;
      }
      reset(){
        this.pausing = true;
        this.startTime = Date.now();
        this.pauseTime = Date.now();
        this.paused = false;
      }
      resume(){
        this.pausing = false;
        let totalPauseTime = Date.now()- this.pauseTime;
        this.startTime += totalPauseTime;
        this.pauseTime = 0;
      }
      init(){
        this.startTime = Date.now();
        this.pauseTime = Date.now();
        this.pausing = true;
      }
      display(){
        let tmp = this.getCurrentTimeMill();
        let hrs = Math.floor(tmp / 1000 / 60 / 60);
        let mins = Math.floor(tmp / 1000 % (60 * 60) / 60);
        let secs = Math.floor(tmp / 1000 % 60);
        return `${hrs}:${mins}:${secs}`
      }
}

class AccuracyManager{
    constructor(){
        this.accuracy = 1;
        this.totalTime = 0;
        this.accurateTime = 0;
        this.correct = true;
        this.lastCorrect = true;
        this.justStartedOrResumed = false;
        this.accuracyTimer = new Timer("Accuracy timer");
        this.exerciseTimer = new Timer("Exercise timer");
        this.accuracyTimer.init();
        this.exerciseTimer.init();
    }
    getAccuracy(){
        return this.accuracy;
    }
    update(){
        if(!this.exerciseTimer.pausing){
          if(this.correct !== this.lastCorrect && !this.justStartedOrResumed){
            if(this.correct){
                this.accuracyTimer.resume();
            }
            else{
                this.accuracyTimer.pause();
            }
          }
          this.lastCorrect = this.correct
        }
        this.justStartedOrResumed = false;
        this.totalTime = this.exerciseTimer.getCurrentTimeMill();
        this.accurateTime = this.accuracyTimer.getCurrentTimeMill();
        this.accuracy = this.totalTime === 0 ? 1 : this.accurateTime / this.totalTime;

    } 
    start(){
        this.exerciseTimer.start();
        if(this.correct)
          this.accuracyTimer.start();
        this.justStartedOrResumed = true;
    }
    pause(){
        this.exerciseTimer.pause();
        this.accuracyTimer.pause();
    }
    reset(){
        this.totalTime = 0;
        this.inaccurateTime = 0;
        this.accuracy = 1;
        this.correct = true;
        this.lastCorrect = true;
        this.exerciseTimer.reset();
        this.accuracyTimer.reset();
    }
    getTotalTimeInSeconds(){
      return Math.floor(this.totalTime / 1000);
    }
    isPausing(){
      return this.exerciseTimer.pausing;
    }
}
export default AccuracyManager;