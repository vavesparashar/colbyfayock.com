import React from 'react';

const EmailSignup = ({}) => {
  return (
    <form className="email-signup" action="https://projectelections.substack.com/embed" method="post">
      <input name="email_address" placeholder="Your email address" required="" type="email" />
      <button className="button button-primary">
        Subscribe
      </button>
    </form>
  )
};

export default EmailSignup;