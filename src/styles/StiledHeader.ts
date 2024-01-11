import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 130px;
  background-color: #143642;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  position: fixed;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  padding-top: 15px;
`;

export const HeaderMenu = styled.div`
  background-color: #143642;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  nav {
    display: flex;
  }
  a {
    display: flex;
    text-decoration: none;
    background-color: #165959;
    border: 5px solid #165959;
    border-radius: 100px;
    padding: 5px;
    margin: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }
  svg {
    font-size: 30px;
  }
`;
