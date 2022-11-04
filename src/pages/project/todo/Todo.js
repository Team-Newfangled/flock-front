import { useSelector } from 'react-redux';
import '../../../styles/Todo.scss'
import EditTodoModal from './EditTodoModal';

function Todo({children}) {
  const isModal = useSelector((state) => state.todoModal.show);

  return(
    <>
      <div className='TodoStyle'>
        {children}
      </div>
      {isModal && <EditTodoModal />}
    </>
  )
}

export default Todo;