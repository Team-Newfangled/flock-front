import React from "react";
import { useParams } from "react-router-dom";
import TeamHeader from "../../components/header/Header";
import Head from '../project/todo/Head.js';
import List from '../project/todo/List.js';
import Todo from "../project/todo/Todo.js";
import ProItem from './ProItem.js'
const Progress = () => {

    const params = useParams()

    return(
        <>
            <TeamHeader/>
            <Todo>
                <Head project_id={params.project_id}/>
                <List project_id={params.project_id}/>
            </Todo>
            <ProItem/>
        </>
    )}

export default Progress;