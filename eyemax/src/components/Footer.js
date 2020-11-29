import React from "react";
import LangInput from "../components/LangInput";
import Icon from "./Icon";

const Footer = props => {
  return (
    <div className="jumbotron bg-dark pb-0 mb-0">
      <div className="container">
        <div className="row text-white">
          <div className="col-md-2">
            <h2>{LangInput("slogan")}</h2>
            <h5>{LangInput("slogan_a")}</h5>
            <h5>{LangInput("slogan_b")}</h5>
            <h5>{LangInput("slogan_c")}</h5>
          </div>
          <div className="col-md-2 ml-3 my-2">
            <h3 className="text-white"> {LangInput("qr_code")}</h3>
            <img
              className="rounded"
              width="180"
              src="../../qr.png"
              alt="QR CODE"
            />
          </div>
          <div className="col-md-3 ml-4 my-2" style={{ paddingRight: 0 }}>
            <img src="../../china.jpg" className="card-img-top" alt="China" />
            <h6 className="my-1">
              {Icon("fas fa-map-marked fa-lg", 0, 10)}
              <span>{LangInput("china_address")}</span>
            </h6>
            <h6 className="my-1">
              {Icon("fas fa-mobile fa-lg", 5, 15)}
              <span>{LangInput("china_tel")}</span>
            </h6>
            <h6 className="my-1">
              {Icon("fas fa-envelope fa-lg", 1, 12)}
              <span>{LangInput("email_albert")}</span>
            </h6>
            <h6 className="my-1">
              {Icon("fas fa-envelope fa-lg", 1, 12)}
              <span>{LangInput("email_hammer")}</span>
            </h6>
            <h6 className="my-1">
              {Icon("fab fa-weixin fa-lg", 0, 10)}
              <span>{LangInput("content_weChat")}</span>
            </h6>
          </div>
          <div className="col-md-4 mx-2">
            <h3 className="text-white"> {LangInput("partner")}</h3>
            {Icon("fab fa-facebook-square fa-2x", 10, 0)}
            {Icon("fab fa-instagram fa-2x", 10, 0)}
            {Icon("fab fa-android fa-2x", 10, 0)}
            {Icon("fab fa-alipay fa-2x", 10, 0)}
            {Icon("fab fa-weixin fa-2x", 10, 0)}
            {Icon("fab fa-weibo fa-2x", 10, 0)}
            {Icon("fab fa-google fa-2x", 10, 0)}
            {Icon("fab fa-youtube fa-2x", 10, 0)}
            {Icon("fab fa-amazon fa-2x", 10, 0)}
            {Icon("fab fa-twitter-square fa-2x", 10, 0)}
            {Icon("fab fa-telegram fa-2x", 10, 0)}
            {Icon("fab fa-line fa-2x", 10, 0)}
            {Icon("fab fa-whatsapp fa-2x", 10, 0)}
            {Icon("fab fa-linkedin fa-2x", 10, 0)}
            {Icon("fab fa-window fa-2x", 10, 0)}
            {Icon("fab fa-adobe fa-2x", 10, 0)}
            {Icon("fab fa-cc-amex fa-2x", 10, 0)}
            {Icon("fab fa-cc-jcb fa-2x", 10, 0)}
            {Icon("fab fa-cc-mastercard fa-2x", 10, 0)}
            {Icon("fab fa-cc-paypal fa-2x", 10, 0)}
            {Icon("fab fa-cc-stripe fa-2x", 10, 0)}
            {Icon("fab fa-cc-visa fa-2x", 10, 0)}
            {Icon("fab fa-slack fa-2x", 10, 0)}
            {Icon("fab fa-sass fa-2x", 10, 0)}
            {Icon("fab fa-less fa-2x", 10, 0)}
            {Icon("fab fa-jenkins fa-2x", 10, 0)}
            {Icon("fab fa-java fa-2x", 10, 0)}
            {Icon("fab fa-node-js fa-2x", 10, 0)}
            {Icon("fab fa-jsfiddle fa-2x", 10, 0)}
            {Icon("fab fa-js-square fa-2x", 10, 0)}
            {Icon("fab fa-vuejs fa-2x", 10, 0)}
            {Icon("fab fa-vimeo fa-2x", 10, 0)}
            {Icon("fab fa-viber fa-2x", 10, 0)}
            {Icon("fab fa-angular fa-2x", 10, 0)}
            {Icon("fab fa-react fa-2x", 10, 0)}
            {Icon("fab fa-chrome fa-2x", 10, 0)}
            {Icon("fab fa-opera fa-2x", 10, 0)}
            {Icon("fab fa-internet-explorer fa-2x", 10, 0)}
            {Icon("fab fa-safari fa-2x", 10, 0)}
            {Icon("fab fa-suse fa-2x", 10, 0)}
            {Icon("fab fa-centos fa-2x", 10, 0)}
            {Icon("fab fa-osi fa-2x", 10, 0)}
            {Icon("fab fa-grunt fa-2x", 10, 0)}
            {Icon("fab fa-gulp fa-2x", 10, 0)}
            {Icon("fab fa-laravel fa-2x", 10, 0)}
            {Icon("fab fa-dropbox fa-2x", 10, 0)}
            {Icon("fab fa-fedora fa-2x", 10, 0)}
            {Icon("fab fa-snapchat fa-2x", 10, 0)}
            {Icon("fab fa-tumblr fa-2x", 10, 0)}
          </div>
        </div>
      </div>
      <div className="sticky-bottom text-center text-white">
        {LangInput("copyright")}
        <a href="/"> {LangInput("eyemax_asia")}</a>
      </div>
    </div>
  );
};

export default Footer;
