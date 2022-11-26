import React from "react";
import { Flowbite } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import { Button } from "flowbite-react";
import { Navbar } from "flowbite-react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line;


//Navbar style

//Navbar background and container
const NavContainer = styled.div`

border: 2px solid blue`;


//style logo



//style navbar links
const LinkContainer = styled.span`
${tw`text-dark text-lg  font-bold hover:text-porcelain font-Nav py-2`}
&:hover{border: 2px #767c7c;
  transition: border 0.1s linear;
  border-style: solid none;
  text-shadow: 1px 1px #000000bb }`;



//style "resume" button
const Buttontest = styled.button` 
${tw`font-Nav border border-double border-current border-4 bg-olive-green text-porcelain rounded px-4 py-2 m-2 transition duration-300 ease-linear select-none hover:bg-porcelain hover:text-dark focus:outline-none focus:outline hover:scale-105`};
&{
}
`;

export default () =>{
    return(
<Navbar
  fluid={true}
  rounded={false}
  className="absolute w-full bg-porcelain bg-opacity-60 "
>
  <Navbar.Brand href="https://icons8.com/icon/RHH6wiLZ6zsq/hardworking" className=" p-2 bg-olive-green border border-double border-current border-4 text-porcelain hover:text-dark hover:bg-porcelain hover:scale-105 transition hover:text-dark duration-300" >
    <img
      src="https://cdn-icons-png.flaticon.com/512/2890/2890354.png"
      className="mr-3 h-6 sm:h-9 z-10"
      alt="Logo"
    />
    
    <span className="self-center font-Nav whitespace-nowrap text-xl font-semi-bold hover:font-regular dark:text-white z-10">
      Lea Chefson
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2 z-10">
    <Buttontest>
      <span>Resume</span>
    </Buttontest>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse className="z-10">
    <Navbar.Link  href="/navbars" >
      <LinkContainer>
      About me
      </LinkContainer>
    </Navbar.Link>
    <Navbar.Link href="/navbars">
    <LinkContainer>
      Projects
      </LinkContainer>
    </Navbar.Link>
    <Navbar.Link href="/navbars" >
    <LinkContainer>
      What I use
      </LinkContainer>
    </Navbar.Link>
    <Navbar.Link href="/navbars">
    <LinkContainer>
      Contact me
      </LinkContainer>
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
    )
}