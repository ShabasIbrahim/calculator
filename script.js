function display(num){
// Id.value =to get value 

    output.value += num;
}

function evaluateExp(){
    output.value=eval(output.value);
}

function clearAll() {
    output.value="";
    
}


// remove last item 

function removeLast(){
    currentExp=output.value;
    output.value=currentExp.slice(0,-1)
}