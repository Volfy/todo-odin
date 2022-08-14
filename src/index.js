import './style.css';
import {DOMHandler} from './manips';
import {DataHandler} from './data';

// List To-dos and Projects in level of priority?

// IMPORTS TESTING


// const todoMaker = ((id, title, dueDate, projectName, priority) => {return {id, title, dueDate, projectName, priority}});
// const projectMaker = ((id, name, tasks) => {return{id,name,tasks}});

// let projectList = [
//     projectMaker(1, 'jogn1', 1000),
//     projectMaker(2, 'jogn2', 300),
//     projectMaker(3, 'jogn3', 20),
//     projectMaker(4, 'jogn4', 0),
//     projectMaker(5, 'jogn5', 1),
//     projectMaker(6, 'jogn6', 19),
// ]

// let todoList = [ 
//     todoMaker(1,'hello','0/09/2020','godoe', 5),
//     todoMaker(2,'hello2','0/09/2020','godoe', 5),
//     todoMaker(3,'hello3','0/09/2020','godoe', 5),
//     todoMaker(4,'hello4','0/09/233020','go4doe', 2),
//     todoMaker(5,'hello5','0/09/2020','godoe', 1),
// ];

// projectList[3].name = 'HAHA I CAN CHANGE';

// DOMHandler.init();
// DOMHandler.updateViewAll(22);
// DOMHandler.project.refreshAll(projectList);
// DOMHandler.todo.refreshAll(todoList);



DataHandler.project.add('hi',1);
DataHandler.project.add('h2i',1);
DataHandler.project.add('hi3',3);
DataHandler.project.add('hi4',2);

DataHandler.todo.add(1, 'lol','date',1);
DataHandler.todo.add(1, 'lo2l','date',1);
DataHandler.todo.add(3, 'lo3l','date',1);
DataHandler.todo.add(1, 'lo2l','date',2);
DataHandler.todo.add(3, 'lo3l','date',2);
DataHandler.todo.add(2, 'lo3l','date',4);

DataHandler.project.edit(1,'noo',1);
DataHandler.todo.edit(1, 0,'chjage','due',1);