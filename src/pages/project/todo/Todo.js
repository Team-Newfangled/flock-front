import styled from 'styled-components';

const TodoStyle = styled.div`
  position: absolute;
  top: 60%;
  left: 16%;
  transform: translateY(-60%);
  width: 360px;
  height: 660px;
  padding: 20px;
  border-radius: 30px;
  background: #EFF2F9;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.1);
`

function Todo({children}) {
  return(
    <TodoStyle>{children}</TodoStyle>
  )
}

export default Todo;