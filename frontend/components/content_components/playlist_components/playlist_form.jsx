import React from "react";
import {Redirect} from "react-router-dom"

class PlaylistForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.playlist;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)

    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state).then(() => this.props.history.push("/playlists/"));
    }

    update(field) {
        console.log(this.state)
        return e => (this.setState({
            [field]: e.target.value
        }))
        
    }

    render(){
        let cardStyle = {
            '--color-1': `${this.state.color_1}`, 
            '--color-2': `${this.state.color_2}`
            }
            console.log(this.state)
        return(
            <>
            <div className="playlist-form-container">

                <h1>{this.props.formType}</h1>
                
                <form onSubmit={this.handleSubmit} className="playlist-form">
                    <div className="playlist-form-left">
                        <div className="card-picture playlist-card" style={cardStyle}>
                            <span className="material-symbols-outlined">queue_music</span>
                        </div>
                        <div className="color-selectors">

                            <label> color 1
                                <select onChange={this.update("color_1")} name="color-1" id="color-1" value={this.state.color_1}>
                                    <option value="red">red</option>
                                    <option value="orange">orange</option>
                                    <option value="yellow">yellow</option>
                                    <option value="green">green</option>
                                    <option value="blue">blue</option>
                                    <option value="purple">purple</option>
                                    <option value="black">black</option>
                                    <option value="grey">grey</option>
                                    <option value="white">white</option>
                                </select>
                            </label>
                            <label> color 2
                                <select onChange={this.update("color_2")} name="color-1" id="color-1" value={this.state.color_2}>
                                    <option value="red">red</option>
                                    <option value="orange">orange</option>
                                    <option value="yellow">yellow</option>
                                    <option value="green">green</option>
                                    <option value="blue">blue</option>
                                    <option value="purple">purple</option>
                                    <option value="black">black</option>
                                    <option value="grey">grey</option>
                                    <option value="white">white</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="playlist-form-right">
                        <input className="text-input" placeholder="Playlist Name" type="text" value={this.state.name} onChange={this.update('name')} />
                        <br />
                        
                            <textarea className="text-input description" placeholder="Optional Description" value={this.state.description} onChange={this.update('description')} />
                        
                        <br />
                        <button type="submit">{this.props.formType}</button>

                    </div>
                </form>

            </div>

            </>
        )
    }


}
export default PlaylistForm;