'use client'
 
import styles from './HeroContainer.module.css'
import { ArrowDown, ArrowUpLeft, ArrowUpRight, Plus, X } from 'lucide-react'
import { Button } from 'antd'
import { useTranslation } from '@/lib/i18n'

export const HeroContainer = () => {
  const { t } = useTranslation()
  const subtitleText = t('hero.subtitle')
  const subtitleParts = subtitleText.split(' | ')
  const subtitleLeft = subtitleParts[0] ?? subtitleText
  const subtitleRight = subtitleParts[1]

  return (
    <section className={styles.hero}>
      <div className={styles.hostRow}>
        <div className={styles.hostGroup}>
          {/* <Image
            width={600}
            height={50}
            src="/home/logo/hero_logo.png"
            alt=""
          ></Image> */}
        </div>
      </div>

      <div className={styles.titleBlock}>
        <p className={styles.title} data-text={t('hero.titleLine1')}>
          {t('hero.titleLine1')}
        </p>
        <p className={styles.title} data-text={t('hero.titleLine2')}>
          {t('hero.titleLine2')}
        </p>
      </div>

      <div className={styles.subtitleRow}>
        <div className={styles.arrowCluster}>
          <div className={styles.arrowIcon}>
            <ArrowUpLeft />
            <ArrowUpLeft />
          </div>
          <div>
            <Plus />
            <Plus />
          </div>
        </div>
        <p className={styles.subtitle}>
          <span className={styles.subtitleLine}>{subtitleLeft}</span>
          {subtitleRight ? (
            <>
              <span className={styles.subtitleSeparator}> | </span>
              <span className={styles.subtitleLine}>{subtitleRight}</span>
            </>
          ) : null}
        </p>
        <div className={`${styles.arrowCluster}`}>
          <div>
            <Plus />
            <Plus />
          </div>
          <div className={styles.arrowIcon}>
            <ArrowUpRight />
            <ArrowUpRight />
          </div>
        </div>
      </div>

      <div className="absolute bottom-[clamp(1rem,2vw,2rem)] left-1/2 flex -translate-x-1/2 flex-col items-center gap-[clamp(1.5rem,2.5vw,2.5rem)] text-white">
        <Button
          href="https://mojo.devnads.com/events/10"
          target='_blank'
          type="primary"
          size="large"
          className={styles.ctaButton}
        >
          <span className="font-bold">{t('hero.registerCta')}</span>
        </Button>
        <div className="relative flex h-12 w-12 pt-[clamp(1.5rem,3vw,3.4rem)] items-center justify-center">
          <ArrowDown className="relative h-[2.2rem] w-[2.2rem] animate-bounce text-violet-200 drop-shadow-[0_0_16px_rgba(139,92,246,0.95)]" />
        </div>
      </div>
    </section>
  )
}
