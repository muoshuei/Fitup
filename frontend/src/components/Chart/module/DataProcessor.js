import { IntervalEnum, PartsEnum } from "../Enums/ChartEnum";

class DataProcessor {

    static parseToAccuracyData(data, intervalEnum, partEnum){
        const filteredData = data.filter(e =>
                DataProcessor.isPart(e.exercise_id, partEnum) && 
                DataProcessor.isInInterval(e.date, intervalEnum)
            );
        const result = {"":[]};
        filteredData.forEach(e => {
            if(!result[e.exercise_id]){
                result[e.exercise_id] = [];
            }
            result[e.exercise_id].push(e);
        });
        return result;
    }
    static parseToTimeData(data, intervalEnum, partEnum){
        const filteredData = data.filter(e => 
            DataProcessor.isPart(e.exercise_id, partEnum) &&
            DataProcessor.isInInterval(e.date, intervalEnum));
        const result = {"":[]};
        filteredData.forEach(e => {
            if(!result[e.exercise_id]){
                result[e.exercise_id] = [];
            }
            result[e.exercise_id].push(e);

            // if(!result[""][e.date]){
            //     result[""][e.date] = {"date": e.date, "total_time": e.total_time};
            // }
            // else{
            //     result[""][e.date].total_time = result[""][e.date].total_time + e.total_time;
            // }
        });
        return result;
    }
    static parseToAvgAccuracyData(data){
        const result = [...data];
        result.map(e => {e.accuracy = Math.round(e.accuracy*10000)/10000});
        return result;
    }
    static parseToCountData(data, partEnum){

        const result = data.filter(e => DataProcessor.isPart(e.exercise_id, partEnum));
        return result;
    }
    static parseToAccuracyDataV2(data){

        const result = {
            [PartsEnum.Abs]: [], 
            [PartsEnum.Arm]: [], 
            [PartsEnum.Chest]: [], 
            [PartsEnum.Shoulder]: [],
            [PartsEnum.Leg]: []
        };
        data.forEach(e => {
            Object.keys(result).map((k, i)=>{
                if(DataProcessor.isPart(e.exercise_id, Number(k))){
                    result[k].push(e);
                }  
            })
        });

        return result;
    }
    static isInInterval(date, intervalEnum){
        //Input will always get midnight time (YYYY-MM-DD)
        const inputDate = new Date(date);
        //Set to midnight of today
        const currentDate = new Date();
        // const timezoneOffset = - currentDate.getTimezoneOffset() / 60;
        // currentDate.setHours(timezoneOffset, 0, 0, 0);
        switch(intervalEnum){
            case IntervalEnum.Today:{
                // Avoid using "==" and "===" operator to perform a Date object comparison
                // Instead use "<" to trigger timestamp comparison
                return currentDate <= inputDate && inputDate <= currentDate;
            }
            case IntervalEnum.ThisWeak:{
                const startOfWeak = new Date(currentDate);
                startOfWeak.setDate(currentDate.getDate() - currentDate.getDay());
                const endOfWeak = new Date(currentDate);
                endOfWeak.setDate(currentDate.getDate() + (6 - currentDate.getDay()));
                return startOfWeak <= inputDate && inputDate <= endOfWeak;
            }
            case IntervalEnum.LatestWeak:{
                const sevenDaysAgo = new Date(currentDate);
                sevenDaysAgo.setDate(currentDate.getDate() - 7);
                return sevenDaysAgo <= inputDate && inputDate <= currentDate;
            }
            case IntervalEnum.ThisMonth:{
                return (
                    inputDate.getFullYear() === currentDate.getFullYear() &&
                    inputDate.getMonth() === currentDate.getMonth()
                );
            }
            case IntervalEnum.LatestMonth:{
                const thirtyDaysAgo = new Date(currentDate);
                thirtyDaysAgo.setDate(currentDate.getDate() - 30);
                return thirtyDaysAgo <= inputDate && inputDate <= currentDate;
            }
            case IntervalEnum.ThisYear:{
                return (
                    inputDate.getFullYear() === currentDate.getFullYear()
                );
            }
            default:
                return false;
        }

    }

    static isPart(exercise_id, partEnum){
        const prefix = exercise_id[0] === 'a' ? exercise_id.substring(0,2) : exercise_id[0];

        switch(partEnum){
            case PartsEnum.Abs:{
                return prefix === "ab";
            }
            case PartsEnum.Arm: {
                return prefix === "ar" || prefix === "p";
            }
            case PartsEnum.Chest: {
                return prefix === "c" || prefix === "p";
            }
            case PartsEnum.Leg: {
                return prefix === "l";
            }
            case PartsEnum.Shoulder: {
                return prefix === "s" || prefix === "p";
            }
            default: {
                return false;
            }
        }
    }

    static isActionType(action, actionType){

    }
}
export default DataProcessor;