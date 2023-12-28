let output=document.getElementById("output")

function display(num){
    output.value+=num;
}

function check(){
    var res = [];
	var answer;

		if(document.getElementById("output").value.includes("+")){
		res = document.getElementById("output").value.split('+');
        console.log(res);
		return parseInt(res[0]) + parseInt(res[1]);
		}
		
		else if(document.getElementById("output").value.includes("-")){
		res = document.getElementById("output").value.split('-');
        console.log(res);
		return parseInt(res[0]) - parseInt(res[1]);
		}
		
		else if(document.getElementById("output").value.includes("/")){
		res = document.getElementById("output").value.split('/');
        console.log(res);
		return parseInt(res[0]) / parseInt(res[1]);
		}
		
		else if(document.getElementById("output").value.includes("*")){
		res = document.getElementById("output").value.split('*');
        console.log(res);
		return parseInt(res[0]) * parseInt(res[1]);
		}
}
function calculator(){
    try{
        var a=check()
        document.getElementById('output').value=a;
        
    }
    catch{
        alert("Invalid Input")
    }
}

function Clear(){
    output.value = "";
}

function del(){
    output.value=output.value.slice(0,-1);
}