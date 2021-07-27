import { Link } from "react-router-dom"
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";


export const Footer = () => {
       return (
              <SFooter>
                     &copy; 2021 test Inc.
             </SFooter> 
       )
}

const SFooter = styled.footer`
       background-color: #11999e;
       color: #fff;
       text-align: center;
       padding: 8px 0;
       position: fixed;
       bottom: 0;
       width: 100%;
`