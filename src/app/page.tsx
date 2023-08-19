'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useRef, useState } from 'react';
import DownArrowSVG from "@/components/svg/downArrowSVG"
import { RedButton, Button } from '@/components/button/button';
import { useMediaQuery } from 'react-responsive';

export default function Home() {  

  const shouldTitleDescriptionBreakLine = useMediaQuery({ query: '(min-width: 425px)' })
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
    location.href = '#prize'
  }
  const checkJudgeCiteria = () => {
    location.href = '#judgement'
  }
  const checkApplication = () => {
    location.href = '#apply'
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
      <section className={`${styles.titleSection}`} ref={addSectionRef} id="title">
        <div className={styles.imagesContainer}>
          <div className={`${styles.image}`} ref={addChildRef(0)}>
            <Image src="/images/content-1.jpg" alt="poster" width={500} height={500} layout="responsive"></Image>
          </div>
          <div className={`${styles.image}`} ref={addChildRef(0)}>
            <div className={styles.title}>
              TOMPED
            </div>
            <div className={styles.p}>
              TOM GLASS  및 EMDASH 사가 주최하는 TOMPED 국제 공모전은 고등학생 및 대학생들을 위해 TOM GLASS 임원진들을 필두로 우수한 작품들을 선발하고 이에 대한 심사평을 제공하는 대회입니다. 
            </div>
          </div>
          <div className={`${styles.image}`} ref={addChildRef(0)}>
            <Image src="/images/content-2.jpg" alt="poster" width={500} height={500} layout="responsive"></Image>
          </div>
          <div className={`${styles.posterButton}`} ref={addChildRef(0)}>
            <Button href='/poster' target="_blank">포스터 보기</Button>
          </div>
        </div>
      </section>
      <section className={styles.section} ref={addSectionRef} id="brand-explain"> 
        <div className={styles.brandExplanationContainer}>
          <div className={styles.image}>
            <Image src="/images/icons/main-icon.png" alt="poster" width={500} height={500} layout="responsive"></Image>
          </div>
          <div className={styles.brandExplanation+" "+styles.hidden} ref={addChildRef(1)}>
            <div className={styles.p}>
              <p>어려운 시기에도 자신만의 길을 찾아내어 살아가는 사람</p>
              <p>다른 사람의 기준보다 내 자신의 기준이 중요한 사람 </p>
              <p>겉으로 보여지는 것보다 내면의 가치를 보려고 하는 사람</p>
            </div>
            <div className={styles.p}>
              <p><span className={styles.red}>오늘도 자신의 삶을 그려가는 모두가 TOM 입니다.</span></p>
            </div>
            <div className={styles.p}>
              <p>톰 글래스는 평범하지만 개성을 가진,</p>
              <p>자신만의 소신이 살아있는,</p>
              <p>그런 TOM의 길을 함께 하고자 하는 마음에서 시작되었습니다.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.competitionExplainSection} ref={addSectionRef} id="competition-explain">
        <div className={styles.backgroundImage}>
          <Image
            src="/images/bg/bg2.png"
            alt="메인 배경 이미지"
            layout="fill"
            objectFit="cover"
            objectPosition="center" 
          />
        </div>
        <div className={styles.title} ref={addChildRef(2)}> 
          MPED INT&apos;L ART&DESIGN AWARDS
        </div>
        <div className={styles.description} ref={addChildRef(2)}>
          MPED 국제 아트앤디자인 공모전은 전 세계 학생 아티스트들의 우수함과 독창성을 주목하며 찬양합니다. 
        </div>
        <div className={styles.description} ref={addChildRef(2)}>
          예술적 열정과 탐구심 그리고 정진력(精進力)을
          기반으로 한 작품들을 선정하며 이를 국제 무대에 선보일 수 있는 플랫폼을 제공합니다.
        </div>
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
          <div className={`${styles.divider}`}></div>
          <div className={`${styles.itemBox} ${styles.hidden}`} ref={addChildRef(3)}>
            <div className={styles.title}> 
              공모분야
            </div>
            <div className={styles.description}>
              2D <br />
              3D
            </div>
          </div>
          <div className={`${styles.divider}`}></div>
          <div className={`${styles.itemBox} ${styles.hidden}`} ref={addChildRef(3)}>
            <div className={styles.title}> 
              공모주제
            </div>
            <div className={styles.description}>
              자유주제
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.competitionDetail2Section}`} ref={addSectionRef} id="competition-detail2">
        <div className={styles.competitionDetail2Container}>
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
                  <div className={styles.title}>공동혜택</div>
                  <ul className={styles.description}>
                    <li>순위발표 [1-12위 까지]</li>
                    <li>심사위원 맞춤 피드백</li>
                    <li>출품 디자인 맞춤 제작 머그컵</li>
                  </ul>
                  <a onClick={checkBenefit}>혜택 확인하기</a>
                </div>
              </div>
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.button} ref={addChildRef(4)}>
              <Button href='/file/TOMPED_안경테_디자인_공모전_신청서.docx' download="TOMPED 안경테 디자인 공모전 신청서 FV.docx"> 신청서 다운로드 </Button>
            </div>
            <div className={styles.button} ref={addChildRef(4)}>
              <Button href='https://www.emdash.one/enter-tomped' target="_blank" rel="noopener noreferrer"> 신청서 제출 </Button>
            </div>
            <div className={styles.button} ref={addChildRef(4)}>
              <RedButton href='#requirements'> 자세히보기 </RedButton>
            </div>
          </div>
        </div>
      </section>
      <section ref={addSectionRef} id="requirements">
        <div className={styles.requirementsContainer}>
          <div className={styles.imageGrid}>
            <div className={`${styles.imageContainer} ${styles.hidden}`} ref={addChildRef(5)}><Image src="/images/photo/glass1.png" alt="1" width={gridImageWidth} height={gridImageHeight} /></div>
            <div className={`${styles.imageContainer} ${styles.hidden}`} ref={addChildRef(5)}><Image src="/images/photo/glass2.png" alt="1" width={gridImageWidth} height={gridImageHeight} /></div>
            <div className={`${styles.imageContainer} ${styles.hidden}`} ref={addChildRef(5)}><Image src="/images/photo/glass3.png" alt="1" width={gridImageWidth} height={gridImageHeight} /></div>
            <div className={`${styles.imageContainer} ${styles.hidden}`} ref={addChildRef(5)}><Image src="/images/photo/glass4.png" alt="1" width={gridImageWidth} height={gridImageHeight} /></div>
            <div className={`${styles.imageContainer} ${styles.extraImage} ${styles.hidden}`} ref={addChildRef(5)}><Image src="/images/photo/glass1.png" alt="1" width={gridImageWidth} height={gridImageHeight} /></div>
            <div className={`${styles.imageContainer} ${styles.extraImage} ${styles.hidden}`} ref={addChildRef(5)}><Image src="/images/photo/glass2.png" alt="1" width={gridImageWidth} height={gridImageHeight} /></div>
            <div className={`${styles.imageContainer} ${styles.extraImage} ${styles.hidden}`} ref={addChildRef(5)}><Image src="/images/photo/glass3.png" alt="1" width={gridImageWidth} height={gridImageHeight} /></div>
            <div className={`${styles.imageContainer} ${styles.extraImage} ${styles.hidden}`} ref={addChildRef(5)}><Image src="/images/photo/glass4.png" alt="1" width={gridImageWidth} height={gridImageHeight} /></div>
            <div className={`${styles.imageContainer} ${styles.extraImage} ${styles.hidden}`} ref={addChildRef(5)}><Image src="/images/photo/glass1.png" alt="1" width={gridImageWidth} height={gridImageHeight} /></div>
          </div>
          <div className={`${styles.requirements} ${styles.hidden}`} ref={addChildRef(5)}>
            <div className={styles.title}>접수 요건</div>
            <div className={styles.titleDescription}>참가자의 출품작은 오로지 참가자로 인해 {shouldTitleDescriptionBreakLine && <br />} 창작된 독창적인 작품이어야 합니다.</div>
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
          <div className={styles.title+" "+styles.hidden} ref={addChildRef(6)}>접수 방법</div>
          <div className={styles.descriptions}>
            <div className={styles.itemBox+" "+styles.hidden} ref={addChildRef(6)}>
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
            <div className={styles.itemBox+" "+styles.hidden} ref={addChildRef(6)}>
              <div className={styles.subtitle}>
                2. 신청서 제출
              </div>
              <div className={styles.description}>
                <p>참가자는 참가 분야를 선택한 후 접수 요건에 맞게 작품을 제출해야 합니다.</p>
              </div>
              <div className={styles.button}>
                <Button href='https://www.emdash.one/enter-tomped' target="_blank" rel="noopener noreferrer"> 제출 </Button>
              </div>
            </div>
            <div className={styles.itemBox+" "+styles.hidden} ref={addChildRef(6)}>
              <div className={styles.subtitle}> 3. 출전비 납부 </div>
              <div className={styles.description}>
                <p>복수 제출의 경우, 각 작품 당 별도의 신청서를 작성해야 하며, 참가비 또한 개별적으로 지불해야 합니다.</p>
                <p> 
                  2D: 25,000 KRW <br />
                  3D: 50,000 KRW 
                </p>
                <p> 
                  입금자명: 참가자 성명 <br />
                  은행명: 우리은행 <br />
                  예금주: (주)엠대시 <br />
                  통장계좌번호: 1005-404-327510
                </p>
              </div>
              <div className={styles.button}>
                <Button onClick={handleCopy}> 계좌복사 </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section} ref={addSectionRef} id="judgement">
        <div className={styles.judgement}>
          <div className={styles.title+" "+styles.hidden} ref={addChildRef(7)}>
            심사 기준표
          </div>
          <div className={styles.titleDescription+" "+styles.hidden} ref={addChildRef(7)}>
            심사 위원회는 TOM GLASS 임원진들로 구성됩니다. TOMPED의 심사 기준 및 기준치는 다음과 같습니다. 
          </div>
          <div className={styles.container}>
            <div className={styles.itemBox+" "+styles.hidden} ref={addChildRef(7)}>
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
            <div className={styles.itemBox+" "+styles.hidden} ref={addChildRef(7)}>
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
      </section>
      <section className={`${styles.prize}`} id="prize" >
        <div className={styles.pageview}>
          <div className={styles.pageContainer}>
            <div className={`${styles.titleContainer}`}>
              <div className={styles.title}>
                  Top 1-3 ICOSA 아이코사 상
              </div>
              <div className={styles.imageContainer}>
                <Image src="/images/prize/top3prize.png" alt="1" width={500} height={500} layout="responsive"></Image>
              </div>
            </div>
            <div className={`${styles.descriptionContainer}`}>
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
                <div className={styles.examplebutton}>
                  <Button href='https://vrin.co.kr/guide/ko' target="_blank" rel="noopener noreferrer" style={{width: 230}}>&nbsp;3D 이미지 예시 (VRIN)</Button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.pageContainer}>
            <div className={`${styles.titleContainer}`}>
              <div className={styles.title}>
                  Top 4-12 OCTA 옥타 상
              </div>
              <div className={styles.imageContainer}>
                <Image src="/images/prize/top12prize.png" alt="1" width={500} height={500} layout="responsive"></Image>
              </div>
            </div>
            <div className={`${styles.descriptionContainer}`}>
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
