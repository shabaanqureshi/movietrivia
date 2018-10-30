import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import '../../styles/ActorForm.css';
import '../../../src/bootstrap.min.css'; 

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            movieTemp: '', 
            errors: {},
            fields: {}
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddMovie = this.handleAddMovie.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "You must enter a name";
        }
        if(typeof fields["name"] !== "undefined"){
            if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters";
            }      	
          }
        //Image
        if(!fields["image"]) {
            formIsValid = false;
            errors["image"] = "You must select a pdf or jpg file";
        }
          this.setState({errors: errors});
          return formIsValid;
        }
    onFieldChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        if(this.handleValidation()){
            this.props.onAddActor(this.state);
            alert("Form submitted");
         }else{
            alert("Form has errors.")
         }
    }
    handleAddMovie(event) {
        this.setState({
            movies: this.state.movies.concat([this.state.movieTemp]),
            movieTemp: ''
        });
    }
    handleChange(field, event){    		
        let fields = this.state.fields;
        fields[field] = event.target.value;        
        this.setState({fields});
      }
    render() {
        return <form onSubmit={this.handleSubmit}>
            <div className="actorFormInput">
                <label htmlFor="name">Name</label>
                <input ref="name" type="text" value={this.state.fields["name"]} onChange={this.handleChange.bind(this, "name")} />
                <span style={{color: "red"}}>{this.state.errors["name"]}</span>
            </div>
            <div className="actorFormInput">
                <label htmlFor="image">Image</label>
                <input ref = "image" type="file" class="form-control-file" id="exampleFormControlFile1" accept = "image/png, image/jpeg"  
                value={this.state.fields["image"]} onChange={this.handleChange.bind(this, "image")}></input>
                 <span style={{color: "red"}}>{this.state.errors["image"]}</span>
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