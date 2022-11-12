import React from 'react'
import './Home.css'
// import junior from './assets/junior.png'

export default function Home() {
  return (
    <div>
      <header>
        Papai Group
      </header>
      <main>
        <div className="card">
          {/* <img className='card-image' src={junior} /> */}
        </div>
        <div className="card"></div>
        <div className="card"></div>
      </main>
      <footer>
        Business inquiries deal with Jonatas Apolinario, click<a href="mailto:jonatasapolinario41@gmail.com">here!</a>
      </footer>
    </div>
  )
}
