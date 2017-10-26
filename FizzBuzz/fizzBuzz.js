function main() {
    // Declare multiple functions with one var.
    var fizz = 3,
        buzz = 5,
        length = Number(prompt("How many numbers would you like to test up to?"));

    for(var i = 1; i <= length; i++) {
        if (i % fizz == 0) { // Tests i against fizz
            document.write("Fizz");
        }
        if (i % buzz == 0) { // Tests i against buzz
            document.write("Buzz");
        }
        // If both are false, simply display the number.
        if (i % fizz != 0 && i % buzz != 0) {
            document.write(i);
        }
        document.write("<br/>"); // Add line breaks to keep everything from bunching up on one line.
    }
}

main();
