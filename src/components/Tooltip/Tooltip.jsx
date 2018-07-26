import React, { Component } from 'react';
import './style.scss';

class Tooltip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0,
            zIndx: -1000
        }
        this.toggleTooltip = this.toggleTooltip.bind(this);
    }

    toggleTooltip() {
        this.setState({
            opacity: this.state.opacity ? 0 : 1,
            zIndx: -1 * this.state.zIndx
        });
    }
    render() {
        return (
            <div className="tooltip">
                <span onMouseEnter={this.toggleTooltip} onMouseLeave={this.toggleTooltip}>
                    {this.props.children}
                </span>
                <div className={`tooltip-text ${this.props.position}`} style={{ opacity: this.state.opacity, zIndex: this.state.zIndx }}>
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default Tooltip;