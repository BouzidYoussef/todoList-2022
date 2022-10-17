import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

 

  const users = [{ 
    username: "youssef", 
    password: "123456",
    authority:"user" },
    { 
      username: "ahmed", 
      password: "123456",
      authority:"user" },
      { 
        username: "sami", 
        password: "123456",
        authority:"user" },
    {
      username:"admin",
      password:"admin",
      authority:"admin"
    }
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === "admin");
    if (account && account.password === password) {
      localStorage.setItem("authenticated", true);
      navigate("/home");
}
  };
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
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
                      name="Username"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        name="Password"
                        onChange={(e) => setpassword(e.target.value)}
                        required/>
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton 
                        type="submit"
                        color="primary" 
                        className="px-4"
                        value="Submit"
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
