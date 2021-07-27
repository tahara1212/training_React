import styled from "@emotion/styled"
import { SearchInput } from "../molecules/SearchInput"
import { UserCard } from "../organisms/user/UserCard"

const users = [...Array(10).keys()].map(((val) => {
       return {
              id: val,
              user_name: `user:${val}`,
              image: "https://source.unsplash.com/zBvVuRJ71vU",
              email: "s-tahara@seraku.co.jp",
              phone: "03-4545-5454",
              company: {
                  company_name: "株式会社セラク"
              },
              website: "examble.com"
          }
}))

export const Users = () => {
       return (

              <SContainer>
                     <h2>User pages</h2>
                     <SearchInput />
                     <SUserArea>
                            {users.map((user) => (
                                   <UserCard key={users.id} user={user} />
                            ))}
                     </SUserArea>
              </SContainer>
       )
}

const SContainer = styled.div`
       display: flex;
       flex-direction: column;
       align-items: center;
       padding: 24px;
`

const SUserArea = styled.div`
       padding-top: 40px;
       width: 100%;
       display: grid;
       grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
       grid-gap: 20px;

`