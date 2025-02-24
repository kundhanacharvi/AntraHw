const students = [
    { name: "Frank", grade: 85 },
    { name: "John", grade: 94 },
    { name: "Chen", grade: 74 },
    { name: "Pratima", grade: 78 },
    { name: "Scott", grade: 82 },
    { name: "Alexandro", grade: 92 },
];

// filter
// Extracts students with score above 80
const topStudents = students.filter((student) => student.grade > 80);
console.log("Top students: ", topStudents);

// map
// Increase each student's grade by 5
const boostGrades = students.map((student) => ({
    name: student.name,
    grade: student.grade + 5, // Adjusted comment to match logic
}));
console.log("Grades after boost: ", boostGrades);

// find
// Finds a student named Scott
const findStudent = students.find((student) => student.name === "Scott"); // Fixed variable reference
console.log("Scott's details: ", findStudent);

// forEach
// Prints the student's name and grade
students.forEach((student) => console.log(student.name, student.grade)); // Fixed "score" to "grade"

// some
// Checks if any student failed (grade below 75).
console.log("Did any student fail?", students.some((student) => student.grade < 75));

// every
// Checks if all students passed (grade 75 or above).
console.log("Did all students pass?", students.every((student) => student.grade >= 75));

// reduce
// Calculates the average grade of the class
const averageGrade = students.reduce((total, student) => total + student.grade, 0) / students.length; // Fixed "student.length" to "students.length"
console.log("Average grade of the class: ", averageGrade);

// includes
// Checks if "Pratima" is in the student list.
const studentExists = students.find((student) => student.name === "Pratima"); // A better approach
console.log("Is Pratima in the student list?", Boolean(studentExists)); // Converts to true/false
