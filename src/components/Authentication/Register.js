export const Register = () => {
    return (
        <li className="dropdown">
            <button href="/register" className="dropdown-toggle" data-toggle="dropdown">Register <span className="caret"></span></button>
            <ul class="dropdown-menu dropdown-lr animated flipInX" role="menu">
                <div className="col-lg-12">
                    <div className="text-center">
                        <h3 className="animate__animated animate__bounce"><b>Register</b></h3></div>
                    <form id="ajax-register-form" action="/register" method="post" role="form" autocomplete="off">
                        <div className="form-group">
                            <input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" id="email" tabindex="1" className="form-control" placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="confirm-password" id="confirm-password" tabindex="2" className="form-control" placeholder="Confirm Password" />
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-xs-6 col-xs-offset-3">
                                    <input type="submit" name="register-submit" id="register-submit" tabindex="4" className="form-control btn btn-info" value="Register Now" />
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