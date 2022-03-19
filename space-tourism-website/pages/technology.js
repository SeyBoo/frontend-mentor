import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Nav from '../components/Nav'
import styles from '../styles/Technology.module.scss'

export default function Technology() {
  const [vehicle, setvehicle] = useState(false)
  const [capsule, setcapsule] = useState(true)
  const [port, setport] = useState(false)

  const handlePort = () => {
    setport(true)
    setvehicle(false)
    setcapsule(false)
  }

  const handleCapsule = () => {
    setport(false)
    setvehicle(false)
    setcapsule(true)
  }

  const handleVehicle = () => {
    setport(false)
    setvehicle(true)
    setcapsule(false)
  }

  const vehicleClassname = capsule 
        ? `active_tech`
        : styles.Destination;
  
  const portClassname = port 
        ? `active_tech`
        : styles.Destination;

  const capsuleClassname = vehicle 
        ? `active_tech`
        : styles.Destination;


  return (
    <div className={styles.container}>
      <Head>
        <title>Space Tourism - Technology</title>
      </Head>
      <Nav></Nav>
      <header className={styles.heading}>
        <h2><strong>03</strong>SPACE LAUNCH 101</h2>
      </header> 
      <main className={styles.main}>
        <header className={styles.illustration}>
          {vehicle? <Image src="/technology/image-launch-vehicle-landscape.jpg" width={1000} height={500} alt="#"></Image>:null}
          {capsule? <Image src="/technology/image-space-capsule-landscape.jpg" width={1000} height={500} alt="#"></Image>:null}
          {port? <Image src="/technology/image-spaceport-landscape.jpg" width={1000} height={500} alt="#"></Image>:null}
        </header>
        <div className={styles.main_inner}>
          <ol className={styles.items_list}>
            <li className={vehicleClassname || styles.item_li} onClick={handleCapsule}>1</li>
            <li className={portClassname || styles.item_li} onClick={handlePort}>2</li>
            <li className={capsuleClassname|| styles.item_li} onClick={handleVehicle}>3</li>
          </ol>
          <section className={styles.items_container}>
            { vehicle? <div className={styles.items}>
              <header>
                <h2>THE TERMINOLOGY…</h2>
                <h3>LAUNCH VEHICLE</h3>
              </header>
              <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
            </div> :null}
            { port? <div className={styles.items}>
              <header>
                <h2>THE TERMINOLOGY…</h2>
                <h3>SPACEPORT</h3>
              </header>
              <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
            </div> :null}
            { capsule? <div className={styles.items}>
              <header>
                <h2>THE TERMINOLOGY…</h2>
                <h3>SPACE CAPSULE</h3>
              </header>
              <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
            </div> :null}
          </section>
        </div>
      </main>
    </div>
  )
}
