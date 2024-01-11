import styled from 'styled-components';

export const HomeContainer = styled.main`
  height: 100vh;
  background-color: #0F8B8D;
  color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
`;
export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
    h2 {
      font-size: 2em;
      font-weight: bold
    }
    nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: 20px;
    }
    a {
    display: flex;
    flex-direction:  column-reverse;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    font-size: 1em;
    font-weight: bold;
    background-color: #165959;
    border-radius: 50px;
    margin: 20px;
    width: 90px;
    height: 50px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    }
    svg {
      font-size: 35px;
    }
`;
