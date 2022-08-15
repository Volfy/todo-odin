// STORES DOM MANIPULATIONS

import { DataHandler } from "./data";

const DOMHandler = (() => {
    // TO-DO MANIPS

    const todo = (() => {
        let table = document.querySelector('table tbody');

        const refreshAll = todoArray => {
            clearAll();
            todoArray.forEach(todoObject => {
                // destructure the object and IIFE it into add
                (({id, title, dueDate, projectName, done, projectId}) => 
                add(id, title, dueDate, projectName, done, projectId))(todoObject);
            });
            updateViewAll(DataHandler.todo.forDOM(-2).filter(x => !x.done).length);
        }

        const markDone = (id) => 
            document.querySelector(`tr[data-num='${id}']`)
                    .classList
                    .toggle('done');

        const clearAll = () => {
            const newBody = document.createElement('tbody');
            table.parentNode.replaceChild(newBody, table);
            // the node that used to be table is now gone.
            // so refresh it
            table = newBody;
        }

        const add = (id, title, dueDate, projectName, done, projectId) => {
            const newRow = table.insertRow();
            newRow.dataset.num = id;

            const newChk = newRow.insertCell(0);
            const ChkIn = document.createElement('input');
            ChkIn.type = 'checkbox';
            if (done) {
                ChkIn.checked = true;
                markDone(id);
            }
            // Checkbox Event Listener
            // This should not happen directly,
            // but markDone should get called by a function
            // after object state is changed 
            ChkIn.addEventListener('change', () => {
                if (done === false) {   
                    done = true;
                    markDone(id);
                    DataHandler.todo.edit(projectId, id, title, dueDate, 21);
                    refreshAll(DataHandler.todo.forDOM(-2));
                    project.refreshAll(DataHandler.project.forDOM());
                } else {
                    done = false;
                    markDone(id);
                    DataHandler.todo.edit(projectId, id, title, dueDate, 1);
                    refreshAll(DataHandler.todo.forDOM(-2));
                    project.refreshAll(DataHandler.project.forDOM());
                }
            })
            newChk.append(ChkIn);

            const newTitle = newRow.insertCell(1);
            newTitle.textContent = title;

            const newDate = newRow.insertCell(2);
            newDate.textContent = dueDate;

            const newProject = newRow.insertCell(3);
            newProject.textContent = projectName;

            const newEdit = newRow.insertCell(4);
            const EditBtn = document.createElement('button');
            EditBtn.dataset.num = id; // may not even be relevant
            EditBtn.classList.add('edit');
            EditBtn.textContent = "Edit";
            // Edit Event Listener
            EditBtn.addEventListener('click', () => {
                form.showPrefill(title, projectId, dueDate, 1);
                DataHandler.todo.remove(projectId, id);
                refreshAll(DataHandler.todo.forDOM(-2));
                project.refreshAll(DataHandler.project.forDOM());
            })
            newEdit.append(EditBtn);


            const newRmv = newRow.insertCell(5);
            const RmvBtn = document.createElement('button');
            RmvBtn.dataset.num = id; // may not even be relevant
            RmvBtn.dataset.projectId = projectId;
            RmvBtn.classList.add('rmv');
            RmvBtn.textContent = "Remove";
            // Remove Event Listener
            // This should NOT directly call the DOM Manip. Otherwise
            // the underlying To-do object will not be deleted!
            RmvBtn.addEventListener('click', () => {
                DataHandler.todo.remove(projectId, id);

                refreshAll(DataHandler.todo.forDOM(-2));
                project.refreshAll(DataHandler.project.forDOM());
            });

            newRmv.append(RmvBtn);

        };

        return {refreshAll};

    })();

    // PROJECT MANIPS

    const updateViewAll = tasks => {
        const viewAllNumberDiv = document.querySelector('#view-all .project-no');
        viewAllNumberDiv.textContent = tasks;
    }

    const project = (() => {
        const projectsListElement = document.querySelector('.projects-list');

        const refreshAll = projectArray => {
            clearAll();
            projectArray.forEach(projectObject => {
                // destructure the object and IIFE it into add
                (({id, name, tasks}) => 
                add(id, name, tasks))(projectObject);
            });
        }
        const clearAll = () => {
            form.clearProjects();
            const projectListItems = document.querySelectorAll('li.project');
            projectListItems.forEach(proj => proj.remove());
            
        }
    
        const add = (id, name, tasks) => {
            const newItem = document.createElement('li');
            const newBtn = document.createElement('button');
            const newDiv = document.createElement('div');
    
            // ID generation should be handled in logic. 
            newItem.id = `${id}`;
            form.addProject(id, name);

            newBtn.addEventListener('click', () => todo.refreshAll(DataHandler.todo.forDOM(id)));
    
            newDiv.classList.add('project-no');
            newBtn.classList.add('project');
            newItem.classList.add('project');
    
            newDiv.textContent = tasks;
            newBtn.textContent = name;
            
            newBtn.append(newDiv);
            newItem.append(newBtn);
            
            projectsListElement.append(newItem);
        };

        // I am not sure if these will be relevant later.

        // const remove = id => {
        //     const itemToRemove = document.querySelector(`#${id}`);
        //     itemToRemove.remove();
        //     form.removeProject(id);
        // }
        // const update = (id, tasks) => {
        //     const numberDiv = document.querySelector(`#${id} .project-no`);
        //     numberDiv.textContent = tasks;
            
        // }
    
        // // I am not sure if this is useful or correct.
        // const _updateName = (id, name) => {
        //     const nameBtn = document.querySelector(`#${id} button`);
        //     const numberDiv = document.querySelector(`#${id} .project-no`);
        //     nameBtn.textContent = name;
        //     nameBtn.append(numberDiv);
        //     // formManips.addProject(id, name);
        // }
    
        return {refreshAll}
    })();
    
    // FORM MANIPS
    
    const form = (() => {
        const formSection = document.querySelector('.form-section');
        const projectOptionsList = document.querySelector('#td-project-input');

        const show = () => {
            switchFormsTo('todo');
            formSection.classList.toggle('form-open');
        };
        const showPrefill = (title, projectId, dueDate, priority) => {
            switchFormsTo('todo');
            formSection.classList.toggle('form-open');
            document.querySelector('#td-project-input').value = projectId;
            document.querySelector('#td-title-input').value = title;
            document.querySelector('#td-due-date-input').value = dueDate;
            document.querySelector('#td-priority-input').value = priority;
        }

        const switchFormsTo = name => {
            const todoForm = document.querySelector('.add-todo');
            const projectForm = document.querySelector('.add-project');
            // this implementation makes it easy to add, eg, a notes tab
            switch(name) {
                case 'todo':
                    todoForm.classList.add('current');
                    projectForm.classList.remove('current');
                    break;
                case 'project':
                    projectForm.classList.add('current');
                    todoForm.classList.remove('current');
                    break;
                default:
                    break; 
            }
        }
        
        const addProject = (id, name) => {
            const newOption = document.createElement('option');
            newOption.value = `${id}`;
            newOption.textContent = name;
            projectOptionsList.append(newOption);
        }
        // Not sure if will be relevant Later
        const clearProjects = () => {
            const optionsToRemove = document.querySelectorAll(`option`);
            optionsToRemove.forEach(proj => proj.remove())
        }
        return {addProject, clearProjects, show, showPrefill, switchFormsTo};
    })();




    return {project, todo, updateViewAll, form};

})();










export {DOMHandler};