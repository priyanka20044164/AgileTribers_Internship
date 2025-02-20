function ageMessage(age) {
    if (age < 16) console.log("You can't drive.");
    else if (age >= 16 && age < 18) console.log("You can drive but not vote.");
    else if (age >= 18 && age < 25) console.log("You can vote but not rent a car.");
    else console.log("You can do pretty much anything.");
}
ageMessage(15);
ageMessage(17);
ageMessage(20);
ageMessage(30);
