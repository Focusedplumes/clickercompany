import React from 'react'




export default function SingIn(props) {

   function setLocalStorage() {
      if(!props.username || props.username.lenght < 0) {
          return alert('Username is required')
      }
      if(!props.password || props.password.lenght < 0 ){
        return alert('Password is required')
      }
   
   localStorage.setItem("userName", props.username)
   localStorage.setItem("password", props.password)
   props.handleloading()
   props.handleSignin(true)
   }

return (
    <h1>Welcome to Clicker Company</h1>
    <h2>The comapny where you click</h2>
    <p>Username: <input value={props.username} onChange={(e) => props.handleSetUsername(e.target.value)}></p>
    <p>Password: <input type = "password" value={props.password} onChange={(e) => props.handleSetPassword(e.target.value)} /></p>
    <button onClick={setLocalStorage}>Get Clicking</button>
)








}