import React from 'react'
import './App.css'
import lib from "./images/library.jpg"

const initialName = "Trevy"

let language = 'JavaScript'
let framework = 'React'
let moon = "🌙"

function Header({ name, date, updateName }) {
  return (
    <header>
      <h1>{name}'s awesome Kitchen</h1>
      <p>Copyright {date}</p>

      <button onClick={() => updateName(name)}>Change Name</button>
    </header>
  )
}

function App() {
  //const [user, updateName] = React.useState(initialName)
  const [user, toggle] = React.useReducer((userName) => userName === initialName ? "Goat" : initialName, initialName)

  React.useEffect(() => {
    document.title = `${user}'s awesome kitchen`
    console.log(`Hello ${user}`)
  }, [user])
//  }, []) // Run onec when the component mounts

  return (
    <>
      <Header
        name={user}
        date={new Date().getFullYear()}
        updateName={toggle}
      />

      <button onClick={toggle}>Change Name</button>


      {/* <Main dishes={items} /> */}

      <List2 dishes={dishObj} userName={user} />

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










function Main({dishes}) {
  return (      
    <>


wss
      <h3>Hello {language.toUpperCase()} {moon}!</h3>
      <img src={lib} alt="library" width={500} />

      <ul>
        {dishes.map((dish, index) => {
          return <li key={index}>{dish}</li>
        })}
      </ul>
    </>
  )
}


const items = 
  [
    "Hamburger and chicken fingers",
    "Meat Pizza",
    "Steak and eggs",
    "Salmon"
  ]
  
  const dishObj = items.map((dishes, index) => ({  
    id: index,
    name: dishes
   }));


  function List2({dishes, userName}) {
    return (      
      <>
        <p>{userName}'s awesome menu</p>

        <ul>
          {dishes.map((dish) => {
            return <li key={dish.id}>{dish.name}</li>
          })}
        </ul>
      </>
    )
  }

export default App