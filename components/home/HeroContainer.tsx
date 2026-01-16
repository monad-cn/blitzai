import Image from 'next/image'
import styles from './HeroContainer.module.css'
import { ArrowDown, ArrowUpLeft, ArrowUpRight, Plus, X } from 'lucide-react'

export const HeroContainer = () => {
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
        <p className={styles.title} data-text="Rebel in Paradise">
          Rebel in Paradise
        </p>
        <p className={styles.title} data-text="AI Hackathon">
          AI Hackathon
        </p>
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

      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 translate-y-2 flex-col items-center gap-3 text-white">
        <div className="relative flex h-12 w-12 items-center justify-center">
          <ArrowDown className="relative h-7 w-7 animate-bounce text-violet-200 drop-shadow-[0_0_16px_rgba(139,92,246,0.95)]" />
        </div>
        <p className="bg-gradient-to-r from-violet-200 via-fuchsia-200 to-cyan-200 bg-clip-text text-[11px] font-semibold uppercase tracking-[0.45em] text-transparent drop-shadow-[0_0_10px_rgba(244,114,182,0.5)]">
          Register Now
        </p>
      </div>
    </section>
  )
}
 
