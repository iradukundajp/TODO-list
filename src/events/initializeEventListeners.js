import { createTaskElement, appendTaskElement } from '../components/createUser.js';
import { data} from '../data.js';
import { dom} from '../dom.js';
import { handleDeleteTask } from '../handlers/deleteTaskHandler.js';
import { handleEditTask } from '../handlers/editTaskHandler.js';

export function initializeEventListeners() {
    dom.taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = dom.taskInput.value.trim();

        if (task === '') return;

        const task_el = createTaskElement(task);
        appendTaskElement(task_el);
        data.tasksData.push(task);

        dom.taskInput.value = '';
    });

    dom.taskList.addEventListener('click', (e) => {
        const target = e.target;
        const taskElement = target.closest('.task');

        if (!taskElement) return;

        if (target.classList.contains('edit')) {
            handleEditTask(taskElement);
        } else if (target.classList.contains('delete')) {
            handleDeleteTask(taskElement);
        }
    });
}
