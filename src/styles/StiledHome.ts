import styled from 'styled-components';

export const HomeContainer = styled.main`
  width: 100%;
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
    flex-wrap: nowrap;
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
    margin: 20px;
    text-decoration: none;
    font-size: 1em;
    font-weight: bold
    }
    svg {
      font-size: 50px;
      margin: 20px;
    }
`;
