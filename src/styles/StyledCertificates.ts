import styled from 'styled-components';

export const CertificatesContainer = styled.section`
  height: 100%;
  background-color: #0F8B8D;
  color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  padding-top: 150px;
  h2 {
    font-size: 3em;
    font-weight: bold;
  }
  article {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    background-color: #165959;
    border-radius: 10px;
    margin: 20px;
    width: 98%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
    h3 {
    font-size: 2em;
    font-weight: bold;
    margin: 20px;
    }
    div {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: space-around;
      align-items: center;
    }
    img {
      width: 70%;
      border-radius: 30px;
      margin: 20px 0px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
    }
  }
`;
