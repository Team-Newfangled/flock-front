import React, { useState,useEffect } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { deleteTodoItems, getTodoItems, patchTodoItems } from '../../../util/api/project';

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
    display: none;
    
`;
 
const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    position: relative;
    width: 80%;
    transform: translateX(-50%);
    left: 50%;
    &:hover {
        ${Remove} {
            display: initial;
        }
    }
`;
 
const CheckCircle = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props =>
        props.done &&
        css`
          border: 2px solid #4295F5;
          color: #4295F5;
        `}
`;
 
const Text = styled.div`
    flex: 1;
    font-size: 16px;
    color: #495057;
    ${props =>
        props.done &&
        css`
            color: #ced4da;
        `}
`;
 
function Item({ id, done, text, todos, setTodos}) {

    const [isDelete,setIsDelete] = useState(false)
    const [isPatch,setIsPatch] = useState(false)

    const func = async(e) => {
        e.preventDefault()

        const temp = todos.slice()

        if (isDelete) {
            await deleteTodoItems(id)
            setTodos(temp)
            setIsDelete(false)
        }
        else if (isPatch) {
            const res = await patchTodoItems(id,!done)
            setTodos(temp)
            setIsPatch(false)
        }
    }


    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={
                setIsPatch(true)
            }>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove onClick={
                setIsPatch(true)
            }>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}

export default Item;