import React from "react";
import Card from "react-bootstrap/Card";
import { ImItalic, ImPointRight } from "react-icons/im";
import polaroid from "../../Assets/polaroidpic.png"; 

function AboutCard() {
  return (
    <>
    <div className="about-content-inner">
      {/* AT A GLANCE */}
      <div className="about-block about-glance-layout">
  {/* LEFT - text */}
  <div className="about-glance-text">
    <h4>at a glance</h4>
    <ul className="about-glance">
      <li>♡ my name is <span className="accent">livia cutra</span></li>
      <li>♡ based in <span className="accent">boston, massachusetts</span></li>
      <li>♡ proud <span className="accent">albanian</span> & <span className="accent">first-generation</span> student</li>
      <li>♡ B.S. in <span className="accent">computer science & design</span> at northeastern</li>
      <li>♡ previous <span className="accent">software engineer intern</span> at <span className="accent">UKG</span></li>
    </ul>
  </div>

  {/* RIGHT - image */}
  <div className="about-glance-image">
    <img
      src={polaroid}
      alt="About me visual"
    />
  </div>
</div>


      {/* WHAT MATTERS */}
      <div className="about-block">
        <h4>what matters to me</h4>
        <p>
          i’m motivated by building technology with intention and care. 
          learning in community shapes how i grow, and i value spaces 
          that support first-generation students, beginning coders, 
          and people who are often overlooked in tech. i’m especially 
          drawn to work that centers empathy and care, where technical 
          decisions are made with real people and long-term impact in mind. 
          i want what i build to feel thoughtful, accessible, and genuinely 
          useful.
        </p>
      </div>

      {/* BEYOND THE SCREEN */}
      <div className="about-block">
        <h4>beyond the screen</h4>

        <div className="about-blocks">
          <div className="about-mini-block">
            <p>
  <strong>✦ fitness</strong> <br />
  after long hours of coding, moving my body helps me reset and stay focused. i’ve been playing volleyball for 10 years, and more recently i’ve grown into strength training and pilates as ways to stay balanced and energized.
</p>

            </div>
          <div className="about-mini-block">
            <p>
  <strong>✦ creative outlets</strong> <br />
  crocheting fashion pieces has been a long-term creative escape of mine that grew into my small business, livsloops. fashion is one of my favorite forms of creativity because it’s a direct way to express personality and individuality.
</p>
</div>
          
          <div className="about-mini-block">
            <p>
  <strong>✦ travel</strong> <br />
 growing up as the eldest daughter of two albanian immigrants shaped how i view culture and preservation. this perspective drives my curiousity towards learning new cultures through travel, food, and shared traditions.
</p>
</div> 
        </div>
      </div>
      </div>
    </>
  );
}

export default AboutCard;
