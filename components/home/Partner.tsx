 
import Image from 'next/image'
import styles from './Partner.module.css'
 

export const Partner =   () => {
  return (
    
    <section>
       <div className={styles.partnerArea}>
        <div className={styles.hostGroup}>
          <span className={styles.hostLabel}>Co-host</span>
          <span className={styles.hostLogo}>segmentfault</span>
          <span className={styles.hostX}>x</span>
          <span className={styles.hostLogoOutline}>VibeFriends</span>
        </div>
        <div className={styles.partnerCharacters} aria-hidden="true">
          <Image
            width={300}
            height={300}
            className={`${styles.partnerCharacter} ${styles.partnerCharacterLeft}`}
            src="/home/manga-girl/manga_girl_1.png"
            alt=""
          />
          <Image
            width={300}
            height={300}
            className={`${styles.partnerCharacter} ${styles.partnerCharacterCenterLeft}`}
            src="/home/manga-girl/manga_girl_2.png"
            alt=""
          />
          <Image
            width={300}
            height={300}
            className={`${styles.partnerCharacter} ${styles.partnerCharacterCenterRight}`}
            src="/home/manga-girl/manga_girl_4.png"
            alt=""
          />
          <Image
            width={300}
            height={300}
            className={`${styles.partnerCharacter} ${styles.partnerCharacterRight}`}
            src="/home/manga-girl/manga_girl_3.png"
            alt=""
          />
        </div>

        <div className={styles.partnerBlock}>
          <div className={styles.partnerRow}>
            <span className={styles.partnerLabel}>Technology Partners</span>
            <div className={styles.partnerLogos}>
              <span>KIMI</span>
              <span>Zhitu</span>
              <span>YouWare</span>
              <span>StepFun</span>
              <span>Rokid</span>
              <span>SiliconFlow</span>
            </div>
          </div>
          <div className={styles.partnerRow}>
            <span className={styles.partnerLabel}>Community Support</span>
            <div className={styles.partnerLogos}>
              <span>Hackathon Weekly</span>
              <span>Datawhale</span>
              <span>WaytoAGI</span>
              <span>Epic</span>
              <span>AIGC Open</span>
              <span>Rust.cc</span>
              <span>PyChina</span>
              <span>RTE Dev</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
 