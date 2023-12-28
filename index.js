let output=document.getElementById("output")

function display(num){
    output.value+=num;
}

let first_num=document.getElementById
function calculator(){
    try{
        output.value=eval(output.value);
        localStorage.setItem("Answersss",output.value)
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