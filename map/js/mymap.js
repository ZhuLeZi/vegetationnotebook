


var myChart = echarts.init(document.getElementById('nmg-map'));
	
			

            var option = {
				title: {
                    text: 'IMG',

                    x:'center',
                },
				
                tooltip: {
//show: false //����ʾ��ʾ��ǩ
                    formatter: '{b}', //��ʾ��ǩ��ʽ
                    backgroundColor:"#ff7f50",//��ʾ��ǩ������ɫ����ɫ
                    textStyle:{color:"#fff"} //��ʾ��ǩ������ɫ
                },
                series: [
			
				
				{
                    type: 'map',
				
                    mapType: 'nmg',
					zoom: 1.15, //�Ŵ���ʾ
                    label: {
                        normal: {
                            show: false,//��ʾʡ�ݱ�ǩ,�ڲ������κζ���ʱ��Ĭ����ʾ
                            textStyle:{color:"#c71585"}//ʡ�ݱ�ǩ������ɫ,��ɫ
                        },    
                        emphasis: {//��Ӧ���������Ч��
                            show: false,//�����Ƿ���ʾ����
                            textStyle:{color:"#800080"}//��ɫ
                        } 
                    },
					
				 itemStyle: {
                        normal: {
                            borderWidth: .5,//����߿���
                            borderColor: '#000000',//����߿���ɫ
                            areaColor:"#FFFFFF",//���򱳾���ɫ
                        },
                        emphasis: {
                            borderWidth: .5,
                            borderColor: '#4b0082',//�����߿�
                            areaColor:"#00CC00",//��������
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