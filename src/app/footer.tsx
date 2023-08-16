import styles from './footer.module.css'
import Image from 'next/image'

export default function Footer() { 
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTexts}>
        <div className={styles.footer1}>
          TOMPED <br />
          Organizing Committee
        </div>
        <div className={styles.footer3}>
          W: <a href='https://tomped.emdash.one/'> https://tomped.emdash.one/ </a> <br />
          W: <a href='https://www.tomglass.co.kr/' target='_blank'> https://www.tomglass.co.kr/ </a><br />
          E: mped@emdash.one <br />
          T: +82.2.553.5795 / 070.7007.2257 <br />
        </div>
        <div className={styles.footer2}>
          <h1>Follow on social</h1>
          <a href="https://www.instagram.com/tomglass_kr/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/footer/instagram_icon.png" alt="logo" width={50} height={50}/>
          </a>
          <a href="https://www.instagram.com/tomglass_kr/" target="_blank" rel="noopener noreferrer">instagram.com/tomglass_kr/</a>
        </div>
      </div>
      <Image src="/images/footer/footer_image.png" alt="logo" width={100} height={100} layout="responsive" />
      <div className={styles.footerText}>
        © 2023 TOMPED SPECTACLE DESIGN COMPETITION
      </div>
    </footer>
  )
}