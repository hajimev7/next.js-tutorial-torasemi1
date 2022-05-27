import React,{useEffect, useState} from 'react'
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
  console.log('最初')
 const [num,setNum]=useState(0)
 const [faceshowflag,setfaceshowflag]=useState(false)

 const onClickCountUp=()=>{
   setNum(num+1)
 }

 const onClickSwitchshowflag=()=>{
   setfaceshowflag(!faceshowflag)
 }
//最初の一回だけ通したい時に使う
 useEffect(() => {
  if (num>0){
    //falseの場合だけset関数を呼ぶ
     if (num % 3=== 0){
       faceshowflag || setfaceshowflag(true)
     }else{
       faceshowflag && setfaceshowflag(false)
     }
    }
  // eslint-disable-next-line
 }, [num])

  return (
   <>
     <h1 style={{color:'red'}}>こんにちは!</h1>
     <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
     <ColorfulMessage color="pink">元気です!</ColorfulMessage>
     <button onClick={onClickCountUp}>カウントアップ!</button>
     <br />
     <button onClick={onClickSwitchshowflag}>on/off</button>
     <p>{num}</p>
     {faceshowflag && <p>( ＾∀＾)</p> }
     
   </>
  )
}

export default App