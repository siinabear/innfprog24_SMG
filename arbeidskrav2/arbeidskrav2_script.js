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

function average(array) {
    let sum = 0

    array.map( n => {sum += n})

    return sum / students.length
}

document.getElementById("averageAge").innerHTML = average(ages)


//Karakter
const grade = students.map(a => a.grade)

function countGrade(num, gr){
    const c = grade.filter(n => n === num).length
    document.getElementById(gr).innerHTML = c
    }

countGrade("1", "gradeF")
countGrade("2", "gradeE")
countGrade("3", "gradeD")
countGrade("4", "gradeC")
countGrade("5", "gradeB")
countGrade("6", "gradeA")

// Gjennomsnittskarakter
const gradeNum = grade.map(Number)

const averageGrade = average(gradeNum)

if (averageGrade <= 1.4){
    document.getElementById("averageGrade").innerHTML = grades[5].letter
} else if (averageGrade <= 2.4){
    document.getElementById("averageGrade").innerHTML = grades[4].letter
} else if (averageGrade <= 3.4) {
    document.getElementById("averageGrade").innerHTML = grades[3].letter
} else if (averageGrade <= 4.4){
    document.getElementById("averageGrade").innerHTML = grades[2].letter
} else if (averageGrade <= 5.4) {
    document.getElementById("averageGrade").innerHTML = grades[1].letter
} else if (averageGrade >= 5.5) {
    document.getElementById("averageGrade").innerHTML = grades[0].letter
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
// https://share.gemini.google/HPUhLPOiq9Ry
// https://share.gemini.google/jt9OveBq0Lyk