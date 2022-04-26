import React, {Component} from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';


class RepoSearch extends Component{
    constructor(){
        super();
        this.state = {
            stargazers: [],
            stargazerAvatarURLs: [],
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
            let stargazers = response.data.map((array)=> array.login); 
            this.setState({stargazers : stargazers});
            let stargazerAvatarURL = response.data.map((array) => array.avatar_url);
            this.setState({stargazerAvatarURLs : stargazerAvatarURL});
            this.setState({isURLValid: true});
        })
        

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