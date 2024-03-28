// 1..Write a program to print the reverse of the given string ?

let input1= "codecode";

 console.log(input1.split("").reverse().join(""))

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2.. Given a number, check whether it is a prime number or not ?

let number= 61;

let i =2;
if(number%i==0){
    console.log("No")
    i+1;
}else{
    console.log("Yes")
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//  3.. Given an array of numbers, arrange them in  a way that it forms a largest value ?

let input = [54, 546, 548, 60];

console.log(input.sort().reverse().join(''))

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4.. Given a number N, print reverse of number N ?

let num = 988; 
    
    function reverseDigits(num) { 
        let rev_num = 0; 
        while(num > 0) 
        { 
            rev_num = rev_num * 10 + num % 10; 
            num = Math.floor(num / 10); 
        } 
        console.log(rev_num); 
    } 
    
    reverseDigits(num)

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5.. Give an array of number, find the maximum and minimum element in the array ?

function array(){
    let arr= [54, 546, 548, 60];
    
     let max_value= Math.max(...arr)
     let min_value= Math.min(...arr)

     console.log(max_value , min_value)
 }

 array()

//  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
