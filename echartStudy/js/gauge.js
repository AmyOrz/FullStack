option = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },

    series : [
        {
            name:'业务指标',
            type:'gauge',
            splitNumber: 20,       // 分割段数，默认为5
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, '#228b22'],[0.8, '#48b'],[1, '#ff4500']],
                    width: 10
                }
            },
            axisTick: {            // 坐标轴小标记，每个区域内的间隔线
                splitNumber: 10,   // 每份split细分多少段
                length :18,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'yellow'
                }
            },
            splitLine: {           // 分隔线，每个区域的分割线
                show: true,        // 默认显示，属性show控制显示与否
                length :30,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer : {     //指针的宽度
                width : 5
            },
            title : {    //表上的标题“完成率”
                show : true,
                offsetCenter: [0, '-40%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder'
                }
            },
            detail : {    //表中的数值“60%”
                formatter:'{value}%',
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'auto',
                    fontWeight: 'bolder'
                }
            },
            data:[{value: 60, name: '完成率'}]
        }
    ]
};
var myChart = echarts.init(document.getElementById("chart"));
myChart.setOption(option,true);

