import { useState } from 'react';

function CreateTodoField({ setTodos }) {
  const [title, setTitle] = useState('');

  const addTodo = (title) => {
    setTodos((prev) => [
      {
        title,
        isCompleted: false,
        id: new Date(),
      },
      ...prev,
    ]);
    setTitle('');
  };

  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-96">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyPress={(e) =>
          title.length != 0 && e.key === 'Enter' ? addTodo(title) : null
        }
        className="bg-transparent w-full border-none outline-none"
        placeholder="Add a task"
      />
    </div>
  );
}

export default CreateTodoField;
