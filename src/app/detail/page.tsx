'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useRef, useState } from 'react';
import DownArrowSVG from "@/components/svg/downArrowSVG"
import { Button } from '@/components/button/button';

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

  const textToCopy = '우리 1005404327510';
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess('Copied to clipboard!');
      setTimeout(() => setCopySuccess(''), 1000)
    } catch (err) {
      setCopySuccess('Failed to copy!');
      setTimeout(() => setCopySuccess(''), 1000)
    }
  };

  const gridImageWidth = 220;
  const gridImageHeight = 220;

  return (
    <main className={styles.main}>
      <section className={styles.section} ref={addSectionRef} id="requirments">
        <a className={styles.downArrow} href='#apply' ref={addChildRef(0)}><DownArrowSVG /></a>
        <div className={styles.requirementsContainer}>
          <div className={styles.imageGrid}>
            <div className={`${styles.imageContainer} ${styles.hidden}`} ref={addChildRef(0)}><Image src="/images/photo/glass1.png" alt="1" width={gridImageWidth} height={gridImageHeight} /></div>
            <div className={`${styles.imageContainer} ${styles.hidden}`} ref={addChildRef(0)}><Image src="/images/photo/glass2.png" alt="1" width={gridImageWidth} height={gridImageHeight} /></div>
            <div className={`${styles.imageContainer} ${styles.hidden}`} ref={addChildRef(0)}><Image src="/images/photo/glass3.png" alt="1" width={gridImageWidth} height={gridImageHeight} /></div>
            <div className={`${styles.imageContainer} ${styles.hidden}`} ref={addChildRef(0)}><Image src="/images/photo/glass4.png" alt="1" width={gridImageWidth} height={gridImageHeight} /></div>
            <div className={`${styles.imageContainer} ${styles.extraImage} ${styles.hidden}`} ref={addChildRef(0)}><Image src="/images/photo/glass1.png" alt="1" width={gridImageWidth} height={gridImageHeight} /></div>
            <div className={`${styles.imageContainer} ${styles.extraImage} ${styles.hidden}`} ref={addChildRef(0)}><Image src="/images/photo/glass2.png" alt="1" width={gridImageWidth} height={gridImageHeight} /></div>
            <div className={`${styles.imageContainer} ${styles.extraImage} ${styles.hidden}`} ref={addChildRef(0)}><Image src="/images/photo/glass3.png" alt="1" width={gridImageWidth} height={gridImageHeight} /></div>
            <div className={`${styles.imageContainer} ${styles.extraImage} ${styles.hidden}`} ref={addChildRef(0)}><Image src="/images/photo/glass4.png" alt="1" width={gridImageWidth} height={gridImageHeight} /></div>
            <div className={`${styles.imageContainer} ${styles.extraImage} ${styles.hidden}`} ref={addChildRef(0)}><Image src="/images/photo/glass1.png" alt="1" width={gridImageWidth} height={gridImageHeight} /></div>
          </div>
          <div className={`${styles.requirements} ${styles.hidden}`} ref={addChildRef(0)}>
            <div className={styles.title}>접수 요건</div>
            <div className={styles.titleDescription}>참가자의 출품작은 오로지 참가자로 인해 <br /> 창작된 독창적인 작품이어야 합니다.</div>
            <div className={styles.subtitle}>모든 참가자는 다음 정보를 제공해야 합니다. </div>
            <ul className={styles.description}>
              <li>참가자와 보호자의 신상정보</li>
              <li>신청서 제출</li>
              <li>출전비 납부</li>
            </ul>
            <div className={styles.subtitle}>모든 작품은 다음 규정에 맞게 제출되어야 합니다. </div>
            <ul className={styles.description}>
              <li>신청서 한글 원본</li>
              <li>사진 크기: 최단 면은 최소 2,400 픽셀 및 300dpi 이상</li>
              <li>작품당 1-5 장의 이미지 (각 이미지 당 20MB 이하)</li>
              <li>3D 작품일 경우 다각도에서 렌더링 된 이미지 1-5장 제출 </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.section} ref={addSectionRef} id="apply">
        <div className={styles.receptionDescriptionContainer}>
          <div className={styles.title+" "+styles.hidden} ref={addChildRef(1)}>접수 방법</div>
          <div className={styles.descriptions}>
            <div className={styles.itemBox+" "+styles.hidden} ref={addChildRef(1)}>
              <div className={styles.subtitle}>
                1. 신청서 다운로드 
              </div>
              <div className={styles.description}>
                <ul>
                  <b> 필요한 정보 </b>
                  <li>참가자 성명 및 이메일</li>
                  <li>참가자 생년월일</li>
                  <li>보호자 성명 및 이메일</li>
                  <li>보호자 전화번호</li>
                  <li>주소 (선택사항)</li>
                  <li>학교 이름 (해당시)</li>
                  <li>학년 및 졸업 년도</li>
                  <li>참가 부문</li>
                </ul>
              </div>
              <div className={styles.button}>
                <Button href='/file/TOMPED 안경테 디자인 공모전 신청서 FV.docx' download="TOMPED 안경테 디자인 공모전 신청서 FV.docx"> 다운로드 </Button>
              </div>
            </div>
            <div className={styles.itemBox+" "+styles.hidden} ref={addChildRef(1)}>
              <div className={styles.subtitle}>
                2. 신청서 제출
              </div>
              <div className={styles.description}>
                <p>참가자는 참가 분야를 선택한 후 접수 요건에 맞게 작품을 제출해야 합니다.</p>
              </div>
              <div className={styles.button}>
                <Button href='https://www.emdash.one/enter-tomped'> 제출 </Button>
              </div>
            </div>
            <div className={styles.itemBox+" "+styles.hidden} ref={addChildRef(1)}>
              <div className={styles.subtitle}> 3. 출전비 납부 </div>
              <div className={styles.description}>
                <p>복수 제출의 경우, 각 작품 당 별도의 신청서를 작성해야 하며, 참가비 또한 개별적으로 지불해야 합니다.</p>
                <p> 
                  2D: 25,000 KRW <br />
                  3D: 50,000 KRW 
                </p>
                <p> 
                입금자명: 참가자 성명<br />
                은행명: Woori Bank/우리은행예금<br />
                주: EMDASH<br />
                (주)엠대시 통장 계좌: 1005-404-327510<br />
                은행 식별 코드: HVBKKRSEXXX<br />
                </p>
              </div>
              <div className={styles.button}>
                <Button onClick={handleCopy}> 계좌복사 </Button>
              </div>
            </div>
          </div>
        </div>
        <a className={`${styles.downArrow} ${styles.hidden}`} href='#judgement' ref={addChildRef(1)}><DownArrowSVG /></a>
        {copySuccess && <div className={styles.copyMessage} style={{ backgroundColor: copySuccess=='Copied to clipboard!'?'green':'red' }}>{copySuccess}</div>}
      </section>
      <section className={styles.section} ref={addSectionRef} id="judgement">
        <div className={styles.judgement}>
          <div className={styles.title+" "+styles.hidden} ref={addChildRef(2)}>
            심사 기준표
          </div>
          <div className={styles.titleDescription+" "+styles.hidden} ref={addChildRef(2)}>
            심사 위원회는 TOM GLASS 임원진들로 구성됩니다. TOMPED의 심사 기준 및 기준치는 다음과 같습니다. 
          </div>
          <div className={styles.container}>
            <div className={styles.itemBox+" "+styles.hidden} ref={addChildRef(2)}>
              <div className={styles.subtitle}>
                2D
              </div>
              <div className={styles.description}>
                <p> 디자인의 창의성 및 독창성 [50%] </p>
                <p> 혁신성 [20%] </p>
                <p> 아이디어의 명확성 [20%] </p>
                <p> 타당성 (기능성 및 실용성) [10%] </p>
              </div>
            </div>
            <div className={styles.itemBox+" "+styles.hidden} ref={addChildRef(2)}>
              <div className={styles.subtitle}>
                3D
              </div>
              <div className={styles.description}>
                <p> 디자인의 창의성 및 독창성 [40%] </p>
                <p> 혁신성 [20%] </p>
                <p> 아이디어의 명확성 [20%] </p>
                <p> 타당성 (기능성 및 실용성) [20%] </p>
              </div>
            </div>
          </div>
        </div>
        <a className={`${styles.downArrow} ${styles.hidden}`} href='#price' ref={addChildRef(2)}><DownArrowSVG /></a>
      </section>
      <section className={`${styles.section} ${styles.expandedHeight} ${styles.expandedMobileHeight}`} id="price">
        <div className={styles.pageview}>
          <div className={styles.pageContainer} ref={addSectionRef}>
            <div className={`${styles.titleContainer} ${styles.hidden}`} ref={addChildRef(3)}>
              <div className={styles.imageContainer}>
                <Image src="/images/price/top3price.png" alt="1" width={500} height={500} layout="responsive"></Image>
              </div>
              <div className={styles.title}>
                  Top 1-3 ICOSA 아이코사 상
              </div>
            </div>
            <div className={`${styles.descriptionContainer} ${styles.hidden}`} ref={addChildRef(3)}>
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
          <div className={styles.pageContainer} ref={addSectionRef}>
            <div className={`${styles.titleContainer} ${styles.hidden}`} ref={addChildRef(4)}>
              <div className={styles.imageContainer}>
                <Image src="/images/price/top12price.png" alt="1" width={500} height={500} layout="responsive"></Image>
              </div>
              <div className={styles.title}>
                  Top 4-12 OCTA 옥타 상
              </div>
            </div>
            <div className={`${styles.descriptionContainer} ${styles.hidden}`} ref={addChildRef(4)}>
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
        <a className={`${styles.prevButton}`}onClick={handlePrev}><DownArrowSVG /></a>
        <a className={`${styles.nextButton}`} onClick={handleNext}><DownArrowSVG /></a>
      </section>
    </main>
  )
}
