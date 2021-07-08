import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export const Page1 = () => {
    const arr = [...Array(100).keys()];
    const history = useHistory();

    const toDteailA = () => history.push({ pathname: "/page1/detailA", state: arr });
    
    return (
        <div>
            <h1>Page1</h1>
            <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
            <br />
            <Link to="/page1/detailB">DetailB</Link>
            <br />
            <button onClick={toDteailA}>DteilA</button>
        </div>
    )
}