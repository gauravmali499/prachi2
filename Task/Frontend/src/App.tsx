import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/Homepage"
import { Signup } from "./components/Signup";
import { Signin } from "./components/Signin";
import { useState } from "react";
import { UserSignin } from "./components/UserSignin";
import { AdminSignin } from "./components/AdminSignin";
import { AddSurvey } from "./components/AddSurvey";
import { ManageSurvey } from "./components/ManageSurvey";
import { SurveyResult } from "./components/Result";
import { FeedBackForm } from "./components/FeedBackForm";
import { FeedBackHistory } from "./components/FeedBackHistory";

function App() {
  // const [signup, setSignup] = useState<any>([]);
  const [signin, setSignin] = useState<any>([])
  // const [tech, settech] = useState<any>([])

  // const addSignup = (e: any) => {
  //   signup.push(e)

  //   setSignup([...signup])
  // }

  // const addtech = (e: any) => {
  //   tech.push(e)

  //   settech([...tech])
  // }
  // const [id, setid] = useState<any>([])

  // const addid = (e: any) => {
  //   id.push(e)

  //   setid([...id])
  // }

  const addSignin = (e: any) => {
    signin.push(e)

    setSignin([...signin])
  }
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='signup' element={<Signup />} />
          <Route path='signin' element={<Signin addSignin={addSignin} />} />
          <Route path='user' element={<UserSignin />} />
          <Route path='admin' element={<AdminSignin />} />
          <Route path='addsurvey' element={<AddSurvey />} />
          <Route path='managesurvey' element={<ManageSurvey />} />
          <Route path='surveyresult' element={<SurveyResult />} />
          <Route path='feedback/:id' element={<FeedBackForm signin={signin} />} />
          <Route path='feedbackhistory' element={<FeedBackHistory />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

