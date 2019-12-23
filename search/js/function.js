function map(d){
	
	$.getJSON("http://www.sp2000.org.cn/api/taxon/scientificName/taxonID/"+"d.ld" +"/5b8b4dcb78874e95914227b016aa0b65", function(json){

});
}


function format ( d ) {
    // `d` is the original data object for the row
	
	 
	
	 if(d.bz == "")
	 { return '<table id="flo" cellpadding="5" cellspacing="0" border="0" style="padding-left:20px;" >'+
        '<tr>'+
            '<td>生长型:</td>'+
            '<td>'+d.a+
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp'+
		
			'</td>'+
			
	
        '</tr>'+
		
		'<tr>'+
            '<td>生活型:</td>'+
            '<td>'+d.b+'</td>'+
			
		

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
            '<td>分布信息:</td>'+
          '<td>'+
		  '<div style="overflow:hidden;width:700px;height:35px;">'+
			'<div style="margin:-2px -10px -0px -80px;">'+
			//上、右、下、左
		
			'<iframe src="http://frps.iplant.cn/getspdescorsub.ashx?l='+d.ld+'&t=a" ></iframe>'+
			'</div>'+
			'</div>'+
             '<div style="overflow:hidden;width:800px;height:35px;">'+
			'<div style="margin:-2px -0px -0px -80px;">'+
			//上、右、下、左
		
			'<iframe src="http://frps.iplant.cn/getspdescorsub.ashx?l='+d.ld+'&t=b" ></iframe>'+
			'</div>'+
			'</div>'+
             '<div style="overflow:hidden;width:800px;height:35px;">'+
			'<div style="margin:-2px -0px -0px -80px;">'+
			//上、右、下、左
		
			'<iframe src="http://frps.iplant.cn/getspdescorsub.ashx?l='+d.ld+'&t=c" ></iframe>'+
			'</div>'+
			'</div>'+
			 '<div style="overflow:hidden;width:800px;height:35px;">'+
			'<div style="margin:-2px -0px -0px -80px;">'+
			//上、右、下、左
		
			'<iframe src="http://frps.iplant.cn/getspdescorsub.ashx?l='+d.ld+'&t=d" ></iframe>'+
			'</div>'+
			'</div>'+'</td>'+
		  
		'</tr>'+
		
		'<tr>'+
            '<td>标本:</td>'+
		
            '<td>'+
			'<a href="http://www.cvh.ac.cn/search?searchtype=2&sp='+d.sp+'&seg=蒙'+ '" target="_black">'+ '内蒙CVH' + '</a>' +
			
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp'+
			
			'<a href="http://kun.kingdonia.org/search/list/f/1/t/1/id/0/?name='   +d.ld+ '" target="_black">'+ 'KUN' + '</a>' +
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp'+
			
			'<a href="http://www.cvh.ac.cn/search/'   +d.ld+'?n=1'+ '" target="_black">'+ 'CVH' + '</a>' +
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp'+
			'<a href="https://www.gbif.org/occurrence/search?q=' +d.ld+'" target="_black">'+ 'GBIF' + '</a>' +
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp'+
			
			
			'</td>'+	
		'</tr>'+
		
		'<tr>'+
            '<td>名称索引:</td>'+
	
            '<td>'+
			'<a href="http://www.cfh.ac.cn/Spdb/spsearch.aspx?aname=' +d.ld+'" target="_black">'+ 'CFH' + '</a>' +
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp'+
			'<a href="http://www.ipni.org/ipni/simplePlantNameSearch.do?find_wholeName='+d.ld+ '&output_format=normal&query_type=by_query&back_page=query_ipni.html" target="_black">'+ 'IPNI' + '</a>' +
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp'+
			'<a href="http://www.theplantlist.org/tpl1.1/search?q='+d.ld+ '" target="_black">'+ 'TPL' + '</a>' +
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp'+
			'<a href="http://www.tropicos.org/NameSearch.aspx?name='+d.ld+ '&commonname=" target="_black">'+ 'Tropicos' + '</a>' +
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp'+
			'<a href="http://plantsoftheworldonline.org/?q='+d.ld+ '" target="_black">'+ 'Kew' + '</a>' +
		
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp'+
			'<a href="http://www.sp2000.org.cn/pageservices/species/scientificName/'+d.ld +'/zh" target="_blank">'+ 'SP2000'+ '</a>'+
				'</td>'+
			
					
				'</tr>'+
	
		
		'<tr>'+
            '<td>图片:</td>'+
            '<td>'+
			'<a href="http://ppbc.iplant.cn/list?latin='+d.ld+ '" target="_black">'+ 'PPBC' + '</a>' +
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp'+
			
			'</td>'+
					
		'</tr>'+
		
			'<tr>'+
            '<td>国外志书:</td>'+
            '<td>'+
			'<a href="http://www.efloras.org/browse.aspx?flora_id=0&name_str='   +d.ld+ '&btnSearch=Search" target="_black">'+ 'eflora' + '</a>' +
			'</td>'+
		'</tr>'+
		'<tr>'+
            '<td>中国志书:</td>'+
            '<td>'+
			'<a href="http://www.bhl-china.org/data/index.php?name='   +d.ld+ '" target="_black">'+ 'BHL' + '</a>' +
			'</td>'+
		'</tr>'+
		
		'<tr>'+
            '<td>iplant:</td>'+
            '<td>'+
			'<a href="http://www.iplant.cn/info/'   +d.ld+ '" target="_black">'+ '综合iplant' + '</a>' +
			'</td>'+
		'</tr>'+
	'</table>'+
	
	
'<div  style="float:right;overflow:hidden;width:250px;height:500px;">'+
'<div  style="margin:-370px -400px -250px -8px;">'+
			'<iframe src="http://www.iplant.cn/info/'+d.ld+'"></iframe>'+
'</div>'+
'</div>'+
'<div style="float:left">'+
	'<textarea  rows="2" cols="9" >'
+d.mw+ '</textarea>'+
	'</div>'

	 };
	 
	 if(d.bz == "蕨属")
	 { return '<table id="flo1" cellpadding="5" cellspacing="0" border="0" style="padding-left:0px;">'+
        '<tr>'+
            '<td>中国（内蒙）种数:</td>'+
            '<td>'+d.d+'</td>'+
        '</tr>'+
		'<tr>'+
		'<td>🔎</td>'+
		'<td>'+
		'<a href="../display/'   +d.sp+ '.html" target="_black">'+ '📝' + '</a>' +
		'</td>'+
	'</tr>'+
		'<tr>'+
             '<td>'+
			 '<a href="http://www.theplantlist.org/tpl1.1/search?q='+d.ld+ '" target="_black">'+ 'TPL' + '</a>' +
			
			'</td>'+
	
            '<td>'+
			'<a href="http://www.ipni.org/ipni/simplePlantNameSearch.do?find_wholeName='+d.ld+ '&output_format=normal&query_type=by_query&back_page=query_ipni.html" target="_black">'+ 'IPNI' + '</a>' +
			
			'</td>'+
					
				
		'</tr>'+
	
		
    '</table>'+
	'<div  style="float:right;overflow-x:hidden; overflow-y:auto;height:400px">'+

			'<iframe  id="ifa" src="../display/'+d.sp+'.html"></iframe>'+

'</div>'
	;
	 
	 };
	 
	 if(d.bz == "属")
	 { return '<table id="flo1" cellpadding="5" cellspacing="0" border="0" style="padding-left:0px;">'+
        '<tr>'+
            '<td>分布区类型:</td>'+
            '<td>'+
		'<a href="../search/distribution.html#'   +d.a+ '" target="_black">'+ d.a + '</a>' +
			'</td>'+
        '</tr>'+
	
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
		'<tr>'+
		'<td>🔎</td>'+
		'<td>'+
		'<a href="../display/'   +d.sp+ '.html" target="_black">'+ '📝' + '</a>' +
		'</td>'+
	'</tr>'+	
		'<tr>'+
             '<td>'+
			 '<a href="http://www.theplantlist.org/tpl1.1/search?q='+d.ld+ '" target="_black">'+ 'TPL' + '</a>' +
			
			'</td>'+
	
            '<td>'+
			'<a href="http://www.ipni.org/ipni/simplePlantNameSearch.do?find_wholeName='+d.ld+ '&output_format=normal&query_type=by_query&back_page=query_ipni.html" target="_black">'+ 'IPNI' + '</a>' +
			
			'</td>'+
					
				
		'</tr>'+
	
    '</table>'+
	'<div  style="float:right;overflow-x:hidden; overflow-y:auto;height:400px">'+

			'<iframe  id="ifa" src="../display/'+d.sp+'.html"></iframe>'+

'</div>'
	;
	 
	 };
	 
	  if(d.bz == "科")
	 { return '<table id="flo1" cellpadding="5" cellspacing="0" border="0" style="padding-left:0px;">'+
        '<tr>'+
            '<td>分布区类型:</td>'+
            '<td>'+
			'<a href="../search/distribution.html#'   +d.a+ '" target="_black">'+ d.a + '</a>' +
			'</td>'+
        '</tr>'+
		'<tr>'+
		'<td>🔎</td>'+
		'<td>'+
		'<a href="../display/'   +d.sp+ '.html" target="_black">'+ '📝' + '</a>' +
		'</td>'+
	'</tr>'+	
	'<tr>'+
             '<td>'+
			 '<a href="http://www.theplantlist.org/tpl1.1/search?q='+d.ld+ '" target="_black">'+ 'TPL' + '</a>' +
			
			'</td>'+
	
            '<td>'+
			'<a href="http://www.ipni.org/ipni/simplePlantNameSearch.do?find_wholeName='+d.ld+ '&output_format=normal&query_type=by_query&back_page=query_ipni.html" target="_black">'+ 'IPNI' + '</a>' +
			
			'</td>'+
					
				
		'</tr>'+
	
		
    '</table>'+
	'<div  style="float:right;overflow-x:hidden; overflow-y:auto;height:400px">'+

			'<iframe  id="ifa" src="../display/'+d.sp+'.html"></iframe>'+

'</div>';
	 
	 };
	 
	 
	  if(d.bz == "栽培")
	 { return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:10px;">'+
        '<tr>'+
            '<td>备注:</td>'+
            '<td>'+d.bz+'</td>'+
        '</tr>'+
		
		
		'<tr>'+
		  '<td>'+
			'<a href="http://www.bhl-china.org/bhl/zaipei" target="_black">️BHL栽培植物名录</a>'+
			'</td>'+
		 '</tr>'+
		
		
		
		
    '</table>';
	 
	 };
	 
	 
	  if(d.bz == "入侵")
	 { return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:10px;">'+
        '<tr>'+
            '<td>备注:</td>'+
            '<td>'+d.bz+'</td>'+
        '</tr>'+
		
		 '<tr>'+
		  '<td>'+
			'<a href="http://www.iplant.cn/ias/protlist" target="_black">️中国入侵植物名录</a>'+
			'</td>'+
		 '</tr>'+
    '</table>';
	 
	 };
	 
	 
	  if(d.bz == "门")
	 { return '<table id="flo1" cellpadding="5" cellspacing="0" border="0" style="padding-left:0px;">'+
        '<tr>'+
            '<td>备注:</td>'+
            '<td>'+d.bz+'</td>'+
        '</tr>'+
		'<tr>'+
		'<td>🔎</td>'+
		'<td>'+
		'<a href="../display/'   +d.sp+ '.html" target="_black">'+ '📝' + '</a>' +
		'</td>'+
	'</tr>'+
		
    '</table>'+
	'<div  style="float:right;overflow-x:hidden; overflow-y:auto;height:400px">'+

			'<iframe  id="ifa" src="../display/'+d.sp+'.html"></iframe>'+

'</div>';
	 
	 }; 
	 
	 if(d.bz == "栽培"||"入侵")
	 { return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:10px;">'+
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
	 if(d.bz == "属"|d.bz == "科")
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


		'</tr>'+
		

    '</table>';
	 



	 };
	

};




