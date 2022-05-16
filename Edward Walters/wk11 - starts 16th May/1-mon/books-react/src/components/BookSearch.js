import {useState} from 'react'


function BookSearch() {
    
    const [search, setSearch] = useState('');

    


    const _handleChange = (e) => {
        setSearch(e.target.value);
    };

    const fetchBooks = () => {
        console.log('fetching book' + search)
    }
 
        return (
        <div>
             <h1>Book Search</h1>
            <label>
            Book Title
            <input type="search" onChange={_handleChange} required autoFocus placeholder="Book Title" value={search} />
            </label>
            <button onClick={fetchBooks}>Search</button>
        </div>
    )
}

export default BookSearch



