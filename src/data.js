// NB: priority = 0 or -1 for a Completed Task
// Generate DOM-friendly Display List
// ->calculate how many tasks per project
// ->get project name for each task
// ->organize list by priorities
// ->organize list by choice/project
// (DONE)Add,remove todos & projects

const DataHandler = (() => {
    let projectList = [];
    const project = (()=>{
        const add = (id, name, priority) => {
            let todoList = [];
            projectList.push({id,name,priority,todoList})
        }
        const remove = id => {
            const projectIndex = projectList.indexOf(projectList.filter(proj => proj.id === id)[0]);
            projectList.splice(projectIndex,1);
        }
        // edit
        return {add, remove};
    })();
    const todo = (()=>{
        const add = (projectId, id, title, dueDate, priority) => {
            projectList[projectId].todoList.push({id, title, dueDate, priority});
        }
        const remove = id => {
            const todoList = projectList[projectId].todoList;
            const todoIndex = todoList.indexOf(todoList.filter(td => td.id === id)[0]);
            todoList.splice(todoIndex,1);
        }
        return {add, remove};
    })();

    return {project, projectList, todo};
})();

DataHandler.project.add(1,'hi',1);
DataHandler.project.add(2,'h2i',1);
DataHandler.project.add(3,'hi3',1);
DataHandler.project.add(4,'hi4',1);

DataHandler.todo.add(0, 1,'lol','date',1);
DataHandler.todo.add(1, 2,'lo2l','date',1);
DataHandler.todo.add(3, 3,'lo3l','date',1);

DataHandler.project.remove(2);
DataHandler.todo.remove(3);

// I want to be able to call DataHandler.projectList[x].remove()
// or DataHandler.projectList[x].todoList[y].remove();

const lol = () => {console.log(DataHandler.todoList);console.log(DataHandler.projectList)};

export {lol};