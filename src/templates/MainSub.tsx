//import image from 'next/image';
import React, { ReactNode } from 'react';
import Button from '../components/ui/button';

//import Link from 'next/link';

//import { Navbar } from '../navigation/Navbar';
//import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-3 md:px-0">
    {props.meta}
    <body>
{/* <!-- Navbar --> */}
<nav className="relative container mx-auto p-6">
  {/* <!-- Flex container --> */}
  <div className='flex items-center justify-between'>
   
  </div>
  <div className="flex items-center justify-between">
    {/* <!-- Logo --> */}
    <div className="pt-2">
      <strong>ONLINE EDUCATION & LEARNING</strong>
      {/* <img src="img/logo.svg" alt="" /> */}
    </div>
    {/* <!-- Menu Items --> */}
    <div className="hidden space-x-6 md:flex">
      <a href="#" className="hover:text-darkGrayishBlue">HOME</a>
      <a href="#" className="hover:text-darkGrayishBlue">ALL COURSES</a>
      <a href="#" className="hover:text-darkGrayishBlue">About Us</a>
      <a href="#" className="hover:text-darkGrayishBlue">Careers</a>
      <a href="#" className="hover:text-darkGrayishBlue">Community</a>
    </div>
    {/* <!-- Button --> */}
    <a
      href="#"
      className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
      >Get Started</a
    >

    {/* <!-- Hamburger Icon --> */}
    <button
      id="menu-btn"
      className="block hamburger md:hidden focus:outline-none"
    >
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </button>
  </div>

  {/* <!-- Mobile Menu --> */}
  <div className="md:hidden">
    <div
      id="menu"
      className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
    >
      <a href="#">HOME</a>
      <a href="#">ALL COURSES</a>
      <a href="#">About Us</a>
      <a href="#">Careers</a>
      <a href="#">Community</a>
    </div>
  </div>
</nav>

{/* <!-- Hero Section --> */}
<section id="hero">
  {/* <!-- Flex Container --> */}
  <div
    className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row"
  >
    {/* <!-- Left item --> */}
    <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
      <span>WELCOME</span>
      <h1
        className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"
      >
        Best Online Education Expertise
      </h1>
      <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
      Far far away, behind the word mountains, far from the countries 
      Vokalia and Consonantia, there live the blind texts.
      </p>
      <div className="flex justify-center md:justify-start">
        <a
          href="#"
          className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
          >Get Started</a
        >
      </div>
    </div>
    {/* <!-- Image --> */}
    <div className="md:w-1/2">
      <img src="/img/education_pic.png" alt="" />
    </div>
  </div>
</section>

{/* <!-- Features Section --> */}
<section id="features">
  {/* <!-- Flex container --> */}
  <div
    className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row"
  >
    {/* <!-- What's Different --> */}
    <div className="flex flex-col space-y-12 md:w-1/2">
      {/* <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
        LEARN ANYTHING
      </h2>
      <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
         Benefits About Online Learning Expertise
      </p>
      <div className="md:w-1/2"> */}
      <img src="/img/laptopgirl-pic.png" alt="" />
    {/* </div> */}
    </div>

    {/* <!-- Numbered List --> */}
    <div className="flex flex-col space-y-8 md:w-1/2">
      {/* <!-- List Item 1 --> */}
      <div
        className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
      >
        {/* <!-- Heading --> */}
        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
          <div className="flex items-center space-x-2">
            <div
              className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
            >
              01
            </div>
            <h3 className="text-base font-bold md:mb-4 md:hidden">
               Online Courses
            </h3>
          </div>
        </div>

        <div>
          <h3 className="hidden mb-4 text-lg font-bold md:block">
           Online Courses
          </h3>
          <p className="text-darkGrayishBlue">
          Far far away, behind the word mountains, 
          far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>

      {/* <!-- List Item 2 --> */}
      <div
        className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
      >
        {/* <!-- Heading --> */}
        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
          <div className="flex items-center space-x-2">
            <div
              className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
            >
              02
            </div>
            <h3 className="text-base font-bold md:mb-4 md:hidden">
            Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia, there live the blind texts.
            </h3>
          </div>
        </div>

        <div>
          <h3 className="hidden mb-4 text-lg font-bold md:block">
          Learn with Expert
          </h3>
          <p className="text-darkGrayishBlue">
          Far far away, behind the word mountains, 
          far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>

      {/* <!-- List Item 3 --> */}
      <div
        className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
      >
        {/* <!-- Heading --> */}
        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
          <div className="flex items-center space-x-2">
            <div
              className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
            >
              03
            </div>
            <h3 className="text-base font-bold md:mb-4 md:hidden">
              Everything you need in one place
            </h3>
          </div>
        </div>

        <div>
          <h3 className="hidden mb-4 text-lg font-bold md:block">
            Everything you need in one place
          </h3>
          <p className="text-darkGrayishBlue">
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an
            all-in-one team productivity solution.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <!-- Testimonials --> */}
<section id="testimonials">
  {/* <!-- Container to heading and testm blocks --> */}
  <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
    {/* <!-- Heading --> */}
    <h2 className="text-4xl font-bold text-center">
      What's Different About Manage?
    </h2>
    {/* <!-- Testimonials Container --> */}
    <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
      {/* <!-- Testimonial 1 --> */}
      <div
        className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
      >
        <img src="img/avatar-anisha.png" className="w-16 -mt-14" alt="" />
        <h5 className="text-lg font-bold">ENROLL NOW</h5>
        <p className="text-sm text-darkGrayishBlue">
          “HTML, CSS, and Javascript for Web Developers”
        </p>
        <Button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" >
           ENROLL NOW - $50
        </Button>        
      </div>

      {/* <!-- Testimonial 2 --> */}
      <div
        className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
      >
        <img src="img/avatar-ali.png" className="w-16 -mt-14" alt="" />
        <h5 className="text-lg font-bold">ENROLL NOW</h5>
        <p className="text-sm text-darkGrayishBlue">
          “API, C#.”
        </p>
        <Button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" >
           ENROLL NOW - $50
        </Button>        
      </div>

      {/* <!-- Testimonial 3 --> */}
      <div
        className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
      >
        <img src="img/avatar-richard.png" className="w-16 -mt-14" alt="" />
        <h5 className="text-lg font-bold">ENROLL NOW</h5>
        <p className="text-sm text-darkGrayishBlue">
          “CLOUD TECHNOLOGY”
        </p>
        <Button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" >
           ENROLL NOW - $50
        </Button>
      </div>
    </div>
    {/* <!-- Button --> */}
    <div className="my-16">
      <a
        href="#"
        className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >Get Started</a
      >
    </div>
  </div>
</section>

{/* <!-- CTA Section --> */}
<section id="cta" className="bg-brightRed">
  {/* <!-- Flex Container --> */}
  <div
    className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0"
  >
    {/* <!-- Heading --> */}
    <h2
      className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left"
    >
      Simplify how your team works today
    </h2>
    {/* <!-- Button --> */}
    <div>
      <a
        href="#"
        className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900"
        >Get Started</a
      >
    </div>
  </div>
</section>

{/* <!-- Footer --> */}
<footer className="bg-veryDarkBlue">
  {/* <!-- Flex Container --> */}
  <div
    className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
  >
    {/* <!-- Logo and social links container --> */}
    <div
      className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
    >
      <div className="mx-auto my-6 text-center text-white md:hidden">
        Copyright &copy; 2022, All Rights Reserved
      </div>
      {/* <!-- Logo --> */}
      <div>
        <img src="img/logo-white.svg" className="h-8" alt="" />
      </div>
      {/* <!-- Social Links Container --> */}
      <div className="flex justify-center space-x-4">
        {/* <!-- Link 1 --> */}
        <a href="#">
          <img src="img/icon-facebook.svg" alt="" className="h-8" />
        </a>
        {/* <!-- Link 2 --> */}
        <a href="#">
          <img src="img/icon-youtube.svg" alt="" className="h-8" />
        </a>
        {/* <!-- Link 3 --> */}
        <a href="#">
          <img src="img/icon-twitter.svg" alt="" className="h-8" />
        </a>
        {/* <!-- Link 4 --> */}
        <a href="#">
          <img src="img/icon-pinterest.svg" alt="" className="h-8" />
        </a>
        {/* <!-- Link 5 --> */}
        <a href="#">
          <img src="img/icon-instagram.svg" alt="" className="h-8" />
        </a>
      </div>
    </div>
    {/* <!-- List Container --> */}
    <div className="flex justify-around space-x-32">
      <div className="flex flex-col space-y-3 text-white">
        <a href="#" className="hover:text-brightRed">Home</a>
        <a href="#" className="hover:text-brightRed">Pricing</a>
        <a href="#" className="hover:text-brightRed">Products</a>
        <a href="#" className="hover:text-brightRed">About</a>
      </div>
      <div className="flex flex-col space-y-3 text-white">
        <a href="#" className="hover:text-brightRed">Careers</a>
        <a href="#" className="hover:text-brightRed">Community</a>
        <a href="#" className="hover:text-brightRed">Privacy Policy</a>
      </div>
    </div>

    {/* <!-- Input Container --> */}
    <div className="flex flex-col justify-between">
      <form>
        <div className="flex space-x-3">
          <input
            type="text"
            className="flex-1 px-4 rounded-full focus:outline-none"
            placeholder="Updated in your inbox"
          />
          <button
            className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
          >
            Go
          </button>
        </div>
      </form>
      <div className="hidden text-white md:block">
        Copyright &copy; 2022, All Rights Reserved
      </div>
    </div>
  </div>
</footer>

{/* <script src="js/script.js"></script> */}
</body>

  </div>
);

export { Main };

