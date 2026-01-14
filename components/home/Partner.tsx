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
        <div className={styles.hostGroup}>
         <Image src="/home/logo/Co-host.png" width={600}  height={100} alt=''>
         </Image>
        </div>

        <div className={styles.partnerBlock}>
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
          <div className={styles.partnerRow}>
            <span className={styles.partnerLabel}>Technology Partners</span>
            <div className={styles.partnerLogos}>
              {technologyPartners.map(partner => (
                <Image
                  key={partner.title}
                  width={120}
                  height={40}
                  className={styles.partnerLogoImage}
                  src={partner.src}
                  alt={partner.title}
                />
              ))}
            </div>
          </div>
          <div className={styles.partnerRow}>
            <span className={styles.partnerLabel}>Community Support</span>
            <div className={styles.partnerLogos}>
              {communitySupporters.map(partner => (
                <Image
                  key={partner.title}
                  width={120}
                  height={40}
                  className={styles.partnerLogoImage}
                  src={partner.src}
                  alt={partner.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
