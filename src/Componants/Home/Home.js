import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function Home() {

    const navigate = useNavigate();

    const resume = () => {
        navigate("/resume");
    }
    return (
        <>
            <header id="header" className="d-flex flex-column justify-content-center">
                <nav id="navbar" className="navbar nav-menu">
                    <ul>
                        <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home" /> <span>Home</span></a></li>
                        <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user" /> <span>About</span></a></li>
                        <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank" /> <span>Resume</span></a></li>
                        
                        <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope" /> <span>Contact</span></a></li>
                    </ul>
                </nav>{/* .nav-menu */}
            </header>
            <section id="hero" className="d-flex flex-column justify-content-center">
                <div className="container" data-aos="zoom-in" data-aos-delay={100}>
                    <h1>Bhavya sidpara</h1>
                    <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer" /></p>
                </div>
            </section>

            <main id="main">
                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>About</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <img src="assets/img/Portfolio.jpg" className="img-fluid" alt />
                            </div>
                            <div className="col-lg-8 pt-4 pt-lg-0 content">
                                <h3> Web Developer.</h3>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right" /> <strong>Birthday:</strong> <span>2 July 2004</span></li>
                                            <li><i className="bi bi-chevron-right" /> <strong>Website:</strong> <span>www.example.com</span></li>
                                            <li><i className="bi bi-chevron-right" /> <strong>Phone:</strong> <span>+91 9712418684</span></li>
                                            <li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>Surat,Gujrat</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right" /> <strong>Age:</strong> <span>18</span></li>
                                            <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> <span>Master</span></li>
                                            <li><i className="bi bi-chevron-right" /> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                                            <li><i className="bi bi-chevron-right" /> <strong>Freelance:</strong> <span>Available</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <p>
                                    Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                    Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                                </p>
                    
                            </div>
                        </div>
                    </div>


                </section>
                <section id="skills" className="skills section-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Skills</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                        <div className="row skills-content">
                            <div className="col-lg-6">
                                <div className="progress">
                                    <span className="skill">HTML <i className="val">100%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">CSS <i className="val">90%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">JavaScript <i className="val">75%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="progress">
                                    <span className="skill">PHP <i className="val">80%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">WordPress/CMS <i className="val">90%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">Photoshop <i className="val">55%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="resume" className="resume">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Resume</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                        
                        <Button variant='primary' style={{marginLeft:'45%'}} onClick={() => { resume() }}>View Resume</Button>
                    </div>              
                </section>
                <section id="contact" className="contact">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Contact</h2>
                        </div>
                        <div className="row mt-1">
                            <div className="col-lg-4">
                                <div className="info">
                                    <div className="address">
                                        <i className="bi bi-geo-alt" />
                                        <h4>Location:</h4>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                    <div className="email">
                                        <i className="bi bi-envelope" />
                                        <h4>Email:</h4>
                                        <p>info@example.com</p>
                                    </div>
                                    <div className="phone">
                                        <i className="bi bi-phone" />
                                        <h4>Call:</h4>
                                        <p>+1 5589 55488 55s</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 mt-5 mt-lg-0">
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message" />
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>{/* End Contact Section */}
            </main>

        </>
    )
}
export default Home