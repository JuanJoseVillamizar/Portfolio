import { FaBookReader, FaBriefcase } from 'react-icons/fa'
import TimelineItem from './TimelineItem'
import { useEffect, useState } from 'react'
import Technology from '../about/Technology'

const Resume = () => {
  const [technologies, setTechnologies] = useState([])
  useEffect(() => {
    fetch('technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data)
      })
  }, [])

  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Experience Section */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBriefcase />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title={'Software Developer — Somic'}
            date={'May 2025 - Present'}
            description={
              'Developing and maintaining enterprise ERP applications. Responsible for business logic implementation, optimizing complex queries in SQL Server, and debugging critical production issues (concurrency, HTTP status codes, and system integrations).'
            }
          />
        </ol>
      </div>

      {/* Education Section */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title={'Oracle Next Education (ONE)'}
            date={'2024 - 2025'}
            description={
              'Scalable backend application development with Java (Spring Boot) and PostgreSQL'
            }
          />
          <TimelineItem
            title={'Campusland'}
            date={'2023 - 2024'}
            description={
              'Training in full stack development with Node.js, Express, MongoDB, MySQL, and React.'
            }
          />
          <TimelineItem
            title={'SENA'}
            date={'2016 - 2018'}
            description={
              'Maintenance Technologist in electronic and industrial instruments'
            }
          />
        </ol>
      </div>

      {/* Skills / Technologies Section */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Skills</h3>
        </div>
        <section className="technologies">
          <ul className="technologies-list has-scrollbar">
            {technologies.map((technology, index) => (
              <Technology
                key={index}
                name={technology.name}
                avatar={technology.avatar}
                technology={technology.technology}
              />
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}

export default Resume
