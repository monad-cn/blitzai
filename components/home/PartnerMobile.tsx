'use client'

import Image from 'next/image'
import styles from './PartnerMobile.module.css'
import { useTranslation } from '@/lib/i18n'

type SectionConfig = {
  key: string
  label: string
  logos: {
    src: string
    alt?: string
    width?: number
    height?: number
    padding?: string | number
  }[]
}

export const PartnerMobile = () => {
  const { t } = useTranslation()

  const sections: SectionConfig[] = [
    {
      key: 'host',
      label: t('partner.mobileLabels.host'),
      logos: [
        { src: '/home/logo_mobile/openbuild.svg', alt: 'openbuild' },
        { src: '/home/logo_mobile/monad.svg', alt: 'monad' }
      ]
    },
    {
      key: 'cohost',
      label: t('partner.mobileLabels.cohost'),
      logos: [
        {
          src: '/home/logo_mobile/segmentfault.svg',
          alt: 'segmentfault',
          padding: '10px 26px'
        },
        {
          src: '/home/logo_mobile/vibefriends.svg',
          alt: 'vibefriends',
          padding: '12px 30px'
        }
      ]
    },
    {
      key: 'technology',
      label: t('partner.mobileLabels.technologySupport'),
      logos: [
        {
          src: '/home/logo_mobile/kimi.svg',
          alt: 'kimi',
          padding: '10px 16px'
        },
        {
          src: '/home/logo_mobile/zhipu.svg',
          alt: 'zhipu',
          padding: '10px 24px'
        },
        {
          src: '/home/logo_mobile/doubao.svg',
          alt: 'doubao',
          padding: '10px 16px'
        },
        {
          src: '/home/logo_mobile/youware.svg',
          alt: 'youware',
          padding: '10px 14px'
        },
        {
          src: '/home/logo_mobile/jieyuexc.svg',
          alt: 'jieyuexc',
          padding: '10px 12px'
        },
        {
          src: '/home/logo_mobile/rokid.svg',
          alt: 'rokid',
          padding: '10px 20px'
        },
        {
          src: '/home/logo_mobile/guijild.svg',
          alt: 'guijild',
          padding: '10px 20px'
        },
        { src: '/home/logo_mobile/oshw.svg', alt: 'oshw', padding: '10px 20px' }
      ]
    },
    {
      key: 'vc',
      label: t('partner.mobileLabels.vc'),
      logos: [
        {
          src: '/home/logo_mobile/delphi.svg',
          alt: 'delphi'
        },
        {
          src: '/home/logo_mobile/vertex.svg',
          alt: 'vertex'
        },
        {
          src: '/home/logo_mobile/archetype.svg',
          alt: 'archetype',
          width: 30
        },
        {
          src: '/home/logo_mobile/pantera.svg',
          alt: 'pantera'
        },
        {
          src: '/home/logo_mobile/coinfund.svg',
          alt: 'coinfund'
        },
        {
          src: '/home/logo_mobile/enlight.svg',
          alt: 'enlight'
        },
        {
          src: '/home/logo_mobile/zhiyuanct.svg',
          alt: 'zhiyuanct'
        }
      ]
    },
    {
      key: 'community',
      label: t('partner.mobileLabels.communitySupport'),
      logos: [
        {
          src: '/home/logo_mobile/aigc.svg',
          alt: 'aigc'
        },
        {
          src: '/home/logo_mobile/bonjour.svg',
          alt: 'bonjour'
        },
        {
          src: '/home/logo_mobile/datawhale.svg',
          alt: 'datawhale'
        },
        {
          src: '/home/logo_mobile/epic.svg',
          alt: 'epic'
        },
        {
          src: '/home/logo_mobile/guixingren.svg',
          alt: 'guixingren',
          width: 46
        },
        {
          src: '/home/logo_mobile/hack.svg',
          alt: 'hack',
          width: 70
        },
        {
          src: '/home/logo_mobile/rte.svg',
          alt: 'rte'
        },
        {
          src: '/home/logo_mobile/kaiyuanshe.svg',
          alt: 'kaiyuanshe'
        },
        {
          src: '/home/logo_mobile/moonbit.svg',
          alt: 'moonbit'
        },
        {
          src: '/home/logo_mobile/pychina.svg',
          alt: 'pychina'
        },
        {
          src: '/home/logo_mobile/qingke.svg',
          alt: 'qingke',
          width: 70
        },
        {
          src: '/home/logo_mobile/rust.svg',
          alt: 'rust'
        },
        {
          src: '/home/logo_mobile/wayto.svg',
          alt: 'wayto'
        }
      ]
    },
    {
      key: 'incubation',
      label: t('partner.mobileLabels.incubationSupport'),
      logos: [
        {
          src: '/home/logo_mobile/openseed.svg',
          alt: 'openseed',
          width:70
        }
      ]
    }
  ]

  return (
    <section className={styles.partnerMobile}>
      <div className={styles.content}>
        {sections.map((section, index) => (
          <div key={section.key} className={styles.section}>
            <span
              className={`${styles.sectionTitle} ${
                index >= 2 ? styles.sectionTitleWhite : ''
              }`}
            >
              一一 · {section.label} · 一一
            </span>
            <div
              className={`${styles.logoGrid} ${
                section.key === 'host' || section.key === 'cohost'
                  ? styles.logoGridTwo
                  : ''
              }`}
            >
              {section.logos.map((logo, index) => (
                <div
                  key={`${section.key}-${index}`}
                  className={styles.logoCard}
                  style={
                    logo.padding !== undefined
                      ? { padding: logo.padding }
                      : undefined
                  }
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt ?? `${section.label} logo`}
                    width={logo.width ?? 193}
                    height={logo.height ?? 42}
                    style={{
                      width: logo.width ?? 193,
                      height: logo.height ?? 42
                    }}
                    className={styles.logoImage}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
