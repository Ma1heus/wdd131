// ===== Footer =====
// Get current year
const currentYear = new Date().getFullYear();

// Insert year in footer
document.getElementById("currentyear").textContent = currentYear;

// Get last modified date
document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;


// ===== DOM =====
// Selecionar elementos do DOM
const form = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


// ===== DATA STRUCTURE =====
// Array to store tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Render tasks on screen
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");

        // Template literal
        li.innerHTML = `
            <span class="${task.completed ? "completed" : ""}">
                ${task.text}
            </span>
            <button data-id="${task.id}">X</button>
        `;

        // Toggle completed state
        li.querySelector("span").addEventListener("click", () => {
            task.completed = !task.completed;
            saveTasks();
        });

        // Delete task using filter
        li.querySelector("button").addEventListener("click", () => {
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
        });

        taskList.appendChild(li);
    });
}


// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

// Form submission (better than button click)
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskText = taskInput.value.trim();

    // Conditional branching (required)
    if (taskText !== "") {

        // Object (required)
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false
        };

        tasks.push(task); // Add to array

        saveTasks();
        taskInput.value = "";
    }
});


// ===== INIT =====
// Initial render when page loads
renderTasks();