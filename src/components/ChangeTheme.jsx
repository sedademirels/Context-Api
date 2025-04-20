import React from 'react'
import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

//Contexti oluştururken create context kullandım. buna erişip kullanmak istediğimde ise use context hooku kullanacağım.

function ChangeTheme() {

    const data= useContext(ThemeContext);

  return (
    <div>
        <button >ChangeTheme</button>
    </div>
  )
}

export default ChangeTheme;