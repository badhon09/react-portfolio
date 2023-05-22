import React from 'react'
import Layout from '../layout/Layout'

export const About = () => {
  return (
    <Layout>
       <main className="md:pb-[90px]">
  {/* Breadcrumb section start */}
  <section className="pt-[70px] lg:pt-20">
    <div className="container mx-auto">
      <div className="text-center relative">
        <h1 className="text-[40px] only-md:text-[55px] lg:text-[70px] stroke-white	text-white font-heebo font-bold title-stroke opacity-[0.15] leading-[1] uppercase">
          About Me
        </h1>
        <span className="text-primary dark:text-white text-[25px] only-md:text-[35px] lg:text-[40px] font-heebo font-extrabold absolute left-0 right-0 bottom-0 uppercase">
          {" "}
          About <span className="text-accent1">Me</span>
        </span>
      </div>
    </div>
  </section>
  {/* Breadcrumb section end */}
  {/* About me section start */}
  <section
    className="dark:bg-dark_primary_bg py-[70px] lg:py-[100px] border-b-[1px] border-[#DDDDDD] dark:border-b dark:border-dark_accent1"
    id="about"
  >
    <div className="container mx-auto">
      <div className="flex justify-between sm:flex-wrap sm:flex-col-reverse">
        <div className="w-full lg:max-w-[550px]">
          <div>
            <span className="text-accent1 text-[20px] lg:text-[24px] font-medium mb-[10px] lg:mb-[5px]">
              ABOUT ME
            </span>
            <h2 className="text-[24px] only-md:text-[32px] lg:text-[48px] font-bold font-heebo leading-[36px] lg:leading-[58px] text-[#000248] dark:text-white ltr:lg:pr-[50px] rtl:lg:pl-[50px]">
              I can design world for leading ui/ux
            </h2>
          </div>
          <div className="mt-[30px]">
            <h3 className="text-accent1 text-[20px] lg:text-[24px] font-medium ">
              PERSONAL INFOS:
            </h3>
            <ul className="flex justify-between flex-wrap mt-[18px]">
              <li className="text-paragraph dark:text-slate-200 w-full xs:max-w-[100%]  max-w-[50%] ltr:pl-[18px] rtl:pr-[18px] my-[10px] relative before:absolute before:content-[''] before:bg-accent1 before:w-[6px] before:h-[6px] ltr:before:left-0 rtl:before:right-0 before:top-[8px] before:rounded-full after:absolute after::content-[''] after:w-4 after:h-4 after:border-2 after:border-accent1 ltr:after:left-[-5px] rtl:after:right-[-5px] after:top-[3px] after:border-solid after:rounded-full text-[17px]">
                First Name: Maras
              </li>
              <li className="text-paragraph dark:text-slate-200 w-full xs:max-w-[100%]  max-w-[50%] ltr:pl-[18px] rtl:pr-[18px] my-[10px] relative before:absolute before:content-[''] before:bg-accent1 before:w-[6px] before:h-[6px] ltr:before:left-0 rtl:before:right-0 before:top-[8px] before:rounded-full after:absolute after::content-[''] after:w-4 after:h-4 after:border-2 after:border-accent1 ltr:after:left-[-5px] rtl:after:right-[-5px] after:top-[3px] after:border-solid after:rounded-full text-[17px]">
                Last Name: Faron
              </li>
              <li className="text-paragraph dark:text-slate-200 w-full xs:max-w-[100%]  max-w-[50%] ltr:pl-[18px] rtl:pr-[18px] my-[10px] relative before:absolute before:content-[''] before:bg-accent1 before:w-[6px] before:h-[6px] ltr:before:left-0 rtl:before:right-0 before:top-[8px] before:rounded-full after:absolute after::content-[''] after:w-4 after:h-4 after:border-2 after:border-accent1 ltr:after:left-[-5px] rtl:after:right-[-5px] after:top-[3px] after:border-solid after:rounded-full text-[17px]">
                Address: Dubai
              </li>
              <li className="text-paragraph dark:text-slate-200 w-full xs:max-w-[100%]  max-w-[50%] ltr:pl-[18px] rtl:pr-[18px] my-[10px] relative before:absolute before:content-[''] before:bg-accent1 before:w-[6px] before:h-[6px] ltr:before:left-0 rtl:before:right-0 before:top-[8px] before:rounded-full after:absolute after::content-[''] after:w-4 after:h-4 after:border-2 after:border-accent1 ltr:after:left-[-5px] rtl:after:right-[-5px] after:top-[3px] after:border-solid after:rounded-full text-[17px]">
                Phone: +28921184010
              </li>
              <li className="text-paragraph dark:text-slate-200 w-full xs:max-w-[100%]  max-w-[50%] ltr:pl-[18px] rtl:pr-[18px] my-[10px] relative before:absolute before:content-[''] before:bg-accent1 before:w-[6px] before:h-[6px] ltr:before:left-0 rtl:before:right-0 before:top-[8px] before:rounded-full after:absolute after::content-[''] after:w-4 after:h-4 after:border-2 after:border-accent1 ltr:after:left-[-5px] rtl:after:right-[-5px] after:top-[3px] after:border-solid after:rounded-full text-[17px]">
                Age: 24 Years
              </li>
              <li className="text-paragraph dark:text-slate-200 w-full xs:max-w-[100%]  max-w-[50%] ltr:pl-[18px] rtl:pr-[18px] my-[10px] relative before:absolute before:content-[''] before:bg-accent1 before:w-[6px] before:h-[6px] ltr:before:left-0 rtl:before:right-0 before:top-[8px] before:rounded-full after:absolute after::content-[''] after:w-4 after:h-4 after:border-2 after:border-accent1 ltr:after:left-[-5px] rtl:after:right-[-5px] after:top-[3px] after:border-solid after:rounded-full text-[17px]">
                Email: you@mail.com
              </li>
              <li className="text-paragraph dark:text-slate-200 w-full xs:max-w-[100%]  max-w-[50%] ltr:pl-[18px] rtl:pr-[18px] my-[10px] relative before:absolute before:content-[''] before:bg-accent1 before:w-[6px] before:h-[6px] ltr:before:left-0 rtl:before:right-0 before:top-[8px] before:rounded-full after:absolute after::content-[''] after:w-4 after:h-4 after:border-2 after:border-accent1 ltr:after:left-[-5px] rtl:after:right-[-5px] after:top-[3px] after:border-solid after:rounded-full text-[17px]">
                Nationality: Tunisian
              </li>
              <li className="text-paragraph dark:text-slate-200 w-full xs:max-w-[100%]  max-w-[50%] ltr:pl-[18px] rtl:pr-[18px] my-[10px] relative before:absolute before:content-[''] before:bg-accent1 before:w-[6px] before:h-[6px] ltr:before:left-0 rtl:before:right-0 before:top-[8px] before:rounded-full after:absolute after::content-[''] after:w-4 after:h-4 after:border-2 after:border-accent1 ltr:after:left-[-5px] rtl:after:right-[-5px] after:top-[3px] after:border-solid after:rounded-full text-[17px]">
                Skype: Roben.Boris
              </li>
              <li className="text-paragraph dark:text-slate-200 w-full xs:max-w-[100%]  max-w-[50%] ltr:pl-[18px] rtl:pr-[18px] my-[10px] relative before:absolute before:content-[''] before:bg-accent1 before:w-[6px] before:h-[6px] ltr:before:left-0 rtl:before:right-0 before:top-[8px] before:rounded-full after:absolute after::content-[''] after:w-4 after:h-4 after:border-2 after:border-accent1 ltr:after:left-[-5px] rtl:after:right-[-5px] after:top-[3px] after:border-solid after:rounded-full text-[17px]">
                Freelance: Available
              </li>
              <li className="text-paragraph dark:text-slate-200 w-full xs:max-w-[100%]  max-w-[50%] ltr:pl-[18px] rtl:pr-[18px] my-[10px] relative before:absolute before:content-[''] before:bg-accent1 before:w-[6px] before:h-[6px] ltr:before:left-0 rtl:before:right-0 before:top-[8px] before:rounded-full after:absolute after::content-[''] after:w-4 after:h-4 after:border-2 after:border-accent1 ltr:after:left-[-5px] rtl:after:right-[-5px] after:top-[3px] after:border-solid after:rounded-full text-[17px]">
                Languages: French, English
              </li>
            </ul>
            <a
              href="#"
              className="btn solid-btn text-accent1 mt-[35px] inline-block"
            >
              Hire Me
            </a>
          </div>
        </div>
        <div className="sm:mb-[50px]">
          <div className="relative">
            <img
              className="relative z-10 sm:mx-auto"
              src="assets/images/about-me.png"
              alt=""
            />
            <span className="absolute sm:w-[100px] sm:h-[100px] only-md:w-[150px] only-md:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px] border-[8px] lg:border-[13px] border-accent1 rounded-full xs:bottom-[-25%] sm:bottom-[-12%] bottom-[-18%] ltr:sm:left-[3%] ltr:left-[-18%] rtl:sm:right-[3%] rtl:right-[-18%] animateUpDown" />
          </div>
          <div className="text-center mt-[30px]">
            <h4 className="font-heebo text-[50px] lg:text-[80px] font-bold leading-[1] text-white title-stroke">
              27+
            </h4>
            <span className="font-bold sm:text-[20px] only-md:text-[24px] lg:text-[30px] font-heebo text-primary dark:text-white">
              Experience Working
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About me section end */}
  {/*  Resume section start */}
  <section className="lg:py-[100px] md:py-[70px]">
    <div className="container mx-auto">
      {/* Section title start */}
      <div className="flex justify-between items-center gap-[20px] lg:gap-[30px] mb-[55px] md:flex-wrap md:text-center">
        <div className="max-w-full lg:max-w-[575px]  w-full">
          <span className="text-accent1 text-[20px] lg:text-[24px] font-medium mb-[10px] lg:mb-[5px]">
            EXPERICNCE AND EDUCATION
          </span>
          <h2 className="text:[28px] lg:text-[48px] font-bold font-heebo leading-[36x] lg:leading-[58px] text-[#000248] dark:text-white">
            Resume of Experience and Education
          </h2>
        </div>
        <div className="md:grow">
          <p className="text-[#636363] dark:text-slate-200 text-[17px] leading-[28px] lg:max-w-[472px] w-full">
            Promote your blog posts, case udie, and product ouncems with the the
            branded videoscustomers coming back for services Makes best effort.
          </p>
        </div>
      </div>
      {/* Section title end */}
      {/* Resume wrapper start */}
      <div className="flex flex-wrap">
        {/* Skill */}
        <div className="w-full max-w-[50%] sm:max-w-full flex-grow">
          <div className="relative ltr:pl-[30px] rtl:pr-[30px]">
            {/* border line */}
            <div className="absolute w-[1px] ltr:left-0 rtl:right-0 top-[10px] bottom-[5px] bg-accent1" />
            {/* border line  end*/}
            {/* Single resume start */}
            <div className="flex ltr:pr-[50px] ltr:sm:pr-[0] ltr:lg:pr-[70px rtl:pl-[50px] rtl:sm:pl-[0] rtl:lg:pl-[70px relative">
              <span className="absolute w-[20px] h-[20px] ltr:left-[-40px] rtl:right-[-40px] top-[10px] bg-accent1 rounded-full z-10 before:absolute before:bg-white before:w-[16px] before:h-[16px] before:rounded-full ltr:before:left-[2px] rtl:before:right-[2px] before:top-[2px]" />
              <div className="w-[70px] h-[70px]">
                <span className="w-[50px] h-[50px] bg-accent1 text-white flex items-center rounded-full justify-center">
                  <svg
                    width={25}
                    height={40}
                    fill="currentColor"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
                  </svg>
                </span>
              </div>
              <div className="flex-grow ltr:pl-[15px] rtl:pr-[15px]">
                <div className="flex items-center only-md:flex-col only-md:items-start 2xs:flex-col 2xs:items-start">
                  <h3 className="font-heebo 2xs:text-[18px] text-[20px] lg:text-[25px] text-primary dark:text-white">
                    API DEVELOPER
                  </h3>
                  <span className="bg-accent1 text-white text-[13px] rounded-[30px] px-[15px] py-[5px] uppercase ltr:ml-[15px] rtl:mr-[15px] ltr:only-md:ml-0 only-md:my-[5px] ltr:2xs:ml-0 rtl:only-md:m-0 rtl:2xs:mr-0 2xs:my-[5px] text-center">
                    Shopify
                  </span>
                </div>
                <p className="text-paragraph dark:text-slate-200 mt-[10px] text-[17px]">
                  Promote your blog posts, case udie, and product ouncems nts
                  with thehe branded videos.
                </p>
                <span className="text-[17px] font-medium text-accent1 relative ltr:pl-[20px] rtl:pr-[20px] before:absolute before:bg-accent1 before:w-[7px] before:h-[7px] ltr:before:left-0 rtl:before:right-0 before:top-[50%] before:translate-y-[-50%] mt-[20px] block">
                  2021
                </span>
              </div>
            </div>
            {/* Single resume end */}
            {/* Single resume start */}
            <div className="flex ltr:pr-[50px] ltr:sm:pr-[0] ltr:lg:pr-[70px rtl:pl-[50px] rtl:sm:pl-[0] rtl:lg:pl-[70px relative mt-[40px]">
              <span className="absolute w-[20px] h-[20px] ltr:left-[-40px] rtl:right-[-40px] top-[10px] bg-accent1 rounded-full z-10 before:absolute before:bg-white before:w-[16px] before:h-[16px] before:rounded-full ltr:before:left-[2px] rtl:before:right-[2px] before:top-[2px]" />
              <div className="w-[70px] h-[70px]">
                <span className="w-[50px] h-[50px] bg-accent1 text-white flex items-center rounded-full justify-center">
                  <svg
                    width={25}
                    height={40}
                    fill="currentColor"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
                  </svg>
                </span>
              </div>
              <div className="flex-grow ltr:pl-[15px] rtl:pr-[15px]">
                <div className="flex items-center only-md:flex-col only-md:items-start 2xs:flex-col 2xs:items-start">
                  <h3 className="font-heebo 2xs:text-[18px] text-[20px] lg:text-[25px] text-primary dark:text-white">
                    WEB DEVELOPER
                  </h3>
                  <span className="bg-accent1 text-white text-[13px] rounded-[30px] px-[15px] py-[5px] uppercase ltr:ml-[15px] rtl:mr-[15px] ltr:only-md:ml-0 only-md:my-[5px] ltr:2xs:ml-0 rtl:only-md:m-0 rtl:2xs:mr-0 2xs:my-[5px] text-center">
                    Envato
                  </span>
                </div>
                <p className="text-paragraph dark:text-slate-200 mt-[10px] text-[17px]">
                  Promote your blog posts, case udie, and product ouncems nts
                  with thehe branded videos.
                </p>
                <span className="text-[17px] font-medium text-accent1 relative ltr:pl-[20px] rtl:pr-[20px] before:absolute before:bg-accent1 before:w-[7px] before:h-[7px] ltr:before:left-0 rtl:before:right-0 before:top-[50%] before:translate-y-[-50%] mt-[20px] block">
                  2017
                </span>
              </div>
            </div>
            {/* Single resume end */}
            {/* Single resume start */}
            <div className="flex ltr:pr-[50px] ltr:sm:pr-[0] ltr:lg:pr-[70px rtl:pl-[50px] rtl:sm:pl-[0] rtl:lg:pl-[70px relative mt-[40px]">
              <span className="absolute w-[20px] h-[20px] ltr:left-[-40px] rtl:right-[-40px] top-[10px] bg-accent1 rounded-full z-10 before:absolute before:bg-white before:w-[16px] before:h-[16px] before:rounded-full ltr:before:left-[2px] rtl:before:right-[2px] before:top-[2px]" />
              <div className="w-[70px] h-[70px]">
                <span className="w-[50px] h-[50px] bg-accent1 text-white flex items-center rounded-full justify-center">
                  <svg
                    width={25}
                    height={40}
                    fill="currentColor"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
                  </svg>
                </span>
              </div>
              <div className="flex-grow ltr:pl-[15px] rtl:pr-[15px]">
                <div className="flex items-center only-md:flex-col only-md:items-start 2xs:flex-col 2xs:items-start">
                  <h3 className="font-heebo 2xs:text-[18px] text-[20px] lg:text-[25px] text-primary dark:text-white">
                    UI/UX DESIGNER
                  </h3>
                  <span className="bg-accent1 text-white text-[13px] rounded-[30px] px-[15px] py-[5px] uppercase ltr:ml-[15px] rtl:mr-[15px] ltr:only-md:ml-0 only-md:my-[5px] ltr:2xs:ml-0 rtl:only-md:m-0 rtl:2xs:mr-0 2xs:my-[5px] text-center">
                    Udemy
                  </span>
                </div>
                <p className="text-paragraph dark:text-slate-200 mt-[10px] text-[17px]">
                  Promote your blog posts, case udie, and product ouncems nts
                  with thehe branded videos.
                </p>
                <span className="text-[17px] font-medium text-accent1 relative ltr:pl-[20px] rtl:pr-[20px] before:absolute before:bg-accent1 before:w-[7px] before:h-[7px] ltr:before:left-0 rtl:before:right-0 before:top-[50%] before:translate-y-[-50%] mt-[20px] block">
                  2014
                </span>
              </div>
            </div>
            {/* Single resume end */}
          </div>
        </div>
        {/* Skill */}
        {/* Education */}
        <div className="w-full max-w-[50%] sm:max-w-full flex-grow  sm:mt-[40px]">
          <div className="relative ltr:pl-[30px] rtl:pr-[30px]">
            {/* border line */}
            <div className="absolute w-[1px] ltr:left-0 rtl:right-0 top-[10px] bottom-[5px] bg-accent1" />
            {/* border line  end*/}
            {/* Single resume start */}
            <div className="flex ltr:pr-[50px] ltr:sm:pr-[0] ltr:lg:pr-[70px rtl:pl-[50px] rtl:sm:pl-[0] rtl:lg:pl-[70px relative">
              <span className="absolute w-[20px] h-[20px] ltr:left-[-40px] rtl:right-[-40px] top-[10px] bg-accent1 rounded-full z-10 before:absolute before:bg-white before:w-[16px] before:h-[16px] before:rounded-full ltr:before:left-[2px] rtl:before:right-[2px] before:top-[2px]" />
              <div className="w-[70px] h-[70px]">
                <span className="w-[50px] h-[50px] bg-accent1 text-white flex items-center rounded-full justify-center">
                  <svg
                    width={25}
                    height={44}
                    fill="currentColor"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
                  </svg>
                </span>
              </div>
              <div className="flex-grow ltr:pl-[15px] rtl:pr-[15px]">
                <div className="flex items-center only-md:flex-col only-md:items-start 2xs:flex-col 2xs:items-start">
                  <h3 className="font-heebo 2xs:text-[18px] text-[20px] lg:text-[25px] text-primary dark:text-white">
                    Software Engineer
                  </h3>
                  <span className="bg-accent1 text-white text-[13px] rounded-[30px] px-[15px] py-[5px] uppercase ltr:ml-[15px] rtl:mr-[15px] ltr:only-md:ml-0 only-md:my-[5px] ltr:2xs:ml-0 rtl:only-md:m-0 rtl:2xs:mr-0 2xs:my-[5px] text-center">
                    Cambridge UNIVERSITY
                  </span>
                </div>
                <p className="text-paragraph dark:text-slate-200 mt-[10px] text-[17px]">
                  Promote your blog posts, case udie, and product ouncems nts
                  with thehe branded videos.
                </p>
                <span className="text-[17px] font-medium text-accent1 relative ltr:pl-[20px] rtl:pr-[20px] before:absolute before:bg-accent1 before:w-[7px] before:h-[7px] ltr:before:left-0 rtl:before:right-0 before:top-[50%] before:translate-y-[-50%] mt-[20px] block">
                  2020
                </span>
              </div>
            </div>
            {/* Single resume end */}
            {/* Single resume start */}
            <div className="flex ltr:pr-[50px] ltr:sm:pr-[0] ltr:lg:pr-[70px rtl:pl-[50px] rtl:sm:pl-[0] rtl:lg:pl-[70px relative mt-[40px]">
              <span className="absolute w-[20px] h-[20px] ltr:left-[-40px] rtl:right-[-40px] top-[10px] bg-accent1 rounded-full z-10 before:absolute before:bg-white before:w-[16px] before:h-[16px] before:rounded-full ltr:before:left-[2px] rtl:before:right-[2px] before:top-[2px]" />
              <div className="w-[70px] h-[70px]">
                <span className="w-[50px] h-[50px] bg-accent1 text-white flex items-center rounded-full justify-center">
                  <svg
                    width={25}
                    height={44}
                    fill="currentColor"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
                  </svg>
                </span>
              </div>
              <div className="flex-grow ltr:pl-[15px] rtl:pr-[15px]">
                <div className="flex items-center only-md:flex-col only-md:items-start 2xs:flex-col 2xs:items-start">
                  <h3 className="font-heebo 2xs:text-[18px] text-[20px] lg:text-[25px] text-primary dark:text-white">
                    Master's Degree
                  </h3>
                  <span className="bg-accent1 text-white text-[13px] rounded-[30px] px-[15px] py-[5px] uppercase ltr:ml-[15px] rtl:mr-[15px] ltr:only-md:ml-0 only-md:my-[5px] ltr:2xs:ml-0 rtl:only-md:m-0 rtl:2xs:mr-0 2xs:my-[5px] text-center">
                    OXFORD UNIVERSITY
                  </span>
                </div>
                <p className="text-paragraph dark:text-slate-200 mt-[10px] text-[17px]">
                  Promote your blog posts, case udie, and product ouncems nts
                  with thehe branded videos.
                </p>
                <span className="text-[17px] font-medium text-accent1 relative ltr:pl-[20px] rtl:pr-[20px] before:absolute before:bg-accent1 before:w-[7px] before:h-[7px] ltr:before:left-0 rtl:before:right-0 before:top-[50%] before:translate-y-[-50%] mt-[20px] block">
                  2018
                </span>
              </div>
            </div>
            {/* Single resume end */}
            {/* Single resume start */}
            <div className="flex ltr:pr-[50px] ltr:sm:pr-[0] ltr:lg:pr-[70px rtl:pl-[50px] rtl:sm:pl-[0] rtl:lg:pl-[70px relative mt-[40px]">
              <span className="absolute w-[20px] h-[20px] ltr:left-[-40px] rtl:right-[-40px] top-[10px] bg-accent1 rounded-full z-10 before:absolute before:bg-white before:w-[16px] before:h-[16px] before:rounded-full ltr:before:left-[2px] rtl:before:right-[2px] before:top-[2px]" />
              <div className="w-[70px] h-[70px]">
                <span className="w-[50px] h-[50px] bg-accent1 text-white flex items-center rounded-full justify-center">
                  <svg
                    width={25}
                    height={44}
                    fill="currentColor"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
                  </svg>
                </span>
              </div>
              <div className="flex-grow ltr:pl-[15px] rtl:pr-[15px]">
                <div className="flex items-center only-md:flex-col only-md:items-start 2xs:flex-col 2xs:items-start">
                  <h3 className="font-heebo 2xs:text-[18px] text-[20px] lg:text-[25px] text-primary dark:text-white">
                    Bachelor's Degree
                  </h3>
                  <span className="bg-accent1 text-white text-[13px] rounded-[30px] px-[15px] py-[5px] uppercase ltr:ml-[15px] rtl:mr-[15px] ltr:only-md:ml-0 only-md:my-[5px] ltr:2xs:ml-0 rtl:only-md:m-0 rtl:2xs:mr-0 2xs:my-[5px] text-center">
                    KIEV UNIVERSITY
                  </span>
                </div>
                <p className="text-paragraph dark:text-slate-200 mt-[10px] text-[17px]">
                  Promote your blog posts, case udie, and product ouncems nts
                  with thehe branded videos.
                </p>
                <span className="text-[17px] font-medium text-accent1 relative ltr:pl-[20px] rtl:pr-[20px] before:absolute before:bg-accent1 before:w-[7px] before:h-[7px] ltr:before:left-0 rtl:before:right-0 before:top-[50%] before:translate-y-[-50%] mt-[20px] block">
                  2015
                </span>
              </div>
            </div>
            {/* Single resume end */}
          </div>
        </div>
        {/* Education */}
      </div>
      {/* Resume wrapper end */}
    </div>
  </section>
  {/*  Resume section end */}
  {/*  Skill section start */}
  <section className="lg:pb-[100px] md:pb-[70px]">
    <div className="container mx-auto">
      {/* Section title start */}
      <div className="flex justify-between items-center gap-[20px] lg:gap-[30px] mb-[55px] md:flex-wrap md:text-center">
        <div className="max-w-full lg:max-w-[575px]  w-full">
          <span className="text-accent1 text-[20px] lg:text-[24px] font-medium mb-[10px] lg:mb-[5px]">
            SKILLs
          </span>
          <h2 className="text:[28px] lg:text-[48px] font-bold font-heebo leading-[36x] lg:leading-[58px] text-[#000248] dark:text-white">
            Skill of Best Masters Software Skills.
          </h2>
        </div>
        <div className="md:grow">
          <p className="text-[#636363] dark:text-slate-200 text-[17px] leading-[28px] lg:max-w-[472px] w-full">
            Promote your skills, case studies, and product ouncems with the the
            branded videoscustomers coming back for services Makes best effort.
          </p>
        </div>
      </div>
      {/* Section title end */}
      {/* Resume wrapper start */}
      <div className="flex justify-between items-center gap-[20px] lg:gap-[30px] md:flex-wrap md:text-center">
        {/* Column start */}
        <div className="max-w-full lg:max-w-[472px]  w-full only-md:px-7 sm:px-5">
          {/* Single skill start */}
          <div className="relative mb-7">
            <div className="flex justify-between mb-1">
              <span className="text-lg font-medium text-primary dark:text-white">
                Node.js
              </span>
              <span className="text-xs font-medium text-white bg-accent1 dark:text-white absolute py-1.5 px-1.5 bottom-6 rounded-sm before:absolute before:content-[''] before:bg-accent1 before:w-5 before:h-5 before:clip-polygon before:top-4 ltr:before:left-2 rtl:before:right-2 before:-z-10 ltr:left-[calc(60%_-_20px)] rtl:right-[calc(60%_-_20px)]">
                60%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-[10px] dark:bg-gray-700 flex items-center">
              <div
                className="bg-accent1 h-[6px] rounded-full mx-[2px]"
                style={{ width: "60%" }}
              />
            </div>
          </div>
          {/* Single skill end */}
          {/* Single skill start */}
          <div className="relative mb-7">
            <div className="flex justify-between mb-1">
              <span className="text-lg font-medium text-primary dark:text-white">
                JavaScript
              </span>
              <span className="text-xs font-medium text-white bg-accent1 dark:text-white absolute py-1.5 px-1.5 bottom-6 rounded-sm before:absolute before:content-[''] before:bg-accent1 before:w-5 before:h-5 before:clip-polygon before:top-4 before:left-2 before:-z-10 ltr:left-[calc(75%_-_20px)] rtl:right-[calc(75%_-_20px)]">
                75%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-[10px] dark:bg-gray-700 flex items-center">
              <div
                className="bg-accent1 h-[6px] rounded-full mx-[2px]"
                style={{ width: "75%" }}
              />
            </div>
          </div>
          {/* Single skill end */}
          {/* Single skill start */}
          <div className="relative">
            <div className="flex justify-between mb-1">
              <span className="text-lg font-medium text-primary dark:text-white">
                Web Design
              </span>
              <span className="text-xs font-medium text-white bg-accent1 dark:text-white absolute py-1.5 px-1.5 bottom-6 rounded-sm before:absolute before:content-[''] before:bg-accent1 before:w-5 before:h-5 before:clip-polygon before:top-4 before:left-2 before:-z-10 ltr:left-[calc(90%_-_20px)] rtl:right-[calc(90%_-_20px)]">
                90%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-[10px] dark:bg-gray-700 flex items-center">
              <div
                className="bg-accent1 h-[6px] rounded-full mx-[2px]"
                style={{ width: "90%" }}
              />
            </div>
          </div>
          {/* Single skill end */}
        </div>
        {/* Column end */}
        {/* Column start */}
        <div className="max-w-full lg:max-w-[472px] w-full only-md:px-7 sm:px-5">
          {/* Single skill start */}
          <div className="relative mb-7">
            <div className="flex justify-between mb-1">
              <span className="text-lg font-medium text-primary dark:text-white">
                HTML
              </span>
              <span className="text-xs font-medium text-white bg-accent1 dark:text-white absolute py-1.5 px-1.5 bottom-6 rounded-sm before:absolute before:content-[''] before:bg-accent1 before:w-5 before:h-5 before:clip-polygon before:top-4 before:left-2 before:-z-10 ltr:left-[calc(100%_-_30px)] rtl:right-[calc(100%_-_30px)]">
                100%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-[10px] dark:bg-gray-700 flex items-center">
              <div
                className="bg-accent1 h-[6px] rounded-full mx-[2px]"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          {/* Single skill end */}
          {/* Single skill start */}
          <div className="relative mb-7">
            <div className="flex justify-between mb-1">
              <span className="text-lg font-medium text-primary dark:text-white">
                CSS
              </span>
              <span className="text-xs font-medium text-white bg-accent1 dark:text-white absolute py-1.5 px-1.5 bottom-6 rounded-sm before:absolute before:content-[''] before:bg-accent1 before:w-5 before:h-5 before:clip-polygon before:top-4 before:left-2 before:-z-10 ltr:left-[calc(90%_-_20px)] rtl:right-[calc(90%_-_20px)]">
                90%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-[10px] dark:bg-gray-700 flex items-center">
              <div
                className="bg-accent1 h-[6px] rounded-full mx-[2px]"
                style={{ width: "90%" }}
              />
            </div>
          </div>
          {/* Single skill end */}
          {/* Single skill start */}
          <div className="relative">
            <div className="flex justify-between mb-1">
              <span className="text-lg font-medium text-primary dark:text-white">
                React.js
              </span>
              <span className="text-xs font-medium text-white bg-accent1 dark:text-white absolute py-1.5 px-1.5 bottom-6 rounded-sm before:absolute before:content-[''] before:bg-accent1 before:w-5 before:h-5 before:clip-polygon before:top-4 before:left-2 before:-z-10 ltr:left-[calc(70%_-_20px)] rtl:right-[calc(70%_-_20px)]">
                70%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-[10px] dark:bg-gray-700 flex items-center">
              <div
                className="bg-accent1 h-[6px] rounded-full mx-[2px]"
                style={{ width: "70%" }}
              />
            </div>
          </div>
          {/* Single skill end */}
        </div>
        {/* Column end */}
      </div>
      {/* Resume wrapper end */}
    </div>
  </section>
  {/*  Skill section end */}
</main>

    </Layout>
  )
}
