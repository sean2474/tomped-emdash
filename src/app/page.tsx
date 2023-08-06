'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useRef, useState } from 'react';
import DownArrowSVG from "@/components/svg/downArrowSVG"
import { RedButton, Button } from '@/components/button/button';

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

  const checkBenefit = () => {
    location.href = '/detail#price'
  }
  const checkJudgeCiteria = () => {
    location.href = '/detail#judgement'
  }
  const checkApplication = () => {
    location.href = '/detail#apply'
  }

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionRefs.current.forEach((sectionRef) => {
              if (sectionRef === entry.target) {
                if(childRefs.current[sectionRefs.current.indexOf(sectionRef)] !== undefined) 
                  childRefs.current[sectionRefs.current.indexOf(sectionRef)].forEach((el) => {
                    if (el.classList.contains(styles.hidden)) el.classList.remove(styles.hidden);
                    el.classList.add(styles.visible);
                  });
              }
            });
          } else {
            sectionRefs.current.forEach((sectionRef) => {
              if (sectionRef === entry.target) {
                if (childRefs.current[sectionRefs.current.indexOf(sectionRef)] !== undefined) 
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

  return (
    <main className={styles.main}>
      <section className={styles.section} ref={addSectionRef} id="title">
        <div className={styles.imageContainer}>
          <div className={`${styles.image} ${styles.hidden}`} ref={addChildRef(0)}>
            <Image src="/images/content-1.jpg" alt="poster" width={500} height={500} layout="responsive"></Image>
          </div>
          <div className={`${styles.image} ${styles.hidden}`} ref={addChildRef(0)}>
            <div className={styles.title}>
              TOMPED
            </div>
            <div className={styles.p}>
              TOM GLASS  및 EMDASH 사가 주최하는 TOMPED 국제 공모전은 고등학생 및 대학생들을 위해 TOM GLASS 임원진들을 필두로 우수한 작품들을 선발하고 이에 대한 심사평을 제공하는 대회입니다. 
            </div>
          </div>
          <div className={`${styles.image} ${styles.hidden}`} ref={addChildRef(0)}>
            <Image src="/images/content-2.jpg" alt="poster" width={500} height={500} layout="responsive"></Image>
          </div>
          <a className={styles.downArrow} href='#brand-explain' ref={addChildRef(0)}>
            <DownArrowSVG />
          </a>
      </div>
      </section>
      <section className={styles.section} ref={addSectionRef} id="brand-explain"> 
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
        <a className={styles.downArrow} href='#competition-explain' ref={addChildRef(1)}>
          <DownArrowSVG />
        </a>
      </section>
      <section className={styles.section} ref={addSectionRef} id="competition-explain">
        <div className={styles.title} ref={addChildRef(2)}> 
          MPED INT&apos;L ART&DESIGN AWARDS
        </div>
        <div className={styles.description} ref={addChildRef(2)}>
          MPED 국제 아트앤디자인 공모전은 전 세계 학생 아티스트들의 우수함과 독창성을 주목하며 찬양합니다. 예술적 열정과 탐구심 그리고 정진력(精進力)을
          기반으로 한 작품들을 선정하며 이를 국제 무대에 선보일 수 있는 플랫폼을 제공합니다. TOMPED SPECTACLE DESIGN COMPETITION
        </div>
          <a className={styles.downArrow} href='#competition-detail1' ref={addChildRef(2)}>
            <DownArrowSVG />
          </a>
      </section>
      <section className={styles.section} ref={addSectionRef} id="competition-detail1">
        <div className={styles.itemContainer}>
          <div className={`${styles.itemBox} ${styles.hidden}`} ref={addChildRef(3)}>
            <div className={styles.title}> 
              공모부분
            </div>
            <div className={styles.description}>
              [고등부] 고1 — 고3 <br />
              [대학부] 대1 — 대4
            </div>
          </div>
          <div className={`${styles.divider} ${styles.hidden}`} ref={addChildRef(3)}></div>
          <div className={`${styles.itemBox} ${styles.hidden}`} ref={addChildRef(3)}>
            <div className={styles.title}> 
              공모분야
            </div>
            <div className={styles.description}>
              2D <br />
              3D
            </div>
          </div>
          <div className={`${styles.divider} ${styles.hidden}`} ref={addChildRef(3)}></div>
          <div className={`${styles.itemBox} ${styles.hidden}`} ref={addChildRef(3)}>
            <div className={styles.title}> 
              공모 주제
            </div>
            <div className={styles.description}>
              자유주제
            </div>
          </div>
        </div>
        <a className={styles.downArrow} href='#competition-detail2' ref={addChildRef(3)}><DownArrowSVG /></a>
      </section>
      <section className={`${styles.section} ${styles.expandedMobileHeight}`} ref={addSectionRef} id="competition-detail2">
        <div className={styles.section3Container}>
          <div className={styles.title} ref={addChildRef(4)}>
            TOMPED SPECTACLE DESIGN COMPETITION
          </div>
          <div className={styles.competitionDescriptions}>
              <div className={styles.itemBox} ref={addChildRef(4)}>
                <div className={styles.image}>
                  <Image src="/images/icons/glassicon1.png" alt="icon" width={500} height={500} layout="responsive"></Image>
                </div>
                <div className={styles.content}>
                  <div className={styles.title}>심사기준</div>
                  <ul className={styles.description}>
                    <li>디자인의 창의성 및 독창성</li>
                    <li>혁신성</li>
                    <li>아이디어의 명확성</li>
                    <li>타당성 (기능 및 실용성)</li>
                  </ul>
                  <a onClick={checkJudgeCiteria}>상세기준 확인하기</a>
                </div>
              </div>
              <div className={styles.itemBox} ref={addChildRef(4)}>
                <div className={styles.image}>
                  <Image src="/images/icons/glassicon2.png" alt="icon" width={500} height={500} layout="responsive"></Image>
                </div>
                <div className={styles.content}>
                  <div className={styles.title}>접수기간</div>
                  <div className={styles.description}>
                    2023년 8월 8일 — <br />
                    2023년 10월 01일
                  </div>
                  <a onClick={checkApplication}>접수방법 확인하기</a>
                </div>
              </div>
              <div className={styles.itemBox} ref={addChildRef(4)}>
                <div className={styles.image}>
                  <Image src="/images/icons/glassicon3.png" alt="icon" width={500} height={500} layout="responsive"></Image>
                </div>
                <div className={styles.content}>
                  <div className={styles.title}>공동 혜택</div>
                  <ul className={styles.description}>
                    <li>순위발표 [1-12위 까지]</li>
                    <li>심사위원 맞춤 피드백</li>
                    <li>출품 디자인 맞춤 제작 머그컵</li>
                  </ul>
                  <a onClick={checkBenefit}>혜텍 확인하기</a>
                </div>
              </div>
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.button} ref={addChildRef(4)}>
              <Button href='/file/TOMPED 안경테 디자인 공모전 신청서 FV.docx' download="TOMPED 안경테 디자인 공모전 신청서 FV.docx"> 신청서 다운로드 </Button>
            </div>
            <div className={styles.button} ref={addChildRef(4)}>
              <Button href='https://www.emdash.one/enter-tomped'> 신청서 제출 </Button>
            </div>
            <div className={styles.button} ref={addChildRef(4)}>
              <RedButton href='/detail'> 자세히보기 </RedButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
