import {useState} from 'react'
import LoggedOut from './components/LoggedOut'
import LoggedIn from './components/LoggedIn'

const App = () => {

const [loggedIn, setLoggedIn] = useState(true);

const toggleLogIn = () => {
  setLoggedIn(!loggedIn)
}

if (loggedIn) {
  return (
    <>
    <LoggedIn toggleLogIn={toggleLogIn} />
    </>
  )
} else {
  return (
    <>
      <LoggedOut toggleLogIn={toggleLogIn}/>
    </>
  )
}
}


  

  // Hook up the functionality for the LoggedIn component to show when the loggedIn state is true
  // and the LoggedOut component to show when loggedIn state is false.

  // See instruction ins toggleLogIn function

  

export default App
