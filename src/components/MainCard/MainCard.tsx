import './MainCard.css'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Stacks from './components/Stacks/Stacks'
import Summary from './components/Summary/Summary'

function MainCard() {
  return (
    <div className="main-card-container">
      <Summary />
      <About />
      <Experience />
      <Stacks />
      <Projects />
    </div>
  )
}

export default MainCard
