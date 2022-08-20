var total = prompt('How many km are left to go?');

// Your code below:
var km =parseInt(total);

if (km > 100) {
    console.log("We still have a bit of driving left to go");
    console.log(km);
  } else if (km > 50) {
    console.log("We'll be there in 5 minutes");
    console.log(km);
  }else{
    console.log("I'm parking, I'll see you right now");
    console.log(km);
  }