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
            x = prompt("Enter Base : ");
            y = prompt("Enter exponent : ");
            document.getElementById("ans").innerHTML = Math.pow(Number(x), Number(y));
            break;
        default:
            alert("Entered a wrong choice. Please try again.");
            
    }
}