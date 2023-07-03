var x = prompt("Enter number");
switch (true) {
    case (x <= 100 && x >= 90):
        alert("Excellent");
        break;
    case (x < 90 && x >= 75):
        alert("Very Good");
        break;
    case (x < 75 && x >= 60):
        alert("Good");
        break;
    case (x < 60 && x >= 50):
        alert("Acceptable");
        break;
    case (x < 50 && x >= 0):
        alert("Faild");
        break;
    default:
        alert("Error,Please Enter A Number");
        break;
}