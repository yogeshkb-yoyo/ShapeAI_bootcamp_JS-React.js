import React from "react";

function Footer(){
  
  var curtyr = new Date().getFullYear();
  return(
    <footer>
      <p>Copyright @ {curtyr}</p>
    </footer>   
  );
}

export default Footer;