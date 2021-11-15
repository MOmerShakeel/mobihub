import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  FooterText,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "Yellow", textAlign: "left", marginTop: "-50px" }}>
        Mobihub Repairs
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading></Heading>
            <FooterLink href="#"></FooterLink>
            <FooterLink href="#"></FooterLink>
            <FooterLink href="#"></FooterLink>
            <FooterLink href="#"></FooterLink>
          </Column>
          <Column>
            <Heading>Quick Links</Heading>
            <Link to="/" style={{
                color: "#fff",
                marginBottom: "19px", 
                fontSize: "18px",
            }}>
              Home
            </Link>
            <Link to="/repairs" style={{
                color: "#fff",
                marginBottom: "19px", 
                fontSize: "18px",
            }}>
              Repairs
            </Link>
            <a href="https://mobihubrepairs.com/shop" style={{
                color: "#fff",
                marginBottom: "19px", 
                fontSize: "18px",
            }}>
              Visit Shop
            </a>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterText>Address</FooterText>
            <FooterText>Phone</FooterText>
            <FooterText>Email</FooterText>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <FaFacebook />
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <FaInstagram />
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <FaTwitter />
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <FaLinkedin />
                <span style={{ marginLeft: "10px" }}>LinkedIn</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
