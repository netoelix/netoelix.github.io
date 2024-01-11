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
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
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
      width: 60%;
      border-radius: 30px;
      margin: 10px;
    }
  }
`;
