			function SelecteAll(){
				var items=document.getElementsByName('sel');
				for(var i=0; i<items.length; i++){
					if(items[i].type=='checkbox')
						items[i].checked=true;
				}
			}
			
			function UnSelectAll(){
				var items=document.getElementsByName('sel');
				for(var i=0; i<items.length; i++){
					if(items[i].type=='checkbox')
						items[i].checked=false;
				}
			}	
           function calculate(){
        var total=0;
        var items=document.getElementsByName("sel");
        for(var i=0; i<items.length; i++){
        	if(items[i].type=="checkbox" && items[i].checked==true)
        		total=parseInt(items[i].value)+total;
           }   
          document.getElementById("output").innerHTML="The total is: "+total;
                }

