import React from 'react';
import {
  FaTwitter,
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaTwitch
} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const socialLinks = [
  {
    id: 'twitter',
    title: 'Twitter',
    url: 'http://twitter.com/whiteseer9',
    Icon: FaTwitter,
  },
  {
    id: 'youtube',
    title: 'Youtube',
    url: 'https://youtube.com/whiteseer9',
    Icon: FaYoutube,
  },
  {
    id: 'twitch',
    title: 'Twitch',
    url: 'https://www.twitch.tv/whiteseer9',
    Icon: FaTwitch,
  },
  //{
    //id: 'github',
    //title: 'GitHub',
    //url: 'http://github.com/colbyfayock',
    //Icon: FaGithub,
  //},
  //{
    //id: 'dribbble',
    //title: 'Dribbble',
    //url: 'http://dribbble.com/colbyfayock',
    //Icon: FaDribbble,
  //},
  {
    id: 'instagram',
    title: 'Instagram',
    url: 'https://www.instagram.com/whiteseer9/',
    Icon: FaInstagram,
  },
  {
    id: 'email',
    title: 'Email',
    url: 'mailto:hello@whiteseer.com',
    Icon: FiMail,
  }
];

const SocialIcons = () => {
  return (
    <ul className="social-icons">
      { socialLinks.map(({ id, url, title, Icon }) => {
        return (
          <li key={id} className={`social-icons-${id}`}>
            <a href={url} rel="me">
              <Icon />
              <span className="ir">{ title }</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialIcons;