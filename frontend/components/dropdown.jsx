import React from "react";

class Dropdown extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            visible: false
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(e) {
        e.preventDefault();
        this.setState({
            visible: true
        }, () => {
            document.addEventListener("click", this.closeMenu);
        })
    }

    closeMenu(e) {
        if (!this.dropdownMenu.contains(e.target)){

            this.setState({visible: false}, () => {
                document.removeEventListener("click", this.closeMenu)
            })
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.showMenu}>
                    show Menu
                </button>
                {
                    this.state.visible ? (

                        <div className="dropdown-menu" ref={(element) => {
                            this.dropdownMenu = element
                        }}>
                    <button> menu item 1</button>
                    <button> menu item 2</button>
                    <button> menu item 3</button>
                </div>
                )
                : (

                    null
                )
                }
            </div>
        )
    }



}

export default Dropdown;