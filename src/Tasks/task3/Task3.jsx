import React from 'react';
import Tooltip from '../../components/Tooltip/Tooltip';

const Task3 = (props) => {
    return (
        <React.Fragment>
            <Tooltip text="Правый" position="right"> Правый </Tooltip>
            <span> </span>
            <Tooltip text="Левый" position="left"> Левый  </Tooltip>
            <span> </span>
            <Tooltip text="Верхний" position="top"> Верхний </Tooltip>
            <span> </span>
            <Tooltip text="Нижний" position="bottom"> Нижний </Tooltip>
        </React.Fragment>
    )
}

export default Task3;