import React from 'react';
import styled from 'styled-components';
import Responsive from "./Responsive";
import {Link} from "react-router-dom";

const MenuBlock = styled.div`
  // position: fixed;
  width: 100%;
  background: white;
  //box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-around; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const Navigation = () => {
    return (
        <MenuBlock>
            <Wrapper>
                <Link to="/" className="logo">메뉴1</Link>
                <Link to="/" className="logo">메뉴2</Link>
                <Link to="/" className="logo">메뉴3</Link>
                <Link to="/" className="logo">메뉴4</Link>
            </Wrapper>
        </MenuBlock>
    )
};

export default Navigation;