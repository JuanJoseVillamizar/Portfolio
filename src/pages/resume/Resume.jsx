import { FaBookReader } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import { useEffect, useState } from "react"
import Technology from "../about/Technology";



const Resume = () => {

    const [technologies, setTechnologies] = useState([]);
    useEffect(()=>{
        fetch('technologies.json').then(res => res.json()).then(data =>{
            setTechnologies(data);
        });
    }, [])
    return (
    <section>
        <header>
            <h2 className="h2 article-title">Resume</h2>
        </header>
        <div className="timeline">
            <div className="title-wrapper">
                <div className="icon-box">
                    <FaBookReader />
                </div>
                <h3 className="h3">Education</h3>
            </div>
            <ol className="timeline-list">
                <TimelineItem
                title= {"SENA"}
                date={"2016 - 2018"}
                description={"Maintenance Technologist electronic and industrial instruments"} />
                <TimelineItem
                title= {"Campusland"}
                date={"2023 - 2024"}
                description={"Training in full stack development with Node.js express and mongoDb, mysql, react, html css."} />
                <TimelineItem
                title= {"Oracle Next Education  (ONE)"}
                date={"2024 - 2025"}
                description={"Scalable backend application development with Java (Spring Boot) and PostgreSQL"} />
            </ol>
        </div>
         {/* Technologies */}
        <div className="timeline">
            <div className="title-wrapper">
                <div className="icon-box">
                    <FaBookReader />
                </div>
                <h3 className="h3">Skills</h3>
            </div>
            <section className="technologies">
            <ul className="technologies-list has-scrollbar"> 
                {
                    technologies.map((technology, index) =>(
                        <Technology
                            key={index}
                            name={technology.name}
                            avatar={technology.avatar}
                            technology={technology.technology}
                        />
                    ))
                }
            </ul>
        </section>
        </div>
    </section>


    )
}

export default Resume