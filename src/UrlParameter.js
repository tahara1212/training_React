import { useParams, useLocation } from "react-router";

export const UrlParameter = () => {

    const { id } = useParams();
    const { search } = useLocation();
    // クエリパラメータを編集可能なメソッド
    const query = new URLSearchParams(search);
    console.log(query);
    return (
        <div>
            <h1>UrlParameter</h1>
            <p>パラメータ送信「{id}」</p>
            <p>クエリパラメータ受信「{query.get("name")}」</p>
        </div>
    )
}