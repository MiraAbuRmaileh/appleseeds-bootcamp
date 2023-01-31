function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    }
Square.prototype.isSquare = function() {
    return this.a === this.b && this.b === this.c && this.c === this.d;
    };
    const square1 = new Square(2, 2, 2, 2);
    console.log(square1.isSquare()); // Output: true
    
    const square2 = new Square(2, 2, 2, 3);
    console.log(square2.isSquare()); // Output: false

    const square3 = new Square(4,4,4,4);
    console.log(square3.isSquare()); // Output: true