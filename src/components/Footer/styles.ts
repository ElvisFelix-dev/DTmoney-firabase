import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  height: 35px;
  margin-top: 1rem;
   /*background-color:  ${(props) => props.theme['gray-600']};*/

  align-items: center;
  position: relative;

  p {
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    color:  ${(props) => props.theme.white};
    padding: 1rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`;



