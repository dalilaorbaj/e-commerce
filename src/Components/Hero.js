import React from 'react';

const Hero = () => {
	return (

    <>
<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Modern Interior <span clsas="d-block">Design Studio</span></h1>
								<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p className="btn btn-secondary me-2">Shop Now</p><p className="btn btn-white-outline">Explore</p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src={'images/couch.png'}  className="img-fluid" alt="couch"/>
							</div>
						</div>
					</div>
				</div>
			</div>

</>

	)

}

export default Hero;
