import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Responsive from './Responsive';
import Navigation from "./Navigation";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
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

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 컨텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
  height: 4rem;
`;

/* 추가된 부분 */
const LineWrapper = styled.div`
    &:hover {
        cursor: pointer
    }
    @media screen and (min-width: 500px) {
        display: none;
    }

`

const LineBox = styled.div`
     @media screen and (max-width: 500px) {
        position: fixed;
        z-index: 999999999;
        height: 4rem;
        align-items: center;
        display: flex;
        padding-left: 10px;
    }
`;

const Line = styled.div`
    background: #282c34;
    margin-top: 6px;
    margin-bottom: 6px;
    width: 40px;
    height: 5px;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 50%);
    position:relative;
`;

const LoginBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 7rem;
`;

const Header = () => {

    const [toggle, setToggle] = useState({
        line: false,
        init: true,
        naviOpen: false
    });
    const onToggle = () => {
        setToggle({
            line: !toggle.line,
            init: false,
            naviOpen: !toggle.naviOpen
        });
    }

    return (
        <>
            <LineBox>
                <LineWrapper id="line-wrapper" onClick={() => onToggle()}>
                    <Line className={(toggle.init ? 'init ' : '') + (toggle.line ? 'line-top' : 'top-reverse')}></Line>
                    <Line className={(toggle.init ? 'init ' : '') + (toggle.line ? 'line-mid' : 'mid-reverse')}></Line>
                    <Line className={(toggle.init ? 'init ' : '') + (toggle.line ? 'line-bot' : 'bot-reverse')}></Line>
                </LineWrapper>
            </LineBox>
            <HeaderBlock>
                <Wrapper>
                    <LineWrapper style={{visibility: 'hidden'}}>
                        <Line />
                    </LineWrapper>
                    <Link to="/" className="logo">HOME</Link>
                    {/*<Button cyan to={"/write"}>새 글 작성하기</Button>*/}
                    <LoginBox>
                        <Link style={{fontSize: '0.9rem', fontWeight: 500}} to="/">로그인</Link>
                        <Link style={{fontSize: '0.9rem', fontWeight: 500}} to="/">회원가입</Link>
                    </LoginBox>
                </Wrapper>
            </HeaderBlock>
            <Spacer/>

            <Navigation naviOpen={toggle.naviOpen} />
            <div style={{background: 'rgba(0, 0, 0, 0.5)', display: (toggle.naviOpen? 'block' : 'none')}}
                 onClick={() => onToggle()}
            />
        </>
    );
};

export default Header;
