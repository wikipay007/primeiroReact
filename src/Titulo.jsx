import { useState } from "react";

function Titulo({nome}){
    const soma = 10 + 10;
    const [texto, setTexto] = useState("Valor inicial");
    const [inputText, setInputText] = useState("");
    function clicou(){
        setTexto(inputText);
    }
    return(
        <div>
            <h1>Eu sou {nome}, {texto}</h1>
            <p>{texto}</p>
            <input type="text" value={inputText} onChange={(e)=>{setInputText(e.target.value)}} />
            <button onClick={()=>{setTexto("Mudei Via botão")}}>Mudar</button>
            <button onClick={clicou}>Clicou</button>
        </div>
    
) 
}
export default Titulo