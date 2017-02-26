var cnt = 0;

function bar() {
  cnt++;
  alert(cnt);

}

function addInputs(){
    var currTotal=document.getElementById("Total").innerHTML;  
    }

    if (isNaN(currTotal))  {
    currTotal=0;

    var myInput = document.getElementById("myInput").value;

    var newTotal = +myInput + +currTotal;

    document.getElementById("Total").innerHTML = newTotal;

}

function Order() {
    var myString = document.getElementById("toppings").value;
    var Order = myString.split(",");

    for (var i=0; i<Order.length; i++) {
        Order [i] = Order[i].trim()

        console.log(Order[i]):
    }
}


var mystring = Order
var elements = mystring.split(',');
return elements.length;