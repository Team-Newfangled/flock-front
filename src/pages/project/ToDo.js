import '../../styles/Todo.scss';

const ToDo = () => {

  return (
    <>
    <div className="todoBox">
      <h2>TO-DO!</h2>
      <div className="uplode">
        <input className='upInput' type='text' placeholder="할 일을 추가해 주세요!"/>
        <button className='upBtn' onClick={()=>{
          
        }}><img src={require('../../images/plus.svg').default} /></button>
      </div>
    </div>
    </>
  )
}

export default ToDo;