// Loading Screen

window.onload = function(){

  setTimeout(() => {

    document.getElementById("loader").style.display = "none";

    document.getElementById("mainContent").style.display = "block";

  },2000);

};


// Student Names
const students = [
  "",

];


// Subjects

const subjects = [
  "Mathematics",
  "Science",
  "English",
  "Sinhala",
  "History",
  "Geograpy",
  "Buddis",
  "Home Science",
  "Art"
];

// Grades

const grades = ["A","B","C","S","W"];


// Generate Random Grade

function randomGrade(){

  return grades[Math.floor(Math.random() * grades.length)];

}


// Generate Results

function generateResults(){

  let index = document.getElementById("indexNo").value;

  if(index === ""){

    alert("Please Enter Index Number");

    return;

  }

  let randomStudent =
    students[Math.floor(Math.random() * students.length)];

  document.getElementById("studentName").innerText =
    randomStudent;

  document.getElementById("studentIndex").innerText =
    index;

  let tableBody =
    document.getElementById("tableBody");

  tableBody.innerHTML = "";

  subjects.forEach(subject => {

    let grade = randomGrade();

    let row = `
      <tr>
        <td>${subject}</td>

        <td class="${
          grade === "W" ? "fail" : "pass"
        }">
          ${grade}
        </td>
      </tr>
    `;

    tableBody.innerHTML += row;

  });

  document.getElementById("resultBox").style.display =
    "block";

}
