import { NavLink } from 'react-router-dom'
import './index.scss'

const CategoryNavigation = ({currentCategory}) => {
    return (

        <nav className="navbar">
            <ul>
                <li><NavLink activeClassName="nav-link-selected" to="categories/Cat">Cats</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/Dog">Dogs</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/Parrot">Parrots</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/Reptiles">Reptiles</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/Other">Other</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/all">All</NavLink></li>
            </ul>
        </nav>

    )
}
export default CategoryNavigation