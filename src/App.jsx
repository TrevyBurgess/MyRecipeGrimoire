import React from 'react'
import './App.css'
import lib from "./images/library.jpg"

let language = 'JavaScript'
let framework = 'React'
let moon = "🌙"

function Header({ name, date }) {
  return (
    <header>
      <h1>{name}'s awesome Kitchen</h1>
      <p>Copyright {date}</p>
    </header>
  )
}

const items = 
  [
    "Hamburger and chicken fingers",
    "Meat Pizza",
    "Steak and eggs",
    "Salmon"
  ]

  function Main({dishes}) {
    return (      
      <>
        <h3>Hello {language.toUpperCase()} {moon}!</h3>
        <img src={lib} alt="library" width={500} />

        <ul>
          {dishes.map((dish, index) => {
            return <li key={index}>{dish}</li>
          })}
        </ul>
      
        {/* 
        
  
        <img src="https://github.com/TrevyBurgess/Published/blob/main/Images/Dall%C2%B7E/PizzaPi.jpeg" alt="pizza pi" width={500} />
         */}
      </>
    )
  }
  
  const dishObj = items.map((dishes, index) => ({  
    id: index,
    name: dishes
   }));


function App() {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <Header name="Trevy" date={new Date().getFullYear()} />

      <Main dishes={items} />
 

    {/*
      
      <table>
        <thead>

        </thead>

        <tbody>

        </tbody>

        <tfoot>

        </tfoot>
      </table>
    */}
    </>
  )
}

export default App
