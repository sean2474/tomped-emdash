import styles from './button.module.css';

export const Button = ({ children, href, className, onClick, download, target, rel, style } : {
  children: React.ReactNode, href?: string, className?: string, onClick?: () => void, download?: string, target?: string, rel ?: string, style ?: React.CSSProperties
}) => {
  return (
    <a 
      className={`${styles.button} ${className}`} 
      href={href} 
      onClick={onClick} 
      download={download}
      target={target}
      rel={rel}
      style={style}
    >
      {children} 
    </a>
  );
}

export const RedButton = ({ children, href, className, onClick, download, target, rel } : {
  children: React.ReactNode, href?: string, className?: string, onClick?: () => void, download?: string, target?: string, rel ?: string
}) => {
  return (
    <a 
      className={`${styles.red} ${styles.button} ${className}`} 
      href={href} 
      onClick={onClick} 
      download={download}
      target={target}
      rel={rel}
    >
      {children} 
    </a>
  );
}