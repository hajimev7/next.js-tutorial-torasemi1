
import "./styles.css"
import React,{useState} from 'react';
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodos } from "./components/incompleteTodos";
import {CompleteTodos} from "./components/CompleteTodos"

const App=()=>{
  const [todoText,setTodoText]=useState('')
  const [incompleteTodos,setIncompleteTodos]=useState(['ああああ','いいいいい'])
  const [completeTodos,setCompleteTodos] =useState(['うううううう'])
  const onChangeTodoText=(event)=>setTodoText(event.target.value)
  const onClickAdd=()=>{
    if (todoText==="") return
    const newTodos=[...incompleteTodos,todoText]
    setIncompleteTodos(newTodos)
    setTodoText("")
  }

  const onClickDelete=(index)=>{
    const newTodos=[...incompleteTodos]
    //配列の指定した番号から一つ削除する
    newTodos.splice(index,1)
    setIncompleteTodos(newTodos)
  }

  const onClickComplete=(index)=>{
    //未完了ボックスから削除
    const newIncompleteTodos=[...incompleteTodos]
    //配列の指定した番号から一つ削除する
    newIncompleteTodos.splice(index,1)

    //未完了のincompleteTodosの番号を取得するため[index]の記載が必要
    const newCompleteTodos=[...completeTodos,incompleteTodos[index]]
    setIncompleteTodos(newIncompleteTodos)
    setCompleteTodos(newCompleteTodos)
  }

  const onClickBack=(index)=>{
    const newCompleteTodos=[...completeTodos]
    newCompleteTodos.splice(index,1)

    const newIncompleteTodos=[...incompleteTodos,completeTodos[index]]
    setCompleteTodos(newCompleteTodos)
    setIncompleteTodos(newIncompleteTodos)
  }

  return (
  <>
    <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} disabled={incompleteTodos.length>=5}/>
    {incompleteTodos.length>=5 && (
    <p style={{color:'red'}}>
      登録できるtodoは5個までだよ〜。消化しろ〜
    </p>
    )}
    <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete}/>

    <CompleteTodos todos={completeTodos} onClickBack={onClickBack}/>
  </>
  )
}

export default App
