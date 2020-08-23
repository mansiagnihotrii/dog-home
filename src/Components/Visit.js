import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Visit = () => {
  return(
    <>
    <Header />
    <section className="banner-area relative" id="home">
				<div className="overlay overlay-bg"></div>
				<div className="container">
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content col-lg-12">
							<h1 className="text-white">
								Pay a visit to your buddy !
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
              <h1 className="mb-20">Meet your buddy before adoption</h1>
              <p>We hope you selected a dog as your buddy .We are glad that you decided to adopt or meet a homeless fellow.
              As per your convinience , you can choose any of our volunteer to accompany you in your meet.
              You can choose any of our local volunteers from the list below.
            </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <form className="col-lg-9">
            <div className="form-group">
              <label for="first-name">Enter the location(or area)</label>
              <input type="text" className="form-control" placeholder="Location(or area)" />
            </div>



            <button type="submit" className="primary-btn float-right">Find volunteer</button>
          </form>
        </div>
      </div>
    </section>
    <Footer />
    </>

  )
}

export default Visit
