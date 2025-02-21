import { useState,useEffect } from "react"
import { FaRegEye } from 'react-icons/fa';


const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]); 

    const [selectedCategory, setSelectedCategory] = useState('All')
    
    useEffect(()=>{
        fetch('/projects.json').then(res => res.json()).then(data =>{
            setProjects(data);
            setFilteredProjects(data);
        });
    }, [])

    const handleFilterClick = (category) => {
        setSelectedCategory(category);
        if(category === 'All'){
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter(project => project.category === category);
            setFilteredProjects(filtered);
        }
    }

    return (
    <section>
        <header>
            <h2 className="h2 article-title">Projects</h2>
        </header>

        {/* Filter buttons */ }
        <ul className="filter-list">
            {['All', 'Full stack', 'Backend', 'Front-end'].map(category =>(
                <li className="filter-item" key={category}>
                    <button onClick={() => handleFilterClick(category)}
                    data-filter-btn 
                    className={category === selectedCategory ?  'active' : ''}>{category}</button>
                </li>
            ))}
        </ul>

        { /* Show portfolio data */ }
        <section className="projects">
            <ul className="project-list">
                {
                    filteredProjects.map(project => (
                        <li key={project.id} className="project-item active" data-category={project.category} data-filter-item>
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <a href={project.gitHub} style={{textDecoration:'none'}} target="_blank">
                                            <FaRegEye /></a>
                                    </div>
                                    <img src={project.image} alt="" loading="lazy" />
                                </figure>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-category">{project.category}</p>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </section>

    </section>
    )
}

export default Projects