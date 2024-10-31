var userAge = prompt("User age:");

if (userAge < 5) {
  console.log("You're a Toddler(under 5 years old)");
} else if(userAge >= 5 && userAge <= 12) {
  console.log("You're a Child(5-12 years old)");
} else if(userAge >= 13 && userAge <= 19) {
  console.log("You're a Teenager (5-12 years old)");
} else if(userAge >= 20 && userAge <= 35) {
  console.log("You're a Adult(5-12 years old)");
} else if(userAge >= 35 && userAge <= 60) {
  console.log("You're a Middle-Aged(5-12 years old)");
} else {
  console.log("You're a Senior (60 years old above)");
}    