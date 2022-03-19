import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion';
import styles from '../styles/Nav.module.scss'


export default function Home() {

    const [Modal, setModal] = useState(false)
    
    const svgVariants = {
        hidden: { rotate: -180 },
        visible: { 
          rotate: 0,
          transition: { duration : 2.5 }
        },
      }

    const pathVariants = {
        hidden: {
          opacity: 0,
          pathLength: 0,
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          transition: { 
            duration: 2,
            ease: "easeInOut",
          }
        }
      };

  return (
      <nav className={styles.nav}>
          <div className={styles.nav_main}>
              <Link href="/" passHref>
              <motion.svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                variants={svgVariants}
                initial="hidden"
                animate="visible">
                <g fill="none" fillRule="evenodd">
                    <circle cx="24" cy="24" r="24" fill="#FFF"></circle>
                    <motion.path
                    fill="#0B0D17"
                    d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                    variants={pathVariants}
                    />
                </g>
                </motion.svg>
              </Link>
                <div className={styles.menu_burger} onClick={() => setModal(true)}>
                    <span></span>
                    <span></span>
                </div>
            </div>
            { Modal? <div className={styles.nav_outter}>
                <div className={styles.menu_burger} onClick={() => setModal(false)}>
                        <span></span>
                        <span></span>
                    </div>
                    <ol>
                        <li><strong>00</strong><Link href="/">HOME</Link></li>
                        <li><strong>01</strong><Link href="/destination">DESTINATION</Link></li>
                        <li><strong>02</strong><Link href="/crew">CREW</Link></li>
                        <li><strong>03</strong><Link href="/technology">TECHNOLOGY</Link></li>
                    </ol>
            </div> :null}
      </nav>
  )
}
