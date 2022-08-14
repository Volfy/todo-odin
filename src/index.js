import './style.css';
import {DOMHandler} from './manips';
import {DataHandler} from './data';
import { initializer } from './interface';

// List To-dos and Projects in level of priority?

// IMPORTS TESTING


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
// DataHandler.todo.edit(1, 0,'chjage','due',1);
initializer.init();
