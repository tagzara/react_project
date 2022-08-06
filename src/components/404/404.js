import './404.css';
import { NavLink } from 'react-router-dom';

function ErrorPage() {
    return (
        <div class="nk-main">
            <div className="nk-fullscreen-block">
                <div className="nk-page-background-fixed" style={{ backgroundImage: "url('../../../images/bg-fixed-2.jpg')" }}></div>
                <div className="nk-fullscreen-block-middle">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                                <h1 className="text-main-1">404</h1>

                                <div className="nk-gap-2"></div>
                                <h2 className="h4">You chose the wrong path!</h2>

                                <div className='text-secondary'>Or such a page just doesn't exist... <br /> Would you like to go back to the homepage?</div>
                                <div className="nk-gap-3"></div>

                                <NavLink to="/" className="nk-link">Return to Homepage</NavLink>
                            </div>
                        </div>
                        <div className="nk-gap-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;