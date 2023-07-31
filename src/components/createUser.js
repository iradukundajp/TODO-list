export function createTaskElement(taskText) {
    const task_el = document.createElement('div');
    task_el.classList.add('task');

    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');

    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = taskText;
    task_input_el.setAttribute('readonly', 'readonly');

    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');

    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add('edit');
    task_edit_el.innerText = 'Edit';

    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerText = 'Delete';

    task_content_el.appendChild(task_input_el);
    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);
    task_el.appendChild(task_content_el);
    task_el.appendChild(task_actions_el);

    return task_el;
}

export function appendTaskElement(taskElement) {
    document.querySelector("#tasks").appendChild(taskElement);
}
