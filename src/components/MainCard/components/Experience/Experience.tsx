import './Experience.css'

function Experience() {
  return (
    <div className="experience-container">
      <h1>Experiência Profissional</h1>

      <div className="vertical-timeline">
        <div className="timeline-item">
          <div className="timeline-marker">
            <span>2021</span>
          </div>
          <div className="timeline-content">
            <h3>Tethlas</h3>
            <p>Desenvolvedor Freelance</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker">
            <span>2022</span>
          </div>
          <div className="timeline-content">
            <h3>Luz - Soluções Financeiras</h3>
            <p>Analista de Sistemas Júnior</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker">
            <span>2024</span>
          </div>
          <div className="timeline-content">
            <h3>WeFit</h3>
            <p>Engenheiro de Software Pleno</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
