import './style.css';
import { projectListElementManips} from './manips';


// IMPORTS TESTING

console.log(projectListElementManips)
projectListElementManips.add(1, 'Jogn1', 1000);
projectListElementManips.add(2, 'Jogn2', 1000);
projectListElementManips.add(3, 'Jogn3', 1000);
projectListElementManips.add(4, 'Jogn4', 1000);
projectListElementManips.add(5, 'Jogn5', 1000);
projectListElementManips.add(6, 'Jogn6', 1000);

projectListElementManips.add(7, 'nonumber');
projectListElementManips.add(8, 'blablabla');

projectListElementManips.remove(5);
projectListElementManips.remove(1);

projectListElementManips.update(6, 22);
projectListElementManips.update(3, 2000);










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