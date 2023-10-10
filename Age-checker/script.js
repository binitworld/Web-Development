function checkAge() {
    let age = document.getElementById('ageInput').value;
    age = Number.parseInt(age);

    let output1 = "Your age is: " + age;
    let output2 = "";
    let output3 = "";
    let output4 = "";

    if (age > 0) {
        output2 = "This is a valid age";

        if (age < 18) {
            output3 = "You are a teenager, so you can't drive";
        } else {
            output4 = "You are an adult, so you can drive";
        }
    } else {
        output2 = "This is not a valid age";
    }

    document.getElementById("output1").innerHTML = output1;
    document.getElementById("output2").innerHTML = output2;
    document.getElementById("output3").innerHTML = output3;
    document.getElementById("output4").innerHTML = output4;
}
