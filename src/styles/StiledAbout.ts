import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  border-radius:100px;
  background-color: #163659;
  border: 10px solid #163659;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
  margin: 0px 10px 30px;;
`;

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;

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
  h3 {
    font-size: 1.5em;
    font-weight: bold;
    margin: 10px;
  }
  p {
    text-align: justify;
    font-size: 1.3em;
    margin: 15px 0px;
    padding: 25px;
  }
  svg {
    font-size: 3em;
    margin: 10px;
  }
`;
