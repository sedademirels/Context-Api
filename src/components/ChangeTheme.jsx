import React from 'react'
import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

//Contexti oluştururken create context kullandım. buna erişip kullanmak istediğimde ise use context hooku kullanacağım.

function ChangeTheme() {

    const {theme, toggleTheme}= useContext(ThemeContext);

  return (
    <div>
        <div>Aktif Tema : {theme}</div>
        <button onClick={ toggleTheme}>ChangeTheme</button>
    </div>
  )
}

export default ChangeTheme;