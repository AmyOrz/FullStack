var option = {
    title:{
        text:"粉丝数量趋势图"
    },
    legend:{
        data:["fans number"]
    },
    tooltip:{
        trigger:"axis",
        formatter:"{b}<br >{a}:{c}万"
    },
    xAxis:[
        {
            type:"category",
            boundaryGap:false,
            data:["2012-3-1","2012-3-2","2012-3-3",],
            splitLine:{
                show:false
            },
        }
    ],
    yAxis:[
        {
            name:"fans 数量",
            type:"value",
            scale:true,
            axisLabel:{
                formatter: function (name) {
                    return name +"万"
                }
            }
        }
    ],
    series:[
        {
            name:"fans number",
            data:[4,6,7],
            type:"line",
            symbol:'circle',
            symbolSize:7,
            itemStyle:{
                normal:{
                    color:"red",
                },
                areaStyle:{
                    color:"rgba(218,112,62,0.3)",
                    type:"default"
                }
            },
            markPoint:{
                data:[
                    {type:"max",name:"总量"}
                ]
            }
        }
    ]
};
var myChart = echarts.init(document.getElementById("chart"));
myChart.setOption(option);

function Change(num){
    myChart.showLoading();
    var url = num == 7?"./js/json/near7.json":"./js/json/near.json";
    console.log(url)
    $.get(url,function(data){
        myChart.hideLoading();
        myChart.setOption({
            xAxis:[
                {
                    data:data.axis
                }
            ],
            series:[
                {
                    data:data.series
                }
            ]
        })
    })
}
