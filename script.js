//1.
let ages = [ 22, 15, 27, 30, 9 ];
//EX
console.log(ages[ 3 ]);


//2.
let person = {
    firstname = 'Giorgi',
    lastname = 'Todadze',
    age = 22,
    monthlyIncome = 'Unemployed'
}

//3.
function rect(){
    let = area;
    let width = 6;
    let height = 3;
    console.log(width * height);
}


//4*.
Math.dist=function(x1,y1,x2,y2){ 
    if(!x2) x2=0; 
    if(!y2) y2=0;
    return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)); 
  }
  Math.dist(0,0, 3,4); //the output will be 5
  Math.dist(1,1, 4,5); //the output will be 5
  Math.dist(3,4); //the output will be 5