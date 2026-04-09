// Get current year
const currentYear = new Date().getFullYear();

// Insert year in footer
document.getElementById("currentyear").textContent = currentYear;

// Get last modified date
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

// FEATURE: Selecionar elementos do DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// FEATURE: Função para criar tarefa
function createTask(taskText) {
    const li = document.createElement("li");

    // FEATURE: Texto da tarefa
    li.textContent = taskText;

    // FEATURE: Botão de deletar
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    // FEATURE: Marcar como concluída ao clicar no texto
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // FEATURE: Deletar tarefa
    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // impede conflito com clique do LI
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// FEATURE: Adicionar tarefa ao clicar no botão
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        createTask(taskText);
        taskInput.value = "";
    }
});

// FEATURE: Permitir adicionar com Enter
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTaskBtn.click();
    }
});