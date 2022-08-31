import React from "react";
import TeamHeader from "../../components/header/Header";
import '../../styles/Project.scss';
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
        </>
    );
  };
  
  export default Feed;