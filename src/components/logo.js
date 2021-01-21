import React, { Component } from 'react';
import LogoSrc from "../../static/assets/ds_circle_logo.png"

class Logo extends Component {
    render() {
        return (
            <div className="logo-main">
                <img alt="altLogo" src={LogoSrc} />
            </div>
        )
    }
}

export default Logo;