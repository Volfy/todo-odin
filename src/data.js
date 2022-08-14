// NB: priority = 0 or -1 for a Completed Task
// PRIORITY 21 === DONE


const DataHandler = (() => {
    let projectList = [];

    let taskIdCount = 0;
    let projectIdCount = 0;

    const sortList = (list) => {
        list.sort((a,b)=>a.priority - b.priority);
    }

    const project = (()=>{
        const add = (name, priority) => {
            let todoList = [];
            projectList.push({id: projectIdCount,name,priority,todoList})
            projectIdCount++;
            sortList(projectList);
        }
        const remove = id => {
            const projectIndex = projectList.indexOf(projectList.filter(proj => proj.id === id)[0]);
            projectList.splice(projectIndex,1);
        }
        // edit
        const edit = (id, name, priority) => {
            let projectToChange = projectList.filter(proj => proj.id === id)[0]
            projectToChange.name = name;
            projectToChange.priority = priority;
            sortList(projectList);
        }
        const getIdOf = projectName => {
            return projectList.filter(proj => proj.name == projectName).id;
        }
        const forDOM = () => {
            let list = [];
            // id, title, number
            projectList.forEach(proj => {
                list.push({id: proj.id, name: proj.name, tasks: proj.todoList.length});
            });
            return list;
        }
        return {add, edit, forDOM, remove, getIdOf};
    })();
    const todo = (()=>{
        const getTodoList = (projectId) => {
            let projectIndex = projectList.indexOf(projectList.filter(proj => proj.id == parseInt(projectId))[0]);
            return projectList[projectIndex].todoList;
        }
        const add = (projectId, title, dueDate, priority) => {
            
            let currentTodoList = getTodoList(projectId);
            currentTodoList.push({id: taskIdCount, title, dueDate, priority});
            
            taskIdCount++;
            sortList(currentTodoList);
        }
        const remove = (projectId,id) => {
            let currentTodoList = getTodoList(projectId);
            const todoIndex = currentTodoList.indexOf(currentTodoList.filter(td => td.id === id)[0]);
            currentTodoList.splice(todoIndex,1);
        }
        const edit = (projectId, id, title, dueDate, priority) => {
            let currentTodoList = getTodoList(projectId);
            let taskToChange = currentTodoList.filter(task => task.id === id)[0];
            taskToChange.title = title;
            taskToChange.dueDate = dueDate;
            taskToChange.priority = priority;
            sortList(currentTodoList);
        }
        const forDOM = (projectId) => {
            // makes it easier to track state
            if(projectId===-2){
                return allForDOM();
            }
            const currentTodoList = getTodoList(projectId);
            let list = [];
            // id, title, dueDate, projectName, done?
            currentTodoList.forEach(task => {
                console.log(projectId)
                list.push({
                    id: task.id, title: task.title, dueDate: task.dueDate,
                    projectName: projectList.filter(proj => proj.id === projectId)[0].name,
                    done: task.priority == 21 ? true : false,
                    projectId: projectId,
                });
            });
            return list;
        }
        const allForDOM = () => {
            let list = [];
            projectList.forEach(proj => list.push(forDOM(proj.id)));
            console.log(list.flat(1));
            return list.flat(1);
        }
        return {add, edit, remove, forDOM};
    })();

    return {project, todo};
})();


export {DataHandler};