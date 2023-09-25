class DataProcessor {

    static parseToAccuracyData(data, intervalEnum, partEnum, actionType){
        return data.filter((d) => this.isInInterval(d.date, intervalEnum)
                    && this.isPart(d.part, partEnum) 
                    && this.isActionType(d.action, actionType))
                    .map((e)=>{
                    });
    }
    static parseToTimeData(data, intervalEnum, partEnum, actionType){
        return 
    }
    static parseToAvgAccuracyData(data){
        return data.map((e)=> Math.round(e.accuracy*10000)/10000);
    }
    static parseToCountData(data, interval, part){
        
    }

    /**
     * 
     * @param {Object} data 
     * @param {IntervalEnum} IntervalEnum 
     * @returns 
     */
    static isInInterval(data, IntervalEnum){ 

    }

    static isPart(part, partEnum){

    }

    static isActionType(action, actionType){

    }
}
export default DataProcessor;