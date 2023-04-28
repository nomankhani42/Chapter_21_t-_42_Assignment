/*
1. Write a program that displays current date and time in 
your browser.
*/

// var now_time=new Date();
// console.log(now_time);

// var month=now_time.getMonth();
// if(month==0){
//     console.log('This Month is January');
// }
// else
// if(month==1){
//     console.log('This Month is February');
// }

// else
// if(month==2){
//     console.log('This Month is March');
// }
// else
// if(month==3){
//     console.log('This Month is April');
// }
// else
// if(month==4){
//     console.log('This Month is May');
// }
// else
// if(month==5){
//     console.log('This Month is June');
// }
// else
// if(month==6){
//     console.log('This Month is July');
// }
// else
// if(month==7){
//     console.log('This Month is August');
// }
// else
// if(month==8){
//     console.log('This Month is September');
// }
// else
// if(month==9){
//     console.log('This Month is October');
// }
// else
// if(month==10){
//     console.log('This Month is Novermber');
// }
// else{
//     console.log('This Month is December')
// }



/*
3. Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show 
Sun.
*/

// var now_time=new Date();
// console.log(now_time);
// var day_now=now_time.toString();
// day_now=day_now.slice(0,3);
// console.log(day_now)

/*
4. Write a program that displays a messageIt s Fun day” if 
its Saturday or Sunday today.

*/

// var now_time=new Date();
// var dayIndex=now_time.getDay();
// if(dayIndex==1  || dayIndex==6){
//     console.log('Fun day');
// }
// else{
//     console.log('Study Day')
// }
/*
5. Write a program that shows the message First fifteen 
days of the month if the date is less than 16th of the month 
else shows Last days of the month.
*/


// var days=new Date();
// var gday=days.getDate();
// if (gday<=15){
//     console.log('First fifteen days of the month');
// }
// else {
//     console.log('Last fifteen  days of the month');
// }


/*
6. Write a program that determines the minutes since 
midnight, Jan. 1, 1970 and assigns it to a variable that 
hasn't been declared beforehand. Use any variable you like 
to represent the Date object.
*/

// var ms=new Date();
// var mss=ms.getTime();
// console.log('Milli Seconds '+mss);
// console.log('Minutes ' + Math.ceil(mss/60))

/*
7. Write a program that tests whether it's before noon and 
alert Its AM else its PM.

*/

// var now_time=new Date();
// var hours=now_time.getHours();
// console.log(hours);

// if(hours<12){
//     console.log('its Am')
// }

// else{
//     console.log('its Pm')
// }



/*

9. Create a date object of the starting date of this Ramadan 
and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on Mar 13, 2023

*/

// var now_time=new Date();
// var now_time_milli=now_time.getTime();

// var ramadanDate=new Date('Mar 23, 2023');
// var ramadanDateMill=ramadanDate.getTime();
// var diff=now_time_milli-ramadanDateMill;
// console.log('There Are '+ Math.ceil(diff/(1000*60*60*24)) +' Have Been Passed Since 1st Ramadan 2023' )


// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.


//  var timer=new Date();
//  var timerMilli=timer.getTime();
//  var time2015=new Date('Jan 1, 2015');
//  var time2015milli=time2015.getTime();
//  var diff=timerMilli-time2015milli;
//  console.log(diff/(1000));

/*
11. Create a Date object for the current date and time. 
Extract the hours, reset the date object an hour ahead and 
finally display the date object in your browser.

*/


// var a=new Date();
// console.log(a);

// var hourss=a.getHours()
// a.setHours((hourss-1))
// console.log('1 Hours Before Are '+a)



/*
12. Write a program that creates a date object and show the 
date in an alert box that is reset to 100 years back?
*/

// var now_time=new Date();
// console.log(now_time)
// var nowYear=now_time.getFullYear();
// now_time.setFullYear((nowYear-100))

// console.log('100 Years Backs was ' + now_time)


// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.
// var age=+prompt('Enter Your Age in Years',20)
// var now_time=new Date();
// var getYear=now_time.getFullYear();
// now_time.setFullYear((getYear-age));
// var birthyear=now_time.getFullYear();
// console.log('Your Birth Year is '+birthyear);

/*


14. Write a program to generate your K-Electric bill in your
browser. All the amounts should be rounded off to 2 
decimal places. Display the following fields:
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)
Where,
Net Amount Payable (within Due Date) = Number of units * Charges per unit
& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge */



var newTime=new Date();
var newday=newTime.toString();
newday=newday.slice(4,8);
// console.log(newday)


var name1='Rashid Khan';
var Month=newday;
var number_of_Units=400;
var Charges_per_unit=18;
var netAmount=number_of_Units*Charges_per_unit;
var fine_After_due_Date=130;
var Gross_amount_After_Due_date=netAmount+fine_After_due_Date;
console.log('Name ' + name1)
console.log('Current Month ' + Month);
console.log('Number Of Units ' + number_of_Units);
console.log('Charges Per Unit '+ Charges_per_unit);
console.log('Net Amount ' + netAmount);
console.log('Gross Amount After Due Date ' + Gross_amount_After_Due_date);






