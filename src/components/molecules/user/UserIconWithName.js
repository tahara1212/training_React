/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";

export const UserIconWithName = (props) => {
       const { image, user_name } = props;
       return (
              <SContainer>
                     <SImage height={160} width={160} src={image} alt={user_name} />
                     <SName>{user_name}</SName>
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