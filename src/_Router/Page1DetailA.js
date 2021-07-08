import { Link, useLocation, } from "react-router-dom";
import { useHistory } from "react-router";

export const Page1DetailA = () => {
    const { state } = useLocation();

    const history = useHistory();
    const onClickBack = () => history.goBack();

    return (
        <div>
            <h1>Page1DetailA</h1>
            <Link to="/page1/detailB">DetailB</Link>
            <br />
            <button onClick={onClickBack}>Back</button>
            <br />
            <br />
            {state.map((num) => (
                <p key={num}>{num}</p>
            ))}
                
        </div>
    )
}