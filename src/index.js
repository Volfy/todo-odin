import './style.css';
import { projectListManips} from './manips';


// IMPORTS TESTING

console.log(projectListManips)
projectListManips.add(1, 'Jogn1', 1000);
projectListManips.add(2, 'Jogn2', 1000);
projectListManips.add(3, 'Jogn3', 1000);
projectListManips.add(4, 'Jogn4', 1000);
projectListManips.add(5, 'Jogn5', 1000);
projectListManips.add(6, 'Jogn6', 1000);

projectListManips.add(7, 'nonumber');
projectListManips.add(8, 'blablabla');

projectListManips.remove(5);
projectListManips.remove(1);

projectListManips.update(6, 22);
projectListManips.update(3, 2000);

projectListManips.updateViewAll(22);








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