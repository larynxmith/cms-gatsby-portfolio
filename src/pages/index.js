import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/forgetfills.png';
import pic2 from '../assets/images/p2hprofile.png';
import pic3 from '../assets/images/wwiisearch.png';
import pic4 from '../assets/images/arrow.png';
import config from '../../config';
const IndexPage = () => (
    <Layout>
        <section id="banner">
            <div className="inner">
                <h1>
                    Christopher Smith
        </h1>
                <p>
                    Full Stack Developer
        </p>
                <ul className="actions special">
                    <li>
                        <Scroll type="id" element="two">
                            <a href="#two" className="button primary">
                                Projects
                    </a>
                        </Scroll>
                    </li>
                </ul>
            </div>

            <Scroll type="id" element="one">
                <a href="#one" className="more">
                    Learn More
            </a>
            </Scroll>
        </section>

        <section id="one" className="wrapper style1 special">
            <div className="inner">
                <header className="major">
                    <h2>
                        Welcome to my Portfolio Site!
                    <br />
                    </h2>
                    <p>
                        I am a newly-minted developer, passionate about finding solutions, learning new technologies, and continually finding the Next Challenge. I come from a long tenure in Hospitality Management, so interpersonal skills, leadership, and collaboration are well-ingrained, as well as an innate sense of urgency, adaptability, multi-tasking, and a want to provide.
                    <br />
                    </p>
                </header>
                {/* <ul className="icons major">
            <li>
                <span className="icon fa-gem major style1">
                <span className="label">Lorem</span>
                </span>
            </li>
            <li>
                <span className="icon fa-heart major style2">
                <span className="label">Ipsum</span>
                </span>
            </li>
            <li>
                <span className="icon solid fa-code major style3">
                <span className="label">Dolor</span>
                </span>
            </li>
            </ul> */}
                <div>
                    <Scroll type="id" element="two">
                        <a href="#two" className="more">
                            Sample Projects &nbsp;
                        {/* <img src={pic4} alt='down arrow'/> */}
                        </a>
                    </Scroll>
                </div>
            </div>
        </section>

        <section id="two" className="wrapper alt style2">
            <section className="spotlight">
                <div className="title">
                    <h2><u>Forgetfills</u></h2>
                    <ul>
                        <li>
                            <a href="https://github.com/larynxmith/project4-forgetfills-client">Github Client</a>
                        </li>
                        <li>
                            <a href="https://github.com/larynxmith/project4-forgetfills-server">Github Server</a>
                        </li>
                        <li>
                            <a href="https://forgetfills-client.herokuapp.com/">Live Link</a>
                        </li>
                    </ul>
                </div>
                <div className="image">
                    <img src={pic1} alt="Forgetfills list screenshot" />
                </div>
                <div className="content">
                    <h3>
                        -- For those things you just can't seem to Remember... --
                </h3>
                    <p>
                        A MERN Stack project created to remember items, actions, and events for the user they would regularly
                        forget, track the due dates for each respective list item, and sort them into urgency tabs.
                </p>
                    <p>
                        Technologies used: JavaScript, MongoDB, Express, React.js, Node.js, Axios, Bcrypt, JWT
                        Authentication, React-Moment, Material-UI, HTML, CSS.
                </p>
                    <div>
                        <Scroll type="id" element="twoPointOne">
                            <a href="#twoPointOne" className="more">
                                Next Project &nbsp;
                    </a>
                        </Scroll>
                    </div>
                </div>
            </section>
            {/* <hr/> */}
            <section id="twoPointOne" className="spotlight">
                <div className="title">
                    <h2><u>Peer-2-Here</u></h2>
                    <ul>
                        <li>
                            <a href="#">Github Client</a>
                        </li>
                        <li>
                            <a href="#">Github Server</a>
                        </li>
                        <li>
                            <a href="#">Live Link</a>
                        </li>
                    </ul>
                </div>
                <div className="image">
                    <img src={pic2} alt="Peer2Here profile screenshot" />
                </div>
                <div className="content">

                    <h3>-- Learning is Hard; Finding Help Shouldn't Be. --</h3>

                    <p>
                        A mentor/mentee resource, in which a user can declare themselves as either a mentor or mentee for a
                        particular topic and then search for and message prospective counterparts. MERN Stack.
            </p>
                    <p>
                        Technologies used: JavaScript, MongoDB, Express, React.js, Node.js, Axios, Bcrypt, JWT
                        Authentication, Material-UI, HTML, CSS.
            </p>
                    <Scroll type="id" element="twoPointTwo">
                        <a href="#twoPointTwo" className="more">
                            Next Project &nbsp;
            </a>
                    </Scroll>
                </div>
            </section>
            {/* <hr /> */}

            <section id="twoPointTwo" className="spotlight">
                <div className="title">
                    <h2><u>Whose Wine Is It, Anyway?</u></h2>
                    <ul>
                        <li>
                            <a href="https://github.com/larynxmith/project2-whose-wine-is-it">Github</a>
                        </li>
                        <li>
                            <a href="https://larynxmith.github.io/whose-wine-is-it/">Live Link</a>
                        </li>
                    </ul>
                </div>
                <div className="image">
                    <img src={pic3} alt="Whose Wine Is It search screenshot" />
                </div>
                <div className="content">

                    <h3>-- You Know Them. You Love Them. You Want Them. --</h3>

                    <p>
                        A wine curating application, where the user can search a database of over 33000 wine ratings and add
                        them to their own list, with the ability to mark them as wines already had or wish to have one day.
                </p>
                    <p>
                        Technologies used: JavaScript, Sequelize, Express, EJS, Node.js, Axios, jQuery, Bcrypt, Passport,
                        Bootstrap, HTML, CSS.
                </p>
                    <Scroll type="id" element="cta">
                        <a href="#cta" className="more">
                            Contact Me &nbsp;
                        </a>
                    </Scroll>
                </div>
            </section>
            {/* <hr/> */}
        </section>

        {/* <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Accumsan mus tortor nunc aliquet</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Arcu accumsan</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section> */}

        <section id="cta" className="wrapper style4">
            <div className="inner">
                <header>
                    <h2>Thank you for visiting</h2>
                    <p>
                        I welcome all input and communication; please feel free to view my Resume and contact me through the links below.
          </p>
                </header>
                {/* <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul> */}
            </div>
        </section>
    </Layout>
);

export default IndexPage;
