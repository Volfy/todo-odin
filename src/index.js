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

const todoMaker = ((id, title, dueDate, projectName, priority) => {return {id, title, dueDate, projectName, priority}});

let todoList = [ 
    todoMaker(1,'hello','0/09/2020','godoe', 5),
    todoMaker(2,'hello2','0/09/2020','godoe', 5),
    todoMaker(3,'hello3','0/09/2020','godoe', 5),
    todoMaker(4,'hello4','0/09/233020','go4doe', 2),
    todoMaker(5,'hello5','0/09/2020','godoe', 1),
];

DOMHandler.todo.refreshAll(todoList);





const add_new = document.querySelector('.add-new-button');
const form = document.querySelector('.form-section');

const formtodo = document.querySelector('.add-todo');
const todobtn = document.querySelector('#to-do-tab');
const formproject = document.querySelector('.add-project');
const projectbtn = document.querySelector('#project-tab');
const closebtn = document.querySelector('#close-tab');




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