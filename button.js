function sum(){
            var result=0;	
               
            var radios= form.elements.size;
			for(var i = 0;i<radios.length;i++)
				if(radios[i].checked)
					result += Number.parseInt(radios[i].value);
			
			var checkboxes=form.elements.check;
			for(vari=0;i<checkboxes.length;i++)
				if(checkboxes[i].checked)
					result+=Number.parseInt(checkboxes[i].value);
			
			document.getElementById("price").innerHTML=result;
	}
			
