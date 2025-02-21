import Service from "./Service"

const servicesData = 
[
    {
        "title": "Backend Development",
        "icon": "/images/icon-automatic.svg",
        "description": "Building secure, scalable, and efficient backend systems"
    },
    {
        "title": "Database Management",
        "icon": "/images/icon-db.svg",
        "description": "Managing SQL and NoSQL databases, ensuring data integrity, performance, and security."
    },
    {
        "title": "Microservices Architecture",
        "icon": "/images/icon-photo.svg",
        "description": "Developing distributed systems with independent services, improving scalability and maintainability."
    },
    {
        "title": "API Development",
        "icon": "/images/icon-api.svg",
        "description": "Designing and developing RESTful APIs that integrate seamlessly with front-end and third-party services."
    }
]



const About = () => {
    return (
    <article className="about active">
        <header>
            <h2 className="h2 article-title">About me</h2>
        </header>
        <section className="about-text">
            <p>
                💻 I&apos;m a disciplined and passionate Junior Software Developer specializing in backend development. 
                I focus on creating secure, functional, and scalable web applications, always aiming to solve complex problems with efficient solutions 
                that align with business rules. I enjoy deeply understanding business needs to deliver the best experiences for clients 
            </p>
            <p>
            My goal is to build robust and future-proof applications, prioritizing logic and problem-solving. 
            I strive to consider every possible detail to minimize the likelihood of failures and ensure high-quality results.
            </p>
        </section>

        {/* Services */}

        <section className="service">
        <h3 className="h3 service-title">What I&apos;m doing</h3>
        <ul className="service-list">
            {
                servicesData.map((service,index) =>(
                    <Service 
                        key={index} 
                        title={service.title} 
                        icon= {service.icon} 
                        description={service.description} 
                    />
                ))
            }
        </ul>
        </section>
        
        {/* Technologies */}

        <section>
                <h3 className="h3 article-title">Technologies & Tools I&apos;m Experienced With</h3>
            {/* Back-end */}
            <section className="logos">
                <h4 className="h4 logos-title">Back-end </h4>
                <ul className="logos-list has-scrollbar">
                    <li className="logos-item">
                        <img src="/images/java-logo.png" alt="java-logo"/>
                        <h5 className="h5">Java</h5>
                    </li>
                    <li className="logos-item">
                        <img src="/images/spring-logo.png" alt="spring-boot-logo"/>
                        <h5 className="h5">Spring Boot</h5>
                    </li>
                    <li className="logos-item">
                        <img src="/images/nodejs-logo.png" alt="node-js-logo"/>
                        <h5 className="h5">Node Js</h5>
                    </li>
                    <li className="logos-item">
                        <img src="/images/express-logo.png" alt="express-js-logo"/>
                        <h5 className="h5">Express</h5>
                    </li>
                </ul>
            </section>

            {/* Databases*/}
    
            <section className="logos">
                <h4 className="h4 logos-title">Databases</h4>
                <ul className="logos-list has-scrollbar">
                    <li className="logos-item">
                        <img src="/images/mongo-db-logo.webp" alt="mongo-db-logo"/>
                    </li>
                    <li className="logos-item">
                        <img src="/images/postgresql-logo.webp" alt="PostgreSQL-logo"/>
                    </li>
                    <li className="logos-item">
                        <img src="/images/mysql-logo.webp" alt="mysql-logo"/>
                    </li>
                    <li className="logos-item">
                        <img src="/images/sqlite-logo.webp" alt="mysql-logo"/>
                    </li>
                </ul>
            </section>

            {/* Front-end */}
    
            <section className="logos">
                <h4 className="h4 logos-title">Front-end</h4>
                <ul className="logos-list has-scrollbar">
                    <li className="logos-item">
                        <img src="/images/react-logo.webp" alt="react-logo" />
                        <h5 className="h5">React</h5>
                    </li>
                    <li className="logos-item">
                        <img src="/images/js-logo.png" alt="java-script-logo"/>
                        <h5 className="h5">JavaScript</h5>
                    </li>
                    <li className="logos-item">
                        <img src="/images/html5-logo.png" alt="html5-logo"/>
                        <h5 className="h5">HTML</h5>
                    </li>
                    <li className="logos-item">
                        <img src="/images/css-logo.png" alt="css-logo" />
                        <h5 className="h5">CSS</h5>
                    </li>
                </ul>
            </section>

              {/* tools */}
    
            <section className="logos">
                <h4 className="h4 logos-title">Tools</h4>
                <ul className="logos-list has-scrollbar">
                <li className="logos-item">
                        <img src="/images/git-logo.png" alt="git-logo" />
                        <h5 className="h5">Git</h5>
                    </li>
                    <li className="logos-item">
                        <img src="/images/github-logo.png" alt="github-logo" />
                        <h5 className="h5">Git hub</h5>
                    </li>
                    <li className="logos-item">
                        <img src="/images/postman-logo.webp" alt="postman-logo"/>
                        <h5 className="h5">Postman</h5>
                    </li>
                    <li className="logos-item">
                        <img src="/images/vscode-logo.png" alt="vscode-logo" />
                        <h5 className="h5">VsCode</h5>
                    </li>
                    <li className="logos-item">
                        <img src="/images/intellij-logo.png" alt="intelliJ-logo" />
                        <h5 className="h5">IntelliJ</h5>
                    </li>
                    <li className="logos-item">
                        <img src="/images/trello-logo.png" alt="trello-logo" />
                        <h5 className="h5">Trello</h5>
                    </li>
                </ul>
            </section>
        

        </section>
        
    </article>
    )
}

export default About