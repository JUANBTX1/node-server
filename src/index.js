// Función para agregar una tarea
function addTask(description) {
  return new Promise((resolve, reject) => {
    tasks.push({ description, completed: false });
    resolve('Tarea agregada.');
  });
}

// Función para eliminar una tarea
function deleteTask(index) {
  return new Promise((resolve, reject) => {
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      resolve('Tarea eliminada.');
    } else {
      reject('Índice no válido.');
    }
  });
}

// Función para marcar una tarea como completada
function completeTask(index) {
  return new Promise((resolve, reject) => {
    if (index >= 0 && index < tasks.length) {
      tasks[index].completed = true;
      resolve('Tarea completada.');
    } else {
      reject('Índice no válido.');
    }
  });
}
