var circleAreaES5 = function circleArea(r){
    var PI = 3.14;
    const area = PI*r*r;
    return area;
}

console.log(circleAreaES5(2));

const circleArea2 = r => 3.14*r*r;
console.log(circleArea2(2));

const mult = (c , l) => c*l;
console.log(mult(3,7));

const hello = () => console.log('hello');

hello();
