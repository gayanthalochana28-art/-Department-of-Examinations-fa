// script.js

function generateResult(){

  let indexNumber =
  document.getElementById("indexNumber").value;

  if(indexNumber == ""){
    alert("Please Enter Index Number");
    return;
  }

  document.getElementById("showIndex").innerText =
  indexNumber;

  let subjects = [

    "Mathematics",
    "Science",
    "English",
    "Sinhala",
    "History",
    "ICT",
    "Commerce",
    "Buddhism"

  ];

  let grades = ["A","B","C","S"];

  let resultTable =
  document.getElementById("resultTable");

  resultTable.innerHTML = "";

  subjects.forEach(subject => {

    let randomGrade =
    grades[Math.floor(Math.random()*grades.length)];

    resultTable.innerHTML += `

      <tr>
        <td>${subject}</td>
        <td>${randomGrade}</td>
      </tr>

    `;

  });

  document.getElementById("resultSheet")
  .style.display = "block";

  document.getElementById("resultSheet")
  .scrollIntoView({
    behavior:"smooth"
  });

}