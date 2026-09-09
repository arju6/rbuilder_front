import React from "react";

function Landing() {
    return (
        <div>
            <section
                style={{
                    height: "600px",
                    backgroundImage:
                        "url('https://i.pinimg.com/1200x/aa/a6/ca/aaa6ca48ee0515515a266a9456b5e676.jpg')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="row pt-5">
                    <div className="col-12 col-md-4"></div>
                    <div className="col-12 col-md-4">
                        <div
                            className="text-center mt-5 border box-shadow p-5 rounded"
                            style={{ backgroundColor: "rgb(255,255,255,0.5)" }}
                        >
                            <h1 style={{ fontFamily: "Dancing Script" }}>Designed to get hired</h1>
                            <h5 style={{ fontFamily: "Times new roman", fontSize: "24px" }}>
                                Your skills ,your story,your next job -all in one.
                            </h5>
                            <a className="btn btn-dark" href="/resume">
                                MAKE YOUR RESUME
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-4"></div>
                </div>
            </section>

            <section style={{ marginTop: "50px" }}>
                <h1 style={{ fontFamily: "Dancing Script", textAlign: "center" }}>Tools</h1>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Resume</h3>
                        <p>Create unlimited new resumes and easily edit them afterwards.</p>
                        <h3>Cover Letters</h3>
                        <p>Easily write professional cover letters.</p>
                        <h3>Jobs</h3>
                        <p>Automatically receive new and relevant job postings.</p>
                        <h3>Applications</h3>
                        <p>Effortlessly manage and track your job applications in an organized manner.</p>
                    </div>
                    <div className="col-md-6">
                        <img
                            src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png"
                            alt=""
                            className="img-fluid w-75"
                        />
                    </div>
                </div>
            </section>

            <section
                style={{
                    height: "500px",
                    backgroundImage:
                        "url('https://i.pinimg.com/1200x/7e/8c/3f/7e8c3fa5fe521d3c58b115ff16b1c66a.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            ></section>

            <section>
                <h1 style={{ fontFamily: "Dancing Script", textAlign: "center" }}>Testimony</h1>
                <div className="row">
                    <div className="col-md-6">
                        <h2>Trusted by professionals worldwide</h2>
                        <p>
                            At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're
                            a seasoned professional or just starting out, our tools are designed to get results. In fact,
                            users who used LiveCareer reported getting hired an average of 48 days faster. Join thousands of
                            job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img
                            src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png"
                            alt=""
                            className="img-fluid w-75"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Landing;
