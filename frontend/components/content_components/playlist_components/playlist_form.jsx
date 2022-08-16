import React from "react";
import {Redirect} from "react-router-dom"

class PlaylistForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.playlist;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        window.scrollTo(0, 0)

    }

    handleSubmit(e){
        e.preventDefault();
        console.log("history?", this.props)
        this.props.processForm(this.state).then(() => this.props.history.push("/playlists/"));
    }

    update(field) {
        return e => (this.setState({
            [field]: e.target.value
        }))
    }

    render(){
        return(
            <>
            <div className="playlist-form-container">

                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input className="text-input" placeholder="Playlist Name" type="text" value={this.state.name} onChange={this.update('name')} />
                    <br />
                    
                        <textarea className="text-input description" placeholder="Optional Description" value={this.state.description} onChange={this.update('description')} />
                    
                    <br />
                    <button type="submit">{this.props.formType}</button>
                </form>

            </div>

            </>
        )
    }


}
export default PlaylistForm;