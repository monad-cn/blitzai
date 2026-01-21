'use client'

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import styles from "./page.module.css"
import { useTranslation } from "@/lib/i18n"

export default function Tracks() {
  const { t } = useTranslation()

  const tracks = [
    {
      title: t("tracksPage.tracks.track1.title"),
      subtitle: t("tracksPage.tracks.track1.subtitle"),
      description: t("tracksPage.tracks.track1.description"),
      problems: [
        t("tracksPage.tracks.track1.problems.p1"),
        t("tracksPage.tracks.track1.problems.p2"),
        t("tracksPage.tracks.track1.problems.p3"),
      ],
      builds: [
        t("tracksPage.tracks.track1.builds.b1"),
        t("tracksPage.tracks.track1.builds.b2"),
        t("tracksPage.tracks.track1.builds.b3"),
        t("tracksPage.tracks.track1.builds.b4"),
      ],
    },
    {
      title: t("tracksPage.tracks.track2.title"),
      subtitle: t("tracksPage.tracks.track2.subtitle"),
      description: t("tracksPage.tracks.track2.description"),
      problems: [
        t("tracksPage.tracks.track2.problems.p1"),
        t("tracksPage.tracks.track2.problems.p2"),
        t("tracksPage.tracks.track2.problems.p3"),
        t("tracksPage.tracks.track2.problems.p4"),
      ],
      builds: [
        t("tracksPage.tracks.track2.builds.b1"),
        t("tracksPage.tracks.track2.builds.b2"),
        t("tracksPage.tracks.track2.builds.b3"),
        t("tracksPage.tracks.track2.builds.b4"),
        t("tracksPage.tracks.track2.builds.b5"),
      ],
    },
    {
      title: t("tracksPage.tracks.track3.title"),
      subtitle: t("tracksPage.tracks.track3.subtitle"),
      description: t("tracksPage.tracks.track3.description"),
      problems: [
        t("tracksPage.tracks.track3.problems.p1"),
        t("tracksPage.tracks.track3.problems.p2"),
        t("tracksPage.tracks.track3.problems.p3"),
        t("tracksPage.tracks.track3.problems.p4"),
      ],
      builds: [
        t("tracksPage.tracks.track3.builds.b1"),
        t("tracksPage.tracks.track3.builds.b2"),
        t("tracksPage.tracks.track3.builds.b3"),
        t("tracksPage.tracks.track3.builds.b4"),
        t("tracksPage.tracks.track3.builds.b5"),
      ],
    },
  ]

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.header}>
              <h2 className={styles.title}>
                {t("tracksPage.title")}
                <br />
                <span className={styles.accent}>
                  {t("tracksPage.titleAccent")}
                </span>
              </h2>
              <p className={styles.subtitle}>{t("tracksPage.subtitle")}</p>
            </div>

            <div className={styles.tracksList}>
              {tracks.map((track, index) => (
                <div key={track.title} className={styles.trackCard}>
                  <div className={styles.trackContent}>
                    <div className={styles.trackHeader}>
                      <div className={styles.trackHeaderInner}>
                        <span className={styles.trackNumber}>0{index + 1}</span>
                        <div className={styles.trackTitleWrapper}>
                          <h3 className={styles.trackTitle}>{track.title}</h3>
                          <p className={styles.trackSubtitle}>{track.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    <p className={styles.trackDescription}>{track.description}</p>

                    <div className={styles.trackSections}>
                      <div>
                        <h4 className={styles.sectionTitle}>
                          {t("tracksPage.sectionProblems")}
                        </h4>
                        <ul className={styles.itemList}>
                          {track.problems.map((problem, idx) => (
                            <li key={idx} className={styles.listItem}>
                              <span className={styles.bullet}>•</span>
                              <span>{problem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className={styles.sectionTitle}>
                          {t("tracksPage.sectionBuilds")}
                        </h4>
                        <ul className={styles.itemList}>
                          {track.builds.map((build, idx) => (
                            <li key={idx} className={styles.listItem}>
                              <span className={styles.bullet}>•</span>
                              <span>{build}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
