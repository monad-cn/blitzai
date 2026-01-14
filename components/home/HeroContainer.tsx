import Image from 'next/image'
import styles from './HeroContainer.module.css'
import { ArrowUpLeft, ArrowUpRight, Plus, X } from 'lucide-react'

export const HeroContainer = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hostRow}>
        <div className={styles.hostGroup}>
          <Image
            width={600}
            height={50}
            src="/home/logo/hero_logo.png"
            alt=""
          ></Image>
        </div>
      </div>

      <div className={styles.titleBlock}>
        <p className={styles.title}>Rebel in Paradise</p>
        <p className={styles.title}>AI Hackathon</p>
      </div>

      <div className={styles.subtitleRow}>
        <div className={styles.arrowCluster}>
          <div>
            <ArrowUpLeft />
            <ArrowUpLeft />
          </div>
          <div>
            <Plus />
            <Plus />
          </div>
        </div>
        <p className={styles.subtitle}>
          Jan 19 - Feb 28, 2026 | Monad Blitz Pro Series
        </p>
        <div className={`${styles.arrowCluster}`}>
          <div>
            <Plus />
            <Plus />
          </div>
          <div>
            <ArrowUpRight />
            <ArrowUpRight />
          </div>
        </div>
      </div>

     
    </section>
  )
}
