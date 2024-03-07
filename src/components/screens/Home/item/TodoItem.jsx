import Check from './Check';
import { LuTrash } from 'react-icons/lu';
import cn from 'classnames';

function TodoItem({ title, isCompleted, id, changeTodo, removeTodo }) {
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-96">
      <button className="flex items-center" onClick={() => changeTodo(id)}>
        <Check isCompleted={isCompleted} />
        <span
          className={cn({
            'line-through': isCompleted,
          })}
        >
          {title}
        </span>
      </button>
      <button onClick={() => removeTodo(id)}>
        <LuTrash
          className="hover:text-red-600 transition-colors duration-300 ease-in-out"
          size={22}
        />
      </button>
    </div>
  );
}

export default TodoItem;
