import { Route, Switch } from 'react-router-dom'
import './app.scss';
import Header from './components/Header'
import Footer from './components/Footer'
import Categories from './components/Categories/Categories'
import PetDetails from './components/PetDetails'
import PetCreate from './components/PetCreate'


function App() {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route path="/" exact component={ Categories}/>
        {/* за да отваря страницата ако има филтрирана категория */}
        <Route path="/categories/:category"  component={ Categories} />
        <Route path="/pets/detals/:petId"  component={ PetDetails} />
        <Route path="/pets/create"  component={ PetCreate} />
      </Switch>

      <Footer />
    </div>
  );
}
export default App;
