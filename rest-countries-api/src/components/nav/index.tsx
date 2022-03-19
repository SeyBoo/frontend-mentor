import "./style.css";
import {useState} from 'react'

export default function Nav(props:any) {

    useState(() => {
      if (window.localStorage.getItem("theme") === null) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches === true) {
          window.localStorage.setItem("theme", "dark");
          props.setTheme("dark");
        } else {
          window.localStorage.setItem("theme", "light");
          props.setTheme("light");
        }
      } 
    })

    const changeTheme = () => {
      if (window.localStorage.getItem("theme") === "light") {
        window.localStorage.removeItem("theme");
        window.localStorage.setItem("theme", "dark");
        props.setTheme("dark");
      } else {
        window.localStorage.removeItem("theme");
        window.localStorage.setItem("theme", "light");
        props.setTheme("light");
      }
    }

    return (
      <nav>
        <a href="/"><h1>Where in the world?</h1></a>
        <span tabIndex={0} onClick={() => changeTheme()}>
          <div>
            {window.localStorage.getItem("theme") === 'light' ? <i className="fas fa-moon"></i>
            : <i className="far fa-moon"></i>}
          </div>
          <p>Dark Mode</p>
        </span>
    </nav>
    )
}