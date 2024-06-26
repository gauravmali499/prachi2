import logo from "../images/img.png"
import homepage from "../images/Homepage.png"
import "../components/Homepage.css"
import { useNavigate } from "react-router-dom"



const HomePage = () => {
    const navigate = useNavigate()

    const SigninNavigate = () => {
        navigate("/signin")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-primary bg-light">
                <div className="container-fluid">
                    <img src={`${logo}`} id="logo" />
                    <a className="navbar-brand">Online Survey</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container" id="imagediv" >

                <img src={`${homepage}`} style={{ width: "100%", height: "100%", opacity: "0.3" }} />
                <div className="centered">
                    <h1><strong style={{ color: "#e55731" }}>ONLINE</strong> SURVEY</h1>
                    <h3><strong style={{ color: "#2d93c2" }}>Share your opinion with us</strong></h3><br />
                    <button className="btn" style={{ backgroundColor: "#0D8591", color: "white", fontWeight: "bold" }} onClick={SigninNavigate}>SIGNIN</button>
                </div>
            </div>
        </>
    )
}

export { HomePage }