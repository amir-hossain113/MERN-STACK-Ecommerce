import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import myImage from "../../../images/amir.png";
import frndImage from "../../../images/deba.png";
const About = () => {
  // const visitInstagram = () => {
  //   window.location = "https://www.instagram.com/amir.hossain.khan/";
  // };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "1vmax 0" }}
              src={myImage}
              alt="Founder"
            />
            <Typography>Amir Hossain</Typography>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={frndImage}
              alt="Founder"
            />
            <Typography>Debanjan Datta</Typography>
            {/* <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button> */}
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UCM61jClBnYJ-Ya0Nd9XkLJg"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/amir.hossain.khan/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <span>
              This is a sample wesbite made by Amir & Debanjan.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
