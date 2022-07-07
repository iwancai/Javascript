
// let tomorrow = new Date();
// tomorrow.setDate(tomorrow.getDate() + 8);

let tomorrow = new Date();
tomorrow.setUTCDate(tomorrow.getUTCDate() + 8);


var n=5; //number of days to add. 
var today=new Date(); //Today's Date
var requiredDate=new Date(today.getFullYear(),today.getMonth(),today.getDate()+n)
