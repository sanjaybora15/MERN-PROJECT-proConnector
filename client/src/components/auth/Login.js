import React,{Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'; 
import {setAlert} from '../../actions/alert';
import PropTypes from 'prop-types';

const Login = ({setAlert}) => {
    const [formData,setFormData] = useState({
        email: '',
        password: '',
    });
 const {email,password} = formData;
 const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});
 const onSubmit = async e => {
          e.preventDefault();
            setAlert('invalid credientials', 'danger')
          }
 

    return (
        <Fragment>
        <h1 className="large text-primary">Sign In</h1>
              <p className="lead"><i className="fas fa-user"></i> Login to Your Account</p>
              <form className="form" onSubmit = {e => onSubmit(e)}>
                
                <div className="form-group">
                  <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />  
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password} onChange={e => onChange(e)}
                    minLength="6"
                  />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
              </form>
              <p className="my-1">
               Don't have an account? <Link to="/register">Sign Up</Link>
              </p>

        </Fragment>
    )
    };

    Login.propTypes = {
      setAlert: PropTypes.func.isRequired 
    }
    
    export default connect(null, {setAlert})(Login);
