import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { scroller } from 'react-scroll';
import './style.scss';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.toggleHamburgerMenu = this.toggleHamburgerMenu.bind(this);
    }

    toggleHamburgerMenu = () => {
        this.setState((prevState) => {
            return { isOpen: !prevState.isOpen }
        });
    }
    
    scrollTo(element) {
        scroller.scrollTo(element, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    render() {
        return (
            <div className="menu">
                <div className="sidebar">
                    <h1>Меню</h1>
                    <a onClick={()=>this.scrollTo('task1')}>Задание 1</a>
                    <a onClick={()=>this.scrollTo('task2')}>Задание 2</a>
                    <a onClick={()=>this.scrollTo('task3')}>Задание 3</a>
                    <a onClick={()=>this.scrollTo('task4')}>Задание 4</a>
                    <a onClick={()=>this.scrollTo('task5')}>Задание 5</a>
                </div>
                <div className="hamburger-menu">
                    <FontAwesomeIcon icon={['fas', 'bars']} size="2x" onClick={() => this.toggleHamburgerMenu()} />
                    {
                        this.state.isOpen &&
                        <div className="links">
                            <a onClick={()=>this.scrollTo('task1')}>Задание 1</a>
                            <a onClick={()=>this.scrollTo('task2')}>Задание 2</a>
                            <a onClick={()=>this.scrollTo('task3')}>Задание 3</a>
                            <a onClick={()=>this.scrollTo('task4')}>Задание 4</a>
                            <a onClick={()=>this.scrollTo('task5')}>Задание 5</a>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Menu;