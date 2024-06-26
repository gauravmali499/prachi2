import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const FeedBackForm = ({ signin }) => {
    // console.log(signin);

    // let params = new URLSearchParams(document.location.search)
    // const id = params.get(id)
    const { id } = useParams();
    console.log(id);


    const ToggleButton = () => {
        for (let i of signin) {
            if (i.Email == "admin@gmail.com") {
                $("#togglebtn").text("Edit")
            }
            else {
                $("#togglebtn").text("Save")

            }
        }
    }
    const navigate = useNavigate()


    const HomeNavigate = () => {

        for (let i of signin) {
            if (i.Email == "admin@gmail.com") {
                navigate("/admin")
            }
            else {
                navigate("/user")
            }
        }
    }

    type feedbacktype = {
        id: string,
        Option: string,
        Answer: string
    }

    const [feedback, setfeedback] = useState<feedbacktype>({
        id: "",
        Option: "",
        Answer: ""
    })

    const handleData = (e: any) => {
        const { name, value } = e.target;
        console.log(value);
        setfeedback({ ...feedback, [name]: value })

    }

    // const setID = () => {
    //     let Id = $("#ID").val()
    //     Id = parseInt(id)
    //     setfeedback((prevForm: feedbacktype) => {
    //         let copyData: any = { ...prevForm }
    //         copyData.ID = Id
    //         return copyData
    //     })
    //     return
    // }

    useEffect(() => {
        ToggleButton()
    }, [])

    const handlebtn = (e: any) => {
        console.log(feedback);

        if ($("#togglebtn").text() == "Save") {
            axios.post("http://localhost:4000/postfeedback", { ...feedback, id: e.target.value }, { withCredentials: true })
                .then((val) => {
                    console.log(val.data);
                })
                .catch((err) => {
                    console.log(err);
                })
            navigate("/feedbackhistory")
        }
        else {
            navigate('/managesurvey')
        }


    }
    return (
        <>
            <div className="d-md-flex justify-content-md-end" >
                <button type="button" className="btn-close" aria-label="Close" style={{ width: "50px", height: "27px", backgroundColor: "grey" }} onClick={HomeNavigate}></button>
            </div>
            <div className="mx-0 mx-sm-auto" style={{ width: "800px", marginTop: "5%" }} >
                <div className="card">
                    <div className="card-header bg-dark">
                        <h5 className="card-title text-white mt-2" id="exampleModalLabel">Feedback request</h5>
                    </div>
                    <div className="modal-body">
                        <div className="text-center">
                            <i className="far fa-file-alt fa-4x mb-3 text-primary"></i>
                            <p>
                                <strong>Your opinion matters</strong>
                            </p>
                            <p>
                                Let's know about your opinion on products?
                                <strong>Give us your feedback.</strong>
                            </p>
                        </div>

                        <hr />

                        <form className="px-4" action="">

                            <p className="text-center"><strong>Rate the product out of 5:</strong></p>

                            <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="Option" id="option" value={"1"} onChange={(e) => handleData(e)} />
                                <label className="form-check-label" htmlFor="option">
                                    1
                                </label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="Option" id="radioExample2" value={"2"} onChange={(e) => handleData(e)} />
                                <label className="form-check-label" htmlFor="radioExample2">
                                    2
                                </label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="Option" id="radioExample3" value={"3"} onChange={(e) => handleData(e)} />
                                <label className="form-check-label" htmlFor="radioExample3">
                                    3
                                </label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="Option" id="radioExample4" value={"4"} onChange={(e) => handleData(e)} />
                                <label className="form-check-label" htmlFor="radioExample4">
                                    4
                                </label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="Option" id="radioExample5" value={"5"} onChange={(e) => handleData(e)} />
                                <label className="form-check-label" htmlFor="radioExample5">
                                    5
                                </label>
                            </div><br />

                            <p className="text-start"><strong>Tell us about your experience with the product.</strong></p>

                            {/* <!-- Message input --> */}
                            <div className="form-outline mb-4">
                                <textarea className="form-control" id="form4Example3" name="Answer" value={feedback.Answer} onChange={(e) => handleData(e)}></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer text-end " >
                        <button type="button" id="togglebtn" className="btn" value={id} style={{ backgroundColor: "#11aaab" }} onClick={handlebtn} >Save</button>
                        {/* <button type="button" className="btn ms-2" style={{ backgroundColor: "#11aaab" }}>Edit</button> */}
                    </div>
                </div>
            </div><br /><br />
        </>
    )
}

export { FeedBackForm }