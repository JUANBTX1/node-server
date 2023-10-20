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

async function main() {
  // Código existente

  // Ejemplo de uso con async/await
  try {
    await addTask('Completar ejercicio');
    await addTask('Preparar presentación');
    showTasks();

    await completeTask(0);
    showTasks();

    await deleteTask(1);
    showTasks();
  } catch (error) {
    console.error('Error:', error);
  } finally {
    rl.close(); // Cerrar la interfaz de lectura
  }
}

main();

addTask('Completar ejercicio')
  .then(() => addTask('Preparar presentación'))
  .then(() => {
    showTasks();
    return completeTask(0);
  })
  .then(() => {
    showTasks();
    return deleteTask(1);
  })
  .then(() => {
    showTasks();
    rl.close(); // Cerrar la interfaz de lectura
  })
  .catch((error) => console.error('Error:', error));
