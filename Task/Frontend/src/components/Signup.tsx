import { useState } from "react"
import { useNavigate } from "react-router-dom";
import image from "../images/Survey.svg"
import axios from "axios";

const Signup = () => {
    const navigate = useNavigate()
    // const [userList, setUserList] = useState([]);

    type userType = {
        Name: string,
        Email: string
        Password: string,
        ConfirmPassword: string
    }

    const [userForm, setUserForm] = useState<userType>({
        Name: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
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
    const SigninNavigate = () => {
        navigate("/signin")
    }

    const ValidEmail = (email: any) => {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(email)) {
            return false;
        } else {
            return true;
        }
    }

    const Submit = () => {
        let email = ValidEmail(userForm.Email)
        let password = ValidatePassword(userForm.Password)
        let count: number = 0;

        if (userForm.Name == "") {
            $("#name-error").text("name cannot be blank").css("color", "red")
        }
        else {
            $("#name-error").text("")
            count += 1;
        }

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

        if (userForm.ConfirmPassword == "") {
            $("#cpassword-error").text("Password cannot be blank").css("color", "red")
        }
        else if (!password) {
            $("#cpassword-error").text("Password is not Valid").css("color", "red")
        }
        else {
            $("#cpassword-error").text("")
            count += 1;
        }



        if (count == 4) {

            setUserForm({
                Name: "",
                Email: "",
                Password: "",
                ConfirmPassword: "",
            })

            // setUserList({ ...userList, userForm })
            console.log(userForm);
            // addSignup(userForm);

            axios.post("http://localhost:4000/signup", userForm)
                .then((val) => {
                    console.log(val.data);

                })
                .catch((err) => {
                    console.log(err);

                })

            SigninNavigate()
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

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <label className="form-label" htmlFor="name">Your Name</label>
                                                        <input type="text" id="name" className="form-control" name="Name" value={userForm.Name} onChange={(e) => handleData(e)} />
                                                        <span id="name-error"></span>
                                                    </div>
                                                </div>

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
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <label className="form-label" htmlFor="cpassword">Repeat your password</label>
                                                        <input type="password" id="cpassword" className="form-control" name="ConfirmPassword" value={userForm.ConfirmPassword} onChange={(e) => handleData(e)} />
                                                        <span id="cpassword-error"></span>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-lg" style={{ backgroundColor: "#11aaba" }} onClick={() => Submit()}>Register</button>
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
export { Signup }