import { Link } from "react-router-dom"

export const Page1DetailB = () => {
    const arr = [...Array(5).keys("a")];
    return (
        <div>
            <h1>Page1DetailB</h1>
            <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
            <br />
            <Link to="/page1">Back</Link>
        </div>
    )
}