import React from 'react';


const Footer = () => {
	return (

    <>
    <footer className="footer-section" style={{marginTop: "10%"}}>
			<div className="container relative">

				<div className="sofa-img">
					<img src={'images/sofa.png'} className="img-fluid" alt="sofa"/>
				</div>

				<div className="row">
					<div className="col-lg-8">
						<div className="subscription-form">
							<h3 className="d-flex align-items-center"><span className="me-1"><img src={'images/envelope-outline.svg'.default} alt="envelope" className="img-fluid" /></span><span>Suscribite a nuestro Newsletter</span></h3>

							<form action="#" className="row g-3">
								<div className="col-auto">
									<input type="text" className="form-control" placeholder="Ingresá tu nombre" />
								</div>
								<div className="col-auto">
									<input type="email" className="form-control" placeholder="Ingresá tu e-mail" />
								</div>
								<div className="col-auto">
									<button className="btn btn-primary" style={{backgroundColor:"white"}}>
									<img src={'images/paper-plane.png'} className="img-fluid"  style={{width: "25px"}}/>
									</button>
								</div>
							</form>

						</div>
					</div>
				</div>

				<div className="row g-5 mb-5">
					<div className="col-lg-4">
						<div className="mb-4 footer-logo-wrap"><p className="footer-logo">Furni<span>.</span></p></div>
						<p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
{/*
						<ul className="list-unstyled custom-social">
							<li><a href="#"><span className="fa fa-brands fa-facebook-f"></span></a></li>
							<li><a href="#"><span className="fa fa-brands fa-twitter"></span></a></li>
							<li><a href="#"><span className="fa fa-brands fa-instagram"></span></a></li>
							<li><a href="#"><span className="fa fa-brands fa-linkedin"></span></a></li>
</ul>*/}
					</div>

					<div className="col-lg-8">
						<div className="row links-wrap">
							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><p>About us</p></li>
									<li><p>Services</p></li>
									<li><p>Blog</p></li>
									<li><p>Contact us</p></li>
								</ul>
							</div>

							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
								<li><p>Support</p></li>
									<li><p>Knowledge base</p></li>
									<li><p>Live chat</p></li>
								</ul>
							</div>

							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
								<li><p>Jobs</p></li>
									<li><p>Our team</p></li>
									<li><p>Leadership</p></li>
									<li><p>Privacy Policy</p></li>
								</ul>
							</div>

							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
								<li><p>Nordic Chair</p></li>
									<li><p>Kruzo Aero</p></li>
									<li><p>Ergonomic Chair</p></li>
								</ul>
							</div>
						</div>
					</div>

				</div>

				<div className="border-top copyright">
					<div className="row pt-4">
						<div className="col-lg-6">
							<p className="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> 
            </p>
						</div>

						<div className="col-lg-6 text-center text-lg-end">
							<ul className="list-unstyled d-inline-flex ms-auto">
								<li className="me-4"><p >Terms &amp; Conditions</p></li>
								<li><p>Privacy Policy</p></li>
							</ul>
						</div>

					</div>
				</div>

			</div>
		</footer>
</>

	)

}

export default Footer;
