import homepage from "../images/Homepage.png"
import logo from "../images/img.png"
import "../components/UserSignin.css"
import { useNavigate } from "react-router-dom"
import tech from "../images/Technology/CreateReactApp.png"
import { useEffect, useState } from "react"
import axios from "axios"

const UserSignin = () => {



    const navigate = useNavigate()

    const LogoutNavigate = () => {
        navigate("/")
    }

    const Feedback = (e: any) => {
        navigate(`/feedback/${e}`)
    }

    const FeedbackHistory = () => {
        navigate("/feedbackhistory")
    }

    const ShowDiv = () => {
        $("#showdiv").show()
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
    }, [])

    console.log(gettech);


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
                                    Category
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" onClick={ShowDiv} >Technology</a></li>
                                    <li><a className="dropdown-item" >Entertainment</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={FeedbackHistory}>FeedBack</a>
                            </li>
                        </ul>
                        <button className="btn btn-outline-primary" type="button" onClick={LogoutNavigate}>Sign Out</button>
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
                                                <a className="btn btn-primary" onClick={() => Feedback(`${data.SurveyID}`)}>Survey for this Product</a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { UserSignin }