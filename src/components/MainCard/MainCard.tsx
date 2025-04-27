import './MainCard.css'
import About from './components/About/About'
import Summary from './components/Summary/Summary'

function MainCard() {
  return (
    <div className="main-card-container">
      <Summary />
      <About />
    </div>
  )
}

export default MainCard
