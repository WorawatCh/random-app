import React,{useState,useEffect} from 'react'
import { Input,Flex,Button,Switch } from 'antd';
import WheelComponent from './WheelComponent.jsx'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

export default function Form() {

    const { TextArea } = Input;
    const [name,setName] = useState([])
    const [isGenerate, setIsGenerate]= useState(false)
    const [radioBtn,setRadioBtn] = useState(true)


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

    function onSwitchChange(checked){
      setRadioBtn(checked)
    }

  return (
    <>
      <div className="Content">
        {
          !isGenerate ? 
          <>
            <Flex vertical gap="small" justify='center'  align='center'>
              <TextArea id='content-textarea' style={{ height: '50vh', resize: 'none', width:'60vw' }}/>
              <Flex horizontal='true' gap="small" justify='center'  align='center'>
                <Switch
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                  defaultChecked 
                  onChange={onSwitchChange}
                />
                <p>Remove Selected Name</p>
              </Flex>
              <Button onClick={handleGenerate}>Generate</Button>
            </Flex>
          </>
          :  <WheelComponent nameList={name} radioBtn={radioBtn}/>
        }
      </div>
    </>
  )
}

// aaaaaa
// bbbbb
// ccccc
// ddddd

