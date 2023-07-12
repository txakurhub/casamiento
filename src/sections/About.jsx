const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h1>Nosotros</h1>
        </div>

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2">
            <img
              src="assets/img/nosotros.jpg"
              className="img-fluid"
              alt="nosotros"
            />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1">
            <h1>Nuestra Historia.</h1>
            <p className="fst-italic">
              Gracias por ser parte de nuestra historia.
            </p>
            <ul>
              <li>
                <i className="bi bi-check2-circle"></i> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </li>
              <li>
                <i className="bi bi-check2-circle"></i> Duis aute irure dolor in
                reprehenderit in voluptate velit.
              </li>
              <li>
                <i className="bi bi-check2-circle"></i> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate trideta storacalaperda mastiro dolore
                eu fugiat nulla pariatur.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
