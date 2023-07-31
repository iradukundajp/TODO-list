/**
 * @jest-environment jsdom
 */

import createTaskElement from './createUser.js';

function testCreateTaskElement() {
    const taskText = 'Sample Task';
    const taskElement = createTaskElement(taskText);

    console.assert(
        taskElement.querySelector('.text').value === taskText,
        'Task text value should match.'
    );
    console.assert(
        taskElement.querySelector('.text').readOnly === true,
        'Task input should be read-only.'
    );
    console.assert(
        taskElement.querySelector('.edit').innerText === 'Edit',
        'Edit button should have text "Edit".'
    );
    console.assert(
        taskElement.querySelector('.delete').innerText === 'Delete',
        'Delete button should have text "Delete".'
    );

    console.log('createTaskElement test passed.');
}

testCreateTaskElement();
