import React from 'react';

const UserList= (props) => {
    console.log(props, typeof(props));
    console.log(props.list);
    return(
        <div>
            <ul>
            {props.list.map(stargazer => (
                <li>
                    <h3>{stargazer.login}</h3>
                    <img src={stargazer.avatar_url} key={stargazer.avatar_url} style={{width:100}}/>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default UserList;