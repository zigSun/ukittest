import React from 'react';
import TaskContainer from '../TaskContainer/TaskContainer';
import AboutMe from '../../Tasks/task1/AboutMe';
import Form from '../../Tasks/task2/Form';
import ToolTipTask from '../../Tasks/task3/Task3';
import LoadingIndicator from '../../Tasks/task4/LoadingIndicator';
import WishList from '../../Tasks/task5/WishList';
import './style.scss';

const Content = (props) => {
        return (
            <div className="content">
                <TaskContainer title = "Задание 1" id = "task1">
                    <AboutMe />
                </TaskContainer>

                <TaskContainer title = "Задание 2" id = "task2">
                    <Form />
                </TaskContainer>

                <TaskContainer title = "Задание 3" id = "task3">
                    <ToolTipTask />
                </TaskContainer>

                <TaskContainer title = "Задание 4" id = "task4">
                    <LoadingIndicator />
                </TaskContainer>
                
                <TaskContainer title = "Задание 5" id = "task5">
                    <WishList />
                </TaskContainer>
            </div>
        )
}
export default Content;