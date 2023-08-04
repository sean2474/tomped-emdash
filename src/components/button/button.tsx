import styles from './button.module.css';

export const Button = ({ children, href } : {
    children: React.ReactNode, href: string
}) => {
    return (
        <a className={styles.button} href={href}>{children} </a>
    );
}