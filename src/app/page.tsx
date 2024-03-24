import Image from "next/image";
import { ImageCard, SearchBar } from "@/components";
import { listHome } from "@/theme/theme";
import backgroundPic from '../../public/images/1.jpg'
import homePic from '../../public/images/1.jpg'
import playIcon from '../../public/icons/play.png'
import home2Pic from '../../public/images/7.png'
import icon1 from '../../public/icons/house.png'
import background2 from '../../public/images/22.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="md:pt-2 px:2 lg:pt-6 xl:pt-10">
      {/* top background */}
      <div className="w-full h-full py-14 md:flex lg:flex xl:flex">
        <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 flex items-center md:justify-center lg:justify-end  xl:justify-end pr-20">
          <div className="md:w-8/12 lg:w-8/12 xl:w-8/12">
            <h1 className="font-extrabold text-5xl my-8">Find Your Dream House By Us</h1>
            <p className="border-l pl-4 mb-6">We would like to present you a home page for Intrust. And of course show some love and press L for appreciation 🥳 </p>

            <div className="flex items-center">
              <button type="button" className="bg-primaryContainer text-primary ml-1 inline-flex items-center rounded-md px-12 mr-3 py-5 text-sm font-semibold shadow-sm hover:bg-white border border-white hover:border-primaryContainer">
                Start now
              </button>
              <button
                type="button" className=" w-14 h-14 text-primary ml-1 inline-flex items-center justify-center rounded-full shadow-sm hover:bg-primaryContainer border border-primary hover:border-primaryContainer">
                <Image src={playIcon} alt="PLAY_ICON" width={24}></Image>
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 md:flex lg:flex xl:flex items-center justify-center shadow-lg p-10">
          <Image src={backgroundPic} alt="BACKGROUND" />
        </div>
      </div>

      {/* search bar */}
      <SearchBar />


      {/* center item */}
      <div className="md:flex lg:flex xl:flex sm:p-10">
        <div className="lg:w-1/2 xl:w-1/2 flex justify-end items-top py-24 pr-20 h-1/2">
          <Image src={home2Pic} className="shadow-2xl rounded-md p-2" alt="HOME_PIC" />
        </div>

        <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col items-start py-24 xl:pr-80">
          <button type="button" className="bg-primaryContainer text-primary py-1.5 px-4 mb-4 rounded-full font-semibold">Abouts Us</button>
          <h2 className="text-4xl font-bold py-2">The Leading Real Estate Rental Marketplace.</h2>
          <p className="py-6 mb-4 text-gray">Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>

          <div className="flex md:flex-col lg:flex-row my-0.5 text-gray">
            <div className="p-2 w-64 flex items-center ">
              <div className="w-12 h-12 rounded-full p-3 bg-primaryContainer mr-2"><Image src={icon1} alt="HOME_ICON"></Image></div>
              <p>Smart Home Design</p>
            </div>
            <div className="p-2 w-64 flex items-center">
              <div className="w-12 h-12 rounded-full p-3 bg-primaryContainer mr-2"><Image src={icon1} alt="HOME_ICON"></Image></div>
              <p>Smart Home Design</p>
            </div>
          </div>
          <div className="flex md:flex-col lg:flex-row my-0.5 text-gray">
            <div className="p-2 w-64 flex items-center">
              <div className="w-12 h-12 rounded-full p-3 bg-primaryContainer mr-2"><Image src={icon1} alt="HOME_ICON"></Image></div>
              <p>Smart Home Design</p>
            </div>
            <div className="p-2 w-64 flex items-center">
              <div className="w-12 h-12 rounded-full p-3 bg-primaryContainer mr-2"><Image src={icon1} alt="HOME_ICON"></Image></div>
              <p>Smart Home Design</p>
            </div>
          </div>

          <div className="bg-primaryContainer border-l-4 mt-4 mb-8 border-primary py-4 px-6">
            <p>&quot;Enimad minim veniam quis nostrud exercitation
              llamco laboris. Lorem ipsum dolor sit amet&quot;</p>
          </div>
          <button type="button" className="bg-primary text-white inline-flex items-center rounded-md px-12 mr-3 py-5 text-sm font-semibold shadow-sm hover:bg-white border border-white hover:text-black hover:border-primaryContainer">
            Get now
          </button>
        </div>
      </div>

      <div className="w-auto h-screen">
        <div className="w-auto relative h-3/4 px-80 text-gray-dark">
          <Image src={background2} alt="BACKGROUND_SLIDE" className="absolute inset-0 z-0 w-full h-4/5 object-cover"></Image>
          <div className="m-auto z-10 relative pt-10">
            <p className="text-white">Upcoming Projects</p>
            <div className="flex justify-between my-3">
              <h1 className="text-4xl font-bold w-1/2 text-white">Dream Living Space Setting New Standards</h1>
              <div>
                <button type="button" className="bg-primary inline-flex text-white items-center rounded-md p-5 mr-3 text-sm font-semibold shadow-sm border-white">
                  <FontAwesomeIcon icon={faArrowLeftLong} />
                </button>
                <button type="button" className="bg-white inline-flex items-center rounded-md p-5 text-sm font-semibold shadow-sm hover:bg-primary border border-white hover:text-white hover:border-primaryContainer">
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
              </div>
            </div>

            <div className="bg-white p-10 flex shadow-lg rounded-md">
              <div className="w-3/5">
                <Image src={homePic} alt="HOME_PIC">
                </Image>
              </div>
              <div className="w-2/5 ml-5 p-10 bg-gray-light">
                <p className="text-primary">About Projects</p>
                <h1 className="text-3xl font-bold">Upcomming Projects</h1>
                <div className="flex justify-between my-3">
                  <p>1. Project Name: </p>
                  <p>Project 1</p>
                </div>
                <div className="flex justify-between my-3">
                  <p>2. Project Type: </p>
                  <p>Project 1</p>
                </div>
                <div className="flex justify-between my-3">
                  <p>3. Location: </p>
                  <p>Project 1</p>
                </div>
                <div className="flex justify-between my-3">
                  <p>4. Price: </p>
                  <p>500$</p>
                </div>
                <div className="flex justify-between my-3">
                  <p>4. Price: </p>
                  <p>500$</p>
                </div>
                <button type="button" className="bg-primary text-white inline-flex items-center rounded-md px-12 mr-3 mt-10 py-4 text-sm font-semibold shadow-sm hover:bg-white border border-white hover:text-black hover:border-primaryContainer">
                  Get info now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-auto m-auto bg-gray-light px-80 py-10">
        <p className="text-primary my-4">Area Properties</p>
        <h2 className="text-4xl font-bold w-1/3">Find Your Dream House Search By Area</h2>
        <div className="flex justify-left mt-16 mb-20">
          {
            listHome.map((item, index) => (
              <a key={index} href="#">
                <ImageCard id={item.id} title={item.title} price={item.price} bedroom={item.bedroom} badroom={item.badroom} image={item.image} />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );
}
