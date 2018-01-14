import React from 'react';

const style = {
  bottom: "0",
  position: "fixed",
  width: "100%"
}

const Footer = () => {
  return (
  <footer style={style} className="bg-dark text-white mt-4 justify-content-center">
    <div className="mx-auto text-center my-2" style={{width: "100%"}}><a href="https://darksky.net/poweredby/">Powered by Dark Sky</a></div>
  </footer>
  )
}

export default Footer;