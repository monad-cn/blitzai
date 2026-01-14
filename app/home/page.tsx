'use client'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import { Button } from 'antd'
import { Avatar } from 'antd'
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
      title: '40-50 Projects',
      description: 'Expected submissions, with 10 teams advancing to Demo Day'
    },
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
      time: '09:00 - 09:30',
      title: 'Registration & Check-in',
      description:
        'Welcome coffee, badge pickup, and networking with fellow hackers',
      speakers: [
        { name: 'Event Team', role: 'Organizers', avatar: '/event-team.jpg' }
      ]
    },
    {
      time: '09:30 - 10:00',
      title: 'Opening Ceremony',
      description:
        'Welcome address and introduction to Monad Blitz Pro hackathon',
      speakers: [
        {
          name: 'Monad Core Team',
          role: 'Founder',
          avatar: '/monad-founder.jpg'
        }
      ]
    },
    {
      time: '10:00 - 11:00',
      title: 'Keynote: The Future of Agent Economy',
      description:
        'Deep dive into agent-native infrastructure and the next wave of blockchain innovation',
      speakers: [
        {
          name: 'Dr. Sarah Chen',
          role: 'AI Researcher',
          avatar: '/speaker-1.jpg'
        },
        {
          name: 'Alex Wang',
          role: 'Blockchain Architect',
          avatar: '/speaker-2.jpg'
        }
      ],
      highlight: true
    },
    {
      time: '11:00 - 12:00',
      title: 'Track Introduction & Technical Workshops',
      description: 'Overview of three tracks with hands-on technical guidance',
      speakers: [
        { name: 'Emily Zhang', role: 'Track 1 Lead', avatar: '/track-1.jpg' },
        { name: 'Michael Liu', role: 'Track 2 Lead', avatar: '/track-2.jpg' },
        { name: 'Jessica Kim', role: 'Track 3 Lead', avatar: '/track-3.jpg' }
      ]
    },
    {
      time: '12:00 - 13:30',
      title: 'Lunch & Networking',
      description: 'Connect with mentors, investors, and fellow builders',
      speakers: []
    },
    {
      time: '13:30 - 15:00',
      title: 'Panel Discussion: Building for the Agent Era',
      description:
        'Industry leaders discuss challenges and opportunities in agent-powered applications',
      speakers: [
        { name: 'David Park', role: 'CEO, AI Startup', avatar: '/ceo-1.jpg' },
        {
          name: 'Lisa Wang',
          role: 'Partner, Vertex Capital',
          avatar: '/investor-1.jpg'
        },
        { name: 'Tom Chen', role: 'CTO, Web3 Company', avatar: '/cto-1.jpg' }
      ],
      highlight: true
    },
    {
      time: '15:00 - 17:00',
      title: 'Team Formation & Ideation',
      description:
        'Find your co-founders and start brainstorming your winning idea',
      speakers: [
        {
          name: 'Mentors',
          role: 'Available for consultation',
          avatar: '/mentors.jpg'
        }
      ]
    },
    {
      time: '17:00 - 18:00',
      title: 'Hacking Begins!',
      description:
        'Start building your project with full mentor and technical support',
      speakers: [],
      highlight: true
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

  const getAvatarProps = (name: string) => {
    const initials = name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)

    const colors = ['#8b5cf6', '#ec4899', '#3b82f6', '#6366f1', '#8b5cf6']
    const colorIndex = name.charCodeAt(0) % colors.length

    return { initials, bgColor: colors[colorIndex] }
  }

  return (
    <div className={styles.home}>
      {/* Navigation */}
      <Header />
      <section id="home" className={styles.heroSection}>
        {/* 背景图片容器 - 使用 next/image */}
        <div className={styles.heroSectionContainer}>
          <HeroContainer />
        </div>
      </section>
      <section id="partner" className={styles.partnerContainer}>
          <Partner />
      </section>
      {/* About Section */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <h2 className={styles.aboutTitle}>
              The Variables Are Changing Simultaneously
            </h2>
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
              Beijing Hacker Camp <span className={styles.accent}>Agenda</span>
            </h2>
            <p className={styles.agendaSubtitle}>
              January 31, 2026 • Beijing • Full-day event with workshops,
              panels, and networking
            </p>
          </div>

          <div className={styles.agendaList}>
            {agendaItems.map((item, index) => (
              <div
                key={index}
                className={`${styles.agendaItem} ${
                  item.highlight ? styles.highlight : ''
                }`}
              >
                <div className={styles.leftColumn}>
                  <div className={styles.timeLabel}>{item.time}</div>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                </div>

                <div className={styles.rightColumn}>
                  {item.speakers.length > 0 ? (
                    <>
                      <h4 className={styles.speakersLabel}>Speakers</h4>
                      <div className={styles.speakersList}>
                        {item.speakers.map((speaker, speakerIndex) => {
                          const { initials, bgColor } = getAvatarProps(
                            speaker.name
                          )
                          return (
                            <div
                              key={speakerIndex}
                              className={styles.speakerCard}
                            >
                              <Avatar
                                size={40}
                                style={{ backgroundColor: bgColor }}
                              >
                                {initials}
                              </Avatar>
                              <div className={styles.speakerInfo}>
                                <div className={styles.speakerName}>
                                  {speaker.name}
                                </div>
                                <div className={styles.speakerRole}>
                                  {speaker.role}
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </>
                  ) : (
                    <div className={styles.openSession}>
                      Open to all participants
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.note}>
            <p>
              <span className={styles.noteBold}>Note:</span> A similar Hacker
              Camp will be held on February 7, 2026 in Shenzhen with additional
              workshops and networking opportunities. Choose the location that
              works best for you!
            </p>
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
