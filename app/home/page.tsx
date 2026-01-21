'use client'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'

import { Button } from 'antd'
import styles from './page.module.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { HeroContainer } from '@/components/home/HeroContainer'
import { Partner } from '@/components/home/Partner'
import { PartnerMobile } from '@/components/home/PartnerMobile'
import { useTranslation } from '@/lib/i18n'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.tracks'), href: '/tracks' },
    { label: t('nav.agenda'), href: '/#agenda' },
    { label: t('nav.prizes'), href: '/#prizes' }
  ]

  const features = [
    {
      title: t('about.features.totalPrizeTitle'),
      description: t('about.features.totalPrizeDescription')
    },
    {
      title: t('about.features.tracksTitle'),
      description: t('about.features.tracksDescription')
    },
    {
      title: t('about.features.formatTitle'),
      description: t('about.features.formatDescription')
    }
  ]

  const agendaItems = [
    {
      title: t('agenda.items.handsOnTitle'),
      description: t('agenda.items.handsOnDescription')
    },
    {
      title: t('agenda.items.insightTitle'),
      description: t('agenda.items.insightDescription')
    },
    {
      title: t('agenda.items.pitchesTitle'),
      description: t('agenda.items.pitchesDescription')
    }
  ]
  const faqItems = [
    {
      question: t('faq.items.q1'),
      answer: t('faq.items.a1')
    },
    {
      question: t('faq.items.q2'),
      answer: t('faq.items.a2')
    },
    {
      question: t('faq.items.q3'),
      answer: t('faq.items.a3')
    },
    {
      question: t('faq.items.q4'),
      answer: t('faq.items.a4')
    },
    {
      question: t('faq.items.q5'),
      answer: t('faq.items.a5')
    },
    {
      question: t('faq.items.q6'),
      answer: t('faq.items.a6')
    }
  ]

  return (
    <div className={styles.home}>
      {/* Navigation */}
      <Header />
      <section id="home" className={styles.heroSection}>
        {/* Background image container - uses next/image */}
        <div className={styles.heroSectionContainer}>
          <HeroContainer />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.aboutSection}>
        <section className={styles.partnerContainer}>
          <div className={styles.partnerDesktop}>
            <Partner />
          </div>
          <div className={styles.partnerMobile}>
            <PartnerMobile />
          </div>
        </section>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <h2 className={styles.aboutTitle}>
              {t('about.title')}
            </h2>

            <p className={styles.aboutDescription}>
              {t('about.description')}
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map(feature => (
              <div key={feature.title} className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className={styles.agendaSection}>
        <div className={styles.container}>
          <div className={styles.agendaHeader}>
            <h2 className={styles.agendaTitle}>
              {t('agenda.titleLead')}{' '}
              <span className={styles.accent}>{t('agenda.titleAccent')}</span>
            </h2>
            <p className={styles.agendaSubtitle}>
              {t('agenda.subtitle')}
            </p>
          </div>
          <div className={styles.agendaActions}>
            <a
              className={styles.agendaButton}
              href="https://luma.com/irllzbeu?utm_source=lp"
              target="_blank"
              rel="noreferrer"
            >
              {t('agenda.city.beijing')}
            </a>
            <a
              className={styles.agendaButton}
              href="https://luma.com/je6if25j?utm_source=lp"
              target="_blank"
              rel="noreferrer"
            >
              {t('agenda.city.shenzhen')}
            </a>
          </div>

          <div className={styles.agendaList}>
            {agendaItems.map((item, index) => (
              <div key={index} className={styles.agendaItem}>
                <div className={styles.leftColumn}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  {item.description ? (
                    <p className={styles.itemDescription}>{item.description}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className={styles.prizesSection}>
        <div className={styles.container}>
          <div className={styles.prizesHeader}>
            <h2 className={styles.prizesTitle}>
              <span className={styles.accent}>{t('prizes.title')}</span>
            </h2>
            <p className={styles.prizesSubtitle}>
              {t('prizes.subtitle')}
            </p>
          </div>

          <div className={styles.prizesGrid}>
            <div className={styles.prizeCard}>
              <div className={styles.cardContent}>
                <div>
                  <h3 className={styles.cardTitle}>{t('prizes.cashTitle')}</h3>
                  <p className={styles.cardDescription}>
                    {t('prizes.cashDescription')}
                  </p>
                </div>

                <div className={styles.prizeDetails}>
                  <div className={styles.prizeRow}>
                    <div className={styles.prizeMeta}>
                      <span className={styles.prizeLabel}>
                        {t('prizes.grandPrize')}
                      </span>
                      <span className={styles.trackBadge}>
                        {t('prizes.teamCount')}
                      </span>
                    </div>
                    <span className={styles.prizeAmount}>
                      {t('prizes.grandPrizeAmount')}
                    </span>
                  </div>

                  <div className={styles.trackAwards}>
                    <p className={styles.trackLabel}>
                      {t('prizes.trackAwardsLabel')}
                    </p>
                    <div className={styles.prizeRow}>
                      <div className={styles.prizeMeta}>
                        <span className={styles.prizeLabel}>
                          {t('prizes.firstPlace')}
                        </span>
                        <span className={styles.trackBadge}>
                          {t('prizes.trackTeamCount')}
                        </span>
                      </div>
                      <span className={styles.prizeAmount}>
                        {t('prizes.firstPlaceAmount')}
                      </span>
                    </div>
                    <div className={styles.prizeRow}>
                      <div className={styles.prizeMeta}>
                        <span className={styles.prizeLabel}>
                          {t('prizes.secondPlace')}
                        </span>
                        <span className={styles.trackBadge}>
                          {t('prizes.trackTeamCount')}
                        </span>
                      </div>
                      <span className={styles.prizeAmount}>
                        {t('prizes.secondPlaceAmount')}
                      </span>
                    </div>
                  </div>

                  <div className={styles.prizeTotal}>
                    <p className={styles.totalText}>
                      {t('prizes.totalCashNote')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.prizeCard} ${styles.resourceCard}`}>
              <div className={styles.cardContent}>
                <div>
                  <h3 className={styles.cardTitle}>
                    {t('prizes.resourceTitle')}
                  </h3>
                  <p className={styles.cardDescription}>
                    {t('prizes.resourceDescription')}
                  </p>
                </div>

                <div className={styles.resourceList}>
                  <div className={styles.resourceItem}>
                    <span className={styles.bullet}>•</span>
                    <p className={styles.resourceText}>
                      {t('prizes.resourceItems.nvidia')}
                    </p>
                  </div>

                  <div className={styles.resourceItem}>
                    <span className={styles.bullet}>•</span>
                    <p className={styles.resourceText}>
                      {t('prizes.resourceItems.credits')}
                    </p>
                  </div>

                  <div className={styles.resourceItem}>
                    <span className={styles.bullet}>•</span>
                    <p className={styles.resourceText}>
                      {t('prizes.resourceItems.access')}
                    </p>
                  </div>
                </div>

                <div className={styles.resourceNote}>
                  <p className={styles.noteText}>
                    {t('prizes.resourceNote')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section
        id="q&a"
        className="relative overflow-hidden  py-16 text-white"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#7c3aed]/30 blur-[120px]" />
          <div className="absolute right-12 top-24 h-56 w-56 rounded-full bg-[#c084fc]/25 blur-[110px]" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#4f46e5]/25 blur-[140px]" />
        </div>
        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <h2 className="text-4xl font-semibold text-transparent bg-gradient-to-r from-purple-200 via-fuchsia-300 to-indigo-200 bg-clip-text md:text-5xl">
              {t('faq.title')}
            </h2>
            <p>{t('faq.subtitle')}</p>
          </div>
          <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 text-left">
            {faqItems.map(item => (
              <details
                key={item.question}
                className="bg-[#0b0a1a] group rounded-2xl border border-white/10 bg-gradient-to-br from-purple-400/10 via-white/5 to-transparent p-5 shadow-[0_20px_60px_-48px_rgba(20,10,40,0.9)] transition hover:border-purple-200/40 hover:from-purple-400/20"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white">
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-300/20 text-xs font-semibold leading-none text-purple-100">
                      {t('faq.badge.q')}
                    </span>
                    {item.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-purple-200/30 text-purple-100 transition group-open:rotate-180">
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </summary>
                <div className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-white/75">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-purple-200/40 text-xs font-semibold leading-none text-purple-100">
                    {t('faq.badge.a')}
                  </span>
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.gradient} />
        <div className={styles.dots} />
        <div className={styles.bottomLine} />

        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              {t('cta.titleLine1')}
              <br />
              <span className={styles.accent}>{t('cta.titleLine2')}</span>
            </h2>
            <p className={styles.ctaSubtitle}>
              {t('cta.subtitle')}
            </p>
            <div className={styles.ctaActions}>
              <div className={styles.ctaAction}>
                <div className={styles.buttonWrapper}>
                  <Button
                    type="primary"
                    size="large"
                    className={styles.ctaButton}
                    href="https://mojo.devnads.com/events/10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('cta.registerCta')}
                  </Button>
                </div>
                <p className={styles.ctaNote}>
                  {t('cta.registerNote')}
                </p>
              </div>
              <div className={styles.ctaAction}>
                <div className={styles.buttonWrapper}>
                  <Button
                    type="default"
                    size="large"
                    className={styles.ctaButtonSecondary}
                  >
                    {t('cta.submitCta')}
                  </Button>
                </div>
                <p className={styles.ctaNote}>
                  {t('cta.submitNote')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
