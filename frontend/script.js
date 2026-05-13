const API_URL = "http://localhost:5000/api/students";

let editStudentId = null;


// FETCH STUDENTS
async function fetchStudents() {

    const response = await fetch(API_URL);

    const students = await response.json();

    const studentsDiv = document.getElementById("students");

    studentsDiv.innerHTML = "";

    students.forEach(student => {

        studentsDiv.innerHTML += `
            <div class="student">

                <h2>${student.name}</h2>

                <p>Roll No: ${student.rollNo}</p>

                <p>Course: ${student.course}</p>

                <button onclick="editStudent(
                    '${student._id}',
                    '${student.name}',
                    '${student.rollNo}',
                    '${student.course}'
                )">
                    Edit
                </button>

                <button class="delete-btn"
                    onclick="deleteStudent('${student._id}')">
                    Delete
                </button>

            </div>
        `;
    });
}


// CREATE OR UPDATE
async function saveStudent() {

    const name = document.getElementById("name").value;

    const rollNo = document.getElementById("rollNo").value;

    const course = document.getElementById("course").value;

    if (!name || !rollNo || !course) {

        alert("Please fill all fields");

        return;
    }


    // UPDATE
    if (editStudentId) {

        await fetch(`${API_URL}/${editStudentId}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name,
                rollNo,
                course
            })

        });

        editStudentId = null;

    }

    // CREATE
    else {

        await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name,
                rollNo,
                course
            })

        });

    }

    document.getElementById("name").value = "";

    document.getElementById("rollNo").value = "";

    document.getElementById("course").value = "";

    fetchStudents();
}


// EDIT STUDENT
function editStudent(id, name, rollNo, course) {

    document.getElementById("name").value = name;

    document.getElementById("rollNo").value = rollNo;

    document.getElementById("course").value = course;

    editStudentId = id;
}


// DELETE STUDENT
async function deleteStudent(id) {

    await fetch(`${API_URL}/${id}`, {

        method: "DELETE"

    });

    fetchStudents();
}


fetchStudents();