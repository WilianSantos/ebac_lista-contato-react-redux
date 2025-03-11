import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Button = styled.button`
  padding: 8px;
  border: none;
  background-color: #03a64a;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Concert One', sans-serif;

  &:hover {
    background-color: #02833e;
  }
`
