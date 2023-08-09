import React from "react";
import Header from "../components/Header";
import Recipes from "../components/Recipes";
import { CiFacebook } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";

<style>

</style>

const Home = () => {
  return (
    <>
      {/* <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"> */}
      <nav className=" fixed top-[50%]">
        <ul className=" p-0 transform translate-x-[-260px]">
          {/* <li><Link className='i' to={'/'}></Link></li> */}
          <li className=" my-2  block m-[2px] bg-white w-[300px] text-right p-[5px]  rounded-r-3xl rounded-b-3xl transition-all duration-1000 hover:transform hover:translate-x-[110px] hover:bg-white/0.4  ">
            <Link className=" hover:rotate-[360deg] text-black flex  justify-end gap-2 items-center " to={"/"}>
              Facebook
                <BsFacebook className="  ml-[10px] text-black p-[3px] rounded-full  w-[40px] h-[40px] text-[20px] rotate-0  bg-white hover:text-black hover:bg-white/0.36 hover:rotate-[360deg]  transition-all duration-[1s]  " />
             
            </Link>
          </li>

          <li className="  my-2 block m-[2px] bg-white w-[300px] text-right p-[5px]  rounded-r-3xl rounded-b-3xl transition-all duration-1000 hover:transform hover:translate-x-[110px] hover:bg-white/0.4  ">
            <Link className=" hover:rotate-[360deg] text-black flex  justify-end gap-2 items-center " to={"/"}>
              Facebook
                <BsFacebook className="  ml-[10px] text-black p-[3px] rounded-full  w-[40px] h-[40px] text-[20px] rotate-0  bg-white hover:text-black hover:bg-white/0.36 hover:rotate-[360deg]  transition-all duration-[1s]  " />
             
            </Link>
          </li>

          <li className="  my-2  block m-[2px] bg-white w-[300px] text-right p-[5px]  rounded-r-3xl rounded-b-3xl transition-all duration-1000 hover:transform hover:translate-x-[110px] hover:bg-white/0.4  ">
            <Link className=" hover:rotate-[360deg] text-black flex  justify-end gap-2 items-center " to={"/"}>
              Facebook
                <BsFacebook className="  ml-[10px] text-black p-[3px] rounded-full  w-[40px] h-[40px] text-[20px] rotate-0  bg-white hover:text-black hover:bg-white/0.36 hover:rotate-[360deg]  transition-all duration-[1s]  " />
             
            </Link>
          </li>
          
          
        </ul>
      </nav>
      <main className="w-full flex flex-col">
        <Header
          title={
            <p>
              Taste the World with
              <br />
              FlavorVerse!
            </p>
          }
          type="home"
        />

        <section
          id="recipes"
          className=" md:mx-w-[1440px] mx-auto px-4 md:px-20  "
        >
          <Recipes />
        </section>
      </main>
    </>
  );
};

export default Home;
