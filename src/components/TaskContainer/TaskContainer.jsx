import React from 'react';
import { Element } from 'react-scroll';
import './style.scss'
const TaskContainer = ({title,id,children}) => {
    return (
        <Element name={id} className="task-container">
            <h1 className="task-title">{title}</h1>
            <div className="task-content">
                {children}
            </div>
        </Element>
    )
}

export default TaskContainer;