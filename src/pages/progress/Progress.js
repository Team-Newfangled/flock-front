import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeamHeader from "../../components/header/Header";
import { getTodoItems } from "../../util/api/project";
import { getUserInfo } from "../../util/api/user";
import Head from '../project/todo/Head.js';
import List from '../project/todo/List.js';
import Todo from "../project/todo/Todo.js";
import ProItem from './ProItem.js'
const Progress = () => {

    const params = useParams()

    const [items, setItems] = useState([])

    const getTodoItem = async() => {
      await getTodoItems(params.project_id)
      .then((res) => {
        res.data.results.map(async(todo) => {
          await getUserInfo(todo['manager'])
          .then((res) => {
            todo['name'] = res.data.nickname;
          })
        })
        setItems([...res.data.results])
      })
    };

    useEffect (() => {
      getTodoItem();
    },[])

    return(
        <>
            <TeamHeader/>
            <Todo>
                <Head project_id={params.project_id} todos={items} setTodos={setItems}/>
                <List project_id={params.project_id} todos={items} setTodos={setItems}/>
            </Todo>
            <ProItem items={items} setItems={setItems}/>
        </>
    )}

export default Progress;