import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Volunteer = () => {
  return(
    <>
    <Header />
    <section className="banner-area relative" id="home">
				<div className="overlay overlay-bg"></div>
				<div className="container">
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content col-lg-12">
							<h1 className="text-white">
								Become a Volunteer
							</h1>
							<p className="text-white link-nav"><a href="/">Home </a>  <span className="lnr lnr-arrow-right"></span>  <a href="/volunteer"> Become a Volunteer</a></p>
						</div>
					</div>
				</div>
			</section>
      <section className="Volunteer-form-area section-gap">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-60 col-lg-9">
            <div className="title text-center">
              <h1 className="mb-20">Want to help? Become a Volunteer</h1>
              <p>Nothing is as satisfying as watching a homeless dog having home and food. If you want to help us in providing them home, Feel free to become our volunteer.</p>
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


            <fieldset className="form-group">
            <label for="day">Which days you can be volunteer?</label>
                          <div className="form-group ">
                              <div className="form-check form-check-inline">
                                  <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio1" value="option1"/> Monday
                                  </label>
                              </div>
                              <div className="form-check form-check-inline">
                                  <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio2" value="option2"/> Tuesday
                                  </label>
                              </div>
                              <div className="form-check form-check-inline">
                                  <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio3" value="option3"/> Wednesday
                                  </label>
                              </div>
                              <div className="form-check form-check-inline">
                                  <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio2" value="option4"/> Thursday
                                  </label>
                              </div>
                              <div className="form-check form-check-inline">
                                  <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio2" value="option5"/> Friday
                                  </label>
                              </div>
                              <div className="form-check form-check-inline">
                                  <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio2" value="option6"/> Saturday
                                  </label>
                              </div>
                              <div className="form-check form-check-inline">
                                  <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio2" value="option6"/> Sunday
                                  </label>
                              </div>
                          </div>
            </fieldset>
            <div className="form-group">
              <label for="note">Volunteer Note</label>
              <textarea className="form-control" id="exampleTextarea" rows="5" placeholder="Write message"></textarea>
            </div>
            <button type="submit" className="primary-btn float-right">Send Request</button>
          </form>
        </div>
      </div>
    </section>
    <Footer />
    </>

  )
}

export default Volunteer
