let count = localStorage.getItem("reviews") || 0;
count++;

localStorage.setItem("reviews", count);

document.getElementById("counter").textContent = count;