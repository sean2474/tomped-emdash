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
                  el.classList.remove(styles.hidden);
                  el.classList.add(styles.visible);
                });
              }
            });
          } else {
            sectionRefs.current.forEach((sectionRef) => {
              if (sectionRef === entry.target) {
                childRefs.current[sectionRefs.current.indexOf(sectionRef)].forEach((el) => {
                  el.classList.remove(styles.visible);
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

  return (
    <main className={styles.main}>
      <section className={styles.section} ref={addSectionRef} id="section0">
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <Image src="/images/content-1.jpg" alt="poster" width={500} height={500} layout="responsive"></Image>
          </div>
          <div className={styles.image}>
            <div className={styles.title}>
              TOMPED
            </div>
            <div className={styles.p}>
              TOM GLASS  및 EMDASH 사가 주최하는 TOMPED 국제 공모전은 고등학생 및 대학생들을 위해 TOM GLASS 임원진들을 필두로 우수한 작품들을 선발하고 이에 대한 심사평을 제공하는 대회입니다. 
            </div>
          </div>
          <div className={styles.image}>
            <Image src="/images/content-2.jpg" alt="poster" width={500} height={500} layout="responsive"></Image>
          </div>
          <a className={styles.downArrow} href='#section1' ref={addChildRef(0)}>
            <DownArrowSVG />
          </a>
      </div>
      </section>
      <section className={styles.section} ref={addSectionRef} id="section1"> 
        <div className={styles.brandExplanationContainer}>
          <div className={styles.image} ref={addChildRef(1)}>
            <Image src="/images/icons/main-icon.png" alt="poster" width={500} height={500} layout="responsive"></Image>
          </div>
          <div className={styles.brandExplanation} ref={addChildRef(1)}>
            <div className={styles.p}>
              어려운 시기에도 자신만의 길을 찾아내어 살아가는 사람 <br />
              다른 사람의 기준보다 내 자신의 기준이 중요한 사람 <br />
              겉으로 보여지는 것보다 내면의 가치를 보려고 하는 사람
            </div>
            <div className={styles.p}>
              <span className={styles.red}>오늘도 자신의 삶을 그려가는 모두가 TOM 입니다.</span>
            </div>
            <div className={styles.p}>
              톰 글래스는 평범하지만 개성을 가진,<br />
              자신만의 소신이 살아있는,<br />
              그런 TOM의 길을 함께 하고자 하는 마음에서 시작되었습니다.
            </div>
          </div>
        </div>
        <a className={styles.downArrow} href='#section2' ref={addChildRef(1)}>
          <DownArrowSVG />
        </a>
      </section>
      <section className={styles.section} ref={addSectionRef} id="section2">
        <div className={styles.title} ref={addChildRef(2)}> 
          MPED INT&apos;L ART&DESIGN AWARDS
        </div>
        <div className={styles.description} ref={addChildRef(2)}>
          MPED 국제 아트앤디자인 공모전은 전 세계 학생 아티스트들의 우수함과 독창성을 주목하며 찬양합니다. 예술적 열정과 탐구심 그리고 정진력(精進力)을
          기반으로 한 작품들을 선정하며 이를 국제 무대에 선보일 수 있는 플랫폼을 제공합니다. TOMPED SPECTACLE DESIGN COMPETITION
        </div>
          <a className={styles.downArrow} href='#section3' ref={addChildRef(2)}>
            <DownArrowSVG />
          </a>
      </section>
      <section className={styles.section} ref={addSectionRef} id="section3">
        <div className={styles.section3Container}>
          <div className={styles.title} ref={addChildRef(3)}>
            TOMPED SPECTACLE DESIGN COMPETITION
          </div>
          <div className={styles.competitionDescriptions}>
              <div className={styles.itemBox} ref={addChildRef(3)}>
                <div className={styles.image}>
                  <Image src="/images/icons/glass-icon-1.png" alt="icon" width={500} height={500} layout="responsive"></Image>
                </div>
                <div className={styles.title}>심사기준</div>
                <ul className={styles.description}>
                  <li>디자인의 창의성 및 독창성</li>
                  <li>혁신성</li>
                  <li>아이디어의 명확성</li>
                  <li>타당성 (기능 및 실용성)</li>
                </ul>
              </div>
              <div className={styles.itemBox} ref={addChildRef(3)}>
                <div className={styles.image}>
                  <Image src="/images/icons/glass-icon-2.png" alt="icon" width={500} height={500} layout="responsive"></Image>
                </div>
                <div className={styles.title}>접수기간</div>
                <div className={styles.description}>
                  2023년 8월 8일 — <br />
                  2023년 10월 01일
                </div>
              </div>
              <div className={styles.itemBox} ref={addChildRef(3)}>
                <div className={styles.image}>
                  <Image src="/images/icons/glass-icon-3.png" alt="icon" width={500} height={500} layout="responsive"></Image>
                </div>
                <div className={styles.title}>공동 혜택</div>
                <ul className={styles.description}>
                  <li>순위발표 [1-12위 까지]</li>
                  <li>심사위원 맞춤 피드백</li>
                  <li>출품 디자인 맞춤 제작 머그컵</li>
                </ul>
              </div>
          </div>
          <div className={styles.buttonContainer}>
            <a className={styles.button} ref={addChildRef(3)} href='/file/TOMPED 안경테 디자인 공모전 신청서 FV.docx' download="TOMPED 안경테 디자인 공모전 신청서 FV.docx"> 신청서 다운로드 </a>
            <a className={styles.button} ref={addChildRef(3)} href='https://www.emdash.one/enter-tomped'> 신청서 제출 </a>
            <a className={`${styles.button} ${styles.moreInfo}`} ref={addChildRef(3)} href='/detail'> 자세히보기 </a>
          </div>
        </div>
      </section>
    </main>
  )
}
