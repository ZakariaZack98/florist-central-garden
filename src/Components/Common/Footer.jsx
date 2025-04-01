import React from "react";
import Logo from "/images/logo.png";
import SocialIcons from "./Socialicons";
import Searchbar from "./Searchbar";
import { useNavigate } from "react-router-dom";
import FooterSec from "./FooterSec";
import { FaLocationPin, FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    {
      id: 1,
      title: 'About',
      path: '/about'
    },
    {
      id: 2,
      title: 'Our Gallery',
      path: '/shop'
    },
    {
      id: 3,
      title: 'Our Partners',
      path: '/partners'
    },
    {
      id: 4,
      title: 'Our Services',
      path: '/services'
    },
  ]
  const needHelp = [
    {
      id: 1,
      title: 'F.A.Q.',
      path: '/faq'
    },
    {
      id: 2,
      title: 'Contact Us',
      path: '/contact'
    },
    {
      id: 3,
      title: 'Privacy Policy',
      path: '/privacy'
    },
    {
      id: 4,
      title: 'Terms & Conditions',
      path: '/terms'
    },
  ]
  const contact = [
    {
      id: 1,
      title: '32 Green Avenue, Johnson Street, Dallas, TX',
      Icon: FaLocationPin
    },
    {
      id: 2,
      title: 'query@floristgc.com',
      Icon: FaEnvelope
    },
    {
      id: 3,
      title: '011232142, 123112312',
      Icon: FaPhone
    },
    
  ]


  return (
    <div className="container mx-auto pb-20">
      <div className="flex items-start justify-between">
        <div className="w-1/4 logo flex flex-col items-end">
          <div className="logo">
            <img src={Logo} alt="" className="w-65" />
            <div className="text-[12px] -translate-y-6 me-3 font-poppins font-light text-end">CENTRAL GARDEN</div>
          </div>
          <div className="my-5 scale-125 flex -translate-x-4">
          <SocialIcons/>
          </div>
          <Searchbar/>
        </div>
        <FooterSec data={quickLinks} title={'Quick Links'}/>
        <FooterSec data={needHelp} title={'Need Help'}/>
        <div className="w-1/4 flex flex-col mt-10">
        <h4 className="font-poppins text-2xl font-semibold mb-5">Contact Us</h4>
          {
            contact?.map(item => (
              <div key={item.id} className="flex items-center gap-x-3 my-3">
                <item.Icon/>
                <p>{item.title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Footer;
