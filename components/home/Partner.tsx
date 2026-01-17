import Image from 'next/image'
import styles from './Partner.module.css'

export const Partner = () => {
  type PartnerItem =
    | { type: 'label'; text: string }
    | { type: 'logo'; title: string; src: string }

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

  const partnerLogos: PartnerItem[] = [
    { type: 'label', text: 'Technology Partners' },
    ...technologyPartners.map(partner => ({ type: 'logo' as const, ...partner })),
    { type: 'label', text: 'Community Support' },
    ...communitySupporters.map(partner => ({ type: 'logo' as const, ...partner }))
  ]

  const renderPartnerItem = (
    item: PartnerItem,
    suffix: string,
    isHidden: boolean
  ) => {
    if (item.type === 'label') {
      const [firstLine, ...rest] = item.text.split(' ')
      const secondLine = rest.join(' ')
      return (
        <span
          key={`${item.text}-${suffix}`}
          className={styles.partnerLogoLabel}
          aria-hidden={isHidden}
        >
          <span className={styles.partnerLogoLabelLine}>{firstLine}</span>
          <span className={styles.partnerLogoLabelLine}>{secondLine}</span>
        </span>
      )
    }

    return (
      <Image
        key={`${item.title}-${suffix}`}
        width={200}
        height={70}
        className={styles.partnerLogoImage}
        src={item.src}
        sizes="(max-width: 900px) 130px, (max-width: 1200px) 170px, 200px"
        alt={isHidden ? '' : item.title}
        aria-hidden={isHidden}
      />
    )
  }

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
            <div className={styles.partnerLogos}>
              <div className={styles.partnerLogosTrack}>
                {partnerLogos.map(item => renderPartnerItem(item, 'a', false))}
                {partnerLogos.map(item => renderPartnerItem(item, 'b', true))}
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
            sizes="(max-width: 900px) 70vw, (max-width: 1200px) 55vw, 540px"
            alt=""
          />
        </div>
        <p className={styles.partnerTagline}>we got what you need</p>
      </div>
    </section>
  )
}
