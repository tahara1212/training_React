import { Link } from "react-router-dom"

export const Page1DetailB = () => {
    return (
        <div>
            <h1>Page1DetailB</h1>
            <Link to="/page1/detailA">DetailA</Link>
            <br />
            <Link to="/page1">Back</Link>
        </div>
    )
}