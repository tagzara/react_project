import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService.js';

export const Login = ({
    onLogin
}) => {
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let username = formData.get('username');
        let password = formData.get('password');

        authService.login(username, password)
            .then((authData) => {
                console.log(authData);
            })
            .catch(err => {
                console.log(err);
            });

        onLogin(username);

        navigate('/');
    }
    return (
        <li className="dropdown">
            <button href="/login" className="dropdown-toggle" data-toggle="dropdown">Log In <span className="caret"></span></button>
            <ul className="dropdown-menu dropdown-lr animated slideInRight" role="menu">
                <div className="col-lg-12">
                    <div className="text-center">
                        <h3 className="animate__animated animate__bounce"><b>Log In</b></h3></div>
                    <form id="ajax-login-form" onSubmit={onLoginHandler} method="POST">
                        <div className="form-group">
                            <label for="username">Username</label>
                            <input type="text" name="username" id="username" className="form-control" placeholder="Username" />
                        </div>

                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" className="form-control" placeholder="Password" />
                        </div>

                        <div className="form-group">
                            <div className="row">
                                <div className="col-xs-7">
                                    <input type="checkbox" name="remember" id="remember" defaultChecked />
                                    <label for="remember"> Remember Me</label>
                                </div>
                                <div className="col-xs-5 pull-right">
                                    <input type="submit" name="login-submit" id="login-submit" className="form-control btn btn-success" value="Log In" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="text-center">
                                        <a href="http://phpoll.com/recover" className="forgot-password">Forgot Password?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="hidden" className="hide" name="token" id="token" value="a465a2791ae0bae853cf4bf485dbe1b6" />
                    </form>
                </div>
            </ul>
        </li>
    )
}
