import "./App.css";
import { useState } from "react";
import Shops from "./Components/Shops/Shops";
import Three from "./Components/Three/Three";
import Cans from "./Components/Cans/Cans";
import Ender from "./Components/Ender/Ender";
import right from "./assets/right.png";
import logo from "./assets/logo.png";
import but from "./assets/Buttons.png";
import rightBl from "./assets/rightBl.png";
import watchBig from "./assets/watchBig.png";
import vints from "./assets/vints.png";
import builder from "./assets/builder.png";
import gigabit from "./assets/gigabit.png";
import deep from "./assets/deep.png";
import pinkDeep from "./assets/pinkDeep.png";
import shops1 from "./assets/whiteWatch.png";
import shops2 from "./assets/2e2ce4ab4b0f5ed3ecc0087c60104b0c_1-removebg-preview 1.png";
import shops3 from "./assets/image_4-removebg-preview (1) 2.png";
import shops4 from "./assets/JBL-TUNE-750BTNC-Wireless-Over-Ear-Headphones-Blue-1-300x300-removebg-preview 1.png";
import shops5 from "./assets/download__31_-removebg-preview 1.png";
import shops6 from "./assets/6430060cv12d-removebg-preview 1.png";
import shops7 from "./assets/image_1-removebg-preview (1) 2.png";
import shops8 from "./assets/Bose-Noise-Cancelling-Headphones-700 1.png";
import shops9 from "./assets/2537650_3f22ba667907_1-removebg-preview 1.png";
import shops10 from "./assets/TOUCHit_reddot_black_530x_2x_1-removebg-preview 1.png";
import shops11 from "./assets/360_F_95954761_O4fqMb38wmoY9P5iJbCO7afroqjAfJru-removebg-preview 1.png";
import shops12 from "./assets/14946-10857-Screen-Shot-2015-11-13-at-23723-PM-xl-removebg-preview 1.png";
import stars from "./assets/stars.png";
import G216 from "./assets/Group 216.png";
import G217 from "./assets/Group 217.png";
import G218 from "./assets/Group 218.png";
import G226 from "./assets/Group 226.png";
import G234 from "./assets/Group 234.png";
import G235 from "./assets/Group 235.png";
import G236 from "./assets/Group 236.png";
import G237 from "./assets/Group 237.png";
import G238 from "./assets/Group 238.png";
import longArrowRight from "./assets/longArrowRight.png";
import longArrowDown from "./assets/longArrowDown.png";
import longArrowLeft from "./assets/longArrowLeft.png";
import G110 from "./assets/Group 110.png";
import img1 from "./assets/medium-shot-smiley-colleagues-working-together 1.png";
import G92 from "./assets/Group 92.png";
import Buttons from "./assets/Buttons.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-[1093px] sm:w-[360px] h-[45px] flex m-auto sm:m-[0px] items-center mt-[30px] sm:mt-[20px] justify-between">
        <div className="flex items-center ml-1">
          <img className="sm:h-[35px]" src={logo} alt="" />
          <h1 className="font-[Work Sans] text-[26px] sm:text-[22px] font-[700] ml-1">agon</h1>
        </div>
        <img className="hidden" src={but} alt="" />
        <div className="flex items-center font-medium w-[601px] justify-between sm:hidden">
          <p className="text-blue-500">Home</p>
          <p>About</p>
          <p>Company</p>
          <p>Pages</p>
          <p>Blog</p>
          <p>Shop</p>
        </div>
        <button className="bg-[#101828] text-[16px] sm:hidden font-[Work Sans] rounded-full w-[137px] h-[45px] text-white">
          Get Started
        </button>
        <img className="hidden sm:inline mr-1 sm:h-[35px]" src={Buttons} alt="" />
      </div>

      <div className="w-[1101px] sm:w-[360px] sm:flex-wrap sm:ml-[0px] h-[511px] sm:h-auto m-auto mt-[105px] sm:mt-[20px] flex items-center">
        <div className="sm:text-center">
          <h2 className="text-[#b5c7e8] text-[25px] sm:text-[18px] font-[600] font-[Work Sans]">
            Exclusive Smart Watch
          </h2>
          <h1 className="text-[#101828] text-[40px] sm:text-[25px] sm:leading-7 sm:mt-[10px] font-[600] font-[Work Sans] leading-[50px]">
            Let go of the Challenge <br />
            See yourself better
          </h1>
          <p className="text-[#475467] w-[520px] sm:w-[325px] sm:text-[16px] sm:leading-5 sm:mt-[20px] mt-[30px] text-[17px] font-[Merriweather]">
            Connect your conversations with the tools and services that you use
            to get the job done. With over 1,500 apps and a robust API
          </p>
          <div className="flex items-center sm:w-[360px] mt-[42px] sm:mt-[20px] sm:justify-center">
            <button className="bg-[#101828] sm:text-[14px] sm:h-[40px] w-[167px] sm:w-[150px] h-[45px] font-[Work Sans] text-white text-[16px] flex justify-center items-center">
              Get Started{" "}
              <img className="ml-[10px] mt-[2px]" src={right} alt="" />
            </button>
            <button className="ml-[28px] font-[Work Sans] sm:text-[14px] text-[16px] flex justify-center items-center">
              How it works{" "}
              <img className="ml-[10px] mt-[4px]" src={rightBl} alt="" />
            </button>
          </div>
          <div className="flex mt-[60px] sm:ml-[10px] sm:mt-[30px]">
            <div className="flex items-center">
              <img className="sm:h-[60px]" src={vints} alt="" />
              <div className="ml-[10px] sm:ml-[5px] sm:text-left">
                <h2 className="text-[20px] font-[700] sm:text-[18px]">+12k</h2>
                <p className="text-[14px]">Projects done</p>
              </div>
            </div>

            <div className="flex items-center ml-[50px] sm:ml-[30px]">
              <img className="sm:h-[60px]" src={builder} alt="" />
              <div className="ml-[10px] sm:ml-[5px] sm:text-left">
                <h2 className="text-[20px] font-[700] sm:text-[18px]">68k</h2>
                <p className="text-[14px]">Custommers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <img src={watchBig} alt="" />
        </div>
      </div>

      <div className="w-[1112px] sm:w-[360px] sm:justify-center sm:ml-[0px] sm:mt-[50px] sm:grid sm:grid-rows-3 sm:gap-4 m-auto mt-[122px] flex flex-wrap-[wrap] justify-between">
        <Three
          img={gigabit}
          title={"4K TV Game Mini Arcade Rocker Console 32GB/64GB"}
          price={"$29.80"}
        ></Three>
        <Three
          img={deep}
          title={"Cancelling Headset Music Sport Deep Bass"}
          price={"$420.00"}
        ></Three>
        <Three
          img={pinkDeep}
          title={"T500BT Original Wireless Bluetooth Headphone Deep"}
          price={"$96.50"}
        ></Three>
      </div>

      <div className="w-[1112px] sm:w-[360px] sm:justify-center sm:ml-[0px] sm:mt-[70px] m-auto mt-[103px] text-center">
        <h1 className="text-[#101828] text-[50px] sm:text-[25px] sm:leading-8 font-[600] leading-[60px]">
          Featured Products <br />
          For Pre-Order
        </h1>
        <div className="grid grid-cols-4 grid-rows-3 mt-[57px] sm: gap-y-[30px] sm:grid-cols-1 sm:mt-[20px] sm:gap-y-[10px] sm:text-center">
          <Shops
            img={shops1}
            company={"Sony"}
            star={stars}
            title={"4K TV Game Mini Arcade Rocker Console 32GB/64GB"}
            price={"$29.80"}
            skeed={"0"}
          ></Shops>
          <Shops
            img={shops2}
            company={"Sony"}
            star={stars}
            title={"4K TV Game Mini Arcade Rocker Console 32GB/64GB"}
            price={"$29.80"}
            skeed={"0"}
          ></Shops>
          <Shops
            img={shops3}
            company={"Sony"}
            star={stars}
            title={"4K TV Game Mini Arcade Rocker Console 32GB/64GB"}
            price={"$29.80"}
            skeed={"15"}
          ></Shops>
          <Shops
            img={shops4}
            company={"Sony"}
            star={stars}
            title={"4K TV Game Mini Arcade Rocker Console 32GB/64GB"}
            price={"$29.80"}
            skeed={"20"}
          ></Shops>
          <Shops
            img={shops5}
            company={"Sony"}
            star={stars}
            title={"4K TV Game Mini Arcade Rocker Console 32GB/64GB"}
            price={"$29.80"}
            skeed={"10"}
          ></Shops>
          <Shops
            img={shops6}
            company={"Sony"}
            star={stars}
            title={"4K TV Game Mini Arcade Rocker Console 32GB/64GB"}
            price={"$29.80"}
            skeed={"15"}
          ></Shops>
          <Shops
            img={shops7}
            company={"Sony"}
            star={stars}
            title={"4K TV Game Mini Arcade Rocker Console 32GB/64GB"}
            price={"$29.80"}
            skeed={"0"}
          ></Shops>
          <Shops
            img={shops8}
            company={"Sony"}
            star={stars}
            title={"4K TV Game Mini Arcade Rocker Console 32GB/64GB"}
            price={"$29.80"}
            skeed={"0"}
          ></Shops>
          <Shops
            img={shops9}
            company={"Sony"}
            star={stars}
            title={"4K TV Game Mini Arcade Rocker Console 32GB/64GB"}
            price={"$29.80"}
            skeed={"0"}
          ></Shops>
          <Shops
            img={shops10}
            company={"Sony"}
            star={stars}
            title={"4K TV Game Mini Arcade Rocker Console 32GB/64GB"}
            price={"$29.80"}
            skeed={"0"}
          ></Shops>
          <Shops
            img={shops11}
            company={"Sony"}
            star={stars}
            title={"4K TV Game Mini Arcade Rocker Console 32GB/64GB"}
            price={"$29.80"}
            skeed={"25"}
          ></Shops>
          <Shops
            img={shops12}
            company={"Sony"}
            star={stars}
            title={"4K TV Game Mini Arcade Rocker Console 32GB/64GB"}
            price={"$29.80"}
            skeed={"0"}
          ></Shops>
        </div>
      </div>

      <div className="text-center mt-[113px] sm:mt-[70px]">
        <h1 className="text-[#101828] text-[50px] sm:text-[25px] font-[600]">
          Explore by Categories.
        </h1>
        <h2 className="font-[Merriweather] text-[#475467] leading-[23px] sm:leading-[20px] tracking-[0.8px] sm:tracking-normal text-[16px] sm:mt-[5px] sm:text-[14px]">
          We provide many categories, choose a category according to <br /> your
          expertise to make it easier to find a job.
        </h2>
        <div className="flex w-[1110px] m-auto mt-[56px] sm:mt-[30px] justify-between sm:w-[360px] sm:justify-center sm:flex-wrap sm:ml-[0px]">
          <div className="border-solid border-[1px] border-color-[#D1DAE8] w-[475px] sm:w-[340px] h-[369px] sm:h-auto text-left">
            <h2 className="text-[#323A4B] font-[600] text-[30px] sm:text-[25px] pt-[39px] sm:pt-[20px] ml-[32px]">
              Popular Categories
            </h2>
            <div className="mx-[32px] py-[15px] border-solid border-b-[1px] border-color-[#E4E7EC] items-center flex justify-between mt-[10px]">
              <p className="text-[#667085]">Computer - Laaptop</p>
              <button className="bg-[#E4E7EC] h-[34px] w-[34px] rounded-[50%] text-[#006D77]">
                10
              </button>
            </div>

            <div className="mx-[32px] py-[15px] border-solid border-b-[1px] border-color-[#E4E7EC] items-center flex justify-between">
              <p className="text-[#667085]">Smart phone & Tablets</p>
              <button className="bg-[#E4E7EC] h-[34px] w-[34px] rounded-[50%] text-[#006D77]">
                12
              </button>
            </div>

            <div className="mx-[32px] py-[15px] border-solid border-b-[1px] border-color-[#E4E7EC] items-center flex justify-between">
              <p className="text-[#667085]">Fashion & Accessories</p>
              <button className="bg-[#E4E7EC] h-[34px] w-[34px] rounded-[50%] text-[#006D77]">
                14
              </button>
            </div>

            <div className="mx-[32px] py-[15px] flex justify-between">
              <p className="text-[#667085]">Halth & Beauty</p>
              <button className="bg-[#E4E7EC] h-[34px] w-[34px] rounded-[50%] text-[#006D77]">
                8
              </button>
            </div>
          </div>
          <div className="w-[600px] sm:mt-[30px] sm:w-[340px]">
            <div className="flex justify-between sm:flex-wrap sm:justify-center">
              <div className="border-solid border-[1px] border-color-[#D1DAE8] w-[285px] h-[96px] flex items-center">
                <img className="ml-[17px]" src={G216} alt="" />
                <p className="ml-[13px] text-[#323A4B] font-[600] text-[14px]">
                  Computer for Designer, Art
                </p>
              </div>

              <div className="border-solid border-[1px] border-color-[#D1DAE8] sm:mt-[10px] w-[285px] h-[96px] flex justify-center items-center">
                <p className="ml-[13px] text-[#323A4B] font-[600] text-[14px]">
                  Sport, Home, Outdoor
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-[30px] sm:mt-[10px] sm:flex-wrap sm:justify-center">
              <div className="border-solid border-[1px] border-color-[#D1DAE8] w-[285px] h-[96px] flex items-center">
                <img className="ml-[17px]" src={G217} alt="" />
                <p className="ml-[13px] text-[#323A4B] font-[600] text-[14px]">
                  Laptop for office, students
                </p>
              </div>

              <div className="border-solid border-[1px] sm:mt-[10px] border-color-[#D1DAE8] w-[285px] h-[96px] flex items-center">
                <img className="ml-[17px]" src={G218} alt="" />
                <p className="ml-[13px] text-[#323A4B] font-[600] text-[14px]">
                  Software, card, book
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-[37px] sm:mt-[10px] sm:flex-wrap sm:justify-center">
              <div className="border-solid border-[1px] border-color-[#D1DAE8] w-[256px] h-[58px] flex items-center">
                <img className="ml-[17px]" src={G226} alt="" />
                <p className="ml-[13px] text-[#323A4B] font-[600] text-[14px]">
                  Laptop for office, students
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-[120px] sm:mt-[70px]">
        <div className="bg-[#FFF3EA] w-[165px] h-[36px] rounded-[48px] m-auto text-[#E29578] flex items-center justify-center">
          How It Work ?
        </div>
        <h1 className="text-[50px] text-[#101828] leading-[60px] font-[600] mt-[30px] sm:text-[27px] sm:leading-8 sm:mt-[10px]">
          Cross-border ordering has <br />
          never been easier
        </h1>
        <div className="w-[1110px] mt-[50px] m-auto relative sm:w-[360px] sm:flex-wrap">
          <div className="flex justify-between items-center sm:justify-center sm:flex-wrap gap-y-[25px]">
            <Cans
              img={G236}
              title={"Start Plan"}
              desc={"Choose any of our packages"}
              color={"#FFF3EA"}
            ></Cans>
            <img className="sm:hidden" src={longArrowRight} alt="" />
            <Cans
              img={G237}
              title={"Connect"}
              desc={"Receive concepts hours"}
              color={"#FDE2E4"}
            ></Cans>
            <img  className="sm:hidden"src={longArrowRight} alt="" />
            <Cans
              img={G238}
              title={"Match"}
              desc={"Development Stage"}
              color={"#DBECE5"}
            ></Cans>
          </div>
          <img
            className="absolute right-[72px] mt-[62px] sm:hidden"
            src={longArrowDown}
            alt=""
          />
          <div className="flex justify-between items-center gap-y-[25px] w-[700px] sm:w-[360px] sm:flex-wrap sm:justify-center sm:mt-[25px] m-auto mt-[128px]">
            <Cans
              img={G235}
              title={"Complete"}
              desc={"After-release Support"}
              color={"#DBECE5"}
            ></Cans>
            <img className="sm:hidden" src={longArrowLeft} alt="" />
            <Cans
              img={G234}
              title={"Review"}
              desc={"Project launch and checkout"}
              color={"#D1ECFD"}
            ></Cans>
          </div>
        </div>
      </div>

      <div className="bg-[#006D77] w-[1110px] sm:h-auto h-[404px] sm:flex-wrap sm:pb-[30px] sm:w-[350px] sm:m-auto mt-[120px] sm:justify-center sm:mt-[70px] m-auto rounded-[12px] flex justify-between relative">
        <div className="w-[460px] mt-[130px] ml-[45px] sm:ml-[20px] sm:mt-[50px]">
          <h1 className="text-[40px] font-[500] sm:leading-7 sm:text-[25px] text-white">
            Subscribe our newsletter
          </h1>
          <h3 className="text-[18px] sm:text-[16px] sm:leading-5 sm:mt-[10px] mt-[5px] leading-[26px] font-[500] font-[Merriweather]  text-white">
            By clicking the button, you are agreeing with our Term & Conditions
          </h3>
          <div className="bg-white w-[360x] sm:w-[310px] sm:mt-[30px] sm:h-[47px] h-[59px] shadow-[0_0_1px_#C2C2C2] rounded-[53px] mt-[20px] flex items-center justify-between">
            <p className="ml-[28px] sm:ml-[20px] text-[#797979] font-[600] ">
              Enter you mail...
            </p>
            <div className="bg-[#006D77] w-[42px] h-[42px] sm:w-[35px] sm:h-[35px] rounded-full mr-[10px] flex items-center justify-center">
              <img className="sm:h-[15px]" src={right} alt="" />
            </div>
          </div>
        </div>
        <div className="mr-[35px] sm:mr-[0px] sm:hidden">
          <img className="absolute z-10 bottom-[40px] right-[275px] " src={G110} alt="" />
          <img className="absolute right-0 bottom-[-65px]" src={img1} alt="" />
        </div>
      </div>

      <div className="w-[1110px] m-auto mt-[185px] sm:w-[340px] sm:mt-[120px]">
        <div className="flex justify-between items-center sm:flex-wrap sm:justify-center">
          <div className="flex items-center">
            <img className="" src={logo} alt="" />
            <h1 className="text-[#101828] text-[30px] font-[600] ml-[10px]">agon</h1>
          </div>
          <div className="flex items-center sm:flex-wrap sm:justify-center sm:mt-[20px]">
            <button className="text-[#101828] font-[500] sm:text-[18px]">Ready to get started?</button>
            <button className="flex items-center ml-[20px] sm:ml-[0px] sm:w-[300px] sm:h-[50px] sm:text-[18px] sm:mt-[15px] justify-center bg-[#101828] h-[45px] w-[225px] rounded-[38px] text-white">Create an Account <img className="mt-[4px] ml-[10px]" src={right} alt="" /></button>
          </div>
        </div>
        
        <div className="py-[46px] mt-[45px] sm:mt-[30px] sm:py-[20px] sm:flex-wrap border-solid border-[#D6D8DD] border-b-[2px] border-t-[2px] flex justify-between">
          <div className="sm:mb-[30px]">
            <h2 className="text-[#101828] text-[18px] font-[500]">Contact</h2>
            <p className="text-[#969696] text-[14px] mt-[9px]">4517 Washington Ave.</p>
            <p className="text-[#969696] text-[14px] mt-[7px]">Manchester, Kentucky 39495</p>
            <p className="text-[#444E62] text-[14px] mt-[7px]">(239) 555-0108</p>
            <p className="text-[#4BB4FF] text-[14px] mt-[3px]">contact@agon.com</p>
            <img className="mt-[13px]" src={G92} alt="" />
          </div>
          <div className="sm:px-[10px]"><Ender title={'About Us'} desc={['About V1','About V2','About V3','Services V1','Services V2']}></Ender></div>
          <Ender title={'About Us'} desc={['Our Blog','Our Blog V1','Our Blog V2','Blog Single','Page 404']}></Ender>
          <Ender title={'About Us'} desc={['FAQs','FAQs V2','Career','Career Detail','Contact Us']}></Ender>
          <div className=""><Ender title={'About Us'} desc={['Shop','Shop V2','Pricing V1','Pricing V2 ','Terms & Conditions']}></Ender></div>
        </div>

        <div className="flex justify-between items-center py-[25px] sm:flex-wrap sm:justify-center">
          <h1 className="text-[#969696] text-[18px] font-sans">©Agon Official 2022</h1>
          <p className="text-[#969696] text-[14px] font-serif"><pre>Privacy policy   Cookies   Terms of service</pre></p>
        </div>
      </div>
    </>
  );
}

export default App;
