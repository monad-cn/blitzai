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
        { src: '/home/logo/openbuild_2.png', alt: 'openbuild', height: 24 },
        { src: '/home/logo/monad.png', alt: 'monad', height: 24 }
      ]
    },
    {
      key: 'cohost',
      label: t('partner.mobileLabels.cohost'),
      logos: [
        {
          src: '/home/logo/segmentfault.png',
          alt: 'segmentfault',
          height: 22
        },
        {
          src: '/home/logo/vibefriends.png',
          alt: 'vibefriends',
          height: 26
        }
      ]
    },
    {
      key: 'technology',
      label: t('partner.mobileLabels.technologySupport'),
      logos: [
        {
          src: '/home/logo/technology/kimi.png',
          alt: 'kimi',
          padding: '10px 16px'
        },
        {
          src: '/home/logo/technology/zhipu.png',
          alt: 'zhipu',
          padding: '10px 24px'
        },
        {
          src: '/home/logo/technology/doubao.png',
          alt: 'doubao',
          padding: '10px 16px'
        },
        {
          src: '/home/logo/technology/youware.png',
          alt: 'youware',
          padding: '10px 14px'
        },
        {
          src: '/home/logo/technology/jieyuexc.png',
          alt: 'jieyuexc',
          padding: '10px 12px'
        },
        {
          src: '/home/logo/technology/rokid.png',
          alt: 'rokid',
          height: 24
        },
        {
          src: '/home/logo/technology/guijild.png',
          alt: 'guijild'
        },
        { src: '/home/logo/technology/oshwhub.png', alt: 'oshw' },
        { src: '/home/logo/technology/qiniu.png', alt: '七牛云', height: 28 },
        {
          src: '/home/logo/technology/zilliz.png',
          alt: 'zilliz',
          height: 28,
          padding: '10px 0'
        }
      ]
    },
    {
      key: 'vc',
      label: t('partner.mobileLabels.vc'),
      logos: [
        {
          src: '/home/logo/vc/delphi_ventures.png',
          alt: 'delphi',
          height: 30
        },
        {
          src: '/home/logo/vc/vertex.png',
          alt: 'vertex'
        },
        {
          src: '/home/logo/vc/archetype.png',
          alt: 'archetype',
          height: 30
        },
        {
          src: '/home/logo/vc/pantera.png',
          alt: 'pantera'
        },
        {
          src: '/home/logo/vc/coinfund.svg',
          alt: 'coinfund'
        },
        {
          src: '/home/logo/vc/enlightcapital.png',
          alt: 'enlight'
        },
        {
          src: '/home/logo/vc/zhiyuanct.png',
          alt: 'zhiyuanct'
        }
      ]
    },
    {
      key: 'community',
      label: t('partner.mobileLabels.communitySupport'),
      logos: [
        {
          src: '/home/logo/community/aigc.png',
          alt: 'aigc',
          height: 26
        },
        {
          src: '/home/logo/community/atom.png',
          alt: 'atomGit AI',
          height: 26
        },
        {
          src: '/home/logo/community/bonjour.png',
          alt: 'bonjour'
        },
        {
          src: '/home/logo/community/codatta.png',
          alt: 'Codatta',
          height: 26
        },
        {
          src: '/home/logo/community/datawhale.png',
          alt: 'datawhale'
        },
        {
          src: '/home/logo/community/echkit.png',
          alt: 'echkit',
          height: 20
        },
        {
          src: '/home/logo/community/epic.png',
          alt: 'epic',
          height: 26
        },
        {
          src: '/home/logo/community/goplus.png',
          alt: 'goplus',
          height: 26
        },
        {
          src: '/home/logo/community/guixingren.png',
          alt: 'guixingren',
          height: 30
        },
        {
          src: '/home/logo/community/hackathon_weekly.png',
          alt: 'hack',
          height: 26
        },
        {
          src: '/home/logo/community/ai_gf.png',
          alt: '杭州AI工坊',
          height: 26
        },
        {
          src: '/home/logo/community/rte.png',
          alt: 'rte'
        },
        {
          src: '/home/logo/community/kaiyuanshe.png',
          alt: 'kaiyuanshe',
          height: 26
        },
        {
          src: '/home/logo/community/moonbit.png',
          alt: 'moonbit'
        },
        {
          src: '/home/logo/community/pychina.png',
          alt: 'pychina',
          height: 26
        },
        {
          src: '/home/logo/community/qingke.png',
          alt: 'qingke',
          height: 24
        },
        {
          src: '/home/logo/community/rust.png',
          alt: 'rust',
          height: 26
        },
        {
          src: '/home/logo/community/shougongchuan.png',
          alt: '手工川',
          height: 26
        },
        {
          src: '/home/logo/community/tegongyz.png',
          alt: '特工宇宙',
          height: 26
        },
        {
          src: '/home/logo/community/waytoagi.png',
          alt: 'wayto'
        },
        {
          src: '/home/logo/community-uni/pku.png',
          alt: 'pku',
          height: 26
        },
        {
          src: '/home/logo/community-uni/ujsbca.png',
          alt: 'ujsbca'
        },
        {
          src: '/home/logo/community-uni/thuba.png',
          alt: 'thuba',
          height: 26
        },
        {
          src: '/home/logo/community-uni/fudan.png',
          alt: 'fudan'
        },
        {
          src: '/home/logo/community-uni/opencas.png',
          alt: 'opencas'
        },
        {
          src: '/home/logo/community-uni/wuhandx.png',
          alt: 'wuhandx',
          height: 26
        },
        {
          src: '/home/logo/community-uni/zhejiangdx.png',
          alt: 'zhejiangdx',
          height: 26
        },
        {
          src: '/home/logo/community-uni/qingdaodx.png',
          alt: 'qingdaodx'
        },
        {
          src: '/home/logo/community-uni/jilin.png',
          alt: 'jilin'
        },
        {
          src: '/home/logo/community-uni/cuitbca.png',
          alt: 'cuitbca'
        },
        {
          src: '/home/logo/community-uni/shenzhen.png',
          alt: 'shenzhen'
        },
        {
          src: '/home/logo/community-uni/0xu.png',
          alt: '0xu'
        }
      ]
    },
    {
      key: 'incubation',
      label: t('partner.mobileLabels.incubationSupport'),
      logos: [
        {
          src: '/home/logo/incubation/openseed.png',
          alt: 'openseed',
          height: 24
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
