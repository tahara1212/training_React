
export const CompleteTodo = (props) => {

    const { completeTodos, onClickBack } = props;

    return (
        <>
        <div className="p-box p-Complete">
            <p>達成</p>
            <ul>
            {completeTodos.map((todo, index) => {
            return (
                <div key={todo} className="p-box__todo">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
            )
            })}
            </ul>
        </div>
        </>
    )
}