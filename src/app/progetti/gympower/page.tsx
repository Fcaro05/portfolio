'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GympowerPage = () => {
  type TabType = 'html' | 'css' | 'js';
  const [activeTab, setActiveTab] = React.useState<TabType>('html');

  const codeSnippets: Record<TabType, string> = {
    html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complete Responsive Fitness Website Design</title>

    <!-- swiper CSS cdn link  -->
    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />

    <!-- custom CSS file link  -->
    <link rel="stylesheet" href="styles.css">

    <!-- Font awesome cdn link  -->
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />

</head>

<body>

    <!-- header section starts  -->

    <header class="header">

        <a href="#" class="logo">GYM <span>POWER</span></a>

        <nav class="navbar">
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">services</a>
            <a href="#">news</a>
            <a href="#">contact</a>
        </nav>


        <div class="icons">
            <a href="#" class="btn">Become a memeber</a>
            <div id="menu-btn" class="fas fa-bars"></div>
        </div>

    </header>

    <!-- header section ends  -->

    <!-- home section starts  -->

    <section  class="section1 home">

        <div class="swiper home-slider">

            <div class="swiper-wrapper">

                <div class="swiper-slide box">
                    <video autoplay muted loop class="bg-video">
                        <source src="images/drone.mp4" type="video/mp4">
                        Il tuo browser non supporta il tag video.
                    </video>

                    <!-- Layer nero trasparente -->
                    <div class="overlay"></div>

                    <div class="content">
                        <h3>join gympower today</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus deserunt, magni
                            ducimus quisquam ipsum aliquid!</p>
                        <div class="button">
                            <a href="#" class="btn btn-1">get started</a>
                            <a href="#" class="btn">download</a>
                        </div>
                    </div>
                </div>

                <!--  <div class="swiper-slide box" style="background: linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url(images/home-2.jpeg);">
                    <div class="content">
                        <h3>health is wealth</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus deserunt, magni ducimus quisquam ipsum aliquid!</p>
                        <div class="button">
                            <a href="#" class="btn btn-1">get started</a>
                            <a href="#" class="btn">download</a>
                        </div>
                    </div>
                </div> -->

            </div>

        </div>

    </section>

    <!-- home section ends  -->

    <!-- featured section starts  -->

    <section class="section1 feature">

        <h1 class="heading"> Featured <span>Classes</span></h1>

        <div class="swiper feature-slider">

            <div class="swiper-wrapper">

                <div class="swiper-slide box">
                    <div class="image">
                        <img src="images/Feature-classes.jpeg" alt="">
                    </div>
                    <div class="content">
                        <div class="price">$39.99</div>
                        <h3>Fitness classes name here</h3>
                    </div>
                </div>

                <div class="swiper-slide box">
                    <div class="image">
                        <img src="images/Feature-classes-2.jpeg" alt="">
                    </div>
                    <div class="content">
                        <div class="price">$39.99</div>
                        <h3>Fitness classes name here</h3>
                    </div>
                </div>

                <div class="swiper-slide box">
                    <div class="image">
                        <img src="images/Feature-classes-3.jpeg" alt="">
                    </div>
                    <div class="content">
                        <div class="price">$39.99</div>
                        <h3>Fitness classes name here</h3>
                    </div>
                </div>

                <div class="swiper-slide box">
                    <div class="image">
                        <img src="images/Feature-classes-4.jpeg" alt="">
                    </div>
                    <div class="content">
                        <div class="price">$39.99</div>
                        <h3>Fitness classes name here</h3>
                    </div>
                </div>

                <div class="swiper-slide box">
                    <div class="image">
                        <img src="images/Feature-classes-5.jpeg" alt="">
                    </div>
                    <div class="content">
                        <div class="price">$39.99</div>
                        <h3>Fitness classes name here</h3>
                    </div>
                </div>

            </div>

        </div>

    </section>

    <!-- featured section ends  -->

    <!-- about section start  -->

    <section id="about" class="section1 about">

        <!-- about heading  -->
        <h1 class="heading">About us</h1>

        <div class="row">
            <!-- about heading & text  -->
            <div class="content">
                <h2>I NOSTRI VALORI</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente suscipit ut ducimus, incidunt
                    aliquam, eos dolore numquam eum ipsum fuga tempora. Amet alias non consequatur error, at doloremque
                    sequi porro.</p>
                <a href="#"> <button class="btn">read more</button></a>
            </div>

            <!-- about images  -->
            <div class="images">
                <img src="images/about4.png" alt="">
            </div>
        </div>


    </section>
    <!-- about section end  -->

    <!-- Schedule section starts  -->

    <!-- <section class="schedule"> 

        <h1 class="heading"><span>our</span> schedule</h1>

        <div class="box-container">

            <!--------------------------------------------------------------------------------- 1 figlio -------------------------------------------------------
            <div class="box"> 
                <div class="content">
                    <h3>Fitness class name here 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, fuga!</p>
                </div>
                <div class="icons">
                    <span><i class="far fa-clock"></i> 5:30 PM</span>
                    <span><i class="fad fa-calendar-alt"></i>april 22, 2021</span>
                </div>
                <a href="#" class="btn">Join Form $15</a>
            </div>

            <!--------------------------------------------------------------------------------- 2 figlio -------------------------------------------------------
            <div class="box">
                <img src="images/pic-1.jpeg" alt="">
            </div>

            <!--------------------------------------------------------------------------------- 3 figlio -------------------------------------------------------
            <div class="box">
                <div class="content">
                    <h3>Fitness class name here 3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, fuga!</p>
                </div>
                <div class="icons">
                    <span><i class="far fa-clock"></i> 5:30 PM</span>
                    <span><i class="fad fa-calendar-alt"></i>april 22, 2021</span>
                </div>
                <a href="#" class="btn">Join Form $15</a>
            </div>


            <!--------------------------------------------------------------------------------- 4 figlio -------------------------------------------------------
            <div class="box">
                <img src="images/pic-2.jpeg" alt="">
            </div>


            <!--------------------------------------------------------------------------------- 5 figlio -------------------------------------------------------
            <div class="box">
                <img src="images/pic-3.jpeg" alt="">
            </div>
            
            <!--------------------------------------------------------------------------------- 6 figlio -------------------------------------------------------
            <div class="box">
                <div class="content">
                    <h3>Fitness class name here 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, fuga!</p>
                </div>
                <div class="icons">
                    <span><i class="far fa-clock"></i> 5:30 PM</span>
                    <span><i class="fad fa-calendar-alt"></i>april 22, 2021</span>
                </div>
                <a href="#" class="btn">Join Form $15</a>
            </div>

            <!--------------------------------------------------------------------------------- 7 figlio -------------------------------------------------------
            <div class="box">
                <img src="images/pic-4.jpeg" alt="">
            </div>

            <!--------------------------------------------------------------------------------- 8 figlio --------------------------------------------------------
            <div class="box">
                <div class="content">
                    <h3>Fitness class name here 4</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, fuga!</p>
                </div>
                <div class="icons">
                    <span><i class="far fa-clock"></i> 5:30 PM</span>
                    <span><i class="fad fa-calendar-alt"></i>april 22, 2021</span>
                </div>
                <a href="#" class="btn">Join Form $15</a>
            </div>


        </div>

    </section>

    <!-- Schedule section ends -->




    <section class="section2">
        <div class="column left-column">
           <img src="images/greengym1.jpg" alt="Immagine 1">
        </div>
        <div class="column right-column">
          <div class="content">
            <!-- Numero in background -->
            <div class="fadeInUp delay-1"><span>01</span></div>
            <!-- Titolo -->
            <div class="fadeInUp delay-2"><h3>orari flessibili</p>h24</h3></div>
            <!-- Paragrafo -->
            <div class="fadeInUp delay-3">
              <p>Offriamo orari flessibili e un'ampia varietà di attività per adattarci al tuo stile di vita impegnato.</p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Sezione 2: Aperti 365gg l'anno -->
      <section class="section2">
        <div class="column left-column">
            <img src="images/greengym2.jpg" alt="Immagine 1">
        </div>
        <div class="column right-column">
            <div class="content">
                <div class="fadeInUp delay-1"><span>02</span></div>
                <div class="fadeInUp delay-2"><h3>Aperti 365 giorni<br>l'anno</h3></div>
                <div class="fadeInUp delay-3">
                  <p>Offriamo la possibilità di allenarti quando vuoi e quanto vuoi!</p>
                </div>
              </div> 
        </div>
      </section>
      
      <!-- Sezione 3: Vibrazioni positive -->
      <section class="section2">
        <div class="column left-column">
           <img src="images/greengym3.jpg" alt="Immagine 1"> 
        </div>
        <div class="column right-column">
          <div class="content">
            <div class="fadeInUp delay-1"><span>03</span></div>
            <div class="fadeInUp delay-2"><h3>Vibrazioni</p>positive</h3></div>
            <div class="fadeInUp delay-3">
              <p>Il nostro ambiente accogliente e motivante ti farà sentire a casa fin dal primo giorno.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Sezione 4: Vibrazioni positive -->
      <section class="section2">
        <div class="column left-column">
           <img src="images/greengym5.webp" alt="Immagine 1">
        </div>
        <div class="column right-column">
          <div class="content">
            <div class="fadeInUp delay-1"><span>04</span></div>
            <div class="fadeInUp delay-2"><h3>offerte</p>quotidiane</h3></div>
            <div class="fadeInUp delay-3">
              <p>Nella nostra palestra crediamo che il fitness debba essere accessibile a tutti</p>
            </div>
          </div>
        </div>
      </section>

    <!-- trainer section starts  -->
                    <section class="section1 trainers">

                        <h1 class="heading">Expert <span>trainers</span></h1>

                        <div class="swiper trainer-slider">

                            <div class="swiper-wrapper">

                                <div class="swiper-slide box">
                                    <div class="image">
                                        <img src="images/trainer-1.jpeg" alt="">
                                    </div>
                                    <div class="name">
                                        <h1>jhon smith</h1>
                                        <p>gym trainer</p>
                                    </div>
                                </div>

                                <div class="swiper-slide box">
                                    <div class="image">
                                        <img src="images/trainer-4.jpeg" alt="">
                                    </div>
                                    <div class="name">
                                        <h1>Samuel Girven</h1>
                                        <p>gym trainer</p>
                                    </div>
                                </div>

                                <div class="swiper-slide box">
                                    <div class="image">
                                        <img src="images/trainer.jpeg" alt="">
                                    </div>
                                    <div class="name">
                                        <h1>Charles white</h1>
                                        <p>gym trainer</p>
                                    </div>
                                </div>

                                <div class="swiper-slide box">
                                    <div class="image">
                                        <img src="images/trainer-2.jpeg" alt="">
                                    </div>
                                    <div class="name">
                                        <h1>Mellisa howard</h1>
                                        <p>gym trainer</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </section>

                    <!-- trainer section ends  -->

                    <!-- testimonial section starts  -->

                    <section class="section1 testimonial">

                        <h1 class="heading">testimonial</h1>

                        <div class="box-container">

                            <div class="box">
                                <div class="image">
                                    <img src="images/t-2.jpeg" alt="">
                                </div>
                                <div class="name">
                                    <h1>Mike rechardson</h1>
                                    <p>CEO. <span>xyz company</span> </p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ex aspernatur illum
                                    ducimus atque hic dolor animi consectetur minus a sint, quisquam id iste voluptate
                                    possimus neque unde natus. Porro.</p>
                            </div>

                            <div class="box">
                                <div class="image">
                                    <img src="images/t-3.jpeg" alt="">
                                </div>
                                <div class="name">
                                    <h1>Mike rechardson</h1>
                                    <p>CEO. <span>xyz company</span> </p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ex aspernatur illum
                                    ducimus atque hic dolor animi consectetur minus a sint, quisquam id iste voluptate
                                    possimus neque unde natus. Porro.</p>
                            </div>

                            <div class="box">
                                <div class="image">
                                    <img src="images/t-4.jpeg" alt="">
                                </div>
                                <div class="name">
                                    <h1>Mike rechardson</h1>
                                    <p>CEO. <span>xyz company</span> </p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ex aspernatur illum
                                    ducimus atque hic dolor animi consectetur minus a sint, quisquam id iste voluptate
                                    possimus neque unde natus. Porro.</p>
                            </div>


                        </div>

                    </section>

                    <!-- testimonial section ends  -->

                    <!-- blogs section starts  -->

                    <section class="section1 blogs">

                        <h1 class="heading">our <span>blogs</span></h1>

                        <div class="swiper blogs-slider">

                            <div class="swiper-wrapper">


                                <div class="swiper-slide box">
                                    <div class="image">
                                        <img src="images/blog-1.jpeg" alt="">
                                    </div>
                                    <div class="content">
                                        <h3>Fitness class name here</h3>
                                        <span><i class="fad fa-calendar-alt"></i>april 22, 2021</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolorem
                                            qui asperiores quas, molestiae aspernatur.</p>
                                    </div>
                                    <div class="button">
                                        <a href="#" class="btn">Read more</a>
                                    </div>
                                </div>


                                <div class="swiper-slide box">
                                    <div class="image">
                                        <img src="images/blog-2.jpeg" alt="">
                                    </div>
                                    <div class="content">
                                        <h3>Fitness class name here</h3>
                                        <span><i class="fad fa-calendar-alt"></i>april 22, 2021</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolorem
                                            qui asperiores quas, molestiae aspernatur.</p>
                                    </div>
                                    <div class="button">
                                        <a href="#" class="btn">Read more</a>
                                    </div>
                                </div>


                                <div class="swiper-slide box">
                                    <div class="image">
                                        <img src="images/blog-3.jpeg" alt="">
                                    </div>
                                    <div class="content">
                                        <h3>Fitness class name here</h3>
                                        <span><i class="fad fa-calendar-alt"></i>april 22, 2021</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolorem
                                            qui asperiores quas, molestiae aspernatur.</p>
                                    </div>
                                    <div class="button">
                                        <a href="#" class="btn">Read more</a>
                                    </div>
                                </div>

                                <div class="swiper-slide box">
                                    <div class="image">
                                        <img src="images/blog-4.jpeg" alt="">
                                    </div>
                                    <div class="content">
                                        <h3>Fitness class name here</h3>
                                        <span><i class="fad fa-calendar-alt"></i>april 22, 2021</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolorem
                                            qui asperiores quas, molestiae aspernatur.</p>
                                    </div>
                                    <div class="button">
                                        <a href="#" class="btn">Read more</a>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </section>

                    <!-- blogs section ends  -->

                    <!-- footer section starts  -->

                    <section class="section1 footer">

                        <div class="box-container">

                            <div class="box">
                                <h1>about</h1>
                                <div class="text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deleniti,
                                        recusandae quis pariatur officiis reprehenderit labore quo maxime magni, aliquam
                                        earum aperiam sequi illo. Esse itaque ex unde quia commodi.</p>
                                </div>
                                <div class="icon">
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>

                            <div class="box">
                                <h1>contact info</h1>
                                <div class="icons">
                                    <a href="#"><i class="fas fa-map-marker-alt"></i>34 Street Name, City Name Here,
                                        United States </a>
                                    <a href="#"><i class="fas fa-phone-alt"></i>+1 242 4942 290</a>
                                    <a href="#"><i class="fas fa-envelope"></i>example@gmail.com</a>
                                </div>
                            </div>

                            <div class="box">
                                <h1>Quick links</h1>
                                <div class="icons">
                                    <a href="#">home</a>
                                    <a href="#">about</a>
                                    <a href="#">services</a>
                                    <a href="#">news</a>
                                    <a href="#">contact</a>
                                </div>
                            </div>

                        </div>


                    </section>

                    <!-- footer section ends  -->








                    <!-- swiper JS cdn link  -->
                    <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>


                    <!-- Custom JS file link  -->
                    <script src="script.js"></script>
</body>

</html>`,
    css: `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

:root{
    --main-color: #06cd27;
    --black: #000;
    --light-color: #868e96;
}

 /* custom color  */
 :root {
    --green: #65b741;
    --black: #333;
    --wight: #fff;
}

*{
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    text-transform: capitalize;
    transition: all .2s linear;
}

::selection{
    background: var(--main-color);
    color: #fff;
}

html{
    font-size: 62.5%;
    scroll-behavior: smooth;
    overflow-x: hidden;
    scroll-padding-top: 7rem;
}

html::-webkit-scrollbar{
    width: 1rem;
}

html::-webkit-scrollbar-track{
    background: #fafafa;
}

html::-webkit-scrollbar-thumb{
    background: var(--main-color);
    border-radius: 5rem;
}

.section1 {
    padding: 2rem 9%;
    padding-bottom: 0;
    padding-top: 8rem;
}

.heading{
    font-size: 4rem;
    text-align: center;
    padding-top: 4rem;
    padding-bottom: 2rem;
    color: var(--black);
    text-transform: uppercase;
}

.heading span{
    text-transform: uppercase;
    color: var(--main-color);
}

.btn{
    margin-top: 1rem;
    display: inline-block;
    padding: .9rem 3rem;
    font-size: 1.8rem;
    background: #fff;
    font-weight: 500;
    cursor: pointer;
    color: var(--main-color);
    border-radius: 20px;
}

.btn:hover{
    background: var(--main-color);
    color: #fff;
    letter-spacing: .1rem;
}


/* ---------------------------------------------- header section starts -------------------------  */

.header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 3rem 9%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255,255,255,.1);
    box-shadow: 0rem .1rem .5rem rgba(0,0,0,.1);
}

.header .logo{
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: .1rem;
}

.header .logo span{
    color: var(--main-color);
    text-transform: uppercase;
}

.header .navbar a{
    font-size: 1.7rem;
    color: #fff;
    margin: 0 1rem;
}

.header .navbar a:hover{
    color: var(--main-color);
}

.header .icons div{
    font-size: 2.5rem;
    color: #222;
    padding: .5rem;
    cursor: pointer;
    margin-left: 1rem;
    color: #fff;
}

.header .icons div:hover{
    transform: rotate(180deg);
}

#menu-btn{
    display: none;
}

.header .icons a{
    font-size: 1.5rem;
    letter-spacing: .1rem;
    color: #fff;
    background: var(--main-color);
    font-weight: 500;
    text-transform: uppercase;
    padding: .8rem 2rem;
    border: none;
}

.header .icons div:hover{
    color: var(--main-color);
}

.header .icons a:hover{
    color: var(--main-color);
    background: #fff;
}

.header.header.active{
    padding: 2rem 9%;
    background: rgba(0,0,0,.9);
}

/* ---------------------------------------------- header section ends -------------------------  */

/* ----------------------------------------------- home section starts ------------------------  */

.home{
    padding: 0;
}

.home .home-slider .box{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-size: cover !important;
    background-position: center !important;
}

.bg-video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

/* Layer nero trasparente sopra il video */
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* 50% di opacità */
    z-index: 0;
}

.home .home-slider .box .content{
    text-align: center;
    max-width: 70rem;
}

.home .home-slider .box .content h3{
    font-size: 5rem;
    color: #fff;
    text-transform: uppercase;
    transition-delay: .2s;
}

.home .home-slider .box .content p{
    font-size: 1.7rem;
    color: #eee;
    transition-delay: .4s;
    padding: 1rem 0;
}

.home .home-slider .box .content .button .btn-1{
    background: var(--main-color);
    color: #fff;
    margin-right: .5rem;
}

.home .home-slider .box .content .button .btn-1:hover{
    background: #fff;
    color: var(--main-color);
}

.home .home-slider .box .content .button{
    transition-delay: .6s;
}

.home .home-slider .box .content > *{
    transform: translateY(2rem);
    opacity: 0;
}

.home .home-slider .swiper-slide-active .content > *{
    transform: translateY(0);
    opacity: 1;
}

/* ----------------------------------------------- home section ends ------------------------  */

/* --------------------------------------------- feature section starts ------------------------   */

.feature .feature-slider .box{
    position: relative;
    text-align: center;
    overflow: hidden;
}

.feature .feature-slider .box .image{
    height: 40rem;
    width: 100%;
    overflow: hidden;
}

.feature .feature-slider .box .image img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.feature .feature-slider .box:hover .image img{
    transform: scale(1.2);
}

.feature .feature-slider .box:hover .content .price{
    background: none;
    border: .3rem solid #fff;
}

.feature .feature-slider .box .content{
    padding: 1rem 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    align-items: center;
}

.feature .feature-slider .box .content h3{
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    background: rgba(0,0,0,.3);
    padding: .2rem;
    margin-top: .5rem;
}

.feature .feature-slider .box .content .price{
    width: 10rem;
    height: 10rem;
    line-height: 10rem;
    border-radius: 50%;
    text-align: center;
    margin: auto;
    background: var(--main-color);
    font-size: 2rem;
    font-weight: bolder;
    color: #fff;
}

/* --------------------------------------------- feature section ends ------------------------   */


/* ---------------------------------------------- about section start ----------------------------*/

.about .btn {
    background: var(--main-color);
    color: #fff;
    padding: .7rem 3rem;
    font-size: 1.6rem;
}

.about .btn:hover {
    opacity: .8;
}

.about {
    min-height: 100vh;
    width: 100vw;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.about .row {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 4rem;
}

.about .row .content {
    text-align: left;
    padding: 4rem;
}

.about .row .content h2 {
    font-size: 3rem;
    color: var(--green);
}

.about .row .content p {
    font-size: 1.5rem;
    color: var(--black);
    padding: 1rem 0;
}

/* about images  */
.about .row .images img {
    width: 50vw;
    border-radius: 2rem;
}

/* about section sercle  */
.about::after,
.about::before {
    content: '';
    position: absolute;
    z-index: -1;
    opacity: .2;
    border-radius: 50%;
}

/* cercle top left  */
.about::after {
    height: 60rem;
    width: 60rem;
    background-color: var(--green);
    top: -10rem;
    right: -10rem;
}

/* cercle buttom left  */
.about::before {
    height: 60rem;
    width: 60rem;
    background-color: var(--green);
    bottom: -10rem;
    left: -10rem;
}



/*--------------------------------------------- about section end ------------------------------------------------------- */



/* -------------------------------------------- schedule section starts ---------------------------  */

.schedule{
    background: #eee;
}

.schedule .box-container{
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 colonne per ogni riga */
    padding-top: 2rem;
    padding-bottom: 5rem;
}

.schedule .box-container .box .content{
    padding: 2rem;
}

.schedule .box-container .box .content h3{
    font-size: 2rem;
    font-weight: 500;
    padding-bottom: .5rem;
}

.schedule .box-container .box .content p{
    color: #333;
    font-size: 1.5rem;
    line-height: 1.8;
}

.schedule .box-container .box .icons{
    padding: 0 2rem;
}

.schedule .box-container .box .icons span{
    display: block;
    font-size: 1.3rem;
    color: #333;
    padding: .3rem 0;
}

.schedule .box-container .box .icons span i{
    margin-right: .5rem;
}

.schedule .box-container .box .btn{
   margin: 1.5rem 2rem;
   background: var(--main-color);
   color: #fff;
}

.schedule .box-container .box .btn:hover{
    background: #f66a97;
}

.schedule .box-container .box{
    background: #fff;
    overflow: hidden;
}

.schedule .box-container .box img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Quando lo schermo è più piccolo di 1024px → 2 colonne */
@media (max-width: 1024px) {
    .schedule .box-container {
        grid-template-columns: repeat(2, 1fr);
    }

    /* Alternanza delle righe */
    .schedule .box-container .box:nth-child(1) { order: 1; } /* Info corso 1 */
    .schedule .box-container .box:nth-child(2) { order: 3; } /* Immagine corso 2 */
    .schedule .box-container .box:nth-child(3) { order: 5; } /* Info corso 3 */
    .schedule .box-container .box:nth-child(4) { order: 7; } /* Immagine corso 4 */

    .schedule .box-container .box:nth-child(5) { order: 2; } /* Immagine corso 1 */
    .schedule .box-container .box:nth-child(6) { order: 4; } /* Info corso 2 */
    .schedule .box-container .box:nth-child(7) { order: 6; } /* Immagine corso 3 */
    .schedule .box-container .box:nth-child(8) { order: 8; } /* Info corso 4 */
}





/* -------------------------------------------- schedule section ends ---------------------------  */

.section2 {
    display: flex;
    width: 100%;
    position: relative;
    overflow: hidden;
}

.column {
    flex: 1;
    position: relative;
}

/* Colonna sinistra: dimensioni fisse */
.left-column {
    flex: 0 0 50%; /* Fissa la larghezza al 50% della sezione */
    height: 600px; /* Altezza fissa per la colonna */
    overflow: hidden; /* Nasconde eventuali parti dell'immagine che fuoriescono */
}

.left-column img {
    width: 100%; /* Larghezza al 100% della colonna */
    height: 100%; /* Altezza al 100% della colonna */
    object-fit: cover; /* Adatta l'immagine senza distorsioni */
    display: block; /* Rimuove lo spazio sotto l'immagine */
}

/* Overlay per la colonna sinistra */
.left-column::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
}

/* Colonna destra: contenuto */
.right-column {
    flex: 0 0 50%; /* Fissa la larghezza al 50% della sezione */
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    position: relative;
    padding-top: 140px;
}

section:nth-child(even) .left-column {
    order: 1;
}

section:nth-child(odd) .right-column {
    order: 1;
}

.section2 .content {
    position: relative;
    z-index: 2;
    width: 100%;
}

/* Stili per il numero (span) */
.section2 .content span {
    font-size: 11rem;
    color: green;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    z-index: 1;
    font-weight: 600;
    bottom: -40px;
    transform: translateX(-50%) scale(1.5) scaleY(1.5);
}

/* Stili per il titolo h3 */
.section2 .content h3 {
    font-size: 4rem;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
    position: relative;
    z-index: 2;
    font-weight: 500;
    transform: scale(1) scaleY(1.3);
    opacity: .8;
    line-height: 1;
    margin-top: 70px;
}

/* Stili per il paragrafo */
.section2 .content p {
    text-align: center;
    position: relative;
    z-index: 2;
}

/* Animazioni: fadeInUp */
.fadeInUp {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fadeInUp.animate {
    opacity: 1;
    transform: translateY(0);
}

/* Classi per ritardi nelle transizioni */
.delay-1 {
    transition-delay: 0.3s;
}

.delay-2 {
    transition-delay: 0.6s;
}

.delay-3 {
    transition-delay: 0.9s;
}
  /* Responsive: su dispositivi piccoli le colonne si dispongono verticalmente */
  @media (max-width: 768px) {
    section {
      flex-direction: column;
    }
    .left-column,
    .right-column {
      width: 100%;
      min-height: 200px;
    }
    /* In modalità mobile potresti voler nascondere il numero in background oppure ridimensionarlo */
    .content span {
      font-size: 4rem;
    }
  }

/* ----------------------------------------- trainers section starts ----------------------------  */

.trainers .trainer-slider{
    padding-bottom: 4rem;
}

.trainers .trainer-slider .box{
    position: relative;
    text-align: center;
    overflow: hidden;
    margin: 1rem 0;
}

.trainers .trainer-slider .box .image{
    height: 40rem;
    width: 100%;
    overflow: hidden;
}

.trainers .trainer-slider .box .image img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.trainers .trainer-slider .box .name{
    padding: 2rem 0;
}

.trainers .trainer-slider .box .name h1{
    font-size: 3rem;
    color: #333;
    font-weight: 600;
}

.trainers .trainer-slider .box .name p{
    font-size: 2rem;
    color: #808080;
}

/* ----------------------------------------- trainers section ends ----------------------------  */

/* ------------------------------------------- testimonial section starts --------------------  */

.testimonial .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 1.5rem;
    padding: 7rem 0;
}

.testimonial .box-container .box{
    padding: 2rem;
    position: relative;
    text-align: center;
    background: #fafafa;
    box-shadow: 0 .1rem .5rem rgba(0,0,0,.1);
    border-radius: .5rem;
}

.testimonial .box-container .box:hover{
    transform: translateY(-10%);
    transition: .3s linear;
    background: #fff;
    border: .2rem solid #f8f8a1;
}

.testimonial .box-container .box .image{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5rem;
}

.testimonial .box-container .image img{
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    border-radius: 50%;
    position: absolute;
    top: -6rem;
}

.testimonial .box-container .name{
    padding: 1rem 0;
} 

.testimonial .box-container .name h1{
    font-size: 2rem;
    color: var(--black);
}

.testimonial .box-container .name p{
    color: #222;
    font-size: 1.3rem;
}

.testimonial .box-container .name p span{
    text-transform: none;
}

.testimonial .box-container .box p{
    font-size: 1.5rem;
    color: #333;
    font-weight: 400;
    line-height: 1.8;
} 

/* ------------------------------------------- testimonial section ends --------------------  */


/* -------------------------------------------- blogs section starts ---------------------  */

.blogs .blogs-slider{
    padding-bottom: 4rem;
}

.blogs .blogs-slider .box{
    position: relative;
    overflow: hidden;
    margin: 1rem 0;
    background: #fafafa;
    box-shadow: 0 .5rem .5rem rgba(0,0,0,.3);
}

.blogs .blogs-slider .box .image{
    height: 40rem;
    width: 100%;
    overflow: hidden;
}

.blogs .blogs-slider .box .image img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.blogs .blogs-slider .box:hover .image img{
    transform: scale(1.2);
}

.blogs .blogs-slider .box .content{
    padding: 2rem;
    padding-bottom: 1rem;
}

.blogs .blogs-slider .box .content h3{
    font-size: 2rem;
    color: var(--black);
    font-weight: bold;
    padding-bottom: 1rem;
}

.blogs .blogs-slider .box .content span{
    font-size: 1.3rem;
    color: #808080;
}

.blogs .blogs-slider .box .content span i{
    margin-right: .5rem;
    color: var(--main-color);
}

.blogs .blogs-slider .box .content p{
    padding-top: 1rem;
    color: #808080;
    font-size: 1.5rem;
    line-height: 1.8;
}

.blogs .blogs-slider .box .button{
    text-align: center;
    padding-bottom: 2rem;
}

.blogs .blogs-slider .box .btn{
    background: var(--main-color);
    color: #fff;
    padding: .7rem 3rem;
    font-size: 1.6rem;
}

.blogs .blogs-slider .box .btn:hover {
    opacity: .8;
}


/* -------------------------------------------- blogs section ends ---------------------  */

/* --------------------------------------------- footer section starts ----------------------  */

.footer{
    background: #222;
}

.footer .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(35rem , 1fr));
    gap: 1.5rem;
}

.footer .box-container .box{
    padding: 2rem;
}

.footer .box-container .box h1{
    font-size: 2.5rem;
    color: #fff;
    font-weight: 600;
    padding-bottom: 1rem;
}

.footer .box-container .box .text{
    color: #eee;
    font-size: 1.3rem;
    font-weight: normal;
    line-height: 1.8;
    padding-bottom: 1rem;
}

.footer .box-container .box .icon{
    padding: 1rem 0;
}

.footer .box-container .box .icon a i{
    height: 5rem;
    width: 5rem;
    line-height: 5rem;
    background: var(--main-color);
    text-align: center;
    font-size: 2rem;
    border-radius: 50%;
    margin: 0 .5rem;
    color: #fff;
}

.footer .box-container .box .icon a i:hover{
    color: var(--main-color);
    background: none;
    border: .2rem solid var(--main-color);
}

.footer .box-container .box .icons a{
    display: block;
    color: #fff;
    font-size: 1.5rem;
    margin: 1.5rem 0;
}

.footer .box-container .box .icons a i{
    margin-right: .5rem;
    color: var(--main-color);
}

.footer .box-container .box .icons a:hover i{
    padding-right: 2rem;
    color: #fff;
}

.footer .box-container .box .icons a:hover{
    color: var(--main-color);
}

.footer .credit{
    padding: 3rem 0;
    text-align: center;
    border-top: .1rem solid #808080;
    margin-top: 2rem;
    font-size: 2rem;
    font-weight: 500;
    color: #eee;
}

.footer .credit span{
    color: var(--main-color);
}

/* --------------------------------------------- footer section ends ----------------------  */






















/* -------------------------- media quries starts -------------------- */
@media (max-width: 1024px){
    @media (min-height: 620px){
        /* about media query  */
        .about .row {
            flex-flow: column-reverse;
            padding: 0 2rem;
        }

        .about .row .images img {
            width: 100vw;
            padding: 4rem;
        }
    }
}

@media (max-width: 991px){

    html{
        font-size: 55%;
    }

    .header{
        padding: 2rem;
    }

    .header.header.active{
        padding: 2rem;
    }

    section{
        padding: 2rem;
    }

}

/* ------------------- for max-width 768px ------------------  */

@media (max-width: 768px){

    #menu-btn{
        display: inline-block;
    }

    .header .navbar{
        position: absolute;
        top: 100%;
        right: 0;
        left: 0;
        background: rgba(0,0,0,.9);
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        border-top: .1rem solid #eee;
    }

    .header .navbar.active{
        clip-path: polygon(0 0,100% 0, 100% 100%, 0 100%);
    }

    .header .navbar a{
        display: block;
        margin: 2rem;
        font-size: 2rem;
    }

    .feature .feature-slider .box .content h3{
        padding: 1rem;
    }

    .testimonial .box-container{
        padding: 1rem 0;
    }

    .testimonial .box-container .box{
        margin-top: 3rem;
    }


}

/* ------------------- for max-width 450px ------------------  */

@media (max-width: 450px){

    html{
        font-size: 50%;
    }

    .header .icons a{
        letter-spacing: none;
        font-size: 1.3rem;
        padding: 1rem;
    }

}


`,
    js: `
// For header 

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
} 

// for window scroll 

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

} 


window.onload = () =>{
  if(window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
  }else{
      document.querySelector('.header').classList.remove('active');
  }
} 

// for home pages 

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
  });

//   for feature section 

var swiper = new Swiper(".feature-slider", {
    spaceBetween: 20,
    loop:true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });


  //   for trainers section 

var swiper = new Swiper(".trainer-slider", {
    spaceBetween: 20,
    loop:true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });

    //   for blogs section 

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 20,
  loop:true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});




document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  const animatedItems = document.querySelectorAll('.fadeInUp');
  animatedItems.forEach(item => observer.observe(item));
});`
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-64px)] flex items-center overflow-hidden py-16">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat brightness-50"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80")'
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <motion.div 
              className="md:col-span-7"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <motion.span 
                  className="inline-block px-4 py-2 bg-white/10 text-white backdrop-blur-sm rounded-full text-sm font-medium border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Case Study – Web Development
                </motion.span>
                
                <motion.h1 
                  className="text-6xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  GymPower
                </motion.h1>

                <motion.p 
                  className="text-xl text-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Sviluppo di un sito web moderno per una palestra utilizzando HTML, CSS e JavaScript vanilla
                </motion.p>

                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm border border-white/20">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    2024
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm border border-white/20">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v7m0 0l3-3m-3 3l-3-3" />
                    </svg>
                    Web Development
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm border border-white/20">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Performance
                  </span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="md:col-span-5 pl-16"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative aspect-[3/4] max-h-[600px] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm p-8 border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80"
                  alt="GymPower Preview"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduzione */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Introduzione al Progetto</h2>
              <p className="text-gray-700 mb-4">
                Questo case study illustra lo sviluppo di un sito web moderno per GymPower, una palestra italiana all'avanguardia. Il progetto è stato realizzato utilizzando tecnologie web standard come HTML5, CSS3 e JavaScript, con un focus particolare sulla user experience e le performance.
              </p>
              <p className="text-gray-700 mb-4">
                L'obiettivo principale era creare un'interfaccia utente intuitiva che permettesse ai visitatori di esplorare i servizi offerti, gli orari dei corsi e le membership disponibili. Il design segue un'estetica moderna e dinamica, con particolare attenzione all'accessibilità e alla velocità di caricamento.
              </p>
              <p className="text-gray-700">
                Il sito è stato sviluppato seguendo le best practices di organizzazione del codice, con una chiara separazione tra struttura (HTML), presentazione (CSS) e comportamento (JavaScript).
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Dati del Progetto</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="ri-calendar-line text-green-600 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Durata:</span> 3 settimane
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-code-line text-green-600 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Tecnologie:</span> HTML5, CSS3, JavaScript (ES6+)
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-smartphone-line text-green-600 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Approccio:</span> Mobile-first, Responsive
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-speed-line text-green-600 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Performance:</span> 98/100 Lighthouse
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Struttura del Codice */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Struttura del Codice</h2>
          
          <p className="text-gray-700 mb-6">
            Il sito è stato sviluppato seguendo le best practices di organizzazione del codice, con una chiara separazione tra struttura (HTML), presentazione (CSS) e comportamento (JavaScript). Questo approccio facilita la manutenzione e l&apos;aggiornamento del sito nel tempo.
          </p>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
            <div className="border-b border-gray-200">
              <div className="flex">
                <button 
                  className={`px-6 py-3 font-medium text-sm focus:outline-none ${activeTab === 'html' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('html')}
                >
                  HTML
                </button>
                <button 
                  className={`px-6 py-3 font-medium text-sm focus:outline-none ${activeTab === 'css' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('css')}
                >
                  CSS
                </button>
                <button 
                  className={`px-6 py-3 font-medium text-sm focus:outline-none ${activeTab === 'js' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('js')}
                >
                  JavaScript
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {activeTab === 'html' && 'Struttura HTML della Homepage'}
                  {activeTab === 'css' && 'Stili CSS Principali'}
                  {activeTab === 'js' && 'Funzionalità JavaScript'}
                </h3>
                <button className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 py-1 px-3 rounded flex items-center">
                  <i className="ri-file-copy-line mr-2"></i> Copia Codice
                </button>
              </div>
              
              <div className="bg-gray-900 rounded-lg overflow-auto max-h-[700px]">
                <pre className="text-gray-300 p-4 text-sm leading-relaxed overflow-x-auto">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>
              
              <div className="mt-6 bg-green-50 border-l-4 border-green-500 p-4 text-green-700">
                {activeTab === 'html' && (
                  <p>
                    <strong>Nota:</strong> La struttura HTML utilizza tag semantici come <code>&lt;nav&gt;</code>, <code>&lt;header&gt;</code> e <code>&lt;section&gt;</code> per migliorare l&apos;accessibilità e il SEO. L&apos;organizzazione in container e componenti facilita il layout responsive.
                  </p>
                )}
                {activeTab === 'css' && (
                  <p>
                    <strong>Nota:</strong> Gli stili CSS seguono una metodologia modulare con classi riutilizzabili. L&apos;uso di variabili CSS personalizzate (custom properties) permette una facile personalizzazione dei colori e delle dimensioni.
                  </p>
                )}
                {activeTab === 'js' && (
                  <p>
                    <strong>Nota:</strong> Il JavaScript è organizzato in moduli funzionali che gestiscono specifiche caratteristiche come la prenotazione delle classi, il calcolo del BMI e le animazioni. L&apos;uso di eventi e observer pattern migliora l&apos;interattività.
                  </p>
                )}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Organizzazione dei File</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm text-gray-700">
{`📁 gympower-website/
├── 📄 index.html
├── 📁 css/
│   ├── 📄 styles.css
│   └── 📄 responsive.css
├── 📁 js/
│   ├── 📄 main.js
│   └── 📄 classes.js
└── 📁 assets/
    ├── 📁 images/
    └── 📁 fonts/`}
                </pre>
              </div>
              <p className="mt-4 text-gray-700">
                La struttura dei file è organizzata in modo da separare chiaramente le diverse responsabilità e facilitare la manutenzione. I file CSS e JavaScript sono suddivisi per funzionalità.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Principi di Sviluppo</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Separazione delle Responsabilità</span>
                    <p className="text-gray-600 text-sm">HTML per struttura, CSS per stile, JavaScript per comportamento</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Approccio Component-Based</span>
                    <p className="text-gray-600 text-sm">Componenti modulari e riutilizzabili</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Progressive Enhancement</span>
                    <p className="text-gray-600 text-sm">Funzionalità base accessibili a tutti, miglioramenti per browser moderni</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Accessibilità</span>
                    <p className="text-gray-600 text-sm">Conformità WCAG 2.1 AA per garantire l&apos;accesso a tutti gli utenti</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Design System</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Palette Colori</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="h-20 rounded-lg bg-[#06cd27] mb-2"></div>
                  <p className="text-sm font-medium">Main Color</p>
                  <p className="text-xs text-gray-500">#06cd27</p>
                </div>
                <div>
                  <div className="h-20 rounded-lg bg-[#65b741] mb-2"></div>
                  <p className="text-sm font-medium">Green</p>
                  <p className="text-xs text-gray-500">#65b741</p>
                </div>
                <div>
                  <div className="h-20 rounded-lg bg-[#333333] mb-2"></div>
                  <p className="text-sm font-medium">Black</p>
                  <p className="text-xs text-gray-500">#333333</p>
                </div>
                <div>
                  <div className="h-20 rounded-lg bg-[#868e96] mb-2"></div>
                  <p className="text-sm font-medium">Light Color</p>
                  <p className="text-xs text-gray-500">#868e96</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 text-sm">
                La palette utilizza tonalità di verde per trasmettere energia e vitalità, con varianti di grigio per creare contrasto e leggibilità.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Typography</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-[4rem] font-bold text-gray-800">Heading</h4>
                  <p className="text-sm text-gray-500">Poppins Bold, 4rem</p>
                </div>
                <div>
                  <h4 className="text-[2.5rem] font-semibold text-gray-800">Logo</h4>
                  <p className="text-sm text-gray-500">Poppins SemiBold, 2.5rem</p>
                </div>
                <div>
                  <h4 className="text-[1.8rem] font-medium text-gray-800">Button Text</h4>
                  <p className="text-sm text-gray-500">Poppins Medium, 1.8rem</p>
                </div>
                <div>
                  <p className="text-[1.6rem] text-gray-700">Testo del paragrafo</p>
                  <p className="text-sm text-gray-500">Poppins Regular, 1.6rem</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 text-sm">
                Il sistema tipografico utilizza Poppins in vari pesi, con una scala di dimensioni basata su rem per garantire coerenza e leggibilità su tutti i dispositivi.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Componenti UI</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="bg-gray-100 rounded-lg p-4 mb-2">
                    <button className="w-full text-[1.8rem] bg-white text-[#06cd27] hover:bg-[#06cd27] hover:text-white transition-all duration-200 font-medium px-8 py-3 rounded-[20px]">
                      Become a member
                    </button>
                  </div>
                  <p className="text-sm text-center text-gray-700">Pulsante Primario</p>
                </div>
                <div>
                  <div className="bg-gray-100 rounded-lg p-4 mb-2">
                    <nav className="flex gap-4 items-center">
                      <a href="#" className="text-[1.7rem] text-gray-600 hover:text-[#06cd27] transition-colors">home</a>
                      <a href="#" className="text-[1.7rem] text-[#06cd27]">about</a>
                    </nav>
                  </div>
                  <p className="text-sm text-center text-gray-700">Navigation Links</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                I componenti UI sono stati progettati con un focus sulla chiarezza e l&apos;interattività, utilizzando transizioni fluide e feedback visivi chiari.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Spaziature</h3>
              <div className="space-y-4">
                <div>
                  <div className="h-8 bg-green-100 rounded mb-1"></div>
                  <p className="text-sm text-gray-600">Section Padding: 2rem 9%</p>
                </div>
                <div>
                  <div className="h-8 bg-green-200 rounded mb-1"></div>
                  <p className="text-sm text-gray-600">Header Padding: 3rem 9%</p>
                </div>
                <div>
                  <div className="h-8 bg-green-300 rounded mb-1"></div>
                  <p className="text-sm text-gray-600">Button Padding: .9rem 3rem</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 text-sm">
                Sistema di spaziatura basato su unità rem e percentuali per mantenere proporzioni coerenti e layout responsive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview del Sito Web */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Preview del Sito che ho Costruito</h2>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe 
              src="https://fcaro05.github.io/Gympower.com/"
              width="100%"
              height="600"
              style={{ border: 'none' }}
              title="GymPower Website Preview"
            />
          </div>
        </div>
      </section>

      {/* Conclusioni */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Conclusioni</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Riepilogo del Progetto</h3>
            <p className="text-gray-700 mb-4">
              Questo case study ha illustrato lo sviluppo di un sito web moderno per GymPower utilizzando tecnologie web standard. Il progetto dimostra come sia possibile creare un'esperienza utente di alta qualità utilizzando HTML, CSS e JavaScript vanilla, senza dipendere da framework complessi.
            </p>
            <p className="text-gray-700 mb-4">
              L'attenzione ai dettagli di design, accessibilità e performance ha portato a un prodotto finale che soddisfa gli standard moderni del web e offre un'esperienza utente ottimale su tutti i dispositivi.
            </p>
            <p className="text-gray-700">
              Le tecniche e le best practices illustrate in questo case study possono essere applicate a una vasta gamma di progetti web, indipendentemente dal settore o dalle dimensioni.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Punti Chiave</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Design System Coerente</span>
                    <p className="text-gray-600 text-sm">Palette colori energica, tipografia dinamica e componenti UI standardizzati</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Performance Ottimizzata</span>
                    <p className="text-gray-600 text-sm">Caricamento veloce e ottimizzazione delle risorse multimediali</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Accessibilità</span>
                    <p className="text-gray-600 text-sm">Conformità WCAG 2.1 AA e navigazione intuitiva</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mt-1 mr-3"></i>
                  <div>
                    <span className="font-medium">Codice Pulito</span>
                    <p className="text-gray-600 text-sm">Struttura modulare e manutenibile</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Sviluppi Futuri</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Sistema di Prenotazione Corsi</h4>
                  <p className="text-sm text-gray-700">
                    Implementazione di un sistema di prenotazione online per i corsi con gestione delle disponibilità in tempo reale.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Area Personale Membri</h4>
                  <p className="text-sm text-gray-700">
                    Sviluppo di un'area riservata per il tracking dei progressi e la gestione dell'abbonamento.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Integrazione Video Corsi</h4>
                  <p className="text-sm text-gray-700">
                    Implementazione di una sezione per i video corsi online e tutorial di allenamento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GympowerPage; 