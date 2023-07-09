export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>
                    <label htmlFor="checkbox">
                        <input id="checkbox" type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.cheked)} />
                        {title}
                    </label>
                    <button onClick={() => deleteTodo(id)} className="btn btn-danger">Delete</button>
                </li>
    )
}