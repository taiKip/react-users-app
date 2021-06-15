
import './App.css';
import NavBar from './components/NavBar/NavBar';
import NewUserForm from './components/Users/NewUserForm';
import UsersList from './components/Users/UsersList';
import UsersContextProvider from './contexts/UsersContext';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <UsersContextProvider>
      
      <NavBar/>
      <main>
   <Switch>
<Route path="/" exact>
  <UsersList/>
</Route>
<Route path="/newuser" exact>
<NewUserForm/>
</Route>
   </Switch>
      </main>
  
      </UsersContextProvider>
  
    </div>
    </Router>
  );
}

export default App;
