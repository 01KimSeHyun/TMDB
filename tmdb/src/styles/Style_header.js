import styled, { css, keyframes } from "styled-components";

const HeaderWrap = styled.div`
    background-color : #032541;
    color : white;
    height : 60px;
    margin : 0;
    padding : 0px 50px 0px 50px;

    display : flex;
    flex-direction: row;
    justify-content: space-between;
    
`

const HeaderUl = styled.ul`
    list-style: none;
    display : flex;
    flex-direction: row;
    flex-basis : auto;
    align-items: center;
    justify-content: space-between;
`

const HeaderLi = styled.li`
    padding : 0px 15px 0px 15px;
    font-size : 15px;
    &:hover{  
        font-size : 17px; 
    }
`
const boxHeightUp = keyframes`
  from {
    height: 0px;
  }
  to {
    height: 300px;
    visibility : visible;
  }
  }
`;
const MenuBar = styled.div`
    background-color : #032541;
    visibility : hidden;
    ${(props) => props.active === true ? css`animation: ${boxHeightUp} 0.6s forwards;` : null}
`;


export {HeaderWrap, HeaderUl, HeaderLi, MenuBar}