import * as d3 from 'd3';
import { IntervalEnum } from '../Enums/ChartEnum';

//TODO - Think the shit out of how to organize these data
/*
 * Need a global parser:
 * ID(arWeak) -> ar || Enum(arm) || 肩
 * Arm -> ar
 * ar -> Arm || arm
 * Maybe others still
 * 
 * NOTE: In need of data structure of the incoming data
*/
class ChartHelper{
    static getChartSVG(){
        return d3.selectAll('svg');
    }
    static clearChart(){
        this.getChartSVG().selectAll('*').remove();
    }
    

}

export default ChartHelper;