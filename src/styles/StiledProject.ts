import styled from 'styled-components';

export const ProjectsContainer = styled.section`
  height: 100%;
  background-color: #165959;
  color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  padding-top: 150px;
  margin-bottom: 10px;
  h2 {
    font-size: 2em;
    font-weight: bold;
    margin: 10px;
  }
  article {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    background-color: #14204F;
    border: 10px solid #14204F;
    border-radius: 100px;
    padding: 40px;
    margin: 1%;
    overflow: auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
    h3 {
    font-size: 1.7em;
    font-weight: bold;
    margin: 10px;
    }
    p {
    text-align: justify;
    font-size: 1.3em;
    margin: 10px 0px;
    }
    a {
      text-decoration: none;
      color: #fff;
      margin: 10px;
    }
    .carouselImg {
      height: 90%;
      img {
        max-width: 1500px;
        max-height: 900px;
        z-index: 0;
      }
    }
  }
`;
