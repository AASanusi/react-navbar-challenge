import React from "react";
import css from "./css/NavBarSimple.modules.css";

class NavBarSimple extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            introduction: "Hello,",
            buttonText: "log in",
        };
    }

    render() {
        return (
            <div className="NavBar">
                <h1>
                My Gallery
                </h1>
                <div>
                    <span>
                    {this.state.introduction} {this.props.name}
                    </span>
                    <button>
                    {this.state.buttonText}
                    </button>
                </div>
            </div>
        )
    }
    

}

export default NavBarSimple;