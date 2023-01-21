var arr = [];
arr = prompt("Enter your numbers").split(" ");
Main(arr);  

function Main(arr) {

    if (arr.length < 4) {
        console.error('Enter 4 values ');
        console.log('usage: Enter S, R, T for Sqaure, Rectangle or Triangle and then enter Length, Bredth and Height');
        return;
    }

   
   
    else {
        var shape = arr[0];
        var length = parseFloat(arr[1]);
        var bredth = parseFloat(arr[2]);
        var height = parseFloat(arr[3]);

        if ((isNaN(length)) || (isNaN(bredth)) || (isNaN(height)) == true) {
            console.log('Enter numeric values for length, bredth, height');
            return;
        }

        if ((length <= 0) || (bredth <= 0) || (height <= 0)) {
            console.log('Enter all values greater than 0 for length, bredth, height');

        }

        else {

            function areaofSquare(length) {
                return length * length;
            }

            function perimeterofSquare(length) {
                return 4 * length;
            }

            function areaofTriangle(length, bredth) {
                return (length * bredth) / 2;
            }

            function perimeterofTriangle(length, bredth, height) {
                return length + bredth + height;
            }

            function areaofRectangle(length, bredth) {
                return length * bredth;
            }

            function perimeterofRectangle(length, bredth) {
                return 2 * (length * bredth);
            }






            function DisplayValues(heading, result) {
                console.log("-----------------------------");
                console.log(heading);

                console.log(result);

            }

            if (shape.toLowerCase() == "s") {
                DisplayValues("Area of Square is:", areaofSquare(length));
                DisplayValues("Perimeter of Square is:", perimeterofSquare(length));
            }

            else if (shape.toLowerCase() == "t") {
                DisplayValues("Area of Triangle is:", areaofTriangle(length, bredth));
                DisplayValues("Perimeter of Triangle is:", perimeterofTriangle(length, bredth, height));
            }


            else if (shape.toLowerCase() == "r") {
                DisplayValues("Area of Rectangle is:", areaofRectangle(length, bredth));
                DisplayValues("Perimeter of Rectangle is:", perimeterofRectangle(length, bredth));
            }

            else {
                console.log("Invalid Choice for Shape, Enter S,R or T for Square, Rectangle or Triangle");
            }


        }

    }
}