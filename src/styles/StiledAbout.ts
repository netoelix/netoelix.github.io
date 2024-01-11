import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  border-radius:100px;
  background-color: #163659;
  border: 10px solid #163659;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
  margin: 15px;
`;

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;

  article {
    margin: 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
  }
  h2 {
    font-size: 2em;
    font-weight: bold;
    margin: 20px;
  }
  p {
    text-align: justify;
    font-size: 1.3em;
  }
  svg {
    font-size: 3em;
  }
`;
