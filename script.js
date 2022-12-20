console.log("jai Shree raaam");
// Eligible For Vote..
function tellMeAge(){
    let age = document.getElementById("age").value;
    if(age>18)
    {
        document.getElementById("ansage").innerHTML = "You Age Elegible for vote.";
    }
    else{
        document.getElementById("ansage").innerHTML = "You Are Not Eligible for vote.";
    }
}
// Prime Or Not..
function checkPrime(){
    let number = document.getElementById("num").value;
let isPrime = true;
if (number === 1) {
    document.getElementById("ansprime").innerHTML = "1 is neither prime nor composite number.";
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        document.getElementById("ansprime").innerHTML = number+" "+"is Prime Number.";
    } else {
        document.getElementById("ansprime").innerHTML = number+" "+"is Not Prime Number.";
    }
}
else {
    document.getElementById("ansprime").innerHTML = number+" "+"is Not Prime Number.";
}
}
// Factorial Number..

function checkfact(){
    const number = document.getElementById("numfact").value;
if (number < 0) {
    document.getElementById("ansfact").innerHTML= "Error! Factorial for negative number does not exist.";
}
else if (number === 0) {
    document.getElementById("ansfact").innerHTML= "Factorial Of the Number Is 1.";
}
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    document.getElementById("ansfact").innerHTML="Factorial of the number is"+" "+fact+".";
}
}