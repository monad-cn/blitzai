import Link from "next/link"
import styles from "@/styles/Footer.module.css"
import Image from 'next/image'

const footerLinks = {
    Resources: [
        { label: "Documentation", href: "https://docs.monad.xyz" },
        { label: "GitHub", href: "#" },
        { label: "Discord", href: "#" },
        { label: "Twitter", href: "#" },
    ],
    Event: [
        { label: "Agenda", href: "/#agenda" },
        { label: "Tracks", href: "/tracks" },
        { label: "Prizes", href: "/#prizes" },
        { label: "Register", href: "/#register" },
    ],
}

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerGrid}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <div className={styles.logoIcon}>
                                <Image
                                    src="/monad_logo.png"
                                    alt="MONAD Logo"
                                    width={48}
                                    height={48}
                                />

                            </div>
                            <span className={styles.logoText}>MONAD</span>
                        </Link>
                        <p className={styles.brandDesc}>
                            The premier AI hackathon on Monad - where high-performance blockchain meets cutting-edge artificial
                            intelligence.
                        </p>
                    </div>

                    {Object.entries(footerLinks).map(([category, items]) => (
                        <div key={category}>
                            <h3 className={styles.categoryTitle}>{category.toUpperCase()}</h3>
                            <ul className={styles.linkList}>
                                {items.map((link) => (
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
                    <p>© 2026 Monad Blitz Pro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}