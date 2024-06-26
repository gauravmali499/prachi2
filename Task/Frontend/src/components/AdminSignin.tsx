import { useNavigate } from "react-router-dom"
// import { tech } from "../Tech"
import "../components/AdminSignin.css"
import homepage from "../images/Homepage.png"
import logo from "../images/img.png"
import axios from "axios"
import { useEffect, useState } from "react"
import tech from "../images/Technology/CreateReactApp.png"

const AdminSignin = () => {

    const navigate = useNavigate()

    const AddSurveyNavigate = () => {
        navigate("/addsurvey")
    }

    const ManageSurveyNavigate = () => {
        navigate("/managesurvey")
    }

    const ResultNavigate = () => {
        navigate("/surveyresult")
    }

    const LogoutNavigate = () => {
        navigate("/")
    }

    const Feedback = (e: any) => {
        navigate(`/feedback/${e}`)
    }

    const ShowDiv = () => {
        $("#showdiv").show()
    }

    const DeleteCard = (e: any) => {
        axios.delete(`http://localhost:4000/deletesurvey/${e}`, { withCredentials: true })
    }

    const [gettech, gettechlist] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/getsurvey")
            .then((val: any) => {
                gettechlist(val.data.survey)

            })
            .catch((err) => {
                console.log(err);

            })
    }, [gettech])

    // console.log(gettech);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-secondary bg-light" id="navbar">
                <div className="container-fluid">
                    <img src={`${logo}`} id="logo" />
                    <a className="navbar-brand" href="#">Online Survey</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" onClick={AddSurveyNavigate} >Add Survey</a></li>
                                    <li><a className="dropdown-item" onClick={ManageSurveyNavigate}>Manage Survey</a></li>
                                    <li><a className="dropdown-item" onClick={ResultNavigate}>Survey Result</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" onClick={ShowDiv}>Technology</a></li>
                                    <li><a className="dropdown-item" >Entertainment</a></li>
                                </ul>
                            </li>
                        </ul>
                        <button className="btn btn-outline-primary" type="button" onClick={LogoutNavigate} >Sign Out</button>
                    </div>
                </div>
            </nav>

            <div id="des" style={{ backgroundColor: "" }}>
                <div className="container" id="imagediv" >

                    <img src={`${homepage}`} style={{ width: "100%", height: "100%", marginTop: "77px" }} />
                    <div className="text-dark" style={{ display: "none" }} id="showdiv">
                        <h4>React Developer Tools</h4>
                        <div className="container row " style={{ marginLeft: "80px" }}>
                            {
                                gettech.map((data: any, index: any) => {
                                    return (
                                        <div className="card col-3 m-3" key={index} id={`${data.SurveyID}`}>
                                            <img src={`${tech}`} className="card-img-top"></img>
                                            <div className="card-body row">
                                                <h5 className="card-title">{data.Title}</h5>
                                                <h6 className="card-subtitle mb-2 text-body-secondary">{data.Description}</h6>
                                                <a className="btn btn-primary mb-2" onClick={() => Feedback(`${data.SurveyID}`)}>Survey for this Product</a>
                                                <a className="btn btn-success" onClick={() => DeleteCard(data.SurveyID)} >Delete this Card</a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export { AdminSignin }