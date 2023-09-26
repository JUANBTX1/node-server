const readline = require('readline');

// Crear una interfaz para leer desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Crear una lista de tareas
const tasks = [];

// Función para mostrar la lista de tareas
function showTasks() {
  console.log('Lista de tareas:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. [${task.completed ? 'Completada' : 'Pendiente'}] - ${task.description}`);
  });
}

// Función para agregar una tarea
function addTask(description) {
  tasks.push({ description, completed: false });
  console.log('Tarea agregada.');
}

// Función para eliminar una tarea
function deleteTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    console.log('Tarea eliminada.');
  } else {
    console.log('Índice no válido.');
  }
}

// Función para marcar una tarea como completada
function completeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log('Tarea completada.');
  } else {
    console.log('Índice no válido.');
  }
}

