// STORES DOM MANIPULATIONS
// (DONE)Add Project, Remove Project
// (DONE)Update number of tasks in a project
// (DONE)Update Options in Form with new projects
// (DONE)Update View All Tasks List 
// (DONE)Add To-do, Remove To-do

// clear to-dos?
// Show Add New Form
// Tab between to-do and Project form
// Mark To-do as completed
// List To-dos and Projects in level of priority?







const DOMHandler = (() => {

    // TO-DO MANIPS

    const todo = (() => {
        let table = document.querySelector('table tbody');

        const clearAll = () => {
            const newBody = document.createElement('tbody');
            table.parentNode.replaceChild(newBody, table);
            // the node that used to be table is now gone.
            // refresh it
            table = newBody;
        }
        const refreshAll = todoArray => {
            clearAll();
            todoArray.forEach(todoObject => {
                // destructure the object and IIFE it into add
                (({id, title, dueDate, projectName}) => 
                add(id, title, dueDate, projectName))(todoObject);
            });
        }

        const add = (id, title, dueDate, projectName) => {
            const newRow = table.insertRow();
            newRow.dataset.num = id;

            const newChk = newRow.insertCell(0);
            const ChkIn = document.createElement('input');
            ChkIn.type = 'checkbox';
            ChkIn.dataset.num = id;
            newChk.append(ChkIn);

            const newTitle = newRow.insertCell(1);
            newTitle.textContent = title;

            const newDate = newRow.insertCell(2);
            newDate.textContent = dueDate;

            const newProject = newRow.insertCell(3);
            newProject.textContent = projectName;

            const newEdit = newRow.insertCell(4);
            const EditBtn = document.createElement('button');
            EditBtn.dataset.num = id;
            EditBtn.classList.add('edit');
            EditBtn.textContent = "Edit";
            // Edit Event Listener
            newEdit.append(EditBtn);


            const newRmv = newRow.insertCell(5);
            const RmvBtn = document.createElement('button');
            RmvBtn.dataset.num = id;
            RmvBtn.classList.add('rmv');
            RmvBtn.textContent = "Remove";
            // This should NOT directly call the DOM Manip. Otherwise
            // the underlying To-do object will not be deleted!
            RmvBtn.addEventListener('click', () => remove(id));

            newRmv.append(RmvBtn);

        };
        const remove = id => {
            const rowToRemove = document.querySelector(`tr[data-num='${id}']`);
            rowToRemove.remove();
        };

        return {clearAll, refreshAll, remove};

    })();

    // PROJECT MANIPS

    const updateViewAll = tasks => {
        const viewAllNumberDiv = document.querySelector('#view-all .project-no');
        viewAllNumberDiv.textContent = tasks;
    }

    const project = (() => {
        const projectsListElement = document.querySelector('.projects-list');
    
        const add = (id, name, tasks = 0) => {
            const newItem = document.createElement('li');
            const newBtn = document.createElement('button');
            const newDiv = document.createElement('div');
    
            // ID generation should be handled in logic. 
            newItem.id = `project-${id}`;
            form.addProject(id, name);
    
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
            form.removeProject(id);
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
            // formManips.addProject(id, name);
        }
    
        return {add, remove, update, updateViewAll}
    })();
    
    // FORM MANIPS
    
    const form = (() => {
        const projectOptionsList = document.querySelector('#td-project-input');
    
    
        const addProject = (id, name) => {
            const newOption = document.createElement('option');
            newOption.value = `project-${id}`;
            newOption.textContent = name;
            projectOptionsList.append(newOption);
        }
        const removeProject = id => {
            const optionToRemove = document.querySelector(`option[value='project-${id}']`);
            optionToRemove.remove();
        }
        return {addProject, removeProject};
    })();




    return {todo, updateViewAll, project, form};

})();










export {DOMHandler};