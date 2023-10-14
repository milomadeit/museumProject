import {NavLink} from 'react-router-dom';
import './GalleryNavigation.css'

function GalleryNavigation({galleries}) {
    console.log(galleries)
    return (
        <nav>
            <NavLink to='/' exact={true}>Home</NavLink>
            <h1>Galleries</h1>
            <ul>
                {galleries.map((gallery) => (
                <li key={gallery.id}>
                <NavLink to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
                </li>
            ))}
            </ul>
        </nav>
    );
  }


export default GalleryNavigation;
