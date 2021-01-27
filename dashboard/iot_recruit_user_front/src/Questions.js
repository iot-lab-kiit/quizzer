import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Questions = () => {
    const [questions, setQuestions] = useState([]);
    useEffect(async () => {
        const result = await axios(
            'http://localhost:9000/api/question',
        );
        console.log(result.data);
        setQuestions(result.data);
    });

    return (
        <div className="container-fluid">
            <h1 className="text-center text-success mt-5 mb-5"><span class="fas fa-question mr-2"></span>Questionaire</h1>
            {questions.map((question, index) => (
                <div key={question._id}>
                    <div class="row mt-5">
                        <div class="col-md-12">
                            <div class="card bg-primary shadow-inset border-light">
                                <div class="card-body p-5">
                                    <p>
                                        <span className="pr-2"><strong>Q{index+1}.</strong></span>{question.question}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {question.options == '' ? <div class="row">
                            <div class="col-md-12 mt-2">
                                <div class="card bg-primary shadow-soft rounded border  border-light">
                                    <div class="card-body p-1">
                                        <p>
                                            <div class="form-group">
                                                <label for="exampleFormControlTextarea2"></label>
                                                <textarea class="form-control" placeholder="Enter Your Answer" id="exampleFormControlTextarea2" rows="3"></textarea>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> : <div class="row">
                        <div class="col-md-12 mt-2">
                            <div class="card bg-primary shadow-soft rounded border  border-light">
                                <div class="card-body p-5">
                                    <p>
                                        <fieldset><form>
                                            <legend class="h6 text-muted">Choose the correct option</legend>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios13" value="option1" />
                                                <label class="form-check-label" for="exampleRadios13">
                                                    {question.options[0]}
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios14" value="option2" />
                                                <label class="form-check-label" for="exampleRadios14">
                                                    {question.options[1]}
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios15" value="option1" />
                                                <label class="form-check-label" for="exampleRadios15">
                                                    {question.options[2]}
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios16" value="option1" />
                                                <label class="form-check-label" for="exampleRadios16">
                                                    {question.options[3]}
                                                </label>
                                            </div>
                                        </form>
                                        </fieldset>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
            ))}
            {/* <div class="row mt-5">
                <div class="col-md-12">
                    <div class="card bg-primary shadow-inset border-light">
                        <div class="card-body p-5">
                            <p>
                                <span className="pr-2"><strong>Q5.</strong></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus provident asperiores, sequi pariatur expedita cum odit quo eveniet. Consequatur facilis modi sit magnam voluptas error animi similique necessitatibus iure, culpa iste minima maxime repellendus accusamus nihil ducimus debitis ut quasi sapiente dolores possimus nam, odit minus. Sequi nihil veritatis minus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 mt-2">
                    <div class="card bg-primary shadow-soft rounded border  border-light">
                        <div class="card-body p-1">
                            <p>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea2"></label>
                                    <textarea class="form-control" placeholder="Enter Your Answer" id="exampleFormControlTextarea2" rows="3"></textarea>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}

            <div class="row mt-5 mb-5">
                <div class="col-md-12">
                    <div class="card bg-primary">
                        <div className="row">
                            <Link to="Dashboard" class="col-4 ml-3  btn btn-danger" type="button">
                                Exit
                                <span class="ml-2"><span class="fas fa-sign-out-alt"></span></span>
                            </Link>
                            <div className="col-3"></div>
                            <button class="col-4  btn btn-success" type="button" data-toggle="modal" data-target="#modal-default">
                                Submit
                                <span class="ml-2"><span class="fas fa-check-circle"></span></span>
                            </button>
                            <div class="modal fade" id="modal-default" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h2 class="h6 modal-title mb-0" id="modal-title-default">Are you sure?</h2>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <p>You will not be able to re-attemp after submitting. </p>
                                        </div>
                                        <div class="modal-footer">
                                            <a href="Questions" type="button" class="btn btn-sm btn-warning">Submit</a>
                                            <button type="button" class="btn btn-primary text-danger ml-auto" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Questions;