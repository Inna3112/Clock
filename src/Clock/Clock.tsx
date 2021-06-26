import React, {useEffect, useState} from "react";
import {DigitalClockView} from "../DigitalClockView/DigitalClockView";
import {AnalogClockView} from "../AnalogClockView/AnalogClockViwew";


type PropsType = {
    mode: 'digital' | 'analog'
}
export const Clock: React.FC<PropsType> = ({mode}) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalId = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
        // useEffect може повертати функцию очистки сайд-ефектив
    }, [])
    //Коли компонент помре, setInterval продовжить працювати, тому що ним управляє
    //браузер, буде утечка памяті

    let view
    switch (mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break
        case "digital":
        default:
            view = <DigitalClockView date={date}/>
    }
    return (
        <div>
            {view}
        </div>
    )
}