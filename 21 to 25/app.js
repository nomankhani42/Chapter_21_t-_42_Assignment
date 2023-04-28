

// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.

// var firstName=prompt('Enter Your First Name','Noman');
// var lasttName=prompt('Enter Your First Name','Khan');
// var fullName=firstName +' ' + lasttName;
// console.log('Good Morning ' + fullName );


// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser

// var favMob=prompt('Enter Your Favorite Mobile Phone',' IPhone 12 Pro Max');
// console.log('My Favorite Mobile is '+favMob);
// console.log(favMob.length);


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser

// var love='Pakistani';
// console.log('The Index of n is '+ love.indexOf('n') );

// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser

// var wor='Hello World';
// console.log('The last index of l in' + wor+' '+ wor.lastIndexOf('l'));

// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.

// var Love_1='Pakistani';
// console.log('The 3rd index is ' + Love_1.charAt(3))



// 6. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.    // (concat method)

// var firstName=prompt('Enter Your First Name','Noman');
// var lasttName=prompt('Enter Your First Name',' Khan');

// var fullName=firstName.concat(lasttName);
// console.log('Good Morning ' + fullName);


// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.

// var city='Hyderabad';
// var replaceCity=city.replace('Hyder','Islam');
// console.log(replaceCity);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.



// var message ='Ali and Sami are best friends. They play cricket and football together';
// var newMessage=message.replace(/and/g,'&')
//  for (var i=0;i<message.length;i++){
//     if(message.slice(i,i+3)==' and'){
//         message=message.slice(0,i) + '&' + message.slice(i+3);
        

//     }
   
//  }
//  console.log(newMessage)
//  console.log(message);


// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.


// var str='472';
// console.log(typeof str);
// var newStr=Number(str);
// console.log(typeof newStr);


// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.


// var pea='peanuts';
// var newPea=pea.toUpperCase();
// console.log(newPea);


// 11. Write a program that takes user input. Convert and 
// show the input in title case.


// var inputValue=prompt('Enter String Value','javAScript');
// var capitalize=inputValue.slice(0,1).toUpperCase() + inputValue.slice(1).toLocaleLowerCase();
// console.log(capitalize);


// 12. Write a program that converts the variable num to 
// string.
// var num1 = 35.36 ;
// // Remove the dot to display “3536” display in your browser


// var newNum=num1.replace('.','');
// console.log(newNum);

// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ 


// var userName=prompt('Enter Your User Name','abc@mail.com');
// if(userName.indexOf('@')!==-1){
//     alert('Enter a Valid User Name');
// }
// else if(userName.indexOf('!')!==-1){
//     alert('Enter a Valid User Name');
// }
// else if(userName.indexOf(',')!==-1){
//     alert('Enter a Valid User Name');
// }
// else if(userName.indexOf('.')!==-1){
//     alert('Enter a Valid User Name');
// }



// 14. You have an array
// A = [cake, apple pie, cookie, chips, patties]
// Write a program to enable search by user input in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:


// var input=prompt('enter Backery item','cake');
// input=input.toLowerCase();
// var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var flagValue=false;
// for(var i=0;i<a.length;i++){
//     if(input==a[i]){
//         console.log(input + ' is found at ' + i +' in our Backery')
//         flagValue=true;
//     }
// }
// if(!flagValue){
//     console.log(input +' is not found in Our Backery');
// }



// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


// var pass=prompt('Enter Your Password');


// if(pass.length<6){
// console.log('It must contain at least 6 Characters')
// }
// else if(pass.slice(0,1)==0){
//   console.log('It should not start with a number')
// }

// else if(pass.slice(0,1)==1){
//     console.log('It should not start with a number')
//   }

//   else if(pass.slice(0,1)==2){
//     console.log('It should not start with a number')
//   }
//   else if(pass.slice(0,1)==3){
//     console.log('It should not start with a number')
//   }
//   else if(pass.slice(0,1)==4){
//     console.log('It should not start with a number')
//   }
//   else if(pass.slice(0,1)==5){
//     console.log('It should not start with a number')
//   }
//   else if(pass.slice(0,1)==6){
//     console.log('It should not start with a number')
//   }
//   else if(pass.slice(0,1)==7){
//     console.log('It should not start with a number')
//   }
//   else if(pass.slice(0,1)==8){
//     console.log('It should not start with a number')
//   }
//   else if(pass.slice(0,1)==9){
//     console.log('It should not start with a number')
//   }
  


// 16. Write a program to convert the following string to an 
// array using string split method.
// var university = 'University of Karachi';


// for(var j=0;j<university.length;j++){
//     document.write(university.charAt(j)+'<br />')
// }

// 7. Write a program to display the last character of a user 
// input.

// var word=prompt('Enter Special Words','fruits');
// var wordIndex=word.charAt(word.length-1);
// console.log('The last letter of '+ word +' is '+wordIndex)


// 18. You have a string The quick brown fox jumps over the 
// lazy dog. Write a program to count number of 
// occurrences of word the in given string.

var str='the quick brown fox jumps over the lazy dog the';
count=0;
for(var i=0;i<str.length;i++){
if(str.slice(i,i+3)=='the'){
    str=str.slice(0,i) + 'sbc' + str.slice(i+3)
    count++;
    // console.log(count);
}
}
console.log('There are ' +count+ ' occurrences of word“the in given string')









