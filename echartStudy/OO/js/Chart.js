function Chart(canvas,option){
    this.canvas = canvas;
    this.option = option;
}
Chart.prototype = {
    constructor:Chart,
    myChart:null,
    init:function(){
        this.myChart = echarts.init(document.getElementById(this.name));
    },
    draw: function(){
        this.myChart.setOption(this.option);
    },
    getCanvas:function(){
        return this.canvas;
    },
    setCanvas:function(canvas){
        this.canvas = canvas;
        return this;
    },
    getOption:function(){
        return copy(this.option);
    },
    setOption: function (option) {
        this.option = option;
        return this;
    }


};
ChartFactory = {
    createChart:function(canvas,option){
        return new Chart(canvas,option);
    }
}
