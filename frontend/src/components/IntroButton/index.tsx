import React from 'react';
import './IntroButton.css'

type ButtonProps = {
  link: string,
  name: string
}

export default function IntroButton({ link, name }: ButtonProps) {
  return (
    <a className="btn btn-primary" href={ link }>
      { name }
    </a>
  );
}