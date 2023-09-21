// import './App.css'

import Navigation from "./component/Navigation/Navigation"
import Button from "./component/UI/Button"
import ButtonPage from "./pages/ButtonPage/ButtonPage"

function App() {

  return (
    <div className="flex flex-col web-wrapper md:flex-row">
      <Navigation />
      <main className="w-full bg-slate-400">
        <ButtonPage />
      </main>
    </div>
  )
}

export default App
