import './style.css';
import { DOMHandler} from './manips';


// IMPORTS TESTING

DOMHandler.init();

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
