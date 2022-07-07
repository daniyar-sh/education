import React, { useState } from "react";
import CheckboxItem from "./check/Chec";

const Test = () => {
    const [color, setColor] = useState('')
    const [show, setShow] = useState(true)
    const [unlock, setUnlock] = useState("disabled")
    const [Html, setHtml] = useState(true)
    const [Css, setCss] = useState(true)
    const [Js, setJs] = useState(true)
    

    const colors = (value) => {
        setColor(value)
    }

    const seem = () => {
        setShow(!show)
    }
    
    const lock = () => {
        setUnlock(unlock === "disabled" ? '' : "disabled" )
    }

    const meaning = () => {
        setHtml(!Html)
    }
    const meaning1 = () => {
        setCss(!Css)
        
    }

    const meaning2 = () => {
        setJs(!Js)
    }
   
    const languages = ['html', 'css', 'js']
    const [chosenLanguages, setChosenLanguages] = useState([])
  
    const handleChange = (e, item) => {
      if(e.target.checked) {
        setChosenLanguages([...chosenLanguages, item])
      } else {
        setChosenLanguages(chosenLanguages.filter(l => l !== item ))
      }
    }
  
    const languageItems = languages.map((item, i) => <CheckboxItem key={i} handleChange={handleChange} item={item}/>)
  
    const chosenLanguageItems = chosenLanguages.map((item, i) => <p key={i}>{item}</p>)
    
    return (
        <div>
            {/* <button onClick={() => colors("red")}>красный</button>
            <button onClick={() => colors("yellow")}>желтый</button>
            <button onClick={() => colors("blue")}>синий</button>
            <p style={{color: color}}>
            Текст  (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.
            Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности.
            </p>
            <hr/>
            <input onClick={seem} type="checkbox"/> 
           {show 
           ?""
           : <p >
           Текст  (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.
           Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности.
           </p>
           }
           <hr/>
           <input onClick={lock} type="checkbox"/>
           <input disabled={unlock}/>
           <hr/>
           <input onClick={meaning}  type="checkbox"/> html
           <input onClick={meaning1}  type="checkbox"/> Css
           <input onClick={meaning2}  type="checkbox"/> Js
           <p>{Html ? "" : 'html'}</p>
           <p>{Css  ? "" : 'Css'}</p>
           <p>{Js  ? "" : 'Js'}</p> */}
              {languageItems} 
        {chosenLanguageItems}
        </div>
    )
} 

export default Test