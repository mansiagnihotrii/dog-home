import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Service = () => {
  return(
    <>
    <Header />
    <section className="banner-area relative" id="home">
				<div className="overlay overlay-bg"></div>
				<div className="container">
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content col-lg-12">
							<h1 className="text-white">
								Keep your buddy healthy!!
							</h1>

						</div>
					</div>
				</div>
			</section>
      <section className="Volunteer-form-area section-gap">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-60 col-lg-9">
            <div className="title text-center">
              <h1 className="mb-20">Your dog's Vet visit</h1>
              <p>Firstly, congratulations on having a new family member. We thank you and value you.
              But that's just the beginning. Your new family member needs regular checkups or vaccinations.
              Don't worry, we are with you.
              Fill the form below to request for vet visit.
            </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <form className="col-lg-9">
            <div className="form-group">
              <label for="first-name">Enter your Dog's ID</label>
              <input type="text" className="form-control" placeholder="Dog ID" required/>
            </div>

            <p>Don't have the Dog ID ? Contact our customer care for verification.
            </p>
            <button type="submit" className="primary-btn float-right">Find Dog</button>
          </form>
        </div>
      </div>
    </section>
    <Footer />
    </>

  )
}

export default Service
