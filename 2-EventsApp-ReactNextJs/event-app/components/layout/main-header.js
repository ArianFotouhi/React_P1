import Link from "next/link";
import classes from './main-header.module.css';

export default function MainHeader(){
return <header className={classes.header}>
            <div className={classes.logo}>
                <Link href = '/'>EventBasket</Link>
            </div> 
            <nav className={classes.navigation}>
                <ul className={classes.ul}>
                    <li className={classes.ul_li}>
                        <Link href='/events'>All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
}