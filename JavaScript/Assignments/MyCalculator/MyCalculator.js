function myFunction() {

    var choice = prompt("Select From Choices \n 1. Add \n 2. Substract \n 3. Mulitply \n 4. Divide \n 5. Exponent \n 6. Mean \n 7. Quit");

    switch (choice) {
        case "Add":
        case "1":
            x = prompt("Enter First Number : ");
            y = prompt("Enter Second Number : ");
            document.getElementById("ans").innerHTML = Number(x) + Number(y);
            break;
        case "Substract":
        case "2":
            x = prompt("Enter First Number : ");
            y = prompt("Enter Second Number : ");
            document.getElementById("ans").innerHTML = Number(y) - Number(x);
            break;
        case "Multiply":
        case "3":
            x = prompt("Enter First Number : ");
            y = prompt("Enter Second Number : ");
            document.getElementById("ans").innerHTML = Number(x) * Number(y);
            break;
        case "Divide":
        case "4":
            x = prompt("Enter First Number : ");
            y = prompt("Enter Second Number : ");
            document.getElementById("ans").innerHTML = Number(x) / Number(y);
            break;
        case "Exponent":
        case "5":
            x = prompt("Enter Base : ");
            y = prompt("Enter exponent : ");
            document.getElementById("ans").innerHTML = Math.pow(Number(x), Number(y));
            break;
        case "Mean":
        case "6":
            var i = 0;
            var sum = 0; 
            do {
                var number = prompt("Please Enter a Number");
                if (number != "***") {
                    sum += parseInt(number); 
                } else {
                    break;
                }
                i++;
            }
            while (i < 10);
            document.getElementById("ans").innerHTML = sum / i;
            break;
        case "Quit":
        case "7":
            c = prompt("Are you sure you want to Quit? \n 1. Yes \n 2. No");

            switch (c) {
                case "Yes":
                case "1":
                    alert("Thank You");
                    break;
                case "No":
                case "2":
                    myFunction();
            }
            break;
        default:
            alert("Entered a wrong choice. Please try again.");

    }
}