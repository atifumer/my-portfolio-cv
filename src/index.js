import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import img1 from "./assets/pic.jpeg";

function Hi() {
  return (
    <div className="main">
      <div className="left-div">
        <div className="mid-div">
          <div className="text">
            <h1>Atif </h1>
            <h1>Umer</h1>
            <span>Web-Developer & Designer</span>
          </div>
          <div className="img-div">
            <img className="picss" src={img1} width="100%" alt="new" />
          </div>
          <div className="content-div">
            <h3 className="prio">Profile</h3>
            <p>
              Having a good web developer portfolio not only showcases your
              creativity and efficiency but also highlights your level of
              expertise and professionalism. To help gather inspiration for
              bringing your web development portfolio to life, the following
              list created by our team behind Slider Revolution contains 36
              fantastic web developer portfolio examples. Drawing inspiration
              from these web developer portfolios, you can mix and match to
              create your own unique style.
            </p>
          </div>
        </div>
      </div>

      <div className="right-div">
        <div className="div-one">
          <div className="box">
            <img
              src="https://img.icons8.com/cute-clipart/64/000000/cell-phone.png"
              width="30"
              alt="new"
            />
            <p>0301-0306909</p>
          </div>
          <div className="box">
            <img
              src="https://img.icons8.com/color/48/000000/address--v1.png"
              width="30"
              alt="new"
            />
            <p>Karachi,Pakistan.</p>
          </div>
          <div className="box">
            <img
              src="https://img.icons8.com/fluency/48/000000/github.png"
              width="30"
              alt="new"
            />
            <p>
              <a href="https://github.com/atifumer" rel="opener">
                Atif umer
              </a>
            </p>
          </div>
          <div className="box">
            <img
              className="same"
              src="https://img.icons8.com/color/48/000000/gmail--v1.png"
              width="30"
              alt="new"
            />
            <p>ATIFUMER805@GMAIL.COM</p>
          </div>
        </div>

        <div className="div-two">
          <div className="box-div">
            <h3>Education</h3>
            <p> FSC ( APSACS)</p>
            <p>Secondary School Certificate (APSACS) </p>
          </div>
          <div className="box-div">
            <h3>Skill</h3>
            <p>
              I’m highly skilled in the use of computers and internet Access,
              Including Microsoft Office Word, Excel, Powerpoint, etc. Have
              certificates in Web-Development or a similar field Be proficient
              in coding languages such as HTML, CSS, and JavaScript, and
              understand server-side CSS. Be experienced with graphic design
              applications (e.g., Adobe Illustrator). Understand the principles
              of SEO. Also, have a good command of problem-solving.
            </p>
          </div>
        </div>

        <div className="div-three">
          <div className="box-div-three">
            <h3>Key Skill</h3>
            <p>Html</p>
            <p>Css</p>
            <p>JavaScript</p>
            <p>Bootstrap</p>
            <p>JS</p>
            <p>Node.js</p>
          </div>
          <div className="box-div-three">
            <h3>Languages</h3>
            <p>English</p>
            <p>Urdu</p>
            <p>Memon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<Hi />, document.querySelector("#root"));
