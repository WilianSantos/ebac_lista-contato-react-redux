import styled from 'styled-components'
import { Button } from '../../styles'

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 5px;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  position: relative;
  border: 1px solid #ccc;

  form {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
  }
`

export const ContactName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  padding: 8px;
`

export const ContactText = styled.p`
  font-size: 14px;
  color: #2c3532;
  padding: 8px;
`

export const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #d90404;
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  cursor: pointer;
`
export const CancelButton = styled(Button)`
  background-color: #d90404;

  &:hover {
    background-color: #ff0000;
  }
`

export const EditButton = styled(Button)`
  background-color: #0d0d0d;

  &:hover {
    background-color: #262626;
  }
`

export const DivButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 5px;
`
