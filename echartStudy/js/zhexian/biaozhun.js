var option = {
    title:{
        text:"天气变化"
    },
    tooltip:{
        trigger:"item",
        formatter: function (param) {

        }
    },
    legend:{     //导航
        data:["气温"]
    },
    calculable:true,
    xAxis:[      //x轴
            {
                type:"category",
                boundaryGap:false,
                data : ['周一','周二','周三','周四','周五','周六','周日']
            },
        ],
        yAxis:[
            {
                type:"value",
                axisLabel:{
                    formatter:"{value} ~c"
                }
            }
        ],
    series:[
        {
            name:"温度",
            type:"line",
            data:[12,3,4,3,5,7,9,0,3,23,33,4,5,6,7,8,8,5,3,2,2,2,2,2,1,1,3,4,6,7,8,9,9,0,0,9,7,6,5,4,4,6,6,7,77,7,7,7,7,77,5,4,4,4,3,3],
            markPoint:{
                data:[
                    {type:"max",name:"最大值"},
                    {type:"min",name:"最小值"}
                ]
            },
            markLine:{
                data:[
                    {type:"average",name:"平均值"}
                ]
            }
        }
    ]
}
var myChart = echarts.init(document.getElementById("chart"));
myChart.setOption(option);