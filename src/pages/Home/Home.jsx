import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <header className='header'>
          <div className="header-content">
            <h1 className='lg-heading text-light main-heading'>travel the world</h1>
            <p className='text-light'>travel the world, experience the greateness, it's the best gift given by nature</p>
            <a href="#" className='btn btn-primary text-red md-heading'>Explore Places</a>
          </div>
        </header>

        <section className='showcase'>
          <div className="container">
            <div className="row row1">
              <div className="img-box">
                <img src="./img/showcase-photo3.jpg" alt="Image Description" />
              </div>
              <div className="text-box">
                <h2 className='lg-heading text-black'>DEGANVY, U.K</h2>
                <p className='text-gray'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit incidunt nulla a corporis eveniet pariatur maiores, id quis, totam dolore praesentium facere consequatur rem, fuga minus! Rerum, dolorem praesentium. Nemo?</p>
                <a href="./about" className='btn btn-secondary'>More</a>
              </div>
            </div>
            <div className="row row2">
              <div className="img-box">
                <img src="./img/showcase-photo1.jpg" alt="Image Description" />
              </div>
              <div className="text-box">
                <h2 className='lg-heading text-black'>DESERT, EGYPT</h2>
                <p className='text-gray'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, amet ratione, quas laborum porro, explicabo vero ipsum laudantium nesciunt eos illum pariatur obcaecati fugiat asperiores nulla adipisci. Porro, atque itaque.</p>
                <a href="./about" className='btn btn-secondary'>More</a>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <div className="box-wrapper">
              <div className="box box-1">
                <i className="fas fa-route fa-2x text-red"></i>
                <h2 className="md-heading">Adventure</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam.</p>
              </div>
              <div className="box box-2">
                <i className="fas fa-strikethrough fa-2x"></i>
                <h2 className="md-heading">Less Price</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam.</p>
              </div>
              <div className="box box-3">
                <i className="fas fa-user-check fa-2x text-red"></i>
                <h2 className="md-heading">Experice</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam.</p>
              </div>
            </div>
          </div>

        </section>

        <footer className='footer'>
          <div className="social-media-links">
            <i className="fab fa-facebook fa-4x"></i>
            <i className="fab fa-twitter fa-4x"></i>
            <i className="fab fa-instagram fa-4x"></i>
          </div>
          <p>World Travel &copy; 2020, All Rights Reserved</p>
        </footer>
      </div>
    );
  }
}

export default Home;