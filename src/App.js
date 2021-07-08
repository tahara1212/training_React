import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

const user = {
    user_name: "じゃけ",
    image: "https://source.unsplash.com/zBvVuRJ71vU",
    email: "s-tahara@seraku.co.jp",
    phone: "03-4545-5454",
    company: {
        company_name: "株式会社セラク"
    },
    website: "examble.com"
}


export const App = () => {
    return (
        <div>
            <PrimaryButton>テストボタン</PrimaryButton>
            <SecondaryButton>検索</SecondaryButton>
            <SearchInput />
            <UserCard user={user} />
        </div>
    )
}