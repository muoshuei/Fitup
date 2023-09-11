class ExerciseCountManager{
    constructor(LB = 0, UB = 180){
        this.count = 0;
        this.counterPartsState = [true, true];
        this.counterLB = LB;
        this.counterUB = UB;
    }

    setBounds(LB, UB){
        this.counterLB = LB;
        this.counterUB = UB;
    }
    reset(){
        this.count = 0;
        this.counterPartsState = [true, true];
    }
    softReset(){
        this.counterPartsState = [true, true];
    }
    check(angles){
        let Langle = angles[0];
        let Rangle = angles[1];
        let LState = this.counterPartsState[0];
        let RState = this.counterPartsState[1];
        if (LState && RState && Langle < this.counterLB && Rangle < this.counterLB) {
            this.counterPartsState = [false, false];
        } else if (!LState && !RState && Langle > this.counterUB && Rangle > this.counterUB) {
            this.counterPartsState = [true, true];
            this.count++;
        }
    }
    
}
export default ExerciseCountManager;