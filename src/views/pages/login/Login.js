import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'


const Login = () => {

  const dataBase = [
    {
      username : "youssef",
      password : "123456"
    },
    {
      username: "admin",
      password: "admin"

    }
  ]

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('pass');
  const [loginStatus, setloginStatus] = useState(true);


  const loginClicked = () => {
      if (username === dataBase.username.value && password === dataBase.password.value) {
          console.log("Login Success");
          console.log("login loginStatus " + loginStatus);

          setloginStatus(true);
        // If login succeeds then redirect
        props.history.push('./home') 
        // 
         
      } else {
          console.log("Login Failed");
          setloginStatus(false);
          console.log("login loginStatus " + loginStatus);



      }
  }

  
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer >
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup 
                    className="mb-3"
                    >
                      <CInputGroupText >
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                      type="text" 
                      name="username" 
                      value={username}
                      onChange={(event) => { setUsername(event.target.value) }}
                     required />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password" 
                        name="password" 
                        onChange={(event) => { setPassword(event.target.value)}}
                        required/>
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton 
                        type="submit"
                        color="primary" 
                        className="px-4"
                        >                    
                          Login
                        </CButton >
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
  }



export default Login