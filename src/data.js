// NB: priority = 0 or -1 for a Completed Task
// (DONE)Generate DOM-friendly Display List
// (DONE)calculate how many tasks per project
// (DONE)get project name for each task
// (DONE)organize list by priorities
// (DONE)organize list by choice/project
// (DONE)Add,remove todos & projects
// PRIORITY 21 === DONE
// make it so that ids are generated automatically.

const DataHandler = (() => {
    let projectList = [];

    const sortList = (list) => {
        list.sort((a,b)=>a.priority - b.priority);
    }



    const project = (()=>{
        const add = (id, name, priority) => {
            let todoList = [];
            projectList.push({id,name,priority,todoList})
            sortList(projectList);
        }
        const remove = id => {
            const projectIndex = projectList.indexOf(projectList.filter(proj => proj.id === id)[0]);
            projectList.splice(projectIndex,1);
        }
        // edit
        const forDOM = () => {
            let list = [];
            // id, title, number
            projectList.forEach(proj => {
                list.push({id: proj.id, name: proj.name, tasks: proj.todoList.length});
            });
            return list;
        }
        return {add, forDOM, remove};
    })();
    const todo = (()=>{
        const getTodoList = (projectId) => {
            const projectIndex = projectList.indexOf(projectList.filter(proj => proj.id === projectId)[0]);
            return projectList[projectIndex].todoList;
        }
        const add = (projectId, id, title, dueDate, priority) => {
            let currentTodoList = getTodoList(projectId);
            currentTodoList.push({id, title, dueDate, priority});
            sortList(currentTodoList);
        }
        const remove = (projectId,id) => {
            const currentTodoList = getTodoList(projectId);
            const todoIndex = currentTodoList.indexOf(currentTodoList.filter(td => td.id === id)[0]);
            currentTodoList.splice(todoIndex,1);
        }
        const forDOM = (projectId) => {
            const currentTodoList = getTodoList(projectId);
            let list = [];
            // id, title, dueDate, projectName, done?
            currentTodoList.forEach(task => {
                list.push({
                    id: task.id, title: task.title, dueDate: task.dueDate,
                    projectName: projectList.filter(proj => proj.id === projectId)[0].name,
                    done: task.priority === 21 ? true : false,
                });
            });
            return list;
        }
        const allForDOM = () => {
            let list = [];
            projectList.forEach(proj => list.push(forDOM(proj.id)));
            return list.flat(1);
        }
        return {add, remove, forDOM, allForDOM};
    })();

    return {project, todo};
})();

DataHandler.project.add(1,'hi',1);
DataHandler.project.add(2,'h2i',1);
DataHandler.project.add(3,'hi3',3);
DataHandler.project.add(4,'hi4',2);

DataHandler.todo.add(1, 1,'lol','date',1);
DataHandler.todo.add(1, 2,'lo2l','date',1);
DataHandler.todo.add(3, 3,'lo3l','date',1);
DataHandler.todo.add(1, 4,'lo2l','date',2);
DataHandler.todo.add(3, 5,'lo3l','date',2);
DataHandler.todo.add(2, 6,'lo3l','date',4);

// I want to be able to call DataHandler.projectList[x].remove()
// or DataHandler.projectList[x].todoList[y].remove();

const lol = () => {
    console.log(DataHandler.todo.allForDOM());
    console.log(DataHandler.project.forDOM());
    console.log(DataHandler.todo.forDOM(1));};

export {lol};