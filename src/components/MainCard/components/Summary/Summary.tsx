import { SiLinkedin, SiGithub } from 'react-icons/si'
import { FiFileText } from 'react-icons/fi'
import './Summary.css'

function Summary() {
  return (
    <div className="summary-container">
      <img
        src="src/assets/profile.jpg"
        alt="Foto de perfil de João Victor Veidz, engenheiro de software, usando óculos, barba curta, cabelo ondulado, com fundo de árvores verdes."
      />

      <div className="summary-right-container">
        <div className="summary-title">
          <h1>João Victor Veidz</h1>
          <h2>Engenheiro de Software</h2>
        </div>

        <div className="summary-links">
          <a
            href="https://github.com/evrwaqe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/veidz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin size={24} />
          </a>
          <a href="src/assets/cv.pdf" download>
            <FiFileText size={24} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Summary
