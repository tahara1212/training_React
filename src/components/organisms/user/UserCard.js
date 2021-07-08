/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
       const { user } = props;
       return (
              <Card>
                     <UserIconWithName image={user.image} user_name={user.user_name}/>
                     <SDl>
                            <dt>メール</dt>
                            <dd>{user.email}</dd>
                            <dt>TEL</dt>
                            <dd>{user.phone}</dd>
                            <dt>会社名</dt>
                            <dd>{user.company.company_name}</dd>
                            <dt>WEB</dt>
                            <dd>{user.website}</dd>
                     </SDl>
              </Card>
       )
}

const SDl = styled.dl`
       text-align: left;
       margin-bottom: 0px;
       dt {
              float: left;
       }
       dd {
              padding-left: 32px;
              padding-bottom: 8px;
              overflow-wrap: break-word;
       }
`;