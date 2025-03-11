import styled from 'styled-components'
import { Title } from '../../styles'

export const Sidebar = styled.section`
  padding: 40px 20px 40px 0;
`

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  align-items: center;
`
export const SidebarTitle = styled(Title)`
  font-size: 16px;
  width: 100%;
`

export const SidebarMain = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  height: 100%;
  padding: 20px;
`
