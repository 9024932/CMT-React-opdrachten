import Todo from "./Todo";

const TodoList = ({ todos = [] }) => {
  if (!todos.length) {
    return ;
  }

  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id}>{t.text}</li>
      ))}
    </ul>
  );
};
export default TodoList;
