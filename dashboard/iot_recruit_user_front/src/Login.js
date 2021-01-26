import React from "react";
import iot from "./images/i4ot.png";
import {Link} from "react-router-dom";

const Login =() => {
  return (
    <section className="min-vh-100 d-flex bg-primary align-items-center">
            <div className="container">
                <div className="row mt-2 mb-2 justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 justify-content-center">
                        <div className="card bg-primary shadow-soft border-light p-4">
                        <div className="row">
    <div className="col-12">
        <div className="card bg-primary shadow-soft border-light shadow-inset px-4 py-1 mb-6">
            <div className="card-body text-center text-md-left">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className="mb-3">IoT Lab KIIT</h2>
                        <h4 className="mb-3">Recruitment</h4>
                        
                        <p className="mb-4">
                            Do you want to join our team and work with us? We can’t wait to hear from you!
                        </p>
                        <ul class="list-unstyled d-flex my-3 justify-content-center">
                    <li>
                        <Link href="#" target="_blank" aria-label="facebook social link" class="icon icon-xs icon-facebook mr-3">
                            <span class="fab fa-facebook-f"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" target="_blank" aria-label="twitter social link" class="icon icon-xs icon-twitter mr-3">
                            <span class="fab fa-twitter"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" target="_blank" aria-label="slack social link" class="icon icon-xs icon-slack mr-3">
                            <span class="fab fa-slack-hash"></span>
                        </Link>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/iot.lab.kiit/"  aria-label="dribbble social link" class="icon icon-xs icon-dribbble mr-3">
                            <span class="fab fa-instagram"></span>
                        </a>
                    </li>
                </ul>
                    </div>
                    <div className="col-12 col-md-6 mt-4 mt-md-0 text-md-right">
                        <img src={iot} alt="IoT KiiT"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
                            <div className="card-body">
                                <div className="btn-wrapper my-4 text-center">
                                <Link to="Dashboard" className="btn btn-facebook mb-2" type="button">
                                <span className="mr-2"><span className="fab fa-google"></span></span>
                                Continue to the Recruitment Test
                                </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

  );
}

export default Login;
