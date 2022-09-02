import React from "react";
import '../../styles/Pen.scss'

const Pen=({penClick})=>{
  return(
    <>
    <div className="bg" onClick={penClick} />
    <div className="login penBox">
    <button className="close" onClick={penClick} >
          <img alt="close" src={require('../../images/Close.svg').default}/>
      </button>
      <div className="textDiv">
        <div className='writeDiv'>글쓰기</div>
        <textarea id='feedtext' type='text' placeholder='내용을 입력해주세요'/>
        <div className='writeDiv fileplus'>파일 추가</div>
        <div id='fileuplode'>
          <input type="file" multiple={true} id="fileUploadBtn" />
        </div>
        <button id='fileBtn'
        
        >send</button>
      </div>
    </div>
    </>
  );
};

export default Pen;