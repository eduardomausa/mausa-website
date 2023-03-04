import styled from 'styled-components'

export const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;

  @media (max-width: 768px) {
    display: none;
  }
`;