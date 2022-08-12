import './style.css';
import {DOMHandler} from './manips';

// List To-dos and Projects in level of priority?

// IMPORTS TESTING

const todoMaker = ((id, title, dueDate, projectName, priority) => {return {id, title, dueDate, projectName, priority}});
const projectMaker = ((id, name, tasks) => {return{id,name,tasks}});

let projectList = [
    projectMaker(1, 'jogn1', 1000),
    projectMaker(2, 'jogn2', 300),
    projectMaker(3, 'jogn3', 20),
    projectMaker(4, 'jogn4', 0),
    projectMaker(5, 'jogn5', 1),
    projectMaker(6, 'jogn6', 19),
]

let todoList = [ 
    todoMaker(1,'hello','0/09/2020','godoe', 5),
    todoMaker(2,'hello2','0/09/2020','godoe', 5),
    todoMaker(3,'hello3','0/09/2020','godoe', 5),
    todoMaker(4,'hello4','0/09/233020','go4doe', 2),
    todoMaker(5,'hello5','0/09/2020','godoe', 1),
];

projectList[3].name = 'HAHA I CAN CHANGE';

DOMHandler.init();
DOMHandler.updateViewAll(22);
DOMHandler.project.refreshAll(projectList);
DOMHandler.todo.refreshAll(todoList);
