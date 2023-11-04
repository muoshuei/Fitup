class ExerciseParser{
    
    constructor(){
            
    }
    parse(exerciseId){
        if(!exerciseId) return [];
        const res = exerciseId.split("_", 2);
        if (res.length !== 2) return [];
        return res;
    }
    getPart(exerciseId){
        const fullNameMap = {
            "ab": "abs",
            "ar": "arm",
            "c": "chest",
            "l": "leg",
            "s": "shoulder",
            "p": "p"
        }
        const id = this.parse(exerciseId)[0];
        let part = "";
        let num = "";
        if(id.length===3){
            part = id.substring(0, 2);
            num = id.substring(2);
        }
        else if(id.length === 2){
            part = id.substring(0, 1);
            num = id.substring(1);
        }
        return `${fullNameMap[part]}/${num}`;
    }
}
export default ExerciseParser;

