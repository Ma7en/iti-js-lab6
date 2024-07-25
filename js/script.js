let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");

let xhr = new XMLHttpRequest();
// xhr.open("POST", "./", true);
// xhr.send();

addBtn.addEventListener("click", function () {
    if (taskInput.value !== "") {
        xhr.open("POST", "./addTask.json", true);

        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        // console.log(`1->true`);
        // console.log(`2->true`, xhr);
        xhr.onload = function () {
            let taskList = document.getElementById("taskList");
            let taskItem = document.createElement("tr");
            taskItem.innerHTML = `
            <td><input type="checkbox" class='check'></td>
            <td class='textvalue'>${taskInput.value}</td>
            <td><span class="delete-btn">&times;</span></td>
             `;
            taskList.appendChild(taskItem);
            taskInput.value = "";

            // Add event listener for the delete button or check
            taskItem
                .querySelector(".delete-btn")
                .addEventListener("click", function () {
                    taskItem.remove();
                });
            let textvalue = taskItem.querySelector(".textvalue");

            taskItem
                .querySelector(".check")
                .addEventListener("click", function () {
                    textvalue.classList.toggle("textvalue-checked");
                });
        };

        xhr.send();
        // xhr.send(JSON.stringify({ task: taskInput.value }));
    }
});
