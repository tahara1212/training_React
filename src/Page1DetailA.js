import { Link } from "react-router-dom"

export const Page1DetailA = () => {
    return (
        <div>
            <h1>Page1DetailA</h1>
            <Link to="/page1/detailB">DetailB</Link>
            <br />
            <Link to="/page1">Back</Link>
        </div>
    )
}