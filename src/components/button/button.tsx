import styles from './button.module.css';

export const Button = ({ children, href, className, onClick, download } : {
  children: React.ReactNode, href?: string, className?: string, onClick?: () => void, download?: string
}) => {
  return (
    <a 
      className={`${styles.button} ${className}`} 
      href={href} 
      onClick={onClick} 
      download={download}
    >
      {children} 
    </a>
  );
}

export const RedButton = ({ children, href, className, onClick, download } : {
  children: React.ReactNode, href?: string, className?: string, onClick?: () => void, download?: string
}) => {
  return (
    <a 
      className={`${styles.red} ${styles.button} ${className}`} 
      href={href} 
      onClick={onClick} 
      download={download}
    >
      {children} 
    </a>
  );
}