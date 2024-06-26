import { useEffect, useState } from "react";
// import { tech } from "../Tech"
import { useNavigate } from "react-router-dom";
import logo from "../images/img.png"
import "../components/Result.css"
import axios from "axios";

const SurveyResult = () => {

    type userType = {
        Result: string
    }

    const [userData, setUserData] = useState<userType>({
        Result: ""
    });

    const handleData = (e: any) => {
        const { name, value } = e.target;

        setUserData({ ...userData, [name]: value })
        console.log(name, value);

    }
    const navigate = useNavigate()

    const HomeNavigate = () => {
        navigate("/admin")
    }

    const AddSurveyNavigate = () => {
        navigate("/addsurvey")
    }

    const ManageSurveyNavigate = () => {
        navigate("/managesurvey")
    }

    const LogoutNavigate = () => {
        navigate("/")
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
                                <a className="nav-link" aria-current="page" onClick={HomeNavigate} >Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" onClick={AddSurveyNavigate}>Add Survey</a></li>
                                    <li><a className="dropdown-item" onClick={ManageSurveyNavigate} >Manage Survey</a></li>
                                    <li><a className="dropdown-item" >Survey Result</a></li>
                                </ul>
                            </li>
                        </ul>
                        <button className="btn btn-outline-primary" type="button" onClick={LogoutNavigate} >Sign Out</button>
                    </div>
                </div>
            </nav>

            <div style={{ marginTop: "80px" }}>
                Result for: <select id="result" name="Result" onChange={(e) => handleData(e)} value={userData.Result}>
                    <option value="none">Select React Tool</option>
                    {
                        gettech.map((data: any, index: any) => (
                            <option value={`${data.SurveyID}`} key={index}>{data.Title}</option>
                        ))
                    }
                </select>
                <canvas id="chart"></canvas>
            </div>
        </>
    )
}

export { SurveyResult }