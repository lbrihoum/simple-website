import React from 'react';
import Scrollspy from 'react-scrollspy';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import overLayPic from '../assets/images/overlay.png';
import { Link } from 'gatsby';

const sections = [
  { id: 'one', bg: require('../assets/images/pic01.jpg') },
  { id: 'two', bg: require('../assets/images/pic02.jpg') },
  { id: 'three', bg: require('../assets/images/pic03.jpg') },
];
const IndexPage = () => (
  <Layout>
    <Header />

    <section id="one" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[0].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Who I am</h2>
          </header>
          <p>
          I was born and raised in Orlando, FL and currently work here full time. <br/>
          I have wanted to be an Engineer for as long as I can remember and was fortunate enough
          to pursue my Bachelors degree in Computer Science (and now my Masters!) enabling me to do such. <br/>
          I currently work as a DevOps / Site Realiability Engineer Tech Lead and still work on personal projects on the side. <br/>
          I hope to further my knowledge in everything tech. :)
          </p>
        </div>
      </div>
    </section>

    <section id="two" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[1].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2> Tech Skills</h2>
          </header>
          <p>
            
          </p>
          <ul className="icons-grid">
            <li>
              <span className="icon major fa-camera-retro" />
              <h3>DevOps Tools</h3>
            </li>
            <li>
              <span className="icon major fa-pencil" />
              <h3>Mobile Devlopment</h3>
            </li>
            <li>
              <span className="icon major fa-code" />
              <h3>Object Orientented Programming</h3>
            </li>
            <li>
              <span className="icon major fa-coffee" />
              <h3>Project Managament</h3>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section id="three" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[2].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>One more thing</h2>
          </header>
          <p>
            Aliquam ante ac id. Adipiscing interdum lorem praesent fusce
            pellentesque arcu feugiat. Consequat sed ultricies rutrum. Sed
            adipiscing eu amet interdum lorem blandit vis ac commodo aliquet
            integer vulputate phasellus lorem ipsum dolor lorem magna consequat
            sed etiam adipiscing interdum.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
