import { GiClawSlashes } from "react-icons/gi";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
const Aside = () => {
    return (
    <aside className="sidebar">
        <div className="sidebar-info">
            <figure className="avatar-box">
                <img src="/images/profile-photo.jpg"  alt="" width="80"/>
            </figure>
            <div className="info-content">
                <h1 className="name">Juan José Villamizar</h1>
                <p className="title">Web Developer</p>
            </div>
            <button className="info_more-btn">
                <span>Show Contacts</span>
                <GiClawSlashes/>
            </button>
        </div>

        {/* contact info */}
        <div className="sidebar-info_more">
            <hr className="separator" />
            <ul className="contacts-list">
                <li className="contact-item">
                    <div className="icon-box">
                        <MdMarkEmailUnread />
                    </div>
                    <div className="contact-info">
                        <p className="contact-title">Email</p>
                        <a className="contact-link" href="mailto:juanjvs345@gmail.com">Juanjvs345@gmail.com</a>
                    </div>
                </li>
                <li className="contact-item">
                    <div className="icon-box">
                        <MdOutlinePhonelinkRing />
                    </div>
                    <div className="contact-info">
                        <p className="contact-title">Phone</p>
                        <a className="contact-link" href="tel:+573102938999" >+57 3102938999</a>
                    </div>
                </li>
                <li className="contact-item">
                    <div className="icon-box">
                        <IoLocationSharp />
                    </div>
                    <div className="contact-info">
                        <p className="contact-title">Location</p>
                        <address >Bucaramanga, Santander, Colombia</address>
                    </div>
                </li>
            </ul>
        </div>

    </aside>
    )
}

export default Aside