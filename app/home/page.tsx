'use client'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import { Button } from 'antd'
import styles from './page.module.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { HeroContainer } from '@/components/home/HeroContainer'
import { Partner } from '@/components/home/Partner'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'TRACKS', href: '/tracks' },
    { label: 'AGENDA', href: '/#agenda' },
    { label: 'PRIZES', href: '/#prizes' }
  ]

  const features = [
    {
      title: 'USD $40,000',
      description:
        'Total prize pool: $20K cash + $20K in creative & resource rewards'
    },
    {
      title: '3 Tracks',
      description:
        'Agent-native Payments, Intelligent Markets, Agent-powered Apps'
    },
    {
      title: 'Hybrid Format',
      description:
        '1-month mentorship + Beijing/Shenzhen Hacker Camps + Online Demo Day'
    }
  ]

  const agendaItems = [
    {
      title: 'Freely Build',
      description: ''
    },
    {
      title: 'Industry Insight',
      description: ''
    },
    {
      title: 'Lightning Pitch',
      description: ''
    },
    {
      title: 'Network',
      description: ''
    }
  ]

  const links = {
    Resources: [
      { label: 'Documentation', href: 'https://docs.monad.xyz' },
      { label: 'GitHub', href: '#' },
      { label: 'Discord', href: '#' },
      { label: 'Twitter', href: '#' }
    ],
    Event: [
      { label: 'Agenda', href: '/#agenda' },
      { label: 'Tracks', href: '/tracks' },
      { label: 'Prizes', href: '/#prizes' },
      { label: 'Register', href: '/#register' }
    ]
  }

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
          <Partner />
        </section>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <h2 className={styles.aboutTitle}>
              The Variables Are Changing Simultaneously
            </h2>
            <Button
              type="primary"
              className={`${styles.ctaButton} ${styles.aboutCtaButton}`}
            >
              Register Now
            </Button>
            <p className={styles.aboutDescription}>
              In an era where Agents become execution entities and blockchain
              becomes the economic foundation, which directions are most worth
              exploring? Rebel in Paradise addresses this question head-on.
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
              Hacker Camp <span className={styles.accent}>Agenda</span>
            </h2>
            <p className={styles.agendaSubtitle}>
              Full-day event with workshops, panels, and networking
            </p>
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
                <div className={styles.rightColumn}>
                  <div className={styles.agendaPlaceholder}>Content TBD</div>
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
              <span className={styles.accent}>Prizes & Awards</span>
            </h2>
            <p className={styles.prizesSubtitle}>
              We expect 40-50 project submissions, with 10 teams selected as
              finalists for the online Demo Day presentation and judging.
            </p>
          </div>

          <div className={styles.prizesGrid}>
            <div className={styles.prizeCard}>
              <div className={styles.cardContent}>
                <div>
                  <h3 className={styles.cardTitle}>
                    Cash Prizes (USD 20,000 Total)
                  </h3>
                  <p className={styles.cardDescription}>
                    Cash prizes are structured across three tracks, with 1st and
                    2nd place awards for each track, plus one Grand Prize
                    selected from all winning projects.
                  </p>
                </div>

                <div className={styles.prizeDetails}>
                  <div className={styles.prizeRow}>
                    <span className={styles.prizeLabel}>
                      Grand Prize (1 team)
                    </span>
                    <span className={styles.prizeAmount}>$5,000</span>
                  </div>

                  <div className={styles.trackAwards}>
                    <p className={styles.trackLabel}>
                      Track Awards (per track):
                    </p>
                    <div className={styles.prizeRow}>
                      <span className={styles.prizeLabel}>
                        1st Place (3 teams, 1 per track)
                      </span>
                      <span className={styles.prizeAmount}>
                        $3,000 × 3 = $9,000
                      </span>
                    </div>
                    <div className={styles.prizeRow}>
                      <span className={styles.prizeLabel}>
                        2nd Place (3 teams, 1 per track)
                      </span>
                      <span className={styles.prizeAmount}>
                        $2,000 × 3 = $6,000
                      </span>
                    </div>
                  </div>

                  <div className={styles.prizeTotal}>
                    <p className={styles.totalText}>
                      Total cash prizes: USD 20,000 distributed among 7 teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.prizeCard} ${styles.resourceCard}`}>
              <div className={styles.cardContent}>
                <div>
                  <h3 className={styles.cardTitle}>
                    Creative & Resource Awards (USD 20,000 Value)
                  </h3>
                  <p className={styles.cardDescription}>
                    Beyond cash prizes, we collaborate with partners to provide
                    high-value creative and resource awards to support continued
                    development, validation, and incubation, including but not
                    limited to:
                  </p>
                </div>

                <div className={styles.resourceList}>
                  <div className={styles.resourceItem}>
                    <span className={styles.bullet}>•</span>
                    <div>
                      <p className={styles.resourceTitle}>
                        Top Tech Company Access
                      </p>
                      <p className={styles.resourceDesc}>
                        Lab visits, office tours, and internship opportunities
                        at leading companies like Tencent
                      </p>
                    </div>
                  </div>

                  <div className={styles.resourceItem}>
                    <span className={styles.bullet}>•</span>
                    <p className={styles.resourceText}>
                      GPU compute resource credits
                    </p>
                  </div>

                  <div className={styles.resourceItem}>
                    <span className={styles.bullet}>•</span>
                    <p className={styles.resourceText}>
                      Hardware prizes including display devices
                    </p>
                  </div>

                  <div className={styles.resourceItem}>
                    <span className={styles.bullet}>•</span>
                    <p className={styles.resourceText}>
                      Free trial credits for cutting-edge models, developer
                      tools, and infrastructure
                    </p>
                  </div>
                </div>

                <div className={styles.resourceNote}>
                  <p className={styles.noteText}>
                    Select partner companies will also provide special awards
                    and resources for outstanding projects.
                  </p>
                </div>
              </div>
            </div>
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
              Ready to Explore
              <br />
              <span className={styles.accent}>the Age of Agents?</span>
            </h2>
            <p className={styles.ctaSubtitle}>
              Join developers and innovators from around the world to build the
              future. Limited spots available, first come first served.
            </p>
            <div className={styles.buttonWrapper}>
              <Button type="primary" size="large" className={styles.ctaButton}>
                Register Now
              </Button>
            </div>
            <p className={styles.ctaNote}>
              Registration closes soon. Seize the opportunity!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
