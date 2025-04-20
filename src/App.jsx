import React from 'react'
import './App.css'
import ChangeTheme from './components/ChangeTheme'
import { ThemeContextProvider } from './contexts/ThemeContext'
import Footer from './components/Footer'

//Web sitenin dark ve light renkleri olsun context. bu yapıyı bir yerde tutmak gerekir. 
//Bir context dosyası oluşturuyorum. Bu dosyanın içerisine ThemeContext.jsx isimli bir jsx dosya dahil ediyorum.
// Bu işlem için react altında bulunan createContext isimli aracı kullanabiliriz.
//ThemeCongtexti App.jsx'e dahil ediyorum aşağıdaki gibi. ve Provider yapısını yani sağlayıcı olacak yapıyı kullanıyorum.
//Value atıyoruz ve bu sayede artık provider içinde herhangi bir componentten bu value'a erişebiliyorum.
// Bu yapılarda redux yerine context apı kullanıyorum çünkü zaten react içerisinde var.

function App() {
  
  return (
    <div>
      <ThemeContextProvider>
      <ChangeTheme/>
      <Footer/>
      </ThemeContextProvider>
    </div>
  )
}

export default App
