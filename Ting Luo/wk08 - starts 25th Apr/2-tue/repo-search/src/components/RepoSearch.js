import React, {Component} from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import UserList from './UserList';


class RepoSearch extends Component{
    constructor(){
        super();
        this.state = {
            stargazers: [],
            isURLValid: true,
        }
        this.searchSubmitHandler = this.searchSubmitHandler.bind(this);
    }

    searchSubmitHandler(inputData){
        //make an AJAX request
        // create URL
        const gitHubURL = `https://api.github.com/repos/${inputData.owner}/${inputData.repo}/stargazers`;
        
        axios.get(gitHubURL).then((response)=> {
            console.log(response);
            if(response.status === 404){
                this.setState({isURLValid : false});
                return;
            }
            const newList = [...this.state.stargazers,response.data];
            console.log(newList);
            this.setState({stargazers : response.data});
            this.setState({isURLValid: true});
        });
        

    }
    

    render() {
        return(
            <div>
                <SearchForm onSaveSearchData={this.searchSubmitHandler}/>
                {!this.state.isURLValid && (
                    <p>"Repo not found, please check your input!</p>
                )}
                {this.state.isURLValid && (
                    <UserList list={this.state.stargazers}/>
                )}
            </div>

        )
    }
}

export default RepoSearch;