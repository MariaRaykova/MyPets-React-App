import { Route, Switch, Redirect } from 'react-router-dom'
import './app.scss';
import './utils/firebase'
import firebaseApp from './utils/firebase'
import { useEffect, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Categories from './components/Categories/Categories'
import PetDetails from './components/PetDetails'
import PetCreate from './components/PetCreate'
import PetEdit from './components/PetEdit'
import Login from './components/Login'
import Register from './components/Register'


function App() {
  const[user, setUser] = useState(null); //липсващ user 
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser)
      } else {
        setUser(null);
      }
    })
  }, [])
  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
  }
    return (
      <div className="container">
        <Header {...authInfo} />
        <Switch>
          <Route path="/" exact component={Categories}/> 
          {/* за да отваря страницата ако има филтрирана категория */}
          <Route path="/categories/:category" component={Categories} />
          <Route path="/pets/details/:petId" component={PetDetails} />
          <Route path="/pets/edit/:petId" component={PetEdit} />
          <Route path="/pets/create" component={PetCreate} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path='/logout'
            render={props => {
              firebaseApp.auth().signOut();
              return <Redirect to='/' />
            }} />

        </Switch>

        <Footer />
      </div>
    );
  }

export default App
