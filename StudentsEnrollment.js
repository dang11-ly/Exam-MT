subject = {
    "DSA": [],
    "PL": [],
    "Networks": [],
}

let selectedSubject = null;

while (true) {
    if (!selectedSubject) {
        const subjectChoice = prompt("Select a subject:\n(A) DSA\n(B) PL\n(C) Networks").toUpperCase();
if (subjectChoice === 'A') {
    selectedSubject = DSA;
} else if (subjectChoice === 'B') {
    selectedSubject = PL;
} else if (subjectChoice === 'C') {
    selectedSubject = Networks;
} else {
    console.log("Invalid choice. Please select A, B, or C.");
    continue;
}
}

const operation = prompt("Select an option:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit").toUpperCase();

if (operation === 'A') {
const studentName = prompt("Enter the name of the student to enroll:");
selectedSubject.push(studentName);
console.log(`${studentName} has been enrolled.`);
} else if (operation === 'B') {
if (selectedSubject.length === 0) {
    console.log("No students enrolled in this subject.");
} else {
    console.log("Currently enrolled students: " + selectedSubject.join(", "));
    const studentName = prompt("Enter the name of the student to unenroll:");
    const index = selectedSubject.indexOf(studentName);
    if (index !== -1) {
        selectedSubject.splice(index, 1);
        console.log(`${studentName} has been unenrolled.`);
    } else {
        console.log(`${studentName} is not found in the enrolled students.`);
    }
}
} else if (operation === 'C') {
selectedSubject = null; // Reset to allow subject selection
} else if (operation === 'D') {
// Print final enrollment and exit
console.log("Final Enlistment:");
console.log("DSA: " + DSA.join(", "));
console.log("PL: " + PL.join(", "));
console.log("Networks: " + Networks.join(", "));
break; // Exit the program
} else {
console.log("Invalid choice. Please select A, B, C, or D.");
}
}