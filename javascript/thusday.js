function printChecked(){
				var items=document.getElementsByName('acs');
				var selectedItems="";
				for(var i=0; i<items.length; i++){
					if(items[i].type=='checkbox' && items[i].checked==true)
						selectedItems+=items[i].value+"\n";
				}
				alert(selectedItems);
			}		