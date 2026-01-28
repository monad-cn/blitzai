'use client'

import Link from 'next/link'
import styles from '@/styles/Footer.module.css'
import Image from 'next/image'
import { useTranslation } from '@/lib/i18n'

export function Footer() {
  const { t } = useTranslation()

  const footerLinks = {
    // [t('footer.categories.resources')]: [
    //   { label: t('footer.links.documentation'), href: 'https://docs.monad.xyz' },
    //   { label: t('footer.links.github'), href: '#' },
    //   { label: t('footer.links.discord'), href: 'https://discord.com/invite/monad' },
    //   { label: t('footer.links.twitter'), href: 'https://x.com/monad' }
    // ],
    [t('footer.categories.event')]: [
      { label: t('footer.links.agenda'), href: '/#agenda' },
      { label: t('footer.links.tracks'), href: '/tracks' },
      { label: t('footer.links.prizes'), href: '/#prizes' },
      { label: t('footer.links.qa'), href: '/#q&a' }
    ]
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <Image
                  src="/monad_logo.png"
                  alt={t('footer.brandName')}
                  width={48}
                  height={48}
                />
              </div>
              <span className={styles.logoText}>{t('footer.brandName')}</span>
            </Link>
            <p className={styles.brandDesc}>{t('footer.description')}</p>
          </div>

          {Object.entries(footerLinks).map(([category, items]) => (
            <div key={category}>
              <h3 className={styles.categoryTitle}>
                {category.toUpperCase()}
              </h3>
              <ul className={styles.linkList}>
                {items.map(link => {
                  const isExternal = link.href.startsWith('http')
                  const isInternal = link.href.startsWith('/')

                  return (
                    <li key={link.label}>
                      {isInternal ? (
                        <Link href={link.href} className={styles.footerLink}>
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className={styles.footerLink}
                          {...(isExternal
                            ? { target: '_blank', rel: 'noreferrer' }
                            : {})}
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.copyright}>
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
