
/* Write a class Vec that represents a vector in two-dimensional space. 
It takes x and y parameters (numbers), which it should save to properties of the same name.

Give the Vec prototype two methods, plus and minus, that take another vector 
as a parameter and return a new vector that has the sum or difference of the two vectors’ 
(this and the parameter) x and y values.

Add a getter property length to the prototype that computes the length of the vector—that is, 
the distance of the point (x, y) from the origin (0, 0).

// Your code here.

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5 */

class Vec {
    private x: number;
    private y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public plus(newVector: Vec): Vec {
        this.x += newVector.x
        this.y += newVector.y;
        return this;
    }
    public minus(newVector: Vec): Vec {
        this.x -= newVector.x
        this.y -= newVector.y;
        return this;
    }
    public getLength(): number {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

}

let vector1: Vec = new Vec(1, 2);
let vector2: Vec = new Vec(2, 3);
let vector3: Vec = new Vec(3, 4);
console.log(vector1.plus(vector2));
console.log(vector1.minus(vector2));
console.log(vector3.getLength());
/* console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length()); */