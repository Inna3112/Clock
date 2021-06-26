import React from "react";

const getTwoDigitsString = (number: number) => number < 10 ? '0' + number : number

type PropsType = {
    date: Date
}
export const DigitalClockView: React.FC<PropsType> = ({date}) => {
    return (
        <div>
            <span>{getTwoDigitsString(date.getHours())}</span>
            :
            <span>{getTwoDigitsString(date.getMinutes())}</span>
            :
            <span>{getTwoDigitsString(date.getSeconds())}</span>
        </div>
    )
}