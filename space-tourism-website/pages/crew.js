import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import styles from '../styles/Crew.module.scss'

export default function Crew() {
  const [Commander, setCommander] = useState(true)
  const [Mission, setMission] = useState(false)
  const [Pilot, setPilot] = useState(false)
  const [Flight, setFlight] = useState(false)

  const handleCommander = () => {
    setMission(false)
    setPilot(false)
    setFlight(false)
    setCommander(true)
  }

  const handleMission = () => {
    setMission(true)
    setPilot(false)
    setFlight(false)
    setCommander(false)
  }

  const handlePilot = () => {
    setMission(false)
    setPilot(true)
    setFlight(false)
    setCommander(false)
  }

  const handleFlight = () => {
    setMission(false)
    setPilot(false)
    setFlight(true)
    setCommander(false)
  }

  const commanderClassname = Commander 
        ? `active_crew`
        : styles.Destination;
  
  const missionClassname = Mission 
        ? `active_crew`
        : styles.Destination;

  const flightClassname = Flight 
        ? `active_crew`
        : styles.Destination;

  const pilotClassname = Pilot 
        ? `active_crew`
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
        <title>Space Tourism - Crew</title>
      </Head>
      <Nav />
      <header className={styles.heading}>
        <h1><strong>02</strong>Meet your crew</h1>
      </header>
      <motion.main className={styles.main}
        variants={pathVariants}
        initial="hidden"
        animate="visible">
        <header className={styles.illustration}>
          {Commander? <Image src="/crew/image-douglas-hurley.webp" width={500} height={550} alt="#"></Image>:null}
          {Mission? <Image src="/crew/image-mark-shuttleworth.webp" width={500} height={550} alt="#"></Image>:null}
          {Pilot? <Image src="/crew/image-victor-glover.webp" width={500} height={550} alt="#"></Image>:null}
          {Flight? <Image src="/crew/image-anousheh-ansari.webp" width={500} height={550} alt="#"></Image>:null}
        </header>
        <div className={styles.main_inner}>
        <ol className={styles.main_list}>
          <li onClick={handleCommander} className={commanderClassname || styles.item_list}></li>
          <li onClick={handleMission} className={missionClassname || styles.item_list}></li>
          <li onClick={handlePilot} className={pilotClassname || styles.item_list}></li>
          <li onClick={handleFlight} className={flightClassname || styles.item_list}></li>
        </ol>
        <section className={styles.crew_container}>
          {Commander? <div className={styles.crew}>
            <header>
              <h2>Commander</h2>
              <h3>Douglas Hurley</h3>
            </header>
            <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
          </div> :null}
          {Mission? <div className={styles.crew}>
            <header>
              <h2>Mission Specialist </h2>
              <h3>MARK SHUTTLEWORTH</h3>
            </header>
            <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
          </div> :null}
          {Pilot? <div className={styles.crew}>
            <header>
              <h2>PILOT</h2>
              <h3>Victor Glover</h3>
            </header>
            <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
          </div> :null}
         {Flight?  <div className={styles.crew}>
            <header>
              <h2>Flight Engineer</h2>
              <h3>Anousheh Ansari</h3>
            </header>
            <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
          </div> :null}
        </section> 
        </div>  
      </motion.main>
    </div>
  )
}
