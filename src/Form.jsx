import React,{useState,useEffect} from 'react'
import { Input,Flex,Button } from 'antd';
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
                id: index,
                option:item
              }
              setName(name => [...name, nameObject]);
            })
          }
          setIsGenerate(true)
    }

  return (
    <>
      <div className="Content">
        {
          !isGenerate ? 
          <>
            <Flex vertical gap="small" justify='center'  align='center'>
              <TextArea id='content-textarea' style={{ height: '50vh', resize: 'none', width:'60vw' }}/>
              <Button onClick={handleGenerate}>Generate</Button>
            </Flex>
          </>
          :  <WheelComponent nameList={name} />
        }
      </div>
    </>
  )
}

// aaaaaa
// bbbbb
// ccccc
// ddddd

