var str="";
var s="";
(init())

function init(){
init_btns()
	console.log(str);

init_array()
init_show()
}

function init_show(){
	$("#show3").val(str);
}
function init_array(){
	
	for (var i = 0; i <99; i++) {
		str+=i+1+' '
	};
console.log(str);
}

function init_btns(){
	
$('#tail_btn').click(function (){
	
	 $("[name='tail']:checked").each(function(){
	 	 
	 	 	  s+=$(this).val()+" ";

     })
	console.log(s);
	})

$('#and_btn').click(function (){
	var andresult=0;
	 $("[name='and']:checked").each(function(){
	 	 
	 	 andresult+=parseInt($(this).val());

     })
    andresult= andresult>10?andresult-10:andresult;
    console.log(andresult);
     s+=andresult+" ";
	console.log(s);
	})

}

function remove(){
	if (str.indexOf(s)){

	}
}

