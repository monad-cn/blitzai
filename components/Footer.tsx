'use client'

import Link from 'next/link'
import styles from '@/styles/Footer.module.css'
import Image from 'next/image'
import { useTranslation } from '@/lib/i18n'

export function Footer() {
  const { t } = useTranslation()

  const footerLinks = {
    [t('footer.categories.resources')]: [
      { label: t('footer.links.documentation'), href: 'https://docs.monad.xyz' },
      { label: t('footer.links.github'), href: '#' },
      { label: t('footer.links.discord'), href: '#' },
      { label: t('footer.links.twitter'), href: '#' }
    ],
    [t('footer.categories.event')]: [
      { label: t('footer.links.agenda'), href: '/#agenda' },
      { label: t('footer.links.tracks'), href: '/tracks' },
      { label: t('footer.links.prizes'), href: '/#prizes' },
      { label: t('footer.links.register'), href: '/#register' }
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
                {items.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.footerLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
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
