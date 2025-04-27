import { FileText, Github, Linkedin } from 'lucide-react'
import './Summary.css'

function Summary() {
  return (
    <div className="summary-container">
      <div className="summary-title">
        <h1>João Victor Veidz</h1>
        <h2>Engenheiro de Software</h2>
      </div>
      <p className="summary-text">
        Construindo sistemas robustos, escaláveis, testáveis e performáticos.
      </p>
      <div className="summary-links">
        <a
          href="https://github.com/evrwaqe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/veidz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={24} />
        </a>
        <a href="src/assets/cv.pdf" download>
          <FileText size={24} />
        </a>
      </div>
    </div>
  )
}

export default Summary
