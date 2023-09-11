class ExerciseParser{
    constructor(){

    }
    parse(exerciseId){
        if(!exerciseId) return [];
        const res = exerciseId.split("_", 2);
        if (res.length !== 2) return [];
        return res;
    }
}
export default ExerciseParser;

