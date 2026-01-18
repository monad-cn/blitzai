import Image from 'next/image'
import type { CSSProperties } from 'react'
import styles from './Partner.module.css'

export const Partner = () => {
  type PartnerItem =
    | { type: 'label'; text: string }
    | { type: 'logo'; title: string; src: string; logoHeight?: string }

  const technologyPartners = [
    { title: 'KIMI', src: '/home/logo/kimi.svg', },
    { title: 'Zhipu', src: '/home/logo/zp.svg' ,logoHeight:'1.8rem'},
    { title: 'DouBao', src: '/home/logo/doubao.svg' },
    { title: 'YouWare', src: '/home/logo/youware.svg' }, 

    { title: 'StepFun', src: '/home/logo/jieyuexc.svg' },
    { title: 'Rokid', src: '/home/logo/rokid.svg',logoHeight:'2rem' },
    { title: 'SiliconFlow', src: '/home/logo/siliconflow.svg' },
    { title: 'OshwHub', src: '/home/logo/oshwhub.svg' }
  ]

  const VC = [
    { title: 'Delphi Ventures', src: '/home/logo/vc/delphi_ventures.svg' },
    { title: 'Vertext', src: '/home/logo/vc/vertext.svg' },
    { title: 'Archetype', src: '/home/logo/vc/archetype.svg' ,logoHeight:'2rem'},
    { title: 'Pantera', src: '/home/logo/vc/pantera.svg',logoHeight:'2rem' },
    { title: 'CoinFund', src: '/home/logo/vc/coinfund.svg',logoHeight:'1.6rem' },
    { title: 'EnlightCapital', src: '/home/logo/vc/enlightcapital.svg',logoHeight:'2rem' },
    { title: 'ZhiYuanCT', src: '/home/logo/vc/zhiyuanct.svg' }
    // { title: 'Miracleplus', src: '/home/logo/vc/miracleplus.svg' }
  ]

  const communitySupporters = [
    { title: 'AIGC Open', src: '/home/logo/aigc_open.svg' },
    { title: 'Bonjour', src: '/home/logo/bonjour.svg' },
    { title: 'Datawhale', src: '/home/logo/datawhale.svg' },
    { title: 'Epic', src: '/home/logo/epic.svg' },
    { title: 'GuiXingRen', src: '/home/logo/guixingren.svg' },
    { title: 'Hackathon Weekly', src: '/home/logo/hackathoonweekly.svg' },
    { title: 'RTE', src: '/home/logo/rte.svg',logoHeight:'2rem' },
    { title: 'KaiYuanShe', src: '/home/logo/kaiyuanshe.svg' },
    { title: 'MoonBit', src: '/home/logo/moonbit.svg' },
    { title: 'PyChina', src: '/home/logo/pychina.svg' },
    { title: 'QingKe', src: '/home/logo/qingke.svg' ,logoHeight:'2rem'},
    { title: 'Rust.cc', src: '/home/logo/rustcc.svg' },
    { title: 'WaytoAGI', src: '/home/logo/waytoAGI.svg' }
  ]

  const partnerLogos: PartnerItem[] = [
    { type: 'label', text: 'Technology Partners' },
    ...technologyPartners.map(partner => ({
      type: 'logo' as const,
      ...partner
    })),
    { type: 'label', text: 'VC', ...VC },
    ...VC.map(partner => ({
      type: 'logo' as const,
      ...partner
    })),
    { type: 'label', text: 'Community Support' },
    ...communitySupporters.map(partner => ({
      type: 'logo' as const,
      ...partner
    }))
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
        width={180}
        height={60}
        className={styles.partnerLogoImage}
        style={
          item.logoHeight
            ? ({ '--partner-logo-height': item.logoHeight } as CSSProperties)
            : undefined
        }
        src={item.src}
        sizes="(max-width: 900px) 110px, (max-width: 1200px) 150px, 180px"
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

        <p className={styles.partnerTagline}>we got what you need</p>
      </div>
    </section>
  )
}
