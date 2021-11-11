import { useState } from "react";

   

function Form2 (number) {
 

    const [preço, setPreço] = useState('')
    const [id, setId] = useState('')
    //const [altura, setAltura] = useState()
    //const [largura, setLargura] = useState()

    function result (e) {
    e.preventDefault()
    const altura = document.getElementById('altura').value
    const largura = document.getElementById('largura').value
    var soma = parseInt(altura) + parseInt(largura)
    return console.log(soma)
     

    }

    return(
        <form>
            <select type="text">
                <option id="1">Opção1</option>
                <option id="2" >Opção2</option>
                <option id="3" >Opção3</option>
            </select>
            <br/>
            <input id="altura" name="altura" type="number" placeholder="digite a altura"  />
            <br/>
            <input id="largura" name="largura" type="number" placeholder="digite a largura"/>
            <button type="submit" onClick={result} >Calcular</button>
        </form>
    )
}


export default Form2;