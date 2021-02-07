import React, { useEffect, useState } from "react";
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from "./Message";
import db from "./firebase"; //pulling from file that we created
import firebase from "firebase"; //pulling from firebase module
import FlipMove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  //useState: variable in REACT
  //useEffect: run code on a condition in REACT

  useEffect(() => {
    //run once when the app component loads
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id , message: doc.data()})))
    })
  }, [])  

  useEffect(() => {
    //code....
    //if it's blank inside [], this code runs ONCE when the app component loads
    // const username = prompt("Please enter your name");
    setUsername(prompt("Please enter your name"));
  }, [] )//condition

  const sendMessage = (event) => {
    event.preventDefault();  //this command diables refresh from taking place

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1>Hello World!</h1>
      <h2>Welcome {username}</h2>

      <form className="app_form">

      <FormControl className="app_formControl">

        <Input className="app_input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)}  />

        <IconButton className="app_iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
          <SendIcon />
        </IconButton>

      </FormControl>
      
      </form>

      <FlipMove>
      {
        messages.map( ({id, message}) => (
          <Message key={id} username={username} message={message} />

        ))
      }
      </FlipMove>

      
    </div>
  );
}

export default App;
