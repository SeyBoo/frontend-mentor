import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import styles from '../styles/Destination.module.scss'

export default function Destination() {
  const [moon, setmoon] = useState(true)
  const [mars, setmars] = useState(false)
  const [europa, seteuropa] = useState(false)
  const [titan, settitan] = useState(false)

  const handleMoon = () => {
    setmars(false)
    settitan(false)
    seteuropa(false)
    setmoon(true)
  }

  const handleMars = () => {
    setmars(true)
    settitan(false)
    seteuropa(false)
    setmoon(false)
  }

  const handleEuropa = () => {
    setmars(false)
    settitan(false)
    seteuropa(true)
    setmoon(false)
  }

  const handleTitan = () => {
    setmars(false)
    settitan(true)
    seteuropa(false)
    setmoon(false)
  }

  const moonClassname = moon 
        ? `active_destination`
        : styles.Destination;
  
  const marsClassname = mars 
        ? `active_destination`
        : styles.Destination;

  const europaClassname = europa 
        ? `active_destination`
        : styles.Destination;

  const titanClassname = titan 
        ? `active_destination`
        : styles.Destination;

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
        <title>Space Tourism - Destination</title>
      </Head>
      <Nav></Nav>
      <header className={styles.heading}>
        <h1><strong>01</strong>Pick your destination</h1>
      </header>
      <motion.main className={styles.main}
        variants={pathVariants}
        initial="hidden"
        animate="visible">
        <header className={styles.main_header}>
          <span className={styles.main_planet_illustration}>
            { moon? <Image src="/destination/image-moon.png" width={500} height={500} alt="#"></Image> :null}
            { mars? <Image src="/destination/image-mars.png" width={500} height={500} alt="#"></Image> :null}
            { europa? <Image src="/destination/image-europa.png" width={500} height={500} alt="#"></Image> :null}
            { titan? <Image src="/destination/image-titan.png" width={500} height={500} alt="#"></Image> :null}
          </span>
        </header>
        <section className={styles.planet_container}>
          <ol className={styles.main_list}>
              <li onClick={handleMoon} className={moonClassname}>MOON</li>
              <li onClick={handleMars} className={marsClassname}>MARS</li>
              <li onClick={handleEuropa} className={europaClassname}>EUROPA</li>
              <li onClick={handleTitan} className={titanClassname}>TITAN</li>
            </ol>
          { moon? <div className={styles.planet}>
            <header className={styles.planet_heading}>
              <h1>MOON</h1>
              <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            </header>
            <ol className={styles.planet_info}>
              <span className={styles.planet_inner}>
                <li>
                  <h4>AVG. DISTANCE</h4>
                  <p>384,400 km</p>
                </li>
                <li>
                  <h4>Est. travel time</h4>
                  <p>3 days</p>
                </li>
              </span>
            </ol>
          </div> :null}
          { mars? <div className={styles.planet}>
            <header className={styles.planet_heading}>
              <h1>MARS</h1>
              <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
            </header>
              <ol className={styles.planet_info}>
              <span className={styles.planet_inner}>
                <li>
                  <h4>AVG. DISTANCE</h4>
                  <p>225 MIL. km</p>
                </li>
                <li>
                  <h4>Est. travel time</h4>
                  <p>9 months</p>
                </li>
                </span> 
              </ol>
             
          </div> :null}
          { europa? <div className={styles.planet}>
            <header className={styles.planet_heading}>
              <h1>EUROPA</h1>
              <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
            </header>
              <ol className={styles.planet_info}>
              <span className={styles.planet_inner}>
                <li>
                  <h4>AVG. DISTANCE</h4>
                  <p>628 MIL. km</p>
                </li>
                <li>
                  <h4>Est. travel time</h4>
                  <p>3 years</p>
                </li>
                </span>
              </ol>
          </div> :null}
          { titan? <div className={styles.planet}>
            <header className={styles.planet_heading}>
              <h1>TITAN</h1>
              <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
            </header>
            <ol className={styles.planet_info}>
              <span className={styles.planet_inner}>
                <li>
                  <h4>AVG. DISTANCE</h4>
                  <p>1.6 BIL. km</p>
                </li>
                <li>
                  <h4>Est. travel time</h4>
                  <p>7 years</p>
                </li>
                </span>
              </ol>
          </div> :null}
        </section>
      </motion.main>
    </div>
  )
}
