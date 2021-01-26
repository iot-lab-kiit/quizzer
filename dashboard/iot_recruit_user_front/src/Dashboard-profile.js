import React from "react";
import { Link } from "react-router-dom";
import iot from "./images/logo.png"
import nd from "./images/no-dp.png"



const DashboardProfile = () =>{
    return(
        <div>
    <header class="header-global">
    <nav id="navbar-main" aria-label="Primary navigation" class="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light">
        <div class="container position-relative">
        <div class="text-center">
            <div class="icon icon-shape shadow-soft border border-light rounded-circle d-none d-md-inline-block">
                <img src={iot} alt="IOT Lab KIIT"/>
            </div>

        </div>
            <div class="navbar-collapse collapse" id="navbar_global">
                <div class="navbar-collapse-header">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                        </div>
                        <div class="col-6 collapse-close">
                            <span class="fas fa-times" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" title="close" aria-label="Toggle navigation"></span>
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
                        <button class="btn btn-icon-only btn-pill btn-github" type="button" aria-label="github button" title="github button">
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
                <button class="btn btn-icon-only btn-pill btn-github" type="button" aria-label="github button" title="github button">
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
                        <h1 className="text-center text-success mb-5"><span class="far fa-id-badge mr-2"></span>Profile</h1>
                        

        <div class="col-12  mt-5">
            <div className="row">
        <div class="col-md-4 profile-card mb-5">
            <div class="card bg-primary shadow-inset border-light text-center">
                <div class="card-header">
                    <div class="profile-image bg-primary shadow-inset border border-light rounded mx-auto p-3 mt-n6">
                        <img src={nd} class="card-img-top rounded" alt="Leos Portrait"/>
                    </div>
                </div>
                <div class="card-body pb-5">
                    <h3 class="h5 mb-2">User Name</h3>
                    <span class="h6 font-weight-normal text-gray mb-3">E-mail</span>
                    <ul class="list-unstyled d-flex justify-content-center mt-3 mb-4">
                        <li>
                        <span class="badge badge-md badge-danger text-uppercase">Result Pending</span>
                        </li>
                    </ul>
                    <Link to="/" class="btn mt-2 btn-sm btn-primary mr-3">
                        <span to="/" class="fas fa-sign-out-alt"></span> Logout
                    </Link>
                    <Link to="Dashboard-Leaderboard" class="btn mt-2 btn-sm btn-primary">
                    <span class="fas fa-chart-bar mr-2"></span>View Leaderboard
                    </Link>
                </div>
            </div>
        </div>

    <div className="col-md-1 mb-5"></div>
    <div class="col-md-6 mb-5">
        <div className="row">

        <div class="w-100 card bg-primary shadow-soft border-light text-left mb-4 mb-md-0">
            <div class="card-body p-4 p-sm-5">
                <div class="d-flex px-3">
                    <div>
                        <div class="icon icon-shape shadow-soft rounded-circle">
                            <span class="fas fa-tasks"></span>
                        </div>
                    </div>
                    <div class="pl-3 pl-sm-4 text-center">
                        <h3 class="h5">Score Obtained</h3>
                        <h1 className="text-success">43</h1>
                        <div class="progress-wrapper">
                    <div class="progress-info">

                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style={{width: "60%", animation: "3s ease 0s 1 normal none running animate-positive", opacity: "1"}}></div>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
</div>
<div className="row">
        <div class="w-100 card bg-primary shadow-soft border-light text-left mt-2 mb-4 mb-md-0">
            <div class="card-body p-4 p-sm-5">
                <div class="d-flex px-3">
                    <div>
                        <div class="icon icon-shape shadow-soft rounded-circle">
                            <span class="fas fa-trophy"></span>
                        </div>
                    </div>
                    <div class="pl-3 pl-sm-4 text-center">
                        <h3 class="h5">Leaderboard Position</h3>
                        <h1 className="text-danger">Coming Soon</h1>
                    </div>
                </div>
            </div>
        </div>
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

export default DashboardProfile;