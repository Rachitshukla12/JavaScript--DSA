let unit = Number(prompt("Enter the electricity unit value"));
let amonut =0;

if(unit > 400){
    amonut = (unit - 400) *13;
    unit = 400;
}
if(unit > 200&& unit <= 400){
    amonut += (unit - 200) *8;
    unit = 200;
}

if(unit > 100 && unit <= 200){
    amonut += (unit - 100) *6;
    unit = 100;
}

amonut += unit * 4; 
console.log(amonut);
