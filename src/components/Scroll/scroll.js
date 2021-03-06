import { useState, useEffect } from "react";

const Scroll = () => {
  const [scroll, setScroll] = useState(0);

  const handle = () => {
    setScroll(window.pageYOffset / (document.body.scrollHeight - window.innerHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handle);
    return () => {
      window.removeEventListener('scroll', handle);
    };
  }, [scroll]);

  return scroll;
};
  
export default Scroll;