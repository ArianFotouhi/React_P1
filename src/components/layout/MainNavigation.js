import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css'
import { useContext } from 'react';
import FavoritesContext from '../../store/favourites-context';

function MainNavigation(){
    const favoritesCtx = useContext(FavoritesContext);

    return <header className={classes.header}>
        <div className={classes.logo}>Let's Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>New Meetups</Link>
                </li>
                <li>
                    <Link to='/favorites'>Favourites
                    <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}
export default MainNavigation;