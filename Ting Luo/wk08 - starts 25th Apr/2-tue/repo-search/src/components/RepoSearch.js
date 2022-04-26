import React, {Component} from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';


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
            if(response.status == 404){
                this.setState({isURLValid : false});
                return;
            }
            let stargazers = response.data.map((person) => ({login: person.login, avatar: person.avatar_url})); 
            console.log(stargazers, typeof(stargazers));
            const newList = [1,2];
            console.log(newList);
            this.setState({stargazers : newList});
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
                    <p>coming soon</p>
                )}
            </div>

        )
    }
}

export default RepoSearch;