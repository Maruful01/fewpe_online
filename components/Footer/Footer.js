import React from 'react';
import Link from 'next/link';
// import { FacebookOutlined,YoutubeOutlined, LinkedinOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <section className="footer-component">

            
<div  className="top-footer">
              <div>
                  <h4>Help Center</h4>
                  <p>dhakdum@gmail.com</p>
                  <p>+8801766342245</p>
            </div>

                        
            <div>
                 <h4>About Us</h4>
                 <Link href="/"><a>
                 About dhakdum.com
                 </a></Link>
                 <br />
                <Link href="/"><a>
                What we provide?
                </a></Link>
                 <p></p>
            </div>

            <div>
                <h4>Sell On Logyzone</h4>

                 <Link href="/"><a>Become a seller </a>
                  </Link>
                 <br />
                  <Link href="/"><a>
                   Learn how to sell
                   </a></Link>
            </div>

</div>


<div className="social-media-links">
    {/* <span>
         <Link href="https://www.facebook.com/logyzone"><a><FacebookOutlined /></a></Link>
    </span>

    <span>
         <Link href="https://www.linkedin.com/company/77754641"><a><LinkedinOutlined /></a></Link>
    </span>
    
    <span>
        <Link href="https://www.youtube.com/channel/UC9UrhP7pAx8xeJZdRYjKorg"><a><YoutubeOutlined /></a></Link>
    </span> */}
</div>
<p style={{color: "gray", textAlign: "center"}}>@2022 devstudio71.com | All rights reserved</p>
        </section>
    );
};

export default Footer;