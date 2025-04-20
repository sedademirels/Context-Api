import React, { useContext } from 'react';
import LangContext from '../contexts/LangContext';

function ChangeLang() {
  const { lang, setLang } = useContext(LangContext);

  return (
    <div>
      <div>Aktif Dil: {lang}</div>
      <button onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}>
        Dili Değiştir
      </button>
    </div>
  );
}

export default ChangeLang;
