



function format ( d ) {
    // `d` is the original data object for the row
	
	 
	
	 if(d.bz == "")
	 { return '<table id="flo" cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" >'+
        '<tr>'+
            '<td>生长型:</td>'+
            '<td>'+d.a+
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp'+
			//'<a href="http://p.eflora.cn/bkgettezheng.ashx?latin='+d.ld+'" target="_black" >'+'性状'+'</a>'+
			'</td>'+
			
			//'<td>'+
            //'<iframe src="http://p.eflora.cn/bkgettezheng.ashx?latin='+d.ld+'"style="width:200px;height:200px; ></iframe>'+
		   // '</td>'+
			//'<td>'+
			//'<iframe src="http://p.eflora.cn/bkgettezhengJsonfen.ashx?latin='+d.ld+' &type=%E6%A0%AA "style="width:200px;height:200px; ></iframe>'+
        '</tr>'+
		
		'<tr>'+
            '<td>生活型:</td>'+
            '<td>'+d.b+'</td>'+
			
			//'<div style="overflow:hidden;width:500px;height:35px;">'+
			//'<div style="margin:-0px -0px -0px -2px;">'+
			//上、右、下、左
		
			//'<iframe src="http://frps.iplant.cn/getspdescorsub.ashx?l='+d.ld+'&t=b" ></iframe>'+
			//'</div>'+
		    //'</div>'+



		'</tr>'+
		
		'<tr>'+
            '<td>水分生态类型:</td>'+
            '<td>'+d.c+'</td>'+
		'</tr>'+
		
		'<tr>'+
            '<td>种区系地理分布:</td>'+
            '<td>'+d.d+'</td>'+
		'</tr>'+
		
		
		'<tr>'+
            '<td>标本分布:</td>'+
		
            '<td>'+
			'<a href="http://www.cvh.ac.cn/search?searchtype=2&sp='+d.sp+'&seg=蒙'+ '" target="_black">'+ '内蒙CVH' + '</a>' +
			
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp'+
			
			'<a href="http://www.cvh.ac.cn/search/'   +d.ld+'?n=1'+ '" target="_black">'+ 'CVH' + '</a>' +
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp'+
			'<a href="https://www.gbif.org/occurrence/search?q=' +d.ld+'" target="_black">'+ 'GBIF' + '</a>' +
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp'+
			'<a href="http://ppbc.iplant.cn/list?latin='+d.ld+ '" target="_black">'+ 'PPBC' + '</a>' +
		
			'<div style="overflow:hidden;width:800px;height:35px;">'+
			'<div style="margin:-0px -0px -0px -2px;">'+
			//上、右、下、左
		
			'<iframe src="http://frps.iplant.cn/getspdescorsub.ashx?l='+d.ld+'&t=a" ></iframe>'+
			'</div>'+
			'</div>'+


			'</td>'+	
		'</tr>'+
		////
		'<tr>'+
            '<td>志书:</td>'+
            '<td>'+
			'<a href="http://www.bhl-china.org/data/index.php?name='   +d.ld+ '" target="_black">'+ '综合志书检索' + '</a>' +
			'</td>'+
		'</tr>'+
		
		'<tr>'+
            '<td>iplant:</td>'+
            '<td>'+
			'<a href="http://www.iplant.cn/info/'   +d.ld+ '" target="_black">'+ '综合iplant' + '</a>' +
			'</td>'+
		'</tr>'+
		
	'</table>'+
	'<textarea  rows="4" cols="9" style="text-orientation: sideways; writing-mode: vertical-lr; font-family: Menksoft2012;direction: ltr; ">'
+d.mw+ '</textarea>'+
'<div style="overflow:hidden;width:250px;height:230px;">'+
'<div  style="margin:-250px -630px -280px -25px;">'+
			'<iframe src="http://www.iplant.cn/info/'+d.ld+'"></iframe>'+
'</div>'+
'</div>'
	 };
	 
	 if(d.bz == "蕨属")
	 { return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>中国（内蒙）种数:</td>'+
            '<td>'+d.d+'</td>'+
        '</tr>'+
		
    '</table>';
	 
	 };
	 
	 if(d.bz == "属")
	 { return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>分布区类型:</td>'+
            '<td>'+d.a+'</td>'+
        '</tr>'+
		/////行分割
		'<tr>'+
            '<td>分布区亚型:</td>'+
            '<td>'+d.b+'</td>'+
		'</tr>'+
		
		'<tr>'+
            '<td>世界种数:</td>'+
            '<td>'+d.c+'</td>'+
		'</tr>'+
		
		'<tr>'+
            '<td>中国（内蒙）种数:</td>'+
            '<td>'+d.d+'</td>'+
		'</tr>'+
		
		'<tr>'+
            '<td>综论页码:</td>'+
            '<td>'+d.y+'</td>'+
		'</tr>'+
    '</table>';
	 
	 };
	 
	  if(d.bz == "科")
	 { return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>分布区类型:</td>'+
            '<td>'+d.a+'</td>'+
        '</tr>'+
		
    '</table>';
	 
	 };
	 
	 
	  if(d.bz == "栽培")
	 { return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>备注:</td>'+
            '<td>'+d.bz+'</td>'+
        '</tr>'+
		
    '</table>';
	 
	 };
	 if(d.bz == "栽培"||"入侵")
	 { return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>备注:</td>'+
            '<td>'+d.bz+'</td>'+
        '</tr>'+
		
    '</table>';
	 
	 };
};
  
 
  
function fot ( d ) {
    // `d` is the original data object for the row
	//'<table   cellpadding="0" cellspacing="0" border="0" >'
	 
	
	 if(d.bz == "")
	 { return '<table   cellpadding="0" cellspacing="0" border="0" >'+
        '<tr>'+
            '<td>'+
			'<div style="overflow:hidden;width:670px;height:570px;">'+
			'<div style="margin:-423px -110px -480px -260px;">'+
			//上、右、下、左
			'<div style="margin-left: -200px;margin-top: -400px;margin-top: -400px">'+
	        '<iframe src="http://www.cvh.ac.cn/searchmap/'+d.ld+'?n=1" ></iframe>'+
			'</div>'+
			'</div>'+
			'</td>'+


			'<td>'+
			'<div style="overflow:hidden;width:600px;height:570px;">'+
			'<div style="margin:-305px -1000px -22500px -360px;">'+
			//上(-减少上部分)、右、下、左
			//'<div style="margin-left: -200px;margin-top: -400px;margin-top: -400px">'+
			'<iframe src="http://www.gbif.org/species/'+d.key+'" ></iframe>'+
			'</div>'+
			'</div>'+
			'</td>'+

			'</tr>'+
		

    '</table>';
	 



	 };

};




