import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0F8B8D;
  color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 3em;
    font-weight: bold;
    padding: 5px 0px 5px 0px;
    text-shadow: 2px 2px 4px black;
    margin: 20px;
  }
  h2 {
    font-size: 2em;
    font-weight: bold;
    padding: 5px 0px 5px 0px;
    text-shadow: 2px 2px 4px black;
    margin: 20px;
  }
  label {
    font-size: 1.5em;
    font-weight: bold;
    padding: 5px 0px 5px 0px;
    text-shadow: 2px 2px 4px black;
    margin-top: 20px;
  }
  div {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  input {
    border-radius: 30px;
    border: none;
    padding: 15px;
    width: 250px;
    margin: 20px;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    color: black;
  }
  button {
    border-radius: 30px;
    border: none;
    padding: 15px;
    width: 250px;
    margin: 20px;
    font-size: 1.5em;
    font-weight: bold;
    background-color: #165959;
    cursor: pointer;
  }
  button:disabled {
    background-color: #B2B2B2;
    cursor: not-allowed;
  }
`;
