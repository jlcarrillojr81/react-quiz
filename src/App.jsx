

import {useState} from 'react'
import LoggedOut from './components/LoggedOut'
import LoggedIn from './components/LoggedIn'


const [loggedIn, setLoggedIn] = useState(true);


function App() {
  if (!LoggedIn)
    
  return (
    <>
      {/* <LoggedIn /> */}
      <LoggedOut />
    </>
  )
  

  // Hook up the functionality for the LoggedIn component to show when the loggedIn state is true
  // and the LoggedOut component to show when loggedIn state is false.

  // See instruction ins toggleLogIn function

  const toggleLogIn = () => {
    setLoggedIn(!loggedIn);
    // should change the state of loggedIn to whatever it's opposite is. 
    // Remember to pass this prop down to the button component, and hook it up there.
  }

 




}

export default App
