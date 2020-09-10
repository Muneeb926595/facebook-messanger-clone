import React, { useState, useEffect } from 'react';
import { FormControl, Input, IconButton } from '@material-ui/core';
import Message from './Message';
import { db } from '../firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import logo from '../logo.png'
import './message.css';
import SendIcon from '@material-ui/icons/Send';

function Messenger() {
    const [input, setInput] = useState('');
    const [username, setUsername] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
        })
    }, [])

    useEffect(() => {
        setUsername(prompt("Please Enter Your Name!"));
    }, [])

    const sendMessage = (event) => {
        event.preventDefault();
        db.collection('messages').add({
            message: input,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('');
    }

    return (
        <div className="App">
            <img src={logo} alt="facebook_logo" />
            <h2>Facebook Messganer</h2>
            <form className="messenger__form">
                <FormControl className="messenger__formcontrol">
                    <Input className="messenger__input" placeholder="Enter a message..." value={input} onChange={(event) => { setInput(event.target.value) }} />
                    <IconButton className="messenger__iconButton" disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>
                        <SendIcon color="primary" />
                    </IconButton>
                </FormControl>
            </form>
            <FlipMove>
                {
                    messages.map(({ id, message }) => {
                        return <Message key={id} username={username} message={message} />
                    })
                }
            </FlipMove>
        </div >
    )
}

export default Messenger;