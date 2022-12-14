import React from 'react'
import './Home.css'
// import Papai from './assets/junior.png'

export default function Home() {
  return (
    <div>
      <header>
        Papai Group
      </header>
      <main>
        <img src='gp_papai.jpg' />
        {/* <div className="card">        </div>
        <div className="card"></div>
        <div className="card"></div> */}
      </main>
      <footer>
        Business inquiries deal with Jonatas Apolinario, click<a href="mailto:jonatasapolinario41@gmail.com">here!</a>
      </footer>
    </div>
  )
}
