import { useNavigate } from "react-router-dom"
import image from "../images/Survey.svg"
import { useState } from "react"
import axios from "axios"

const Signin = ({ addSignin }) => {

    const navigate = useNavigate()
    // const [userList, setUserList] = useState([]);

    type userType = {
        Email: string
        Password: string
    }

    const [userForm, setUserForm] = useState<userType>({
        Email: "",
        Password: ""
    })

    const handleData = (e: any) => {
        const { name, value } = e.target;
        console.log(value);

        setUserForm({ ...userForm, [name]: value })

    }

    const ValidatePassword = (password: any) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/;
        if (!regex.test(password)) {
            return false;
        }
        else {
            return true;
        }
    }

    const ValidEmail = (email: any) => {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(email)) {
            return false;
        } else {
            return true;
        }
    }

    const SignupNavigate = () => {
        navigate("/signup")
    }

    const Admin = [{
        Email: "admin@gmail.com",
        Password: "Admin@0203"
    }]

    const UserNavigate = () => {
        if (userForm.Email == "admin@gmail.com") {
            navigate("/admin")
        }
        else {
            navigate("/user")
        }
    }

    // const [users, setusers] = useState([])
    // useEffect(() => {
    //     axios.get("http://localhost:4000/getusers")
    //         .then((val: any) => {
    //             setusers(val.data)

    //         })
    //         .catch((err) => {
    //             console.log(err);

    //         })
    // }, [users])

    // console.log(users);


    const Submit = () => {
        let email = ValidEmail(userForm.Email)
        let password = ValidatePassword(userForm.Password)
        let count: number = 0;

        if (userForm.Email == "") {
            $("#email-error").text("Email cannot be blank").css("color", "red")
        }
        else if (!email) {
            $("#email-error").text("Email should be valid").css("color", "red")
        }
        else {
            $("#email-error").text("")
            count += 1;
        }

        if (userForm.Password == "") {
            $("#password-error").text("Password cannot be blank").css("color", "red")
        }
        else if (!password) {
            $("#password-error").text("Password is not Valid").css("color", "red")
        }
        else {
            $("#password-error").text("")
            count += 1;
        }

        for (let j of Admin) {
            if (userForm.Email == j.Email && userForm.Password == j.Password) {
                navigate("/admin")
            }
        }

        if (count == 2) {

            setUserForm({
                Email: "",
                Password: ""
            })

            // setUserList({ ...userList, userForm })
            console.log(userForm);
            addSignin(userForm)

            axios.post("http://localhost:4000/signin", userForm, { withCredentials: true })
                .then((val) => {
                    // console.log(val.data);
                    if (val.data.statuscode == 200) {
                        UserNavigate()
                    }
                })
                .catch((err) => {
                    console.log(err);

                })
            // UserNavigate()



        }
    }

    return (
        <>

            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>

                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <label className="form-label" htmlFor="email">Your Email</label>
                                                        <input type="email" id="email" className="form-control" name="Email" value={userForm.Email} onChange={(e) => handleData(e)} />
                                                        <span id="email-error"></span>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <label className="form-label" htmlFor="password">Password</label>
                                                        <input type="password" id="password" className="form-control" name="Password" value={userForm.Password} onChange={(e) => handleData(e)} />
                                                        <span id="password-error"></span>
                                                    </div><br />
                                                    <span id="error"></span>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-lg" style={{ backgroundColor: "#11aaba" }} onClick={() => Submit()}>Sign In</button>
                                                </div>
                                                <div className="d-flex justify-content-center ">
                                                    <p className="mb-0">Don't have an account? <a
                                                        className="text-dark-50fw-bold" onClick={SignupNavigate}>Sign
                                                        Up</a>
                                                    </p>
                                                </div>
                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img src={`${image}`} className="img-fluid" alt="Sample image" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export { Signin }