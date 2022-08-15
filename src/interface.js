// Add Todo Form - creates new todo in data & adds to DOM.
// Add Project Form - creates new project in data & adds to DOM.

import { DataHandler } from "./data";
import { DOMHandler } from "./manips";

const initializer = (() => {

    const init = () => {
        DOMHandler.project.refreshAll(DataHandler.project.forDOM());
        DOMHandler.todo.refreshAll(DataHandler.todo.forDOM(-2));

        const ProjectForm = document.querySelector('.add-project-form');
        const TodoForm = document.querySelector('.add-todo-form');
        const viewAll = document.querySelector('#view-all button');
        viewAll.addEventListener('click', () => DOMHandler.todo.refreshAll(DataHandler.todo.forDOM(-2)));

        const addNewBtn = document.querySelector('.add-new-button');
        const todoBtn = document.querySelector('#to-do-tab');
        const projectBtn = document.querySelector('#project-tab');
        const closeBtn = document.querySelector('#close-tab');

        addNewBtn.addEventListener('click', DOMHandler.form.show);
        closeBtn.addEventListener('click', DOMHandler.form.show);
        todoBtn.addEventListener('click', () => {
            DOMHandler.form.switchFormsTo('todo');
        });
        projectBtn.addEventListener("click", () => {
            DOMHandler.form.switchFormsTo('project');
        });

        const warning = document.querySelector('.warning-no-projects');

        // PROJECT FORM EVENTS
        ProjectForm.addEventListener('submit', () => {
            event.preventDefault();
            
            // Add project to data
            DataHandler.project.add(
                document.querySelector('#pr-title-input').value,
                document.querySelector('#pr-priority-input').value,
            );
            // i forgot to implement descriptions....
            // document.querySelector('#pr-description-input');
    
            // refresh list
            DOMHandler.todo.refreshAll(DataHandler.todo.forDOM(-2));
            DOMHandler.project.refreshAll(DataHandler.project.forDOM());
            DOMHandler.form.show();
            warning.style.display = "none";
        });

        // TODO FORM EVENTS
        TodoForm.addEventListener('submit', () => {
            event.preventDefault();
            

            if(DataHandler.project.getCount() != 0) {
                
                // Add project to data
                DataHandler.todo.add(
                    document.querySelector('#td-project-input').value,
                    document.querySelector('#td-title-input').value,
                    document.querySelector('#td-due-date-input').value,
                    document.querySelector('#td-priority-input').value,
                );
                // i forgot to implement descriptions....
                // document.querySelector('#pr-description-input');
        
                // refresh list
                DOMHandler.todo.refreshAll(DataHandler.todo.forDOM(-2));
                DOMHandler.project.refreshAll(DataHandler.project.forDOM());
                DOMHandler.form.show();
            } else {
                
                warning.style.display = "block";
            }
            
        });

    }
    return {init};

})();

export {initializer};
