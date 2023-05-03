import styles from './Header.module.css';

import Logo from '../../assets/logo.png';

export function Header(){
    return (
        <div className={styles.header}>
            <div>
                <img src={Logo} alt="Logo Starbucks" />
            </div>
            <div className={styles.main_menu}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">What's New</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <i class="bi bi-list"></i>
            </div>
        </div>
    );
};