import React, {Component} from 'react';

class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state={
            user:"",
            repo:"",
        };
        this._submitHandler = this._submitHandler.bind(this);
        this._userChangeHandler = this._userChangeHandler.bind(this);
        this._repoChangeHandler = this._repoChangeHandler.bind(this);
    }

    _userChangeHandler(event){
        this.setState({user: event.target.value});
    }
    _repoChangeHandler(event) {
        this.setState({repo: event.target.value});
    }

    _submitHandler(event) {
        event.preventDefault();
        const inputData = {
            owner: this.state.user,
            repo: this.state.repo,
        };
        console.log(inputData);
        this.props.onSaveSearchData(inputData);

    }


    render(){
        const {enteredUserId,enteredRepoName} = this.state;
        return(
            <form onSubmit={this._submitHandler}>
                <label>User Id: </label>
                <input type="text" required placeholder='wofockham' defaultValue={enteredUserId || ""} onChange={this._userChangeHandler}></input>
                <label>Repo Name: </label>
                <input type="text" required placeholder="seir-52" defaultValue={enteredRepoName || ""} onChange={this._repoChangeHandler}></input>
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default SearchForm;