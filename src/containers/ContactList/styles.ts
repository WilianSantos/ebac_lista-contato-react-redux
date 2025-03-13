import styled from 'styled-components'

export const MainContainer = styled.main`
  height: 100vh;
  overflow-y: auto;
  overflow-x: none;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 60vh;
    padding: 16px;
    width: 100%;
  }
`
