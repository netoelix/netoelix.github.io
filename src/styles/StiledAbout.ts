import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  border-radius:20px;
  background-color: #14204F;
  border: 10px solid #14204F;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
  margin: 0px 10px 30px;;
`;

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  width: 100%;
  article {
    margin: 15px 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
  }
  h2 {
    font-size: 1.7em;
    font-weight: bold;
    margin: 10px;
  }
  p {
    text-align: justify;
    font-size: 1.3em;
    margin: 15px 0px;
    padding: 25px;
    border: 1px solid #163659;
    border-radius: 10px;
    background-color: #163659;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
    width: 95%;
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  border: 1px solid #163659;
  border-radius: 10px;
  padding: 20px;
  background-color: #163659;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
  width: 95%;
  h3 {
    font-size: 1.5em;
    font-weight: bold;
    margin: 10px;
  }
  svg {
    font-size: 3em;
    margin: 10px;
  }
  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  span {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
    border: none;
    border-radius: 10px;
    width: 160px;
    height: 60px;
    margin: 10px;
    font-size: 1em;
    font-weight: bold;
  }
  .HTML {
    background-color: rgb(249, 67, 6)
  }
  .CSS {
    background-color: rgb(26, 156, 255)
  }
  .Javascript {
    background-color: rgb(255, 222, 0);
  }
  .Typescript {
    background-color: rgb(0, 122, 204)
  }
  .React {
    background-color: rgb(38, 38, 38)
  }
  .Redux {
    background-color: rgb(126, 87, 194)
  }
  .Github {
    background-color: rgb(33, 31, 31)
  }

  .HTML:hover, .CSS:hover, .Javascript:hover, 
  .Typescript:hover, .React:hover, .Redux:hover, .Github:hover   {
    width: 170px;
    height: 70px;
    margin: 5px;
    transition: all 0.2s ease-in-out;
  }
  .HTML, .CSS, .Javascript, 
  .Typescript, .React, .Redux, .Github {
    transition: all 0.2s ease-in-out;
  }
`;
