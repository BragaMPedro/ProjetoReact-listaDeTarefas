import { ToDoProvider } from "./context/ToDoContext"
import { GlobalStyle } from "./Styles/global"
import { Home } from "./pages/Home/Home"

function App() {

  return (
    <>
      <ToDoProvider>
          <GlobalStyle/>
          <Home/>
      </ToDoProvider>
    </>
  )
}

export default App
