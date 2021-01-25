let numbers = new Array();
var functionChoice;

functionChoice = prompt("choose 1 for addition, 2 for subtraction, 3 for multiplication, 4 for division");
if (functionChoice == 1){
    console.log("addition");
    multiNumberReceiver();

    addition(numbers);
    function addition(numbers){
    let sum=0;
    numbers.forEach(function(member,index){
        sum=sum + parseInt(member);
    });
    console.log("sum is " + sum );
    }
}



else if(functionChoice == 2){
    console.log("subtraction");
    multiNumberReceiver();

    subtraction(numbers);
    function subtraction(numbers){
        let remainder= numbers[0];
        for (let i = 1; i < numbers.length; i++){
            remainder = remainder - parseInt(numbers[i]);
    }
    console.log("remainder is " + remainder);
}
}


else if(functionChoice == 3){
    console.log("multiplication");
    multiNumberReceiver();

    multiplication(numbers);
    function multiplication(numbers){
    let product = 1;
    numbers.forEach(function(member,index){
        product=product * parseInt(member);
    });
    console.log("product is " + product );
    }
}


else if (functionChoice ==4){
    console.log("subtraction");
    
}


function multiNumberReceiver(){
    let numberCounter=prompt("how many numbers?");
    for(let i=0 ; i < parseInt(numberCounter); i++){
        numbers[i]=prompt("number" + (i+1));
    }
}