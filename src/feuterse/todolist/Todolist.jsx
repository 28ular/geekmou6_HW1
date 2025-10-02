
import { Card, Space } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchtodos} from "./todolistSlice.js";
import cls from "./todo.module.scss"
import {TodoAdd} from "./TodoAdd.jsx";

export const Todolist = () => {
    const dispatch = useDispatch()

    const { todos , status , error} = useSelector(state => state.TodoReducer)

    console.log(todos)
    console.log(status)

    useEffect(() => {
        if (status === 'idle') dispatch(fetchtodos())
    },[status , dispatch])



    return (
        <>
            <TodoAdd/>
      <ul>
                    {todos.map((todos) => (
                        <Space key={todos?.id} direction="vertical" size="middle" style={{ display: 'flex' , padding: '10px' }}>
                            <Card title={`Card: ${todos?.id}`} size="middle"  className={cls.card} style={{background: todos?.completed ? 'green' : 'red'}}>
                                <p>{`todo: ${todos?.todo}`}</p>
                                <p>{`completed: ${todos?.completed}`}</p>
                            </Card>
                        </Space>
                    ))}
                </ul>

        </>
    )
}