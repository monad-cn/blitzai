import Image from 'next/image'
import styles from './Partner.module.css'

export const Partner = () => {
  const technologyPartners = [
    { title: 'KIMI', src: '/home/logo/kimi.png' },
    { title: 'Zhitu', src: '/home/logo/zp.png' },
    { title: 'YouWare', src: '/home/logo/youware.png' },
    { title: 'StepFun', src: '/home/logo/jieyuexc.png' },
    { title: 'Rokid', src: '/home/logo/rokid.png' },
    { title: 'SiliconFlow', src: '/home/logo/siliconflow.png' }
  ]

  const communitySupporters = [
    { title: 'Hackathon Weekly', src: '/home/logo/hackathoonweekly.png' },
    { title: 'Datawhale', src: '/home/logo/datawhale.png' },
    { title: 'WaytoAGI', src: '/home/logo/waytoAGI.png' },
    { title: 'Epic', src: '/home/logo/epic.png' },
    { title: 'AIGC Open', src: '/home/logo/aigc_open.png' },
    { title: 'Rust.cc', src: '/home/logo/rustcc.png' },
    { title: 'PyChina', src: '/home/logo/pychina.png' },
    { title: 'RTE Dev', src: '/home/logo/kaiyuanshe.png' }
  ]

  return (
    <section className={styles.partner}>
      <div className={styles.partnerArea}>
        <div className={styles.partnerBlock}>
          <div className={styles.partnerCharacters} aria-hidden="true">
            <Image
              width={300}
              height={300}
              className={`${styles.partnerCharacter} ${styles.partnerCharacterLeft}`}
              src="/home/manga-girl/manga_girl_1.png"
              sizes="(max-width: 900px) 120px, (max-width: 1200px) 22vw, 250px"
              alt=""
            />
            <Image
              width={300}
              height={300}
              className={`${styles.partnerCharacter} ${styles.partnerCharacterCenterLeft}`}
              src="/home/manga-girl/manga_girl_4.png" 
              sizes="(max-width: 900px) 110px, (max-width: 1200px) 18vw, 220px"
              alt=""
            />
            <Image
              width={300}
              height={300}
              className={`${styles.partnerCharacter} ${styles.partnerCharacterCenterRight}`}
             src="/home/manga-girl/manga_girl_2.png"
              sizes="(max-width: 900px) 120px, (max-width: 1200px) 24vw, 310px"
              alt=""
            />
            <Image
              width={300}
              height={300}
              className={`${styles.partnerCharacter} ${styles.partnerCharacterRight}`}
              src="/home/manga-girl/manga_girl_3.png"
              sizes="(max-width: 900px) 120px, (max-width: 1200px) 22vw, 250px"
              alt=""
            />
          </div>
          <span className={styles.partnerSideLeft} aria-hidden="true" />
          <span className={styles.partnerSideRight} aria-hidden="true" />
          <div className={styles.partnerRow}>
            <div  className={styles.partnerLabelContainer}>
                <p className={styles.partnerLabel}>Technology</p>
               <p className={styles.partnerLabel}>Partners</p>
            </div>
            <div className={styles.partnerLogos}>
              <div
                className={`${styles.partnerLogosTrack} ${styles.partnerLogosTrackRight}`}
              >
                {technologyPartners.map(partner => (
                  <Image
                    key={`${partner.title}-a`}
                    width={120}
                    height={40}
                    className={styles.partnerLogoImage}
                    src={partner.src}
                    sizes="(max-width: 900px) 90px, (max-width: 1200px) 110px, 120px"
                    alt={partner.title}
                  />
                ))}
                {technologyPartners.map(partner => (
                  <Image
                    key={`${partner.title}-b`}
                    width={120}
                    height={40}
                    className={styles.partnerLogoImage}
                    src={partner.src}
                    sizes="(max-width: 900px) 90px, (max-width: 1200px) 110px, 120px"
                    alt=""
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.partnerRow}>
            
            <div className={styles.partnerLabelContainer}>
              <p className={styles.partnerLabel}>Community</p>
              <p className={styles.partnerLabel}>Support</p>
            </div>
            <div className={styles.partnerLogos}>
              <div className={styles.partnerLogosTrack}>
                {communitySupporters.map(partner => (
                  <Image
                    key={`${partner.title}-a`}
                    width={120}
                    height={40}
                    className={styles.partnerLogoImage}
                    src={partner.src}
                    sizes="(max-width: 900px) 90px, (max-width: 1200px) 110px, 120px"
                    alt={partner.title}
                  />
                ))}
                {communitySupporters.map(partner => (
                  <Image
                    key={`${partner.title}-b`}
                    width={120}
                    height={40}
                    className={styles.partnerLogoImage}
                    src={partner.src}
                    sizes="(max-width: 900px) 90px, (max-width: 1200px) 110px, 120px"
                    alt=""
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hostGroup}>
          <Image
            src="/home/logo/Co-host.png"
            width={600}
            height={100}
            className={styles.hostLogoImage}
            sizes="(max-width: 900px) 70vw, (max-width: 1200px) 55vw, 600px"
            alt=""
          />
        </div>
        <p className={styles.partnerTagline}>we got what you need</p>
      </div>
    </section>
  )
}
