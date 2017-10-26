function main() {
    var n = Number(prompt("How many times do you want to flip the coin?")); // Gets the number of times to flip the coin.
    var heads = 0, tails = 0; // Initiates the heads and tails variables.
    for(var i = 0; i < n; i++) {

        // Uses the Math.random function to generate a random number.
        // If the rand num is less than 1/2, it is classified as heads.
        // Otherwise, the num is above 1/2 and is classified as tails.
        if(Math.random() < 0.50) {
            heads++;
        } else {
            tails++;
        }

        // Creates a borderless table to display the results of the coin flips.
        document.getElementById("coinCount").innerHTML = 
        "<table>"+
            "<th>Heads</th><th>Tails</th><tr>"+ // Header Row
            "<td>" + heads + "</td><td>" + tails + "</td></tr>"+ // Data Row
        "</table>";
    }
}

main(); // Calls the main function to begin the coin flipping simulation.
