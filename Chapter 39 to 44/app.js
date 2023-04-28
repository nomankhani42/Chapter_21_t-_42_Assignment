// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.
//  function powerCalculate(a,b){
//        return Math.pow(a,b);
//  }


//  var p=powerCalculate(+prompt('Enter Tha Value of Power',2),+prompt('Enter The power Of the Value',5))
//  console.log(p);

/*
2. Any year is entered through the keyboard. Write a function to 
determine whether the year is a leap year or not.
*/


// function leafYear(fullYear){
    
//     var now=new Date();
// console.log(now);
// now.setFullYear(fullYear)
// now.setMonth(1)
// now.setDate(29)
// console.log(now)
// var get_Date=now.getDate();

//     if(get_Date==29){
//         console.log('Leaf Year ');

//     }
//     else{
//         console.log('Not A Leaf Year')
//     }
// }
// leafYear(prompt('Enter The Year To finds is Leaf or Not',2024));

///////??????????\\


/*
3. If the lengths of the sides of a triangle are denoted by a, b, and 
c, then area of triangle is given by
area = S(S − a)(S − b)(S − c)
where, S = ( a + b + c ) / 2
*/


// var s,area;

// function AreaTriangle(a,b,c){
    
//     function su(){
//         s=(a+b+c)/2;
//        }  

//     su()

//      area=s*(s-a)*(s-b)*(s-c);
//     return area;
// }



// var calcArea=AreaTriangle(2,4,4);
// console.log(calcArea);

/*


4. Write a function that receives marks received by a student in 3 
subjects and returns the average and percentage of these
marks. there should be 3 functions one is the mainFunction 
and other are for average and percentage. Call those functions 
from mainFunction and display result in mainFunction.
*/


// function res(math,physics,comp){
//     function mark(){
//         var marks_ob=math + physics + comp ;
//         return marks_ob;
//     }
//     var marksss=mark();
//     console.log(marksss)
    
//     function percent(){
//            var percentage=(marksss/300)*100;
//            return percentage;
//     }
//     var percentss=percent();
//     console.log(percentss);

// }


// res(40,40,40);


// 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now.

// function index(wordOrSentence,i){
//     console.log(wordOrSentence.indexOf(i))
// }

// index('Noman','n');

// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.

// var sen='Hi My Name is Noman Khan . I am 20 Years Old . I am Studying in Claass Tweleve';
// function removeWovel(sentence){
//     for(var i=0;i<sentence.length;i++){
//         if(sentence.slice(i,i+1)=='a' ||  sentence.slice(i,i+1)=='e' || sentence.slice(i,i+1)=='i' ||sentence.slice(i,i+1)=='o' ||sentence.slice(i,i+1)=='u' )
//         {
//             sentence=sentence.slice(0,i) +''+sentence.slice(i+1); 
//         }
//     }
//     console.log(sentence);
// }

// removeWovel(sen);

/*

7. Write a function with switch statement to count the number of 
occurrences of any two vowels in succession in a line of text. 
For example, in the sentence

Pleases read this application and give me gratuity
Such occurrences are ea, ea, ui.

*/
// wowArr=['aa','ae','ai','ao','au','ea','ee','ei','eo','eu','ia','ie','ii','io','iu','oa','oe','oi','oo','ou','ua','ue','ui','uo','uu'];
// var new_para;
// var  sen='Pleases read this application and give me gratuity';

// function countWovel(sentence){

//      for(var i=0;i<sentence.length;i++){
//         switch(sentence){
//             case :
//                 new_para=sentence.slice(i,i+2);
//                 console.log(new_para)
//                 ;
//                 break;
            
//         }
//      }




// 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.

// var met,fee,inche,cMeter;
// var d_bw=prompt('Enter the Distance Between Two Cites in KiloMeters',1200);

// function calcDis(distance){
// console.log(distance)
//   function meters (){
//      met=distance*1000;
//      console.log(met + ' meters')
//   }
//   meters()
  
// function feet(){
//     fee= met*3;
//     console.log(fee +' feets')
// }
// feet()
// function inches(){
//  inche = fee*12;
// console.log(inche+ ' inches');
// }
// inches();
// function centiMeters(){
//      cMeter=inche*100;
//     console.log(cMeter +' centimeters')

// }
// centiMeters();

// }
// calcDis(d_bw);
/*
9. Write a program to calculate overtime pay of employees. 
Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
worked above 40 hours. Assume that employees do not work 
for fractional part of an hour.
*/
// var salary,ovwetime,netPay,lea_ves,gpay;

// function payRoll(overtimeHrs,leaves)
//    {
//       salary=18000;
//       overtime=overtimeHrs *12;
//       netPay=salary+overtime;
//       lea_ves=leaves*600;
//       gpay=netPay-lea_ves;
//       return gpay;

      

// }

// var a=payRoll(39,2);
// console.log(a);

/*

10. A cashier has currency notes of denominations 10, 50 and 
100. If the amount to be withdrawn is input through the 
keyboard in hundreds, find the total number of currency notes 
of each denomination the cashier will have to give to the 
withdrawer.
*/

var hundreds_note=0,fifty_note=0,ten_Note=0;

function currencyChange (currency){
    for(var i=currency;i>=100;i-=100){
        if(i>=100){
            hundreds_note++;
            currency-=100;
        
        }
        

    }
  for(i=currency;i>=50;i-=50){
    if(i>=50){
        fifty_note++;
        currency-=50;
    }
}

for(i>currency;i>=10;i-=10){
    if(i>=10){
        ten_Note++;
        currency-=10;
    }
}
    console.log('You Have ' + hundreds_note +' hundred notes '+ ' , '+fifty_note +' fifty Notes and ' + ten_Note +' ten notes');
  
}

currencyChange(prompt('Enter Amount',1070));