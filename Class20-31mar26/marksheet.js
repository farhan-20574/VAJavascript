let marksUrdu = Number(prompt("Enter your marks in URDU"))
let marksEng = Number(prompt("Enter your marks in ENGLISH"))
let marksCh = Number(prompt("Enter your marks in Chemistry"))
let marksPh = Number(prompt("Enter your marks in PHYSICS"))
let marksIs = Number(prompt("Enter your marks in ISLAMIAT"))
let marksComp = Number(prompt("Enter your marks in COMPUTER"))
let marksMath = Number(prompt("Enter your marks in MATHs"))

// Display marks
document.write(`${marksUrdu} Marks obtained in URDU <br>`)
document.write(`${marksEng} Marks obtained in ENGLISH <br>`)
document.write(`${marksCh} Marks obtained in CHEMISTRY <br>`)
document.write(`${marksPh} Marks obtained in PHYSICS <br>`)
document.write(`${marksIs} Marks obtained in ISLAMIAT <br>`)
document.write(`${marksComp} Marks obtained in COMPUTER <br>`)
document.write(`${marksMath} Marks obtained in MATHS <br>`)

// Total and percentage
let total = marksUrdu + marksEng + marksCh + marksPh + marksIs + marksComp + marksMath
let percentage = (total / 700) * 100

document.write(`Total Marks: ${total} <br>`)
document.write(`Percentage: ${percentage.toFixed(2)}% <br>`)

// Grade logic
if (percentage >= 80) {
    document.write("Your grade is A")
} else if (percentage >= 70) {
    document.write("Your grade is B")
} else if (percentage >= 60) {
    document.write("Your grade is C")
} else if (percentage >= 50) {
    document.write("Your grade is D")
} else {
    document.write("Your grade is F")
}