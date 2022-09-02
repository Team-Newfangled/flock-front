import React from "react";
import TeamHeader from "../../components/header/Header";
import '../../styles/Feed.scss';
import Head from '../project/todo/Head.js';
import List from '../project/todo/List.js';
import Todo from "../project/todo/Todo.js";
const Feed = () => {
    return(
        <>
            <TeamHeader/>
            <Todo>
                <Head/>
                <List/>
            </Todo>
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
                        <p className="commentmean"> 내용 </p>
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
                
                <div className="feediteam">
                    <div className="feedhead">
                        <div>
                            <img alt="user" src={require('../../images/userimg.svg').default}/>
                            <p>팀원이름</p>
                        </div>
                        <img alt="user" src={require('../../images/detail.svg').default}/>
                    </div>
                    <div className="feedmean">
                        <p className="commentmean"> 내용 </p>
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
                
                <div className="feediteam">
                    <div className="feedhead">
                        <div>
                            <img alt="user" src={require('../../images/userimg.svg').default}/>
                            <p>팀원이름</p>
                        </div>
                        <img alt="user" src={require('../../images/detail.svg').default}/>
                    </div>
                    <div className="feedmean">
                        <p className="commentmean"> 내용 </p>
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
        </>
    );
  };
  
  export default Feed;