import React from "react";
import { Link } from "react-router-dom";
import iot from "./images/logo.png"



const Dashboard = () =>{
    return(
        <div>
    <header class="header-global">
    <nav id="navbar-main" aria-label="Primary navigation" class="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light">
        <div class="container position-relative">
        <div class="text-center">
            <div class="icon icon-shape shadow-soft border border-light rounded-circle ">
                <img src={iot} alt="IOT Lab KIIT"/>
            </div>

        </div>
            <div class="navbar-collapse collapse" id="navbar_global">
                <div class="navbar-collapse-header">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                        </div>
                        <div class="col-6 collapse-close">
                            <span href="#navbar_global" class="fas fa-times" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" title="close" aria-label="Toggle navigation"></span>
                        </div>
                    </div>
                </div>
                <ul class="navbar-nav navbar-nav-hover align-items-lg-center d-md-none">
                    <li class="nav-item dropdown">
                        <span href="#" class="nav-link" data-toggle="dropdown" >
                            <span class="nav-link-inner-text"><Link to="Dashboard-Profile">Profile</Link></span>
                        </span>
                    </li>
                    <li class="nav-item dropdown">
                    <span href="#" class="nav-link" data-toggle="dropdown" >
                            <span class="nav-link-inner-text"><Link to="Dashboard">Dashboard</Link></span>
                        </span>
                    </li>
                    <li class="nav-item dropdown">
                    <span href="#" class="nav-link" data-toggle="dropdown" >
                            <span class="nav-link-inner-text"><Link to="Dashboard-Leaderboard">Leaderboard</Link></span>
                        </span>
                    </li>
                    <li class="nav-item dropdown">
                    <span href="#" class="nav-link" data-toggle="dropdown" >
                            <span class="nav-link-inner-text"><Link to="/">Logout</Link></span>
                        </span>
                    </li>
                    </ul>
            </div>



            <div class="d-flex align-items-center">
            

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
            <li class="nav-item dropdown">
                        <span class="nav-link " data-toggle="dropdown" >
                        <Link to="#" class="btn btn-icon-only btn-pill btn-github" type="button" aria-label="github button">
                    <span aria-hidden="true" class="fas fa-phone-alt"></span>
                    </Link>
                        </span>
                    </li>
            <li class="nav-item dropdown">
                        <span class="nav-link d-none d-md-inline-block" data-toggle="dropdown" >
                        <Link to="Dashboard-Leaderboard" class="btn btn-icon-only btn-pill btn-github" type="button" aria-label="github button">
                    <span aria-hidden="true" class="fas fa-chart-bar"></span>
                    </Link>
                        </span>
                    </li>
                    <li class="nav-item dropdown">
                        <span class="nav-link d-none d-md-inline-block" data-toggle="dropdown" >
                        <button class="btn btn-icon-only btn-pill btn-github" type="button" aria-label="Leaderboard">
                    <span aria-hidden="true" class="fas fa-user"></span>
                    </button>
                        </span>
                        <ul class="dropdown-menu">
                            <li><Link class="dropdown-item" to="Dashboard-profile">Profile</Link></li>
                            <li><Link class="dropdown-item" to="Dashboard">Dashboard</Link></li>
                            <li><Link class="dropdown-item" to="Dashboard-Leaderboard">Leaderboard</Link></li>
                            <li><Link class="dropdown-item" to="/">Log out</Link></li>
                        </ul>
                    </li>
                    
                </ul>


                <button class="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                <button class="btn btn-icon-only btn-pill btn-github" type="button" aria-label="Profile" title="Profile">
                <span aria-hidden="true" class="fas fa-user"></span>
                </button>
                </button>
            </div>
        </div>
    </nav>
</header>



<section className="min-vh-100  d-flex bg-primary mt-6">
            <div className="container">
                <div className="row mt-6 mb-2 justify-content-center">
                    <div className="col-12  col-md-12 col-lg-12 justify-content-center">
                        <div className="card bg-primary shadow-soft border-light p-4">
                        <h1 className="text-center text-success mb-5"><span class="fas fa-tachometer-alt mr-2"></span>Dashboard</h1>
    <div class="row">
    <div class="col-md-4">
        <div class="card bg-primary shadow-soft border-light md-mb-2 mb-2">
            <div class="card-body px-5 py-3 text-center text-md-left">
                <div class="row align-items-center justify-content-center">
                <div className="col-md-4">
                <h1 class="text-center"><i class="fas fa-chart-line"></i></h1>
                </div>
                <div className="col-md-8">
                <div className="row justify-content-center">
                
                <span className="text-success">Total Participants</span>
                </div>
                <div className="row justify-content-center">
                <h5>350</h5>
                </div>
                </div>
                
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4 d-none d-md-inline-block">
        <div class="card bg-primary shadow-soft border-light mb-6">
            <div class="card-body px-5 py-3 text-center text-md-left">
                <div class="row align-items-center justify-content-center">
                <div className="col-md-4">
                <h1 class="text-center"><i class="fas fa-tasks"></i></h1>
                </div>
                <div className="col-md-8">
                <div className="row justify-content-center">
                
                <span className="text-success">Your Score</span>
                </div>
                <div className="row justify-content-center">
                <h5 className="text-danger">Not attempted yet</h5>
                </div>
                </div>
                
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card bg-primary shadow-soft border-light mb-6">
            <div class="card-body px-5 py-3 text-center text-md-left">
                <div class="row align-items-center justify-content-center">
                <div className="col-md-4">
                <h1 class="text-center"><i class="fas fa-trophy"></i></h1>
                </div>
                <div className="col-md-8">
                <div className="row justify-content-center">
                
                <span className="text-success">Your Rank</span>
                </div>
                <div className="row justify-content-center">
                <h5 className="text-warning">Unranked</h5>
                </div>
                </div>
                
                </div>
            </div>
        </div>
    </div>
</div>
                        <h1 class="text-center"><i class="fas fa-user-plus mr-3"></i>Recruitment Test</h1>
                        <button type="button" class="btn btn-primary">&nbsp;
                        </button>    

                        <div className="row mt-3">
                        <div className="col text-left mr-2 "><h4><i class="far fa-clock pr-2"></i>1:00 Hrs</h4></div>
                        <div className="col text-right align-text-end mr-2"><h4>Marks:100</h4></div>
                        </div>
                        <h3 class="mt-5">Rules:</h3>
                        <ol>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatum soluta perferendis id! Veritatis, laboriosam?<br/></li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatum soluta perferendis id! Veritatis, laboriosam?<br/></li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatum soluta perferendis id! Veritatis, laboriosam?<br/></li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatum soluta perferendis id! Veritatis, laboriosam?<br/></li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatum soluta perferendis id! Veritatis, laboriosam?<br/></li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatum soluta perferendis id! Veritatis, laboriosam?<br/></li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatum soluta perferendis id! Veritatis, laboriosam?<br/></li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatum soluta perferendis id! Veritatis, laboriosam?<br/></li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatum soluta perferendis id! Veritatis, laboriosam?<br/></li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatum soluta perferendis id! Veritatis, laboriosam?<br/></li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatum soluta perferendis id! Veritatis, laboriosam?<br/></li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatum soluta perferendis id! Veritatis, laboriosam?<br/></li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatum soluta perferendis id! Veritatis, laboriosam?<br/></li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatum soluta perferendis id! Veritatis, laboriosam?<br/></li>
                            
                        </ol>

                     

                        <Link to="Questions"><button type="button" class="col-md-4 mt-5 btn btn-sm btn-primary mr-3" data-toggle="modal" data-target="#modal-default">Start Test</button></Link>

                            <div class="modal fade" id="modal-default" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                         <div class="modal-header">
                                             <h2 class="h6 modal-title mb-0" id="modal-title-default">Understanding Guidelines</h2>
                                             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                             <span aria-hidden="true">×</span>
                                            </button>
                                    </div>
                         <div class="modal-body">
                    <p>I have read all the Rules and Regulations and I agree to abide by them, failing which I shall be liable to
                    disqualification. </p>
                        </div>
                    <div class="modal-footer">
                        <a href="Questions" type="button" class="btn btn-sm btn-success">Start</a>
                        <button type="button" class="btn btn-primary text-danger ml-auto" data-dismiss="modal">Close</button>
                     </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
</div>
        </section>










</div>





    )
}

export default Dashboard;