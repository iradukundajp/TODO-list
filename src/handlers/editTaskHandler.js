

export function handleEditTask(taskElement) {
    const taskInputEl = taskElement.querySelector('.text');
    const editButton = taskElement.querySelector('.edit');

    if (editButton.innerText.toLowerCase() === "edit") {
        editButton.innerText = "Save";
        taskInputEl.removeAttribute("readonly");
        taskInputEl.focus();
    } else {
        editButton.innerText = "Edit";
        taskInputEl.setAttribute("readonly", "readonly");
    }
}


