

export const InCompleteTodo = (props) => {

    const { inCompleteTodos, onClickComplete, onClickDelete} = props;


    return (
        <>
        <div className="p-box">
            <p>未完了</p>
            <ul>
            {inCompleteTodos.map((todo, index) => {
                return (
                <div key={todo} className="p-box__todo">
                <li>{todo}</li>
                <div>
                    <button onClick={() => onClickComplete(index)}>完了</button>
                    <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
                </div>
                )
            })}
            </ul>
        </div>
        </>
    )
}