import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/footer.css'

function Footer(props) {
  return (
    <div className="footer">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3 segment-one">
            <h4>PEC ACM</h4>
            <p>Computer Science Society's portal from Punjab Engineering College Chandigarh ACM 
              Chapter. We focus on making our members better at all aspects of CS.</p>
            <div className="row">
              <div className="col-12">
                <h5>Our Address</h5>
                <address>
                  Computer Science Department<br />
                  Punjab Engineering College<br />
                  Chandigarh, 160012<br />
                  <i className="fa fa-phone fa-lg"></i>: +91 988 801 9027<br />
                  <i className="fa fa-whatsapp fa-lg"></i>: +91 988 801 9027<br />
                  <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:acmcss@pec.edu.in?Subject=Contact%20PEC%20ACM%20Student%20Chapter">
                          acmcss@pec.edu.in</a>
                  </address>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 segment-two">
            <h4>Links</h4>
            <ul className="list-unstyled">
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/aboutus'>About Us</Link></li>
              <li><Link to='/events'>Events</Link></li>
              <li><Link to='/workshops'>Workshops</Link></li>
              <li><Link to='/contactus'>Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 segment-three">
            <h4>Follow us</h4>
            <p>Please follow us on social media profile inorder to keep updated. Lorem ipsum is simply dummy text of the printing and type setting industry</p>
            <ul className="list-unstyled list-inline social">
                <li className="list-inline-item"><a href="https://www.facebook.com/pecacm/"><i className="fa fa-facebook"></i></a></li>
                <li className="list-inline-item"><a href="https://www.instagram.com/pecacm/"><i className="fa fa-instagram"></i></a></li>
                <li className="list-inline-item"><a href="https://twitter.com/ACM_CSS_PEC/"><i className="fa fa-twitter"></i></a></li>
                <li className="list-inline-item"><a href="https://www.linkedin.com/in/pecacm/"><i className="fa fa-linkedin"></i></a></li>
                <li className="list-inline-item"><a href="mailto:acmcss@pec.edu.in?Subject=Contact%20PEC%20ACM%20Student%20Chapter"><i className="fa fa-envelope"></i></a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 segment-four">
            <h4>Our Newsletter</h4>
            <p>Subscribe to our newsletter to get frequent updates regarding our workshops,
              seminars, hackathons, and other various events.
            </p>
            <form>
              <input type="email"/>
              <input type="submit" value="Subscribe"/>
            </form>
          </div>
        </div>
        <hr/>
        <div className="row text-center justify-content-center">             
          <div className="col-auto">
            <p>Punjab Engineering College ACM Student Chapter is registered [178630] under Association for Computing Machinery</p>
            <p>© All right Reserved.PEC ACM Student Chapter</p>
          </div>
        </div>
    </div>
  );
}

export default Footer;