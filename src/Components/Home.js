import React from 'react';
import Header from './Header'
import Footer from './Footer'
const Home = () => {
  return(
    <div>
    <Header />
    <section className="banner-area relative" id="home">
    				<div className="container">
    					<div className="overlay overlay-bg"></div>
    					<div className="row fullscreen d-flex align-items-center justify-content-start">
    						<div className="banner-content col-lg-8 col-md-12">
    							<h1 className="text-uppercase">
    								Adopt Us. <br />
    								We need your help.
    							</h1>
    							<p className="text-white sub-head">
    								Help Us Locate any street dog who is in need of Shelter, Food, First-Aid.
    	They also deserve love.
    							</p>
    							<a href="./#adopt" className="primary-btn header-btn text-uppercase">Adopt a Dog</a>
    						</div>
    					</div>
    				</div>
    			</section>





    			<section className="callto-top-area section-gap">
    				<div className="container">
    					<div className="row justify-content-between callto-top-wrap pt-40 pb-40">
    						<div className="col-lg-8 callto-top-left">
    							<h1>Locate a street dog..</h1>
    						</div>
    						<div className="col-lg-4 callto-top-right">
    							<a href="/locate" className="primary-btn">Locate</a>
    						</div>
    					</div>
    				</div>
    			</section>

    			<section className="process-area section-gap" id="adopt">
    				<div className="container">
    					<div className="row d-flex justify-content-center">
    						<div className="menu-content pb-60 col-lg-8">
    							<div className="title text-center">
    								<h1 className="mb-10">Process to adopt a street dog</h1>
    								<p>who need your care and love.</p>
    							</div>
    						</div>
    					</div>
    					<div className="row">
    						<div className="col-lg-3 col-md-6">
    							<div className="single-process">
    								<span className="lnr lnr-thumbs-up"></span>
    								<a href="#">
    									<h4>
    										Selection
    									</h4>
    								</a>
    								<p>
    									Select any dog(s) according to your location, or needs.
    								</p>
    							</div>
    						</div>
    						<div className="col-lg-3 col-md-6">
    							<div className="single-process">
    								<span className="lnr lnr-user"></span>
    								<a href="#">
    									<h4>
    										Paying A Visit
    									</h4>
    								</a>
    								<p>
    									You can pay a visit to the location or you can request our volunteer to help you visiting your buddy.
    								</p>
    							</div>
    						</div>
    						<div className="col-lg-3 col-md-6">
    							<div className="single-process">
    								<span className="lnr lnr-license"></span>
    								<a href="#">
    									<h4>
    										Adoption Form Filling
    									</h4>
    								</a>
    								<p>
    									If you think you can have him as your family, please fill the adoption form.
    								</p>
    							</div>
    						</div>
    						<div className="col-lg-3 col-md-6">
    							<div className="single-process">
    								<span className="lnr lnr-magic-wand"></span>
    								<a href="#">
    									<h4>
    										Welcome your family member
    									</h4>
    								</a>
    								<p>
    									You have a new family member. Treat him with love and provide him vaccinations. Don't worry we can help you with that too !
    								</p>
    							</div>
    						</div>
    					</div>
    				</div>
    			</section>

    			<section className="calltoaction-area section-gap relative" id="volunteer">
    				<div className="container">
    					<div className="overlay overlay-bg"></div>
    					<div className="row align-items-center justify-content-center">
    						<h1 className="text-white">Want to help? Become a Volunteer</h1>
    						<p className="text-white">
    							Nothing is as satisfying as watching a homeless dog having home and food. If you want to help us in providing them home, Feel free to become our volunteer.
    						</p>
    						<div className="buttons d-flex flex-row">
    							<a href="/volunteer" className="primary-btn text-uppercase">Register now</a>
    						</div>
    					</div>
    				</div>
    			<div></div></section>
          <Footer />
          </div>
  )
}

export default Home
