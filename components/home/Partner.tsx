'use client'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { useEffect, useState, type CSSProperties } from 'react'
import styles from './Partner.module.css'
import { useTranslation } from '@/lib/i18n'

export const Partner = () => {
  const { t } = useTranslation()

  type PartnerItem =
    | { type: 'label'; text: string }
    | { type: 'logo'; title: string; src: string; logoHeight?: string }

  const technologyPartners = [
    { title: 'KIMI', src: '/home/logo/technology/kimi.png' },
    {
      title: 'Zhipu',
      src: '/home/logo/technology/zhipu.png',
      logoHeight: '34px'
    },
    { title: 'DouBao', src: '/home/logo/technology/doubao.png' },
    { title: 'YouWare', src: '/home/logo/technology/youware.png' },
    {
      title: 'StepFun',
      src: '/home/logo/technology/jieyuexc.png',
      logoHeight: '34px'
    },
    {
      title: 'Rokid',
      src: '/home/logo/technology/rokid.png',
      logoHeight: '34px'
    },
    {
      title: 'SiliconFlow',
      src: '/home/logo/technology/guijild.png',
      logoHeight: '36px'
    },
    { title: 'OshwHub', src: '/home/logo/technology/oshwhub.png' },
    {
      src: '/home/logo/technology/qiniu.png',
      title: '七牛云'
      // logoHeight: '36px'
    },
    {
      src: '/home/logo/technology/zilliz.png',
      title: 'zilliz'
      // logoHeight: '36px'
    }
  ]

  const VC = [
    {
      title: 'Delphi Ventures',
      src: '/home/logo/vc/delphi_ventures.png',
      logoHeight: '36px'
    },
    { title: 'Vertext', src: '/home/logo/vc/vertex.png', logoHeight: '36px' },
    {
      title: 'Archetype',
      src: '/home/logo/vc/archetype.png',
      logoHeight: '36px'
    },
    { title: 'Pantera', src: '/home/logo/vc/pantera.png', logoHeight: '36px' },
    {
      title: 'CoinFund',
      src: '/home/logo/vc/coinfund.svg',
      logoHeight: '26px'
    },

    {
      title: 'EnlightCapital',
      src: '/home/logo/vc/enlightcapital.png',
      logoHeight: '36px'
    },
    {
      title: 'ZhiYuanCT',
      src: '/home/logo/vc/zhiyuanct.png',
      logoHeight: '36px'
    }
    // { title: 'Miracleplus', src: '/home/logo/vc/miracleplus.svg' }
  ]

  const communitySupporters = [
    {
      title: 'AIGC Open',
      src: '/home/logo/community/aigc.png',
      logoHeight: '34px'
    },
    {
      src: '/home/logo/community/atom.png',
      title: 'atomGit AI',
      logoHeight: '34px'
    },
    {
      title: 'Bonjour',
      src: '/home/logo/community/bonjour.png',
      logoHeight: '34px'
    },
    { title: 'Codatta', src: '/home/logo/community/codatta.png' },
    {
      title: 'Datawhale',
      src: '/home/logo/community/datawhale.png',
      logoHeight: '34px'
    },
    {
      src: '/home/logo/community/echkit.png',
      title: 'echkit',
      logoHeight: '34px'
    },
    { title: 'Epic', src: '/home/logo/community/epic.png' },
    { title: 'Goplus', src: '/home/logo/community/goplus.png' },
    { title: 'GuiXingRen', src: '/home/logo/community/guixingren.png' },
    {
      title: 'Hackathon Weekly',
      src: '/home/logo/community/hackathon_weekly.png'
    },
    {
      src: '/home/logo/community/ai_gf.png',
      title: '杭州AI工坊',
      logoHeight: '34px'
    },
    { title: 'RTE', src: '/home/logo/community/rte.png', logoHeight: '34px' },
    { title: 'KaiYuanShe', src: '/home/logo/community/kaiyuanshe.png' },
    { title: 'MoonBit', src: '/home/logo/community/moonbit.png' },
    { title: 'PyChina', src: '/home/logo/community/pychina.png' },
    {
      title: 'QingKe',
      src: '/home/logo/community/qingke.png',
      logoHeight: '34px'
    },
    { title: 'Rust.cc', src: '/home/logo/community/rust.png' },
    {
      src: '/home/logo/community/shougongchuan.png',
      title: '手工川'
    },
    {
      src: '/home/logo/community/tegongyz.png',
      title: '特工宇宙'
    },
    {
      title: 'WaytoAGI',
      src: '/home/logo/community/waytoagi.png',
      logoHeight: '34px'
    },
    {
      src: '/home/logo/community-uni/pku.png',
      title: 'pku',
      height: 26
    },
    {
      src: '/home/logo/community-uni/ujsbca.png',
      title: 'ujsbca'
    },
    {
      src: '/home/logo/community-uni/thuba.png',
      title: 'thuba',
      height: 26
    },
    {
      src: '/home/logo/community-uni/fudan.png',
      title: 'fudan'
    },
    {
      src: '/home/logo/community-uni/opencas.png',
      title: 'opencas'
    },
    {
      src: '/home/logo/community-uni/wuhandx.png',
      title: 'wuhandx',
      height: 26
    },
    {
      src: '/home/logo/community-uni/zhejiangdx.png',
      title: 'zhejiangdx',
      height: 26
    },
    {
      src: '/home/logo/community-uni/qingdaodx.png',
      title: 'qingdaodx'
    },
    {
      src: '/home/logo/community-uni/jilin.png',
      title: 'jilin'
    },
    {
      src: '/home/logo/community-uni/cuitbca.png',
      title: 'cuitbca'
    },
    {
      src: '/home/logo/community-uni/shenzhen.png',
      title: 'shenzhen'
    },
    {
      src: '/home/logo/community-uni/0xu.png',
      title: '0xu'
    }
  ]

  const partnerLogos: PartnerItem[] = [
    { type: 'label', text: t('partner.labels.technology') },
    ...technologyPartners.map(partner => ({
      type: 'logo' as const,
      ...partner
    })),
    { type: 'label', text: t('partner.labels.vc'), ...VC },
    ...VC.map(partner => ({
      type: 'logo' as const,
      ...partner
    })),
    { type: 'label', text: t('partner.labels.community') },
    ...communitySupporters.map(partner => ({
      type: 'logo' as const,
      ...partner
    }))
  ]

  const renderPartnerItem = (
    item: PartnerItem,
    keySuffix: string,
    ariaHidden = false
  ) => {
    if (item.type === 'label') {
      const [firstLine, ...rest] = item.text.split(' ')
      const secondLine = rest.join(' ')
      return (
        <span
          key={`${item.text}-${keySuffix}`}
          className={styles.partnerLogoLabel}
          aria-hidden={ariaHidden || undefined}
        >
          <span className={styles.partnerLogoLabelLine}>{firstLine}</span>
          <span className={styles.partnerLogoLabelLine}>{secondLine}</span>
        </span>
      )
    }

    return (
      <Image
        key={`${item.title}-${keySuffix}`}
        width={180}
        height={60}
        className={styles.partnerLogoImage}
        aria-hidden={ariaHidden || undefined}
        style={
          item.logoHeight
            ? ({ '--partner-logo-height': item.logoHeight } as CSSProperties)
            : undefined
        }
        src={item.src}
        sizes="(max-width: 900px) 110px, (max-width: 1200px) 150px, 180px"
        alt={item.title}
      />
    )
  }

  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = () => setReduceMotion(media.matches)
    handleChange()

    if (media.addEventListener) {
      media.addEventListener('change', handleChange)
      return () => media.removeEventListener('change', handleChange)
    }

    media.addListener(handleChange)
    return () => media.removeListener(handleChange)
  }, [])

  const marqueeItems = [...partnerLogos, ...partnerLogos]

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
              <Marquee
                className={styles.partnerMarquee}
                gradient={false}
                pauseOnHover
                speed={60}
                play={!reduceMotion}
              >
                {marqueeItems.map((item, index) =>
                  renderPartnerItem(
                    item,
                    String(index),
                    index >= partnerLogos.length
                  )
                )}
              </Marquee>
            </div>
          </div>
        </div>

        <p className={styles.partnerTagline}>{t('partner.tagline')}</p>
      </div>
    </section>
  )
}
