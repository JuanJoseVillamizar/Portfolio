
const Technology = ({name, avatar, technology}) => {
    return (
    <li className="technologies-item">
        <div className="content-card">
            <figure className="technologies-avatar-box">
                <img src={avatar} alt={name} height="60"/>
            </figure>
            <h4 className="h4 technologies-item-title">{name}</h4>
            <div className="technologies-text">
                <p>{technology}</p>
            </div>
        </div>
    </li>
    )
}

export default Technology