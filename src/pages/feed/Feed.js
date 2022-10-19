import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeamHeader from "../../components/header/Header";
import '../../styles/Feed.scss';
import { deleteFeed, getComments, getFeed } from "../../util/api/feed";
import Head from '../project/todo/Head.js';
import List from '../project/todo/List.js';
import Todo from "../project/todo/Todo.js";
import Pen from '../project/Pen'
import Write from "../../components/common/Write/Write";
const Feed = () => {

    const [feedId,setFeedId] = useState(0)
    const [isPopup,setIsPopup] = useState(false)
    const [content,setContent] = useState('')
    const [isComment, setIsComment] = useState(false)
    const [isPut,setIsPut] = useState(false)


    const penClick = () => {
        setIsPopup(!isPopup)
        !isPopup ? document.body.style.overflow = "hidden": document.body.style.overflow = "unset";
        setIsComment(false)
        setIsPut(false)
    }

    const putClick = (content,id) => {
        penClick()
        setContent(content)
        setIsPut(!isPut)
        setFeedId(id)
    }

    const commentClick = (id) => {
        penClick()
        setIsComment(!isComment)
        setFeedId(id)
    }

    const params = useParams();

    const [items,setItems] = useState([]);
    const [comments,setComments] = useState([]);


    useEffect(() => {
        (
            async() => {
                await getFeed(params.project_id)
                .then((res) => {
                    let arr = {}
                    res.data.results.map(async a => {
                        await getComments(a.id)
                        .then((res) => {
                            arr[a.id] = res.data.results
                        })
                        setComments([arr])
                    })
                    setItems([...res.data.results])
                })
            }
        )();
    },[params])



    return(
        <>
            <TeamHeader/>
            <Write/>
            <Todo>
                <Head project_id={params.project_id}/>
                <List project_id={params.project_id}/>
            </Todo>
            <div className="feedmain">
            {
                items.map( a => {
                    return(
                            <div className="feediteam">
                                <div className="feedhead">
                                    <div>
                                        <img alt="user" src={require('../../images/userimg.svg').default}/>
                                        <p>팀원이름</p>
                                    </div>
                                    <img alt="user" src={require('../../images/addlook.svg').default}/>
                                </div>
                                <div className="feedmean">
                                    <p className="commentmean"> {a.content} </p>
                                    <div>
                                        <p onClick={() => {
                                            putClick(a.content,a.id)
                                        }}>수정</p>
                                        <p onClick={() => {
                                            (
                                                async () => {
                                                    await deleteFeed(a.id)
                                                    window.location.reload()
                                                }
                                            )()
                                        }}>삭제</p>
                                    </div>
                                </div>
                                <div className="addadress">
                                    <img alt="user" src={require('../../images/addadress.svg').default}/>
                                </div>
                                <div className="feedaddress">
                                    <p>파일주소</p>
                                </div>
                                <br/>
                                <div className="feedcommentwrite">
                                    <button onClick={() => {
                                        commentClick(a.id)
                                    }}>댓글쓰기</button>
                                </div>
                                {
                                    comments.map(t => {
                                        console.log(t)
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
                                                        <p className="commentmean">{j.comment}</p>
                                                    </div>
                                                )
                                            })
                                        )
                                    })
                                }
                            </div>
                    )
                })
            }
            </div>
            {isPopup ? <Pen penclick={penClick} content={content} isComment={isComment} isPut={isPut} feedId={feedId}/> : ''}
        </>
    );
  };
  
  export default Feed;