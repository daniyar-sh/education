import React from "react";
import { useState } from "react";

const Header = () => {
    
    const [isAuth, setAuth] = useState(true)
    const [color, setColor] = useState('green')
    const [text, setText] = useState (Number)
    const ddd = () => {
        setAuth(!isAuth)
        setColor(color === 'green' ? 'red' : 'green')
        console.log('aaa')
    }

    const ttt = (event) => {
       setText(2022-event.target.value)
    }
    const [name, setName] = useState('Daniyar')
    const [fam, setFam] = useState('Sakirat')
    const [voz, setVoz] = useState(24)
    const [ dan, setDan] = useState({name: "Daniyar", fam: 'Sakiratr', voz: 24})
    const [ban, setBan] = useState(true)

    const fname = () => {
        setName(name === 'Daniyar' ? 'Ascar' : 'Daniyar')
        setFam(fam === 'Sakirat' ? 'Jusipay' : 'Sakirat')
        setDan({...dan, name: 'asd', fam: 'qwerty'})
        
    }
     
    const ash = () => {
        setBan(false)
    }

    const jap = () => {
        setBan(true)
    }

    const plus = (value) => {
        setVoz(voz + value)
    }

    

    
    return (
        <div>
         
            <div>
                {isAuth 
                ? <p>Dancho</p>
                : <p>gggg</p> } 

                <button style={{backgroundColor: color}} onClick={ddd}>войти</button>
                <input onChange={ttt}/>
                {text}
                <p>{name}</p>
                <button onClick={fname}>Name</button>
                <p>{fam}</p>
                <p>{voz}</p>
                {dan.name}
                {dan.fam}
                {dan.voz}
                    <hr/>
                {ban 
                 ? `${dan.name} ban`
                 : "небанен"
                }
                { ban
                ?<button onClick={ash} >аш</button>
                :<button onClick={jap}>жап</button>
                }
                <button onClick={() => plus(1)}>+</button>
                <button onClick={() => plus(-1)}>-</button>
                

            </div>

        </div>
            
          
        
    )
}
export default Header