'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Header.module.css'

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'TRACKS', href: '/tracks' },
  { label: 'AGENDA', href: '/#agenda' },
  { label: 'PRIZES', href: '/#prizes' }
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

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
            <Image src="/logo.png" alt="MONAD Logo" width={300} height={300} />
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
          </div>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={styles.menuIcon} />
            ) : (
              <Menu className={styles.menuIcon} />
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
