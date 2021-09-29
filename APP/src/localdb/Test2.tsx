const addTodo = async () => {
  if (!newTodo.trim()) return;
  try {
    const newTodos = [
      ...todos,
      {
        id:
          todos.reduce((acc, cur) => {
            if (cur.id > acc.id) return cur;
            return acc;
          }).id + 1,
        value: newTodo,
      },
    ];
    setTodos(newTodos);
    const db = await getDBConnection();
    await saveTodoItems(db, newTodos);
    setNewTodo('');
  } catch (error) {
    console.error(error);
  }
};
