import React,{useState,useEffect} from 'react'
import { Input } from 'antd';
import { Button } from 'antd';
import WheelComponent from './WheelComponent.jsx'

export default function Form() {

    const { TextArea } = Input;
    const [name,setName] = useState([])
    const [isGenerate, setIsGenerate]= useState(false)
    const [randomNumber, setRandomNumber] = useState(0)


    function handleGenerate(){
        var textarea = document.getElementById("content-textarea");
        if(textarea.value != ''){
            const listNameConstant =  textarea.value.split("\n")
            listNameConstant.map((item,index) => {
              let nameObject ={
                id: index+1,
                option:item
              }
              setName(name => [...name, nameObject]);
            })
          }
          setIsGenerate(true)
    }

    function handleRandom(){
      const randomGeneratedNumber = Math.floor(Math.random() * name.length);
      setRandomNumber(randomGeneratedNumber)
      console.log('randomNumber',randomNumber)
      setName( n => n.filter((_,i) => i !== randomGeneratedNumber))
    }



  return (
    <>
    
    <div className="Content">
    {
      !isGenerate ? 
      <>
      <TextArea id='content-textarea' style={{ height: 500, resize: 'none', width:500 }}/>
      <br /> 
      <Button onClick={handleGenerate}>Generate</Button>
      </>
      :  <WheelComponent nameList={name} />
    }
    </div>
         
        
          {/* { 
            name.map((item,index) => 
             <div key={index}>{item.id + ' - ' + item.name }</div> 
            )
          } */}
    </>
  )
}

// aaaaaa
// bbbbb
// ccccc
// ddddd

