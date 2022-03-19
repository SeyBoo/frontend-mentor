import './App.css';
import Card from './components/card';
import { motion } from "framer-motion"
import React, { useEffect, useState } from "react";
import Nav from './components/nav/index'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CardDetails from './components/cardDetails';

function Main(props:any) {
  
  const [Data, setData] = useState([])
  const [filterShow, setfilterShow] = useState(false)

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result)
        },
      )
  }, [])
  
  const HandleSearch = (value: any) => {
    if (value.length > 0) {
      fetch("https://restcountries.com/v2/name/" + value)
    .then(res => res.json())
    .then(
      (result) => {
        if (result.status) {
        } else {
          setData(result)
        }
      },
    )
    } else {
      fetch("https://restcountries.com/v2/all")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result)
        },
      ) 
    }
  }
  
  const HandleFilter = (value: any) => {
    if (value.length > 0) {
      fetch("https://restcountries.com/v2/region/" + value)
    .then(res => res.json())
    .then(
      (result) => {
        if (result.status) {
        } else {
          setData(result)
        }
      },
    )
    } else {
      fetch("https://restcountries.com/v2/all")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result)
        },
      ) 
    }
  }

  return (
      <div>
          <Nav setTheme={props.setTheme}/>
          <div className='filter'>
            <span tabIndex={0} className='search-field'>
              <i className="fas fa-search"></i>
              <input type="text" name="country" placeholder='Search for a country...' onChange={event => HandleSearch(event.target.value)}></input>
            </span>
            <span tabIndex={0} className='filter-field'>
              <span onClick={() => setfilterShow(!filterShow)}>
                <h3>Filter by Region</h3>
                {filterShow? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
              </span>
              {filterShow? <ol>
                <li onClick={() => HandleFilter("Africa")}>Africa</li>
                <li onClick={() => HandleFilter("America")}>America</li>
                <li onClick={() => HandleFilter("Asia")}>Asia</li>

                <li onClick={() => HandleFilter("Europe")}>Europe</li>
                <li onClick={() => HandleFilter("Oceania")}>Oceania</li>
              </ol> : null}
            </span>
          </div>
          <ul className='country_container'>
            
          { 
            Data? Data.map(({name, region, population, capital, flag}: any) => (
              <motion.li key={name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ><Card name={name} region={region} population={population} capital={capital} flag={flag}></Card></motion.li>
          )) : null
          }
          </ul>
            </div>
  );
}

function App() {
  const [theme, setTheme] = useState(window.localStorage.getItem("theme"))

  return (
    <div className={"app " + theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main setTheme={setTheme}/>} />
            <Route path="/details/:id" element={<CardDetails setTheme={setTheme}/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
