import {useState} from "react";
import {useSelector} from "react-redux";
import { Card, Space } from 'antd';


export const TodoAdd = () => {
    const { todos } = useSelector(state => state.TodoReducer)
    const [ localtodo , setLocaltodo] = useState([])

    const Addtodo = (text ) => {
        const newTodo = {
            id:Date.now(),
            todo:text ,
            completed:'false'
        };

        setLocaltodo([newTodo , ...localtodo])
    }

    const Alltodo = [...localtodo ]



    return (
        <>
            <div>
                <button onClick={() => {
                    const text = prompt('введите текст задачи')
                    if (text) Addtodo(text)
                }}>add new Todo</button>
            </div>
            <ul>
                {Alltodo.map((ntodo) => (
                    <Space key={ntodo?.id} direction="vertical" size="middle" style={{ display: 'flex' ,  }}>
                        <Card  title="New card" size="small" style={{background:'red' , padding: '20px'}}>
                            <p>{`todo: ${ntodo?.todo}`}</p>
                            <p>{` completed: ${ntodo?.completed}`} </p>
                        </Card>
                    </Space>
                ))}
            </ul>
        </>

    )
}