import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Adopt = () => {
  return(
    <>
    <Header />
    <section className="banner-area relative" id="home">
				<div className="overlay overlay-bg"></div>
				<div className="container">
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content col-lg-12">
							<h1 className="text-white">
								Adopt your buddy
							</h1>
							<p className="text-white link-nav"><a href="/">Home </a>  <span className="lnr lnr-arrow-right"></span>  <a href="/adopt"> Adopt</a></p>
						</div>
					</div>
				</div>
			</section>
      <section className="Volunteer-form-area section-gap">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-60 col-lg-9">
            <div className="title text-center">
              <h1 className="mb-20">Just few steps away from adopting your Buddy</h1>
              <p>We are glad that you decided to adopt a homeless fellow. Please tell us more about you !</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <form className="col-lg-9">
            <div className="form-group">
              <label for="first-name">First Name</label>
              <input type="text" className="form-control" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label for="last-name">Last Name</label>
              <input type="text" className="form-control" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <label for="Address">Address</label>
              <input type="text" className="form-control mb-20" placeholder="Your Address" />
              <input type="text" className="form-control" placeholder="Address 2" />
            </div>
            <div class="form-row">
              <div class="col-6 mb-30">
                <label for="City">City</label>
                <div class="select-option" id="service-select">
                <input type="text" placeholder="City" class="form-control" required />
              </div>
              </div>
              <div class="col-6 mb-30">
                <label for="state">State</label>
                <div class="select-option" id="service-select">
                                  <input type="text" class="form-control" placeholder="State" required />
              </div>
              </div>
                <div class="col-6 mb-30">
                <label for="postal-code">Postal code</label>
                <input type="text" class="form-control" placeholder="Postal Code" required />
              </div>

            </div>

            <div className="form-group">
              <label for="note">Anything else you want to share..</label>
              <textarea className="form-control" id="exampleTextarea" rows="5" placeholder="Write message"></textarea>
            </div>
            <button type="submit" className="primary-btn float-right">Submit</button>
          </form>
        </div>
      </div>
    </section>
    <Footer />
    </>

  )
}

export default Adopt
