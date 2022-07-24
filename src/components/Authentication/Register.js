import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService.js';
import { AuthContext } from '../../contexts/AuthContext.js';

export const Register = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let formData = Object.fromEntries(new FormData(e.currentTarget));

        authService.register(formData)
            .then(authData => {
                login(authData);
                navigate('/blog');
            });
    }
    return (
        <li className="dropdown">
            <button href="/register" className="dropdown-toggle" data-toggle="dropdown">Register <span className="caret"></span></button>
            <ul class="dropdown-menu dropdown-lr animated flipInX" role="menu">
                <div className="col-lg-12">
                    <div className="text-center">
                        <h3 className="animate__animated animate__bounce"><b>Register</b></h3></div>
                    <form id="ajax-register-form" method="POST" onSubmit={registerSubmitHandler} >
                        <div className="form-group">
                            <input type="text" name="username" id="username" className="form-control" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" id="email" className="form-control" placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" id="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="confirm-password" id="confirm-password" className="form-control" placeholder="Confirm Password" />
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-xs-6 col-xs-offset-3">
                                    <input type="submit" name="register-submit" id="register-submit" className="form-control btn btn-info" value="Register Now" />
                                </div>
                            </div>
                        </div>
                        <input type="hidden" className="hide" name="token" id="token" value="7c6f19960d63f53fcd05c3e0cbc434c0" />
                    </form>
                </div>
            </ul>
        </li>
    )
}