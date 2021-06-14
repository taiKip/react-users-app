
import './App.css';
import NavBar from './components/NavBar/NavBar';
import UsersList from './components/Users/UsersList';
import UsersContextProvider from './contexts/UsersContext';

function App() {
  return (
    <div className="App">
      <UsersContextProvider>
      <NavBar/>
      <main>
      <UsersList/>
      </main>
  
      </UsersContextProvider>
  
    </div>
  );
}

export default App;
