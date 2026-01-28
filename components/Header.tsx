'use client'

import { Globe, Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Dropdown, type MenuProps } from 'antd'
import styles from '@/styles/Header.module.css'
import { useTranslation } from '@/lib/i18n'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const handleLanguageChange = (next: string) => {
    if (i18n.language !== next) {
      void i18n.changeLanguage(next)
    }

    try {
      window.localStorage.setItem('language', next)
    } catch {
      // Ignore persistence errors (private mode, etc).
    }
  }

  const languageItems: MenuProps['items'] = [
    { key: 'en', label: t('English') },
    { key: 'zh-CN', label: t('简体中文') },
    { key: 'zh-TW', label: t('繁體中文') }
  ]

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.tracks'), href: '/tracks' },
    // { label: t('nav.agenda'), href: '/#agenda' },
    { label: t('nav.prizes'), href: '/#prizes' },
    { label: t('nav.qa'), href: '/#q&a' }
  ]

  return (
    <nav className={styles.nav}>
      {/* 顶部横幅（可选） */}
      {/* <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <span className={styles.newsTag}>News</span>
          <a href="#register" className={styles.bannerLink}>
            Registration Opens Soon for Monad Blitz Pro
          </a>
        </div>
      </div> */}

      <div className={styles.navContainer}>
        <div className={styles.navWrapper}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.png"
              alt={t('header.logoAltPrimary')}
              width={220}
              height={50}
            />
            <Image
              src="/home/logo/segmentault.png"
              alt={t('header.logoAltSecondary')}
              width={160}
              height={50}
              className={styles.logoSecondary}
            />
          </Link>

          <div className={styles.desktopNav}>
            {navItems.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className={styles.navLink}
              >
                {item.label}
              </Link>
            ))}
            <div className={styles.languageSelectWrapper}>
              <Dropdown
                menu={{
                  items: languageItems,
                  onClick: ({ key }) => handleLanguageChange(key)
                }}
                trigger={['click']}
              >
                <Globe className={styles.languageIcon} aria-hidden="true" />
              </Dropdown>
            </div>
          </div>

          <button
            className={styles.mobileMenuButton}
            aria-label={t('nav.toggleMenu')}
          >
            {isOpen ? (
              <X
                className={styles.menuIcon}
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              <div className="flex items-center">
                <Dropdown
                  menu={{
                    items: languageItems,
                    onClick: ({ key }) => handleLanguageChange(key)
                  }}
                  trigger={['click']}
                >
                  <Globe className={`pr-1 w-6 text-white`} aria-hidden="true" />
                </Dropdown>
                <Menu className={styles.menuIcon}  onClick={() => setIsOpen(!isOpen)} />
              </div>
            )}
          </button>
        </div>

        {isOpen && (
          <div className={styles.mobileNav}>
            {navItems.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
