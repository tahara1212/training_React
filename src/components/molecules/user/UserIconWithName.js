/** @jsxRuntime classic */
/** @jsx jsx */
import { useContext } from "react";
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = (props) => {
       const { image, user_name } = props;
       const { userInfo } = useContext(UserContext);
       const isAdmin = userInfo ? userInfo.isAdmin : false;

       // console.log(context);

       return (
              <SContainer>
                     <SImage height={160} width={160} src={image} alt={user_name} />
                     <SName>{user_name}</SName>
                     {isAdmin && <SEdit>編集</SEdit>}
              </SContainer>
       )
}

const SContainer = styled.div`
       text-align: center;
`;

const SImage = styled.img`
       border-radius: 50%;
`;

const SName = styled.p`
       font-size: 18px;
       font-weight: bold;
       margin: 0;
       color: #40514e;
`;

const SEdit = styled.span`
       text-decoration: underline;
       cursor: pointer;
`;