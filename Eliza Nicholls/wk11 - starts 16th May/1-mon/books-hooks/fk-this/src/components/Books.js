import React, {useState, useEffect} from "react";
import axios from "axios";

const myKey = "AIzaSyDCPoIBmdKX90cXRICTnZG1VWUi-DxTmLE"

const Books = () => {
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=jaws").then((response) => {   
        setBook(response.data.items[0].volumeInfo);
            console.log(response.data.items[0].volumeInfo.title)
           
        })
    },[]);
    if (!book) {
        return <p> Mo books, mo hooks.</p>
    }

        return (
            <h1>{book.title}</h1>
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

export default Books;