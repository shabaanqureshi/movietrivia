import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import '../../styles/ActorForm.css';
import '../../../src/bootstrap.min.css'; 

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            movies: [],
            movieTemp: ''
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddMovie = this.handleAddMovie.bind(this);
    }
    onFieldChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddActor(this.state);
    }
    handleAddMovie(event) {
        this.setState({
            movies: this.state.movies.concat([this.state.movieTemp]),
            movieTemp: ''
        });
    }
    render() {
        return <form onSubmit={this.handleSubmit}>
            <div className="actorFormInput">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange} />
            </div>
            <div className="actorFormInput">
                <label htmlFor="imageUrl">Image</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1" name="imageUrl" value={this.state.imageUrl} 
                onChange={this.onFieldChange}></input>
            </div>
            <div className="actorFormInput">
                <label htmlFor="movieTemp">Movies</label>
                {this.state.movies.map((movie) => <p key={movie}>{movie}</p>)}
                <input type="text" name="movieTemp" value={this.state.movieTemp} onChange={this.onFieldChange} />
                <input type="button" value="+" onClick={this.handleAddMovie} />
            </div>
            <input class="btn btn-primary" type="submit" value="Submit"></input>
        </form>;
    }
}

function mapStateToProps(state ) {
    
}

function mapDispatchToProps(dispatch, props) {
    return {
        onAddActor: actor => {
            dispatch( {type: 'ADD_ACTOR', actor});
            props.history.push('/');
        }
    }
}

function ActorForm({match, onAddActor}) {
    return <div className="actorForm">
        <h1>Add Actor/Actress</h1>
        <Form onAddActor={onAddActor}/>
    </div>;
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActorForm));