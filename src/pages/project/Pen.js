import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../styles/Pen.scss'
import { createComments, createFeed, patchFeed } from "../../util/api/feed";

const Pen=({isPut,isComment,penClick,content,feedId})=>{
  
  const params = useParams()


  return(
    <>
    <div className="bg" onClick={penClick} />
    <div className="login penBox">
    <button className="close" onClick={penClick} >
          <img alt="close" src={require('../../images/Close.svg').default}/>
      </button>
      <div className="textDiv">
        <div className='writeDiv'>글쓰기</div>
        <textarea id='feedtext' type='text' placeholder='내용을 입력해주세요'>
          {content}
        </textarea>
        <div className='writeDiv fileplus'>파일 추가</div>
        <div id='fileuplode'>
          <input type="file" multiple={true} id="fileUploadBtn" />
        </div>
        <button id='fileBtn'
          onClick={
            () => {
              if (isComment) {
                (
                  async () => {
                    const res = await createComments(feedId,document.getElementById('feedtext').value)
                    console.log(res)
                    // window.location.reload()
                  }
                )()
              }
              else if (isPut){
                (
                  async () => {
                    const res = await patchFeed(feedId,document.getElementById('feedtext').value)
                    console.log(res)
                    // window.location.reload()
                  }
                )()
              }
              else {
                (
                  async () => {
                    await createFeed(params.project_id,document.getElementById('feedtext').value)
                    // window.location.reload()
                  }
                )()
              }
            }
          }
        >send</button>
      </div>
    </div>
    </>
  );
};

export default Pen;