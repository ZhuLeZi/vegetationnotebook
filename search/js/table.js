

$(document).ready(function() {
   var table= $('#example').DataTable({       data:data,    
        // "bJQueryUI" : true,    
		
			 "fnPreDrawCallback": function( oSettings ) {
        $('.dataTables_filter input').attr({'name':'search','placeholder': '请输入植物名'});//提示
    },
		
		"fnRowCallback": function( nRow, data, iDisplayIndex, iDisplayIndexFull ) { 
                	//改行满足的条件
                	//var state = data.bz;
                	if(data.bz != ""){
                		//设置满足条件图片行的背景颜色，分布地图
                		$('td.picture',nRow).css("background", "white");
                	
                    };
					if(data.bz != ""){
                		//设置满足条件图片行的背景颜色ppbc
                		$('td.photo',nRow).css("color", "white");
                	
                    };
                    
                    if(data.bz == "栽培"){
                		//设置满足条件行的字体颜色
                		
                		$(nRow).css("color","brown");
                	};
					if(data.bz == "合并"){
                		//设置满足条件行的字体颜色
                		
                		$("a",nRow).css("background", "#FF9966");
                	};
                },

               
		
		
		"ordering":true, 
            "bSort" : true, 		
	        "aLengthMenu" : [1,2,5,10],
		   "iDisplayLength" : 12,
		    "bInfo" : false,
		"scrollY":        "1900px",
        "scrollCollapse": true,
         "bLengthChange": false ,  
        
   columns:[
	   
           { "class": 'details-control', 
		   "orderable": false, 
		   "data": null, 
		   "defaultContent": '' 
		 
		  },
		
		   {"orderable": false, "data" : 'sp',render: function(data, type, row) { return '<a href="http://frps.iplant.cn/frps?id='+data+'" target="_black">' + data + '</a>';} },
		   {"data" : 'ld',render: function(data, type, row) { return '<a href="http://foc.iplant.cn/search.aspx?k='   +data+'&id=1'+ '" target="_black">'+ data + '</a>';}},


            {"class":"photo",
			"data" : 'ld',render: function(data, type, row) { return '<a href="http://ppbc.iplant.cn/list?latin='   +data+ '" target="_black">'+ "+" + '</a>';}},


		  {"orderable": false, "data": 'js',"className":"align_center"}, 
		   {"orderable": false, "data": 'fb'},
      
      { "class":"picture",
		   "orderable": false, 
		   "data": null, 
		   "defaultContent": '' 
		 
		  },
		
           ],  
		   "order": [[2, 'asc']],language: {
       
       "sLengthMenu": "显示 _MENU_ 项结果",
       "sZeroRecords": "没有匹配结果",
        "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
       "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
       "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
       "sInfoPostFix": "",
       "sSearch": "🔎",
       "sUrl": "",
       "sEmptyTable": "表中数据为空",
       "sLoadingRecords": "载入中...",
       "sInfoThousands": ",",
       "oPaginate": {
           "sFirst": "首页",
           "sPrevious": "上页",
           "sNext": "下页",
           "sLast": "末页"
       }
   },
     });  
   

   
   
   // 监听事件
    $('#example tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }
		
		
    } );




	
	 // 监听事件2
    $('#example tbody').on('click', 'td.picture', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( fot(row.data()) ).show();
            tr.addClass('shown');
        }
		
		
    } );
	
	

	
} );



	


