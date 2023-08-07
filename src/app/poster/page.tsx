import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {  
  return (
    <main className={styles.main}>
      <div className={styles.poster}>
        <Image src="/images/poster.jpg" alt="poster" width={500} height={500} layout="responsive" />
      </div>
    </main>
  )
}
