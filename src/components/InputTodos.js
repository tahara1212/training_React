
export const InputTodos = (props) => {
    const {todoText, onChangeTodoText, addTodo} = props;

    return (
        <>
            <div className="p-add">
                <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
                <button onClick={addTodo}>追加</button>
            </div>
        </>
    )
}