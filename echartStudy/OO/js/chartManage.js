function ChartManage(){}
ChartManage.prototype = {
    constructor:ChartManage,
    chartList:{},
    addChart:function(name,eChart){
        this.chartList[name] = eChart;
    },
    getChart:function(ChartName){
        return this.chartList[ChartName];
    },
    initAll:function(){    //private
        for(var name in this.chartList){
            this.chartList[name].init();
        }
    },
    drawAll:function(){    //private
        for(var name in this.chartList){
            this.chartList[name].draw();
        }
    },
    Action:function(){
        this.initAll();
        this.drawAll();
    }
};


