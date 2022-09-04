import React from "react";
import TeamHeader from "../../components/header/Header";
import Head from '../project/todo/Head.js';
import List from '../project/todo/List.js';
import Todo from "../project/todo/Todo.js";
import ProItem from './ProItem.js'
const Progress = () => {
    return(
        <>
            <TeamHeader/>
            <Todo>
                <Head/>
                <List/>
            </Todo>
            <ProItem/>
        </>
    )}

export default Progress;