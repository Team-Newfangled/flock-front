import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeamHeader from "../../components/header/Header";
import '../../styles/Feed.scss';
import { deleteComments, deleteFeed, getComments, getFeed } from "../../util/api/feed";
import Head from '../project/todo/Head.js';
import List from '../project/todo/List.js';
import Todo from "../project/todo/Todo.js";
import Pen from '../project/Pen'
import Write from "../../components/common/Write/Write";
import { getTodoItems } from "../../util/api/project";
const Feed = () => {
    const [feedId,setFeedId] = useState('')
    const [content,setContent] = useState('')
    const [select, setSelect] = useState([])
    const [isPopup,setIsPopup] = useState(false)
    const [isComment, setIsComment] = useState(false)
    const [isPut,setIsPut] = useState(false)
    
    
    const penClick = () => {
        setIsPopup(!isPopup)
        setContent('')
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

    const del = async(feed_id) => {
        await deleteFeed(feed_id)
        getItems()
    }

    const delcomments = async(comment_id) => {
        await deleteComments(comment_id)
        getItems()
    }
    
    const params = useParams();
    
    const [items,setItems] = useState([]);
    const [comments,setComments] = useState([]);
    
    const [todos,setTodos] = useState([])

    const getTodo = async() => {
        await getTodoItems(params.project_id)
        .then((res) => {
            let arr = []
            arr = res.data.results
            setTodos([...arr])
        })
    }

    const getItems = async() => {
        await getFeed(params.project_id)
        .then((res) => {
            let feed = res.data.results
            let temp = []
            feed.map( async a => {
                await getComments(a.id)
                .then((res) => {
                    let arr = {}
                    arr[a.id] = res.data.results
                    temp.unshift(arr)
                })
                setComments([...temp])
            })
            setItems([...feed])
        })
    }

    useEffect(() => {
        getItems()
        getTodo()
    },[])

    return(
        <>
            <TeamHeader/>
            <Write feeds={items} setfeeds={setItems} comments={comments} setcomments={setComments} getItems={getItems}/>
            <Todo>
                <Head project_id={params.project_id} todos={todos} setTodos={setTodos}/>
                <List project_id={params.project_id} todos={todos} setTodos={setTodos}/>
            </Todo>
            <div className="feedmain">
            {
                items.map((a,i) => {
                    return(
                            <div className="feediteam" key={i}>
                                <div className="feedhead">
                                    <div>
                                        <img alt="user" src={require('../../images/userimg.svg').default}/>
                                        <p>{a['writer']}</p>
                                    </div>
                                    <button onClick={() => !select.includes(a.id) ? setSelect((prev) => [...prev, a.id]) : setSelect(select.filter((value) => value !== a.id))}>
                                        <img alt="user" src={require('../../images/addlook.svg').default}/>
                                    </button>
                                </div>
                                <div className="feedmean">
                                    <p className="commentmean"> {a.content} </p>
                                    {select.includes(a.id) && 
                                        <div>
                                            <p onClick={() => {
                                                putClick(a.content,a.id)
                                            }}>수정</p>
                                            <p onClick={() => {
                                                del(a.id)
                                            }
                                            }>삭제</p>
                                        </div>
                                    }
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
                                    comments.map((t, j) => (
                                        Array.isArray(t[a.id]) && t[a.id].map(({id, comment, writer}) => {
                                            return (
                                                <div className="feedcomments" key={id}>
                                                    <div>
                                                        <div>
                                                            <img alt="user" src={require('../../images/userimg.svg').default}/>
                                                            <p>{writer}</p>
                                                        </div>
                                                        <p onClick={
                                                            () => {
                                                                delcomments(id)
                                                            }
                                                        }>삭제</p>
                                                    </div>
                                                    <p className="commentmean">{comment}</p>
                                                </div>
                                            )
                                        }))
                                    )
                                }
                            </div>
                    )
                })
            }
            </div>
            {isPopup ? <Pen  
            key={feedId}   
            penClick={penClick} 
            content={content} 
            isComment={isComment} 
            isPut={isPut} 
            feedId={feedId} 
            feeds={items} 
            setfeeds={setItems} 
            comments={comments} 
            setComments={setComments} 
            getItems = {getItems}
            /> : ''}
        </>
    );
  };
  
  export default Feed;