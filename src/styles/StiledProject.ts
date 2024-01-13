import styled from 'styled-components';

export const ProjectsContainer = styled.section`
  height: 100%;
  background-color: #165959;
  color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  padding-top: 150px;
  margin-bottom: 10px;
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  article {
    width: 40%;
    height: 90%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    background-color: #14204F;
    border: 2px solid #14204F;
    border-radius: 30px;
    padding: 25px;
    margin: 2%;
    overflow: auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
    h3 {
    font-size: 1.7em;
    font-weight: bold;
    margin: 0px 0px 10px;
    }
    a {
      font-size: 1.3em;
      text-decoration: none;
      color: #fff;
    }
    img {
      width: 300px;
      height: 300px;
      border-radius: 20px;
      transition: all 0.2s ease-in-out;
      margin-top: 5px;
    }
    img:hover {
      width: 310px;
      height: 310px;
      transition: all 0.2s ease-in-out;
    }
  }
  @media screen and (max-width: 1000px) {
    article {
      width: 90%;
      height: 90%;
      margin: 5%;
      margin: 50px 0px 20px;
    }
}

`;
