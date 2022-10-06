import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chat from "../../components/common/chat/Chat";
import TeamHeader from "../../components/header/Header";
import '../../styles/Feed.scss';
import { deleteFeed, getFeed } from "../../util/api/feed";
import Head from '../project/todo/Head.js';
import List from '../project/todo/List.js';
import Todo from "../project/todo/Todo.js";

const Feed = () => {

    const params = useParams();

    const [items,setItems] = useState([]);

    // useEffect(() => {
    //     (
    //         async() => {
    //             const res = getFeed(params)
    //             console.log(res)
    //         }
    //     )
    // },[params])

    return(
        <>
            <TeamHeader/>
            <Chat/>
            <Todo>
                <Head/>
                <List project_id={params}/>
            </Todo>
            {
                items.map((a,i) => {
                    return(
                        <div className="feedmain">
                            <div className="feediteam">
                                <div className="feedhead">
                                    <div>
                                        <img alt="user" src={require('../../images/userimg.svg').default}/>
                                        <p>팀원이름</p>
                                    </div>
                                    <img alt="user" src={require('../../images/addlook.svg').default}/>
                                </div>
                                <div className="feedmean">
                                    <p className="commentmean"> a.content </p>
                                    <div>
                                        <p>수정</p>
                                        <p>삭제</p>
                                    </div>
                                </div>
                                <div className="addadress">
                                    <img alt="user" src={require('../../images/addadress.svg').default}/>
                                </div>
                                <div className="feedaddress">
                                    <p>파일주소 www.dgsw.vk</p>
                                </div>
                                <br/>
                                <div className="feedcommentwrite">
                                    <button>댓글쓰기</button>
                                </div>
                                <div className="feedcomments">
                                    <div>
                                        <div>
                                            <img alt="user" src={require('../../images/userimg.svg').default}/>
                                            <p>팀원이름</p>
                                        </div>
                                        <img alt="user" src={require('../../images/detail.svg').default}/>
                                    </div>
                                    <p className="commentmean">파일 확인좀....</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
  };
  
  export default Feed;