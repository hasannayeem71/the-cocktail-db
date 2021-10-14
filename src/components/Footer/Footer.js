import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid mt-5">
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#45526e" }}>
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    <img
                      src="https://www.thecocktaildb.com/images/logo.png"
                      alt=""
                    />
                  </h6>
                  <p>
                    Api and react practicing project, This site build with React
                    js, react bootstrap, Context api,react router
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Products
                  </h6>

                  <p>
                    <Link className="text-white" to="/home#cocktails">
                      Cocktails
                    </Link>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>
                    <i className="fas fa-home mr-3"></i> Gazipur , Dhaka
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> info@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 000000000
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 000000000
                  </p>
                </div>
              </div>
            </section>

            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  <div className="p-3">
                    © 2020 Copyright:
                    <a
                      target="_blank"
                      className="text-white"
                      href="https://github.com/hasannayeem71"
                      rel="noreferrer">
                      Mahmudul Hasan Nayeem
                    </a>
                  </div>
                </div>

                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  <p
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button">
                    <i className="fab fa-facebook-f"></i>
                  </p>

                  <p
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button">
                    <i className="fab fa-twitter"></i>
                  </p>

                  <p
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button">
                    <i className="fab fa-google"></i>
                  </p>

                  <p
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button">
                    <i className="fab fa-instagram"></i>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
