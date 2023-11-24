'use strict'

function calculadora(num1,num2) {
   console.log(num1+num2);
   console.log(num1-num2);
   console.log(num1*num2);
   console.log(num1/num2);

}

calculadora(10,2);

for(var i = 1; i<=10; i++){
    console.log(i);
    calculadora(i,8);
}