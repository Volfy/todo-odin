import './style.css';
import { DOMHandler} from './manips';


// IMPORTS TESTING

DOMHandler.project.add(1, 'Jogn1', 1000);
DOMHandler.project.add(2, 'Jogn2', 1000);
DOMHandler.project.add(3, 'Jogn3', 1000);
DOMHandler.project.add(4, 'Jogn4', 1000);
DOMHandler.project.add(5, 'Jogn5', 1000);
DOMHandler.project.add(6, 'Jogn6', 1000);

DOMHandler.project.add(7, 'nonumber');
DOMHandler.project.add(8, 'blablabla');

DOMHandler.project.remove(5);
DOMHandler.project.remove(1);

DOMHandler.project.update(6, 22);
DOMHandler.project.update(3, 2000);

DOMHandler.updateViewAll(22);

DOMHandler.todo.add(1,'Hello','09/09/2020','Jogn1');
DOMHandler.todo.add(2,'Hello NEw!!','09/09/2020','Jogn3');
DOMHandler.todo.add(3,'Will not appear hehehe','09/09/2020','Jogn3');
DOMHandler.todo.add(4,'Blalallala','09/09/2220','Jog333n1');

DOMHandler.todo.remove(3);






const add_new = document.querySelector('.add-new-button');
const form = document.querySelector('.form-section');

const formtodo = document.querySelector('.add-todo');
const todobtn = document.querySelector('#to-do-tab');
const formproject = document.querySelector('.add-project');
const projectbtn = document.querySelector('#project-tab');
const closebtn = document.querySelector('#close-tab');


const checks = document.querySelectorAll('tr input');
// CHANGE TODO TO DONE AND DISPLAY IT DIFFERENTLY
checks.forEach(chk => {
    chk.addEventListener('change', 
    () => document.querySelector(`tr[data-num='${chk.dataset.num}']`)
                  .classList.toggle('done'));
});

// OPEN THE ADD FORM
add_new.addEventListener("click", () => {
    form.classList.toggle('form-open')
    formtodo.classList.add('current');
});

// TOGGLE BETWEEN TODO AND PROJECT FORMS
todobtn.addEventListener("click", () => {
    formproject.classList.remove("current");
    
    formtodo.classList.add("current");
    
});
projectbtn.addEventListener("click", () => {
    formtodo.classList.remove("current");
    formproject.classList.add("current");
    
});
// CLOSE THE ADD FORM WITHOUT SUBMITTING
closebtn.addEventListener("click", () => {
    formproject.classList.remove('current');
    formtodo.classList.remove('current');
    form.classList.remove('form-open');
    
    
});