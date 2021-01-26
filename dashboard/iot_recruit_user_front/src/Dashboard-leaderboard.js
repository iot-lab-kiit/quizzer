import React from "react";
import { Link } from "react-router-dom";
import iot from "./images/logo.png"
import nd from "./images/no-dp.png"



const DashboardLeaderboard = () =>{
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
                            <h1 className="text-center text-success"><span class="fas fa-chart-bar mr-2"></span>Leaderboard</h1>
                            <div class="mb-5">
                                <div class="mb-4">
                                    </div>
                                    <div class="table-responsive-sm shadow-soft rounded">
                                        <table class="table table-striped">
                                            <tbody>
                                                <tr>
                                                    <th class="border-0" scope="col" id="class2">Name</th>
                                                    <th class="border-0" scope="col" id="teacher2">Score</th>
                                                    <th class="border-0" scope="col" id="males2">Rank</th>
                                                    <th class="border-0" scope="col" id="females2">Status</th>
                                                    </tr>
                                                    <tr>
                                                      <td>Manish Bhardwaj</td>
                                                      <td>90</td>
                                                      <td>11</td>
                                                      <td>Selected</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Manish Bhardwaj</td>
                                                      <td>90</td>
                                                      <td>11</td>
                                                      <td>Selected</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Manish Bhardwaj</td>
                                                      <td>90</td>
                                                      <td>11</td>
                                                      <td>Selected</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Manish Bhardwaj</td>
                                                      <td>90</td>
                                                      <td>11</td>
                                                      <td>Selected</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Manish Bhardwaj</td>
                                                      <td>90</td>
                                                      <td>11</td>
                                                      <td>Selected</td>
                                                    </tr>
                                                    
                                                    </tbody>
                                                    </table>
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

export default DashboardLeaderboard;