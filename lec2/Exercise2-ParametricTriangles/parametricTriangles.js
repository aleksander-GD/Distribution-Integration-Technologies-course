/*
Exercise: Parametric triangles
Extend your triangle code to a triangle-function
that expects a size parameter.
For example, the call triangle(5) should give the following output in the console:
     #
     ##
     ###
     ####
     #####
Bonus: extend the triangle function with an optional "character parameter"
such that triangle(3,"%") prints the triangles with % instead.
*/

function triangle(size, displayType = '#') {
    let triangle = displayType;
    for (let x = 0; x < size; x++) {
        console.log(triangle)
        triangle += displayType;
    }
}
triangle(8, '¤');
triangle(8);