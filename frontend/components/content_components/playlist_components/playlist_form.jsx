import React from "react";

class PlaylistForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.playlist;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createPlaylist(this.state)
    }

    update(field) {
        return e => (this.setState({
            [field]: e.target.value
        }))
    }

    render(){
        return(
            <>
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name
                        <input type="text" value={this.state.name} onChange={this.update('name')} />
                    </label>
                    <label>Description
                        <input type="text" value={this.state.description} onChange={this.update('description')} />
                    </label>

                    <button type="submit">{this.props.formType}</button>
                </form>

            </>
        )
    }


}

export default PlaylistForm;