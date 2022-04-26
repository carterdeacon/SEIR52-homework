import React, {Component} from 'react';

class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state={
            user:"",
            repo:"",
        }
        this._submitHandler = this._submitHandler.bind(this);
        this._userChangeHandler = this._userChangeHandler.bind(this);
        this._repoChangeHndler = this._repoChangeHndler.bing(this);
    }

    _userChangeHandler(event){
        this.setState({user: event.target.value});
    }
    _repoChangeHndler(event) {
        this.setState({repo: event.target.value});
    }

    _submitHandler(event) {
        event.preventDefault();

        const inputData = {
            owner: enteredUserId,
            repo: enteredRepoName,
        };

        this.props.onSaveSearchData(inputData);
        this.setState({user: ""});
        this.setState({repo: ""});

    }


    render(){
        return(
            <form onSubmit={this._submitHandler}>
                <label>User Id: </label>
                <input type="text" required placeholder='wofockham' value={enteredUserId} onChange={this._userChangeHandler}></input>
                <label>Repo Name: </label>
                <input type="text" required placeholder="seir-52" value={enteredRepoName} onChange={this._repoChangeHndler}></input>
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default SearchForm;