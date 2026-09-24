const students = [
    { name: "Alice", age: 20, grade: "6", workexperience: 2 },
    { name: "Bob", age: 22, grade: "5", workexperience: 1 },
    { name: "Charlie", age: 19, grade: "4", workexperience: 0 },
    { name: "David", age: 21, grade: "5", workexperience: 3 },
    { name: "Eve", age: 23, grade: "6", workexperience: 4 },
    { name: "Frank", age: 20, grade: "3", workexperience: 1 },
    { name: "Grace", age: 22, grade: "2", workexperience: 2 },
    { name: "Hannah", age: 39, grade: "1", workexperience: 5 },
    { name: "Ian", age: 21, grade: "4", workexperience: 1 },
    { name: "Jack", age: 23, grade: "5", workexperience: 3 },
    { name: "Kathy", age: 20, grade: "6", workexperience: 4 },
    { name: "Liam", age: 22, grade: "3", workexperience: 2 },
    { name: "Mia", age: 19, grade: "2", workexperience: 1 },
    { name: "Noah", age: 21, grade: "1", workexperience: 0 },
    { name: "Olivia", age: 23, grade: "4", workexperience: 3 },
    { name: "Paul", age: 40, grade: "5", workexperience: 10 },
    { name: "Quinn", age: 22, grade: "6", workexperience: 0 },
    { name: "Ryan", age: 19, grade: "3", workexperience: 0 },
    { name: "Sophia", age: 21, grade: "2", workexperience: 0 },
    { name: "Tyler", age: 23, grade: "1", workexperience: 0 }
];

const grades = [
    { letter: "A", score: 6 },
    { letter: "B", score: 5 },
    { letter: "C", score: 4 },
    { letter: "D", score: 3 },
    { letter: "E", score: 2 },
    { letter: "F", score: 1}
]


//Antall studenter
document.getElementById("studentCount").innerHTML = students.length


//Gjennomsnittsalder
const ages = students.map(a => a.age)

const averageAge = ages.reduce((sum, num) => sum + num, 0) / students.length 

document.getElementById("averageAge").innerHTML = averageAge


//Karakter
const grade = students.map(a => a.grade)

const count1 = grade.filter(num => num === "1").length
const count2 = grade.filter(num => num === "2").length
const count3 = grade.filter(num => num === "3").length
const count4 = grade.filter(num => num === "4").length
const count5 = grade.filter(num => num === "5").length
const count6 = grade.filter(num => num === "6").length

document.getElementById("gradeF").innerHTML = count1
document.getElementById("gradeE").innerHTML = count2
document.getElementById("gradeD").innerHTML = count3
document.getElementById("gradeC").innerHTML = count4
document.getElementById("gradeB").innerHTML = count5
document.getElementById("gradeA").innerHTML = count6

// Gjennomsnittskarakter
const gradeNum = grade.map(Number)

const averageGrade = gradeNum.reduce((sum, num) => sum + num, 0) / students.length

if (averageGrade <= 1.4){
    document.getElementById("averageGrade").innerHTML = "F"
} else if (averageGrade <= 2.4){
    document.getElementById("averageGrade").innerHTML = "E"
} else if (averageGrade <= 3.4) {
    document.getElementById("averageGrade").innerHTML = "D"
} else if (averageGrade <= 4.4){
    document.getElementById("averageGrade").innerHTML = "C"
} else if (averageGrade <= 5.4) {
    document.getElementById("averageGrade").innerHTML = "B"
} else if (averageGrade >= 5.5) {
    document.getElementById("averageGrade").innerHTML = "A"
}


//Rett fra videregående
const vgs = students.map(a => a.age)
const fraVGS = vgs.filter(num => num === 19).length

document.getElementById("highSchool").innerHTML = fraVGS


//Work Experience
const work = students.map(a => a.workexperience)
const hasWorked = work.filter(num => num >= 1).length

document.getElementById("workExperience").innerHTML = hasWorked



// https://gemini.google.com/app/faa908eeb139f406