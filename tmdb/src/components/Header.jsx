import { useState } from 'react';
import {HeaderLi, HeaderUl, HeaderWrap, MenuBar} from '../styles/Style_header'

export const Header = (props) => {
    const [HeaderActive, SetHeaderActive] = useState(false);
    return (
        <>
        <HeaderWrap className="header_wrap">
                <HeaderUl className="header_list">
                    <HeaderLi>LOGO</HeaderLi>
                    <HeaderLi><span onMouseEnter={(e) => SetHeaderActive(true)} onMouseLeave={(e) => SetHeaderActive(false)}>영화</span></HeaderLi>
                    <HeaderLi><span onMouseEnter={(e) => SetHeaderActive(true)}>TV</span></HeaderLi>
                    <HeaderLi><span onMouseEnter={(e) => SetHeaderActive(true)}>인물</span></HeaderLi>
                </HeaderUl>
                <HeaderUl>
                    <HeaderLi>+</HeaderLi>
                    <HeaderLi>로그인</HeaderLi>
                    <HeaderLi>회원가입</HeaderLi>
                </HeaderUl>
        </HeaderWrap>
        <MenuBar active = {HeaderActive}>안녕!</MenuBar>
        </>
    );
}