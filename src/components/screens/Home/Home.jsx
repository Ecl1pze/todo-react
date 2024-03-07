import { useState } from 'react';
import TodoItem from './item/TodoItem';
import CreateTodoField from './Create-todo-field/CreateTodoField';

const data = [];

function Home() {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id == id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t.id != id));
  };
  return (
    <div className="text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">Todo app</h1>
      <div className="flex flex-col items-center">
        <CreateTodoField setTodos={setTodos} />
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            changeTodo={changeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
