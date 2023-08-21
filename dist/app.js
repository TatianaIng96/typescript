"use strict";
const list = [
    { id: 1, title: 'Completar taller de TypeScript', completed: false },
    { id: 2, title: 'Estudiar programación funcional', completed: false },
    { id: 3, title: 'Preparar presentación sobre TypeScript', completed: true },
    { id: 4, title: 'Leer libro de TypeScript avanzado', completed: false },
    { id: 5, title: 'Resolver ejercicios de TypeScript', completed: false },
    { id: 6, title: 'Hacer ejercicio', completed: true },
    { id: 7, title: 'Comprar víveres', completed: false },
    { id: 8, title: 'Llamar al médico', completed: false },
    { id: 9, title: 'Limpiar la casa', completed: true },
    { id: 10, title: 'Actualizar el CV', completed: false }
];
const runApp = () => {
    const addTask = (taskList, task) => {
        return [...taskList, task];
    };
    const completeTask = (taskList, id) => {
        taskList.find((element) => element.id === id ? element.completed = true : element.completed = false);
        return taskList;
    };
    const filterTask = (taskList, filter) => {
        const newlist = taskList.filter((element) => element.completed === filter);
        return newlist;
    };
    const printTaskList = (taskList) => {
        taskList.map((element) => {
            console.log(element.title, element.completed);
        });
    };
    return {
        addTask,
        completeTask,
        filterTask,
        printTaskList
    };
};
const task1 = {
    id: 11,
    title: "hola",
    completed: false
};
const newlist = runApp().addTask(list, task1);
const completeList = runApp().completeTask(newlist, 2);
const filter = runApp().filterTask(completeList, true);
runApp().printTaskList(filter);
