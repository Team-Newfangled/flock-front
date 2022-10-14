import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chat from "../../components/common/chat/Chat";
import TeamHeader from "../../components/header/Header";
import '../../styles/Feed.scss';
import { deleteFeed, getComments, getFeed } from "../../util/api/feed";
import Head from '../project/todo/Head.js';
import List from '../project/todo/List.js';
import Todo from "../project/todo/Todo.js";

const Feed = () => {

    const params = useParams();

    const [items,setItems] = useState([]);
    const [comments,setComments] = useState([]);


    useEffect(() => {
        (
            async() => {
                const res = await getFeed(params)
                .then((res) => {
                    let arr = {}
                    res.data.result.map(async a => {
                        await getComments(a.id)
                        .then((res) => {
                            arr[a.id] = res.data.results
                        })
                        setComments([arr])
                    })
                    setItems([...res.data.result])
                })
                
            }
        )();
    },[params])

    const Delete = (feedId) => {
        (
            async () => {
                await deleteFeed(feedId)
            }
        )()
    }


    return(
        <>
            <TeamHeader/>
            <Chat/>
            <Todo>
                <Head project_id={params.project_id}/>
                <List project_id={params.project_id}/>
            </Todo>
            {
                items.map( a => {
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
                                        <p onClick={() => {
                                            
                                        }}>수정</p>
                                        <p onClick={() => {
                                            Delete(a.id)
                                        }}>삭제</p>
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
                                    <button onClick={() => {

                                    }}>댓글쓰기</button>
                                </div>
                                {
                                    comments.map(t => {
                                        return(
                                            Array.isArray(t[a.id]) && t[a.id].map(j => {
                                                return (
                                                    <div className="feedcomments">
                                                        <div>
                                                            <div>
                                                                <img alt="user" src={require('../../images/userimg.svg').default}/>
                                                                <p>팀원이름</p>
                                                            </div>
                                                            <img alt="user" src={require('../../images/detail.svg').default}/>
                                                        </div>
                                                        <p className="commentmean">j.content</p>
                                                    </div>

                                                )
                                            })
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
  };
  
  export default Feed;