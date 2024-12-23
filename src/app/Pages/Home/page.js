

import { useEffect,  useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import '../../../../node_modules/swiper/swiper-bundle.min.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

import AOS from "aos";
import "aos/dist/aos.css";
export default function Homecomponent() {

    
      const [SwiperModule, setSwiperModule] = useState(null);
    
      useEffect(() => {
        import('swiper').then((SwiperModule) => {
          setSwiperModule(SwiperModule);
        });
    
        AOS.init({
          duration: 1000,
          easing: "ease-out-back", 
          once: true, 
        });
      }, []);
    
    if (!SwiperModule) return null; 
    
    
    return (
        <>
        
      <section className="hero-section" id="home">
        <div className='container'>
          <div className='hero-handler ' >
            <div className='col-xl-7 col-lg-7 col-xs-12' >
              <div className="heroTitle" data-aos="fade-up" data-aos-duration="2000">
                <h1>Hi from <br /><span>Karthikeya Varanasi,</span>  Web Designer & Developer</h1>
                <p >I design and code beautifully simple things and i love what i do.</p>
                <div className="cv-holder">
                  <a href=""  >
                    <button className="button" data-bs-toggle="modal" data-bs-target="#exampleModal" title="Download CV">
                      Download CV
                      <i className="fa-solid fa-circle-down"></i>
                    </button>

                  </a>
                  <div className="experiance-details" id="herosocial">

                    <div className="experiance_title" data-scroll data-scroll-speed="-5" data-scroll-direction="horizontal" style={{padding: '0px',}}>
                                    <ul>
                                        <li style={{padding: '0px 10px',}}><a href="mailto:contact@webkarthikeya.com" title="Mail"><i className="fa-solid fa-envelope"></i></a></li>
                                        <li style={{padding: '0px 10px',}}><a href="https://www.instagram.com/karthikeyavaranasi07?igsh=emk0bzh0ZnNmNWdq" title="Instagram" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                                        <li style={{padding: '0px 10px',}}><a href="https://www.linkedin.com/in/karthikeya-varanasi-2187a2210/" title="Linked in" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
                                        <li style={{padding: '0px 10px',}}><a href="https://wa.link/w5d4mp" title="whats app"> <i className="fa-brands fa-whatsapp"></i></a></li>
                                    </ul>
                                
                                </div>
                  </div>

                </div>

              </div>
            </div>

            <div className='col-xl-5 col-lg-5 col-xs-12'>
              <div className="hero-right">
                <div className="banner" >
                  <img src="/img/Banner/hero-img.svg" alt="Hero-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="about-section  default-style" id="about">
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-xs-12' >
              <div className="about-left">
                <div className="conten">
                  <div className="row">

                    <div className="exp-box" >
                      <h2  >04</h2>
                      <p> YEARS OF EXPERIENCE</p>
                    </div>
                    <div className="exp-box2" data-aos="fade-up" data-aos-duration="2500">
                      <h2>99%</h2>
                      <p> Client Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-xs-12'>
              <div className="aboutright" data-aos="fade">
                <div className="about-content">
                  <h2>Every great design Begin with an even <span>Better Story</span></h2>
                  <p>Creative and efficient design professional with over Three plus years of experience in corporate design and branding. Maintained company website and designed developed industrial standard technology. Optimized the smooth user-friendly navigation flow with related operations. Promoted and designed company product write-ups, advertising visuals, Signage, company literature. Passionate about building world className web applications. Company Knowledgebase customer support subdomain website received 2020 and 2023 customers for Best Navigation and Structure. Hard-working web designer & developer with a flair for creating elegant solutions in the least amount of time. Developed an ecommerce website, customer web portal, documentary launch website, and donations website for a local charity.</p>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="services-section default-style" id="services">
        <div className="handler-secton">
          <div className="container">
            <div className="section-content" >
              <h4 className="section-sub-title" >
                Our Services
              </h4>
              <h3 className="section-title">
                My <span>Specializations</span>
              </h3>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className="specializations-list">
            <a href="" data-aos="fade-up" data-aos-duration="3000">
              <div className="card">
                <div className="card-details">
                  <p className="text-title">Website Design & Development</p>
                  <p className="text-bodyy">I build website go live with Html, Css, Javascript Bootstrap, WordPress</p>
                </div>
                <button className="card-button">More info</button>
              </div>
            </a>



            <a href="" data-aos="fade-up" data-aos-duration="3500">
              <div className="card">
                <div className="card-details">
                  <p className="text-title">Digital <br /> Marketing</p>
                  <p className="text-bodyy">I build website go live with Html, Css, Javascript Bootstrap, WordPress</p>
                </div>
                <button className="card-button">More info</button>
              </div>
            </a>

            <a href="" data-aos="fade-up" data-aos-duration="3000">
              <div className="card">
                <div className="card-details">
                  <p className="text-title">Graphic <br /> Design</p>
                  <p className="text-bodyy">I build website go live with Html, Css, Javascript Bootstrap, WordPress</p>
                </div>
                <button className="card-button">More info</button>
              </div>
            </a>


          </div>
        </div>
      </div>


      <div className="experience-section default-style" id="resume">
        <div className="experiance-handle container" id="main-section">
          <div className="left-side">
            <div >
              <img src="/img/Banner/Linkedin_id.svg" alt="Linked in" />
              <div className="experiance-details">
                <div className="experiance_title">
                  <ul>
                    <li><a href="mailto:contact@webkarthikeya.com" title="Mail"><i className="fa-solid fa-envelope"></i></a></li>
                    <li><a href="https://www.instagram.com/karthikeyavaranasi07?igsh=emk0bzh0ZnNmNWdq" title="Instagram" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/karthikeya-varanasi-2187a2210/" title="Linked in" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="https://wa.link/w5d4mp" title="whats app"> <i className="fa-brands fa-whatsapp"></i></a></li>
                  </ul>
                  <h4> Name: Karthikeya Varanasi</h4>
                  <div className="hero-btn" style={{display:'inline-flex', justifycontent:'center'}}>
                    <button className="button" data-bs-toggle="modal" data-bs-target="#exampleModal" title="Hire Me">
                      Hire Me!
                      {/* <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                        <path
                          clip-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                          fill-rule="evenodd"
                        ></path>
                      </svg> */}
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="experiance-list">
            <div className="right-side">
              <div className="handler-secton">
                <div className="experiance-section-content">
                  <h4 className="section-sub-title">
                    RESUME
                  </h4>
                  <h3 className="section-title">
                    <span>Experience</span>
                  </h3>
                </div>

                <div className="experiance-timeline">

                  <div className="item scroll-animation" data-aos="fade-up" data-aos-duration="2000">
                    <span className="date">Mar 2023  – Till Date</span>
                    <h2>Senior Web Designer & Developer</h2>
                    <p>Dinjit</p>
                  </div>
                  <div className="item scroll-animation" data-aos="fade-up" data-aos-duration="2000">
                    <span className="date">July 2023 – Feb 2024</span>
                    <h2>Web Designer & Developer</h2>
                    <p>Snaptics</p>
                  </div>

                  <div className="item scroll-animation" data-aos="fade-up" data-aos-duration="2500">
                    <span className="date">June 2022 – July 2023</span>
                    <h2>Junior Web Designer & Developer</h2>
                    <p>Virtual Networx INC</p>

                    <h2>Jr Networking</h2>
                    <p>Virtual Networx INC</p>
                  </div>

                  <div className="item scroll-animation" data-aos="fade-up" data-aos-duration="4000">
                    <span className="date">Nov 2021 – May 2022</span>
                    <h2>Junior WebDesigner & Developer</h2>
                    <p>White Lemon (Ad sutra Ad Agency)</p>
                    <h2>Web Designer</h2>
                    <p>Freelance</p>
                    <h2>Intern WebDesigner</h2>
                    <p>White Lemon (Ad sutra Ad Agency)</p>
                  </div>

                  <div className="item scroll-animation" data-aos="fade-up" data-aos-duration="4000">
                    <span className="date">Dec 2020 – Aug 2021</span>
                    <h2>Intern Web Designer</h2>
                    <p>Hi Reach Broadband powered by Mithril Telecommunications Pvt. Ltd.</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="Advantage-section default-style" id="skills">
        <div className="container">
          <div className='row' id='flexible'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-xs-12'>
              <div className="Advantageleft" data-aos="fade">
                <div className="Advantage-content">
                  <p>My Skills</p>
                  <h2>My  <span>Advantages</span></h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-xs-12'>
              <div className="Advantagerightside">
                <marquee behavior="scroll" direction="left" className="marquee-size">
                  <img src="/img/Banner/skills/figma.svg" alt="Figma" />

                  <img src="/img/Banner/skills/illustrator.svg" alt="illustrator" />

                  <img src="/img/Banner/skills/Photoshop.svg" alt="Photoshop" />
                  <img src="/img/Banner/skills/Premier_pro.svg" alt="Premier_pro" />

                </marquee>

                <marquee behavior="scroll" loop direction="right" className="marquee-size">
                  <img src="/img/Banner/skills/h-tml.svg" alt="html" />

                  <img src="/img/Banner/skills/java.svg" alt="javascript" />

                  <img src="/img/Banner/skills/Bootstrap.svg" alt="Bootstrap" />
                  <img src="/img/Banner/skills/wordpress.svg" alt="wordpress" />
                  <img src="/img/Banner/skills/php_img.svg" alt="php" />
                  <img src="/img/Banner/skills/skel_img.svg" alt="skel" />
                  <img src="/img/Banner/skills/react_img.svg" alt="react" />
                  <img src="/img/Banner/skills/cs_s.svg" alt="css" />
                  <img src="/img/Banner/skills/mongodb.svg" alt="Mongo DB" />
                  <img src="/img/Banner/skills/nextjs.svg" alt="Next Js" />


                </marquee>
              </div>

            </div>
          </div>
        </div>

      </div>


      <div className="projects-section default-style" id="projects">
        <div className="projects-handle" id="main-section">
          <div className="default-style" >
            <div className="handler-secton">
              <div className="section-content" >
                <h4 className="section-sub-title" >
                  PORTFOLIO
                </h4>
                <h3 className="section-title">
                  My Recent <span>Projects</span>
                </h3>
              </div>
            </div>
          </div>
          <section className="projects-data" id="projects">
        <div className="swiper Projects" data-aos="fade-up">
          <div className="swiper-wrapper">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
             
            >
              <SwiperSlide>
                <div className="content">
                  <div className="grid">
                    <figure className="effect-lily">
                      <img src="/img/projects/07.svg" alt="Megatron" />
                      <figcaption>
                        <div>
                          <h2>Megatron <span></span></h2>
                          <p>Lily likes to play with crayons and pencils</p>
                        </div>
                        <a href="https://megatronindia.in/" title="Megatron" target="_blank">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="content">
                  <div className="grid">
                    <figure className="effect-lily">
                      <img src="/img/projects/08.svg" alt="Krishnas Kitchen" />
                      <figcaption>
                        <div>
                          <h2>Krishnas Kitchen Menu <span></span></h2>
                          <p>Lily likes to play with crayons and pencils</p>
                        </div>
                        <a href="https://krishnaskitchen.co.in/" title="Krishnas Kitchen Menu" target="_blank">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="content">
                  <div className="grid">
                    <figure className="effect-lily">
                      <img src="/img/projects/05.svg" alt="The Vue Residencies" />
                      <figcaption>
                        <div>
                          <h2>The Vue Residencies <span></span></h2>
                          <p>Lily likes to play with crayons and pencils</p>
                        </div>
                        <a href="https://www.thevueresidences.in/" title="The Vue Residencies" target="_blank">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="content">
                  <div className="grid">
                    <figure className="effect-lily">
                      <img src="/img/projects/02.svg" alt="Celequa" />
                      <figcaption>
                        <div>
                          <h2>Celequa Technologies <span></span></h2>
                          <p>Lily likes to play with crayons and pencils</p>
                        </div>
                        <a href="https://celequa.com/" title="Celequa Tech" target="_blank">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="content">
                  <div className="grid">
                    <figure className="effect-lily">
                      <img src="/img/projects/11.svg" alt="Eeshanya" />
                      <figcaption>
                        <div>
                          <h2>Eeshanya <span></span></h2>
                          <p>Lily likes to play with crayons and pencils</p>
                        </div>
                        <a href="https://eeshanya.com/" title="Eeshanya" target="_blank">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
       
          </div>
      </div>

        </>
    );

}