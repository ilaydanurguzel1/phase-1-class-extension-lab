// Your code here

class Polygon{
    constructor(Array){
        this.Array=Array;
    }
    get countSides(){
        return this.Array.length
    }
    get perimeter(){
        let perimeter=0;
        for(let sum of this.Array){
            perimeter+=sum
        }
        return perimeter;
    }
}

class Triangle extends Polygon{
    get isValid(){
        return (this.Array[0] + this.Array[1] > this.Array[2]) && (this.Array[1] + this.Array[2] > this.Array[0]) && (this.Array[0] + this.Array[2] > this.Array[1])? true : false;
    }
}
class Square extends Polygon{
    get isValid(){
        return ((this.Array[0] === this.Array[1]) && (this.Array[0] === this.Array[2]) && (this.Array[0] === this.Array[3]))? true : false;
    }
    get area(){
        return this.Array[0] ** 2;
    }
}
