import React from 'react'
import './Home.css'
// import Papai from './assets/junior.png'

export default function Home() {
  return (
    <div>
      <header>
        Grupo Papai
      </header>
      <main>
        <img src='gp_papai.jpg' />
        {/* <div className="card">        </div>
        <div className="card"></div>
        <div className="card"></div> */}
      </main>
      <footer>
        Business inquiries deal with <a style={{ textDecoration: "none" }} href="https://wa.me/5566996232793">Jonatas Apolinario</a>, click<a href="mailto:jonatasapolinario41@gmail.com">here!</a>
      </footer>
    </div>
  )
}
