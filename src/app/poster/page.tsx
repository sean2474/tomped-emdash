'use client';
import Image from 'next/image'
import styles from './page.module.css'
import { Button } from '@/components/button/button'

export default function Home() {  
  return (
    <main className={styles.main}>
      <div className={styles.poster}>
        <Image src="/images/poster.png" alt="poster" width={500} height={500} layout="responsive" />
      </div>
      <div className={styles.posterButton}>
        <Button onClick={() => {window.close()}}>되돌아가기</Button>
      </div>
    </main>
  )
}