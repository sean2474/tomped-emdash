'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useRef } from 'react';
import DownArrowSVG from "@/components/svg/downArrowSVG"

export default function Home() {  

  const childRefs = useRef<HTMLElement[][]>([]);
  const addChildRef = (index: number) => {
    return (el: HTMLElement | null) => {
      if (!childRefs.current[index]) { 
        childRefs.current[index] = [];
      }
      if (el && !childRefs.current[index].includes(el)) {
        childRefs.current[index].push(el);
      }
    }
  }

  const sectionRefs = useRef<HTMLElement[]>([]);
  const addSectionRef = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  }

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionRefs.current.forEach((sectionRef) => {
              if (sectionRef === entry.target) {
                childRefs.current[sectionRefs.current.indexOf(sectionRef)].forEach((el) => {
                  if (el.classList.contains(styles.hidden)) el.classList.remove(styles.hidden);
                  el.classList.add(styles.visible);
                });
              }
            });
          } else {
            sectionRefs.current.forEach((sectionRef) => {
              if (sectionRef === entry.target) {
                childRefs.current[sectionRefs.current.indexOf(sectionRef)].forEach((el) => {
                  if (el.classList.contains(styles.visible)) el.classList.remove(styles.visible);
                  el.classList.add(styles.hidden);
                });
              }
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((sectionRef) => {
      observer.observe(sectionRef);
    });
    return () => {
      observer.disconnect();
    }
  }, []);

  const handleNext = () => {
    const pageview = document.querySelector('.' + styles.pageview);
    if (pageview) {
      const newScrollPosition = pageview.scrollLeft + pageview.clientWidth;
      pageview.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    const pageview = document.querySelector('.' + styles.pageview);
    if (pageview) {
      const newScrollPosition = pageview.scrollLeft - pageview.clientWidth;
      pageview.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.section} ref={addSectionRef} id="section1">
        <div className={styles.itemContainer}>
          <div className={`${styles.itemBox} ${styles.hidden}`} ref={addChildRef(0)}>
            <div className={styles.title}> 
              공모부분
            </div>
            <div className={styles.description}>
              [고등부] 고1 — 고3 <br />
              [대학부] 대1 — 대4
            </div>
          </div>
          <div className={`${styles.divider} ${styles.hidden}`} ref={addChildRef(0)}></div>
          <div className={`${styles.itemBox} ${styles.hidden}`} ref={addChildRef(0)}>
            <div className={styles.title}> 
              공모분야
            </div>
            <div className={styles.description}>
              2D <br />
              3D
            </div>
          </div>
          <div className={`${styles.divider} ${styles.hidden}`} ref={addChildRef(0)}></div>
          <div className={`${styles.itemBox} ${styles.hidden}`} ref={addChildRef(0)}>
            <div className={styles.title}> 
              공모 주제
            </div>
            <div className={styles.description}>
              자유주제
            </div>
          </div>
        </div>
        <a className={styles.downArrow} href='#section2' ref={addChildRef(0)}><DownArrowSVG /></a>
      </section>
      <section className={styles.section} ref={addSectionRef} id="section2">
        <a className={styles.prevButton} onClick={handlePrev} ref={addChildRef(1)}><DownArrowSVG /></a>
        <a className={styles.nextButton} onClick={handleNext} ref={addChildRef(1)}><DownArrowSVG /></a>
        <a className={`${styles.downArrow} ${styles.hidden}`} href='#section3' ref={addChildRef(1)}><DownArrowSVG /></a>
        <div className={styles.pageview} ref={addChildRef(1)}>
          <div className={styles.pageContainer}>
            <div className={styles.titleContainer}>
              <div className={styles.imageContainer}>
                <Image src="/images/price/top3price.png" alt="1" width={500} height={500} layout="responsive"></Image>
              </div>
              <div className={styles.title}>
                  Top 1-3 ICOSA 아이코사 상
              </div>
            </div>
            <div className={styles.descriptionContainer}>
              <div className={styles.descriptionBox}>
                <div className={styles.subtitle}>
                  2D 부문 ICOSA 혜택
                </div>
                <ul className={styles.description}>
                  <li>순위 발표 [Hall of Game]</li>
                  <li>심사위원의 맞춤 피드백</li>
                  <li>ICOSA 상장</li>
                  <li>각 수상자에게 톰글래스 스토어에서 원하는 제품 1개 증정</li>
                  <li>출품된 디자인이 입혀진 머그컵 증정 [by Conteenew]</li>
                </ul>
              </div>
              <div className={styles.descriptionBox}>
                <div className={styles.subtitle}>
                  3D 부문 ICOSA 혜택
                </div>
                <ul className={styles.description}>
                  <li>순위 발표 [Hall of Game]</li>
                  <li>심사위원의 맞춤 피드백</li>
                  <li>ICOSA 상장</li>
                  <li>각 수상자에게 톰글래스 스토어에서 원하는 제품 1개 증정</li>
                  <li>3D 프로토타입 모델 제작 </li>
                  <li>Rebuilder AI에서 3D 이미지화</li>
                  <li>TOM GLASS에서 수상작을 상품화하는 경우 소정의 소유권 이전 대금 지급 </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.pageContainer}>
            <div className={styles.titleContainer}>
              <div className={styles.imageContainer}>
                <Image src="/images/price/top12price.png" alt="1" width={500} height={500} layout="responsive"></Image>
              </div>
              <div className={styles.title}>
                  Top 4-12 OCTA 옥타 상
              </div>
            </div>
            <div className={styles.descriptionContainer}>
              <div className={styles.descriptionBox}>
                <div className={styles.subtitle}>
                  2D 부문 OCTA 혜택
                </div>
                <ul className={styles.description}>
                  <li>순위 발표 [Hall of Game]</li>
                  <li>심사위원의 한줄평 </li>
                  <li>OCTA 상장</li>
                  <li>각 수상자에게 톰글래스 스토어에서 50% 할인 쿠폰</li>
                  <li>출품된 디자인이 입혀진 머그컵 증정 [by Conteenew]</li>
                </ul>
              </div>
              <div className={styles.descriptionBox}>
                <div className={styles.subtitle}>
                  3D 부문 OCTA 혜택
                </div>
                <ul className={styles.description}>
                  <li>순위 발표 [Hall of Game]</li>
                  <li>심사위원의 한줄평</li>
                  <li>OCTA 상장</li>
                  <li>각 수상자에게 톰글래스 스토어에서 50% 할인 쿠폰</li>
                  <li>출품된 디자인에 입혀진 머그컵 증정 [by Conteenew]</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section} ref={addSectionRef} id="section3">
        <a className={styles.downArrow} href='#section4' ref={addChildRef(3)}><DownArrowSVG /></a>
      </section>
      <div className={styles.poster}>
        <Image src="/images/poster.jpg" alt="poster" width={500} height={500} layout="responsive"></Image>
      </div>
    </main>
  )
}
