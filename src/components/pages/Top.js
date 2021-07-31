import styled from "@emotion/styled";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../providers/UserProvider";
import { useContext } from "react";
import { useHistory } from "react-router";


export const Top = () => {
       const history = useHistory();
       const { setUserInfo } = useContext(UserContext);

       const onClickAdmin = () => {
              setUserInfo({ isAdmin: true });
              history.push("/users")
       }

       const onClickGeneral = () => {
              setUserInfo({ isAdmin: false });
              history.push("/users")
       }
       return (

              <SContainer>
                     <h2>TOP pages</h2>
                     <SecondaryButton onClick={onClickAdmin}>管理者ユーザ</SecondaryButton>
                     <br />
                     <br />
                     <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
              </SContainer>
       )
}

const SContainer = styled.div`
       text-align: center;
`