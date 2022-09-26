import React, { Component} from 'react';
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
class Login extends Component {
  constructor(props) {
    super(props);
    const users =[
      {
        "ID": 1,
        "Username": "youssefbouzid@yahoo.com",
        "Password": "123456"
      },
      {
        "ID": 2,
        "Username": "admin@yahoo.com",
        "Password": "admin"
      }
    ]
    this.state = {
      username: '',
      password: '',
      loginStatus: 'not logged in',
    };
  

  const handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

   const handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

   const handleSubmit = (event) => {
    var found = false;
    event.preventDefault();
    users.forEach((user) => {
      // as of now checks for correct username only and not the password
      if (user.Username == this.state.username) {
        found = true;
      }
    });
    if (found) {
      this.setState({
        loginStatus: 'Successfully logged in!',
      });
      console.log(this.props);
      this.props.history.push('/home');
    } else {
      this.setState({
        loginStatus: 'Login failed! Inavlid User/Pass',
      });
    }
  };
  }
  render() {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer >
        <CRow className="justify-content-center"onSubmit={this.handleSubmit}>
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
                      id="username"
                      name="username"
                      placeholder="Enter email"
                      onChange={this.handleUsernameChange}
                      type="email"
                      value={this.state.username}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        id="password"
                        name="password"
                        placeholder="enter your password"
                        onChange={this.handlePasswordChange}
                        type="password"
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
}

export default Login
