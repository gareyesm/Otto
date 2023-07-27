import React from "react"
import ReactDom from "react-dom/client"
const rootElement = document.getElementById("root")
//root es nuestro componente inicial, es la base de toda la pagina web
const root = ReactDom.createRoot(rootElement)
root.render(<h1>Hola Mundo</h1>)
//Componentes=funciones que retornan alguna interfaz
function Greeting() {
    return <div>
        <h1>Hello World</h1>
        <p>Prueba 123</p>
    </div>

}
root.render(<div>
    {Greeting()}
    {Greeting()}
    <Greeting></Greeting>
    <Greeting></Greeting>
    <Greeting />
</div>)//Las llaves nos permiten interpretar codigo
//Tambien podrias llamar a Greeting como si fuera un H1 o escribir solo una etiqueta como de cierre (etiquetas que se cierran en si misma)
//Siempre se llama a un div para que sea el elemento que contenga al resto

//JSX es una combinacion de sintaxis entre HTML y JS
