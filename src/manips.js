// STORES DOM MANIPULATIONS
// (DONE)Add Project, Remove Project
// (DONE)Update number of tasks in a project
// Add To-do, Remove To-do
// Show Add New Form
// Tab between to-do and Project form
// Mark To-do as completed

const projectManips = (() => {
    const projectsListElement = document.querySelector('.projects-list');

    const add = (id, name, tasks = 0) => {
        const newItem = document.createElement('li');
        const newBtn = document.createElement('button');
        const newDiv = document.createElement('div');

        // ID generation should be handled in logic. 
        newItem.id = `project-${id}`;

        newDiv.classList.add('project-no');
        newBtn.classList.add('project');
        newItem.classList.add('project');

        newDiv.textContent = tasks;
        newBtn.textContent = name;
        
        newBtn.append(newDiv);
        newItem.append(newBtn);
        
        projectsListElement.append(newItem);
    };
    const remove = id => {
        const itemToRemove = document.querySelector(`#project-${id}`);
        itemToRemove.remove();
    }
    const update = (id, tasks) => {
        const numberDiv = document.querySelector(`#project-${id} .project-no`);
        numberDiv.textContent = tasks;
    }

    // I am not sure if this is useful or correct.
    const _updateName = (id, name) => {
        const nameBtn = document.querySelector(`#project-${id} button`);
        const numberDiv = document.querySelector(`#project-${id} .project-no`);
        nameBtn.textContent = name;
        nameBtn.append(numberDiv);
    }

    return {add, remove, update}
})();



export {projectManips};