import React, {useState, useEffect} from "react";
import axios from "axios";

const Fks = () => {
    const [fks, setFks] = useState(null);

    useEffect(() => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=jaws").then((response) => {   
        setFks(response.data.items[0].volumeInfo.authors[0]);
            console.log(response.data.items[0].volumeInfo.authors[0])
           
        })
    },[]);
    if (!fks) {
        return <p> Mo fks, mo lucks.</p>
    }

        return (
            <h2> " fks.authors[0] why doesn't this fkn thing work?!? "</h2>
            
            // <div>
            //     <>
            //         {book.map((mfk) => {
            //             return ( 
            //                 <h1> {mfk.title} </h1> 
            //             )
            //         })}
            
            //     </>
            // </div>
        )  
    
        
        

}

export default Fks;