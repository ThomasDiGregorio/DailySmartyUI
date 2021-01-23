import React, { Component } from 'react';
import LogoSrc from "../../static/assets/ds_circle_logo.png"

class Logo extends Component {
    render() {
        const size = {
            height: this.props.size ? this.props.size : 105,
            width: this.props.size ? this.props.size : 105,
        }
        return (
            <div className="logo-main">
                <img style={size} alt="daily smarty ui image logo big" src={LogoSrc} />
            </div>
        )
    }
}

export default Logo;