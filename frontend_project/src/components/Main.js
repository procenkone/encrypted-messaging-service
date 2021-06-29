import React from 'react'
import { useHistory } from 'react-router'

export default function Main() {
    const history = useHistory()
    

    return (
        <div className='container'>
            <h2 className='py-5 ' >This service is intended for the exchange of encrypted messages.</h2>
            <p className="blockquote-footer ">1. To create a new message, press the "create note" button and enter the desired text in the field, generate a link, then send this link to the addressee.</p>
            <p className="blockquote-footer ">2. Your addressee should enter the link into the search bar of the browser and receive your decrypted message, or click the "search note" button and enter the hash in the appropriate field or in the field in the note tab of this service and receive the decrypted message.</p>
       
            <div className='container mt-3'>
                <button
                onClick={()=>history.push("/create")}
                className="btn btn-primary m-2 btn-lg"  aria-current="page" >create note</button>

                <button
                onClick={()=>history.push("/note")}
                className="btn btn-primary m-2 btn-lg"  aria-current="page" >search note</button>
            </div>
        </div>
    )
}