import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../styles/Pen.scss'
import { createComments, createFeed, patchFeed } from "../../util/api/feed";

const Pen=({isPut,isComment,penClick,content,feedId,getItems})=>{
  
  const params = useParams()

  const [newContent,setNewContent] = useState('');

  const func = async(e) => {
    e.preventDefault();

    if (isComment) { 
      if(newContent.length < 1) { 
        alert('내용을 입력해주세요!') 
        return 
      } 
      await createComments(feedId,newContent) 
      getItems() 
    } 
    else if (isPut){ 
      await patchFeed(feedId,newContent) 
      if(newContent.length < 1){ 
        alert('내용을 입력해주세요!') 
        return 
      } 
      getItems() 
    } 
    else { 
      if(newContent.length < 1) { 
        alert('내용을 입력해주세요!') 
        return 
      } 
      await createFeed(params.project_id,newContent) 
      getItems() 
    } 
    penClick() 
  } 

  return(
    <>
      <div className="bg" onClick={penClick} />
      <div className="login penBox">
        <button className="close" onClick={penClick} >
              <img alt="close" src={require('../../images/Close.svg').default}/>
        </button> 
        <form className="textDiv" onSubmit={func}> 
          <div className='writeDiv'>글쓰기</div> 
          <textarea id='feedtext' type='text' placeholder='내용을 입력해주세요' 
          onChange={(e) => setNewContent(e.target.value)} 
          defaultValue={content}
          >
            
          </textarea>
          <div className='writeDiv fileplus'>파일 추가</div>
          <div id='fileuplode'>
            <input type="file" multiple={true} id="fileUploadBtn" />
          </div>
          <button id='fileBtn'
          type="submit"
          >send</button>
        </form>
      </div>
    </>
  );
};

export default Pen;