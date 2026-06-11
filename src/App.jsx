import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header'
import Products from './Products.jsx'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) document.body.classList.add('dark-mode')
    else document.body.classList.remove('dark-mode')
  }, [darkMode])

  return (
    <>
    <section style={{ textAlign: 'center' }}>
      <button className="theme-toggle" onClick={() => setDarkMode((prev) => !prev)}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <Header />
      <img src="https://zerodha.com/static/images/landing.svg" alt="" />
      <h2>Invest in everything</h2>
    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
    <button id='btn' >SignUp</button>
    </section>

    <section>
      <h1>cards</h1>
    
    <Products/>
    </section>
    </>
  )
}

export default App