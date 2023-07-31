import { data } from '../data.js';


export function handleDeleteTask(taskElement) {
    const taskInputEl = taskElement.querySelector('.text');
    const taskText = taskInputEl.value;
    const index = data.tasksData.indexOf(taskText);

    if (index !== -1) {
        data.tasksData.splice(index, 1);
    }

    taskElement.remove();
}     