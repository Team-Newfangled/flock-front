import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../styles/Pen.scss'
import { createComments, createFeed, patchFeed } from "../../util/api/feed";
import { getUserInfo } from "../../util/api/user";

const Pen=({isPut,isComment,penClick,content,feedId,feeds,setfeeds,comments,setcomments})=>{
  
  const params = useParams()

  const [newContent,setNewContent] = useState('');


  const func = async(e) => {
    e.preventDefault();
    
    let temp = []

    if (isComment) {
      console.log(feedId)
      temp = [...comments];
      console.log(temp)
      // await createComments(feedId,newContent)
      // .then((res) => {
      //   console.log(res.data)
      //   getUserInfo(res.data['writer-id'])
      //   .then((t) => {
      //     res.data['name'] = t.data.nickname
      //   })
      //   temp.push(res.data)
      //   setcomments()
      // })
    }
    else if (isPut){
      temp.concat(feeds)
      await patchFeed(feedId,newContent)
      setfeeds(temp)
    }
    else {
      temp.concat(feeds)
      await createFeed(params.project_id,newContent)
      .then((res) => {
        getUserInfo(res.data['writer-id'])
        .then((t) => {
          res.data['name'] = t.data.nickname
        })
        temp.concat(res.data)
        setfeeds(temp)
      })
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
      <div className="textDiv">
        <div className='writeDiv'>글쓰기</div>
        <textarea id='feedtext' type='text' placeholder='내용을 입력해주세요'
        onChange={(e) => setNewContent(e.target.value)}
        >
          {content}
        </textarea>
        <div className='writeDiv fileplus'>파일 추가</div>
        <div id='fileuplode'>
          <input type="file" multiple={true} id="fileUploadBtn" />
        </div>
        <button id='fileBtn'
        onClick={func}
        >send</button>
      </div>
    </div>
    </>
  );
};

export default Pen;