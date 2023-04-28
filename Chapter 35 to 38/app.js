/*
1. Write a function that displays current date & time in your 
browser.
*/
// function currentDate(){
//     var dates=new Date();
//     console.log(dates);
// }
// currentDate();


/*
2. Write a function that takes first & last name and then it 
greets the user using his full name
*/
// function greet(fNmae,LastName){
//   console.log(fNmae + ' '+LastName +' Good Morning');
// }

// greet('Noman','Khan')

/*
3. Write a function that adds two numbers (input by user) 
and returns the sum of two numbers.
*/

// function add(a,b){
//         return a+b;
// }
// var sum=add(5,7);
// console.log(sum);


/*
4. Calculator:
Write a function that takes three arguments num1, num2 
& operator & compute the desired operation. Return and 
show the desired result in your browser.
*/

// function Calculator(a,operator,b){
//     if(operator=='+'){
//         return a+b;
//     }
//     else if(operator=='-'){
//         return a-b;
//     }
//     else if(operator=='*'){
//         return a*b;
//     }
//     else if(operator=='/'){
//         return a/b;
//     }
//     else{
//         return 'Enter Valid Operator';
//     }
// }

// var calc=Calculator(+prompt('Enter The First Number',7),prompt('Enter Operator','+'),+prompt('Enter The Second Number',3));
// console.log(calc);


/*
5. Write a function that squares its argument.
*/

// function squareNumber(number){
// return number*number;
// }

// var a=squareNumber(prompt('Enter The Number To Find Its Sqare',8));
// console.log(a);

/*
6. Write a function that computes factorial of a number.
*/
// var a,b=1;
// function fact(factorial){
//        if(factorial<0){
//         console.log('The Factorial of Negative Number is Not Possible');

//        }

//        else if(factorial==0){
//         console.log('The Factorial Of 0 is 1');

//        }
//       else if(factorial>0){
//         for(a=1;a<=factorial;a++){
//             b=b*a;
//            }
//            console.log(b);
//       }

// }

// fact(prompt('Enter The Factorial Number',6));

/*

7. Write a function that take start and end number as inputs 
& display counting in your browser.
*/
// var a,b;
// function counting(start,end){
//     for(a=start;a<=end;a+=10){
//        for(b=0;b<=9;b++){
//          document.write((a+b)+ ' '+' ');
//          if((a+b)==end){
//             break
//          }
//        }
//     document.write('<br/>')
//     }
// }

// counting(+prompt('Enter Starting Value',1),+prompt('Enter Ending Value',100));


/*
8. Write a nested function that computes hypotenuse of a 
right angle triangle. 
Hypotenuse2 = Base2 + Perpendicular2
function | JAVASCRIPT
Page 2 of 4
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare()
*/
// function triAngle(hyp,perp,base){
//         function sq(){
//             hyp=hyp*hyp;
//             perp=perp*perp;
//             base=base*base;
//         }

       
//         if( hyp=base + perp){
//             console.log('proved')
//         }
//         else {
//             console.log('Not Proved');
//         }
// }

// triAngle(5,4,3)
// triAngle(2,2,2)



// 9.s Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variable


// function area(len,bre){
//     var Area=len*bre;
//     return Area;

// }

// var abc=area(prompt('Enter the Length Of Rectangle',40),prompt('Enter Breath Of Rectangle',20));
// console.log(abc);


// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : ' the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox';

// var word='the quick brown fox';

// for(var i=0;i<word.length;i++){
//     if(word.slice(i,i+1)!=' '){
//         word=word.slice(i,i+1).toUpperCase() + word.slice(i+1);
//     }
// }
// console.log(word);

