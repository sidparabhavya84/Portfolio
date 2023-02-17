import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";



function Resume() {
    const navigate = useNavigate();

    const back = () => {
        navigate(-1);
    }
    return (
        <>
            <section id="resume" className="resume">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Resume</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="col-lg-4" style={{ marginLeft: '30%', borderRadius: '10' }}>
                                <img src="assets/img/PHOTO.jpg" className="img-fluid" alt />
                            </div>
                            <h3 className="resume-title">Sumary</h3>
                            <div className="resume-item pb-0">
                                <h4>Bhavya Sidpara</h4>
                                <p><em>Solution-driven web developer adept at contributing to highly collaborative work environment and finding solutions. Proven experience developing consumer-focused websites using HTML, CSS,and JavaScript. Good knowledge of the best practices for web design, user experience, and speed.</em></p>
                                <ul>
                                    <li>Surat,Gujrat</li>
                                    <li>+91 9778331892</li>
                                    <li>sid@gmail.com</li>
                                </ul>
                            </div>
                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>S.S.C</h4>
                                <h5>2019</h5>
                                <p><em> At -Matrubhumi Vidyabhavan </em></p>
                                <p>Katargam,Surat</p>
                            </div>
                            <div className="resume-item">
                                <h4>H.S.C</h4>
                                <h5>2021</h5>
                                <p><em> At -Matrubhumi Vidyabhavan </em></p>
                                <p>Katargam,Surat</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="resume-item">
                                <h4>BCA(Bachelor of Computer Application) in 2<sup>nd</sup> Year</h4>
                                <h5>2022 To Running</h5>
                                <p><em> Bhagwan Mahavir University(BMU) </em></p>
                                <p>Bharthana(Vesu),Surat</p>
                            </div>
                            <div className="resume-item">
                                <h4>Master In Front And Devloper</h4>
                                <h5>2022 To Running</h5>
                                <p><em> Red & White Multimedia Eduction</em></p>
                                <p>A,K Road,Surat</p>
                            </div>
                            <div className="resume-item">
                                <h4>Skills</h4>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>WordPress</li>
                                    <li>JavaScript</li>
                                    <li>Photoshop</li>

                                </ul>
                            </div>
                            <br/>
                        <Button variant='danger' onClick={() => { back() }}>Back</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume;