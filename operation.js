//Add two number
const AddTwoNumbers = (a,b) => {
    return (a+b);
};

//Find if the conditions are obeyed or not?
const Is_Valid = (a,b) => {
    if(a<10 && a>b){
      return true;
    }
    else{
      return false;
    }
    
  };

//Check the conditons
const Check = (A, B) => 
{
    if (A%10===0 && B%10===0){
      return true;
    }
    else if(A%10!==0 || B%10!==0){
      return true;
    }
    else {
      return false;
    }
};

//Find the first digit of a 4 digit number
const First_Digit = (n) => {
    let a=(n/1000);
    return (Math.floor(a));
  };

//Find the last digit of a 4 digit number
const Last_Digit = (n) => {
    let a =n%10;
    return (a);
 };

 //Find the remainder
 const Find_the_remainder = (a,b) => {
    let remainder=(b%a);
    return (remainder);
};

//Multipy two Numbers
const Multiply_two_number = (a,b) => {
    let multi = (a*b);
    return (multi);
};

//Marks Calculator
const Sum = (A, B, C) => 
{
 return(A+B+C);
};

const Average = (A, B, C) => 
{
 let avg=((A+B+C)/3);
 return (avg);
};