


var myChart = echarts.init(document.getElementById('nmg-map'));
	
			

            var option = {
				title: {
                    text: 'IMG',

                    x:'center',
                },
				
                tooltip: {
//show: false //不显示提示标签
                    formatter: '{b}', //提示标签格式
                    backgroundColor:"#ff7f50",//提示标签背景颜色，橘色
                    textStyle:{color:"#fff"} //提示标签字体颜色
                },
                series: [
			
				
				{
                    type: 'map',
				
                    mapType: 'nmg',
					zoom: 1.15, //放大显示
                    label: {
                        normal: {
                            show: false,//显示省份标签,在不做出任何动作时，默认显示
                            textStyle:{color:"#c71585"}//省份标签字体颜色,紫色
                        },    
                        emphasis: {//对应的鼠标悬浮效果
                            show: false,//高亮是否显示文字
                            textStyle:{color:"#800080"}//紫色
                        } 
                    },
					
				 itemStyle: {
                        normal: {
                            borderWidth: .5,//区域边框宽度
                            borderColor: '#000000',//区域边框颜色
                            areaColor:"#FFFFFF",//区域背景颜色
                        },
                        emphasis: {
                            borderWidth: .5,
                            borderColor: '#4b0082',//高亮边框
                            areaColor:"#00CC00",//高亮背景
                        }
                    },
					
                    data:sp
                }
				
				
				],
            };
            
            myChart.setOption(option);
            myChart.on('mouseover', function (params) {
                var dataIndex = params.dataIndex;
                console.log(params);
            });