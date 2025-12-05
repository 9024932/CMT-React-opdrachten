import Todo from "./Todo";

export default function TodoList({ todos = [] }) {
  if (!todos.length) {
    return <p className="text-sm text-white/80">No to-dos yet.</p>;
  }

  return (
    <ul className="w-full">
      {todos.map((t) => (
        <li key={t.id} className="w-full max-w-md flex items-center bg-white rounded-sm shadow">
          <span className="flex-1 px-4 py-3 text-gray-800 font-medium">{t.text}</span>
          <div className="flex">
            <button className="w-10 h-10 flex items-center justify-center bg-green-400 hover:bg-green-300 text-white" title="Mark done">
              ✓
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-blue-400 hover:bg-blue-300 text-white" title="Delete">
              🗑
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
