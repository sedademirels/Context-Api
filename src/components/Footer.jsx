import React,{useContext} from 'react'
import ThemeContext from '../contexts/ThemeContext'

function Footer() {
    const {theme, toggleTheme} = useContext(ThemeContext);
 
  return (
    <div>
        <hr/>
        <div>Footer Aktif Tema : {theme}</div>
        <button onClick={toggleTheme}> Temayı değiştir</button>
    </div>
  )
}

export default Footer