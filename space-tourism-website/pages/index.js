import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { 
        duration: 1,
        ease: "easeInOut",
      }
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Space Tourism - Home</title>
      </Head>
      <Nav></Nav>
      <motion.main className={styles.main}
        variants={pathVariants}
        initial="hidden"
        animate="visible">
        <span>
          <h1>SO, YOU WANT TO TRAVEL TO</h1>
          <h2>SPACE</h2>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </span>
        <span>
          <Link href="/destination">Explore</Link>
        </span>
      </motion.main>
    </div>
  )
}
