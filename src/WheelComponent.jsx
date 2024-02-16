import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import { Button, Modal } from 'antd';

export default function WheelComponent(props) {
    // const data = [
    //   { id: 1, option: 10 },
    //   { id: 2, option: -30 },
    //   { id: 3, option: 50 },
    //   { id: 4, option: 30 },
    //   { id: 5, option: 40 },
    //   { id: 6, option: 20 }
    //   ]

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([...props.nameList])

  // setData(d => [...d, props.nameList])
  // console.log('data',data)

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  function onHandleWinner(){
    setMustSpin(false);
    setIsModalOpen(true);
  }

  const handleOk = () => {
    setIsModalOpen(false);
    if(props.radioBtn){
      setData(d => d.filter((_,index) => index !== (prizeNumber)))
    }
  };

  // function handleCheck(){
  //   setIsModalOpen(true);
  // }

  return (
    <>
      <div align="center">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          outerBorderColor={["#f2f2f2"]}
          outerBorderWidth={[25]}
          innerBorderColor={["#f2f2f2"]}
          radiusLineColor={["#dedede"]}
          radiusLineWidth={[10]}
          textColors={["#ffffff"]}
          fontSize={[30]}
          backgroundColors={[
            "#F22B35",
            "#F99533",
            "#24CA69",
            "#514E50",
            "#46AEFF",
            "#9145B7"
          ]}
          disableInitialAnimation={true}
          onStopSpinning={() => {
            onHandleWinner(prizeNumber)
          }}
        />
        {
          data.length > 1 ?
          <Button className="button2" onClick={handleSpinClick} disabled={mustSpin}>
            SPIN
          </Button> :
        ""
        }
        {/* <Button className="button2" onClick={handleCheck}>
          CHECK
        </Button> */}


        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} cancelButtonProps={{ style: { display: 'none' } }}>
          {!mustSpin && data[prizeNumber] ? data[prizeNumber].option: ""}
        </Modal>

      </div>
    </>
  )
}

