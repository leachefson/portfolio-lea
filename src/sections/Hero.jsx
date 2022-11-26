import Switcher from "../components/accessories/Switcher";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line;

//Hero-Background
const HeroBg = styled.div`
${tw`flex flex-wrap  w-full items-center h-screen`}
`
const HeroLeft = styled.div`
${tw`bg-olive-green w-full md:w-2/5 h-screen`}
`
const HeroRight = styled.div`
${tw`bg-red-600 w-full md:w-3/5 h-screen`}
`


//Hero-front : Glass card
const GlassCard=styled.div`
${tw`block absolute w-3/5 right-1/3 rounded-lg top-32 m-auto px-6 py-24 md:py-16 md:px-8`}
&{
    background: rgba(195, 186, 186, 0.25);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
backdrop-filter: blur(9px);
-webkit-backdrop-filter: blur(7.3px);
border: 1px solid rgba(195, 186, 186, 0.38);
}`

const HeroTitle = styled.h1`
${tw`text-8xl font-bold text-porcelain mt-16`}
`
const TitleColor = styled.span`
${tw`text-red-300`}
&{
  text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.4), 1px -1px 2px rgba(0, 0, 0, 0.4), -1px 1px 2px rgba(0, 0, 0, 0.4), 1px 1px 2px rgba(0, 0, 0, 0.4);
}
`
const HeroSubTitles = styled.div`
${tw`flex text-2xl font-bold text-porcelain mt-8`}
`

const JobsTitlesCont = styled.div`
${tw`pr-2`}
`
const JobTitle = styled.p`
${tw`uppercase text-4xl text-porcelain font-semibold`}
`

const Introduction = styled.div`
${tw`w-full md:w-2/3 mt-6 text-porcelain text-xl`}
&{
  text-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
}
`

const CTA = styled.button`
${tw`font-Nav border border-double border-current border-4 bg-olive-green text-porcelain mt-5 px-4 py-2 m-auto transition duration-300 ease-linear select-none hover:bg-porcelain hover:text-dark focus:outline-none focus:outline hover:scale-105`};
&{
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
}
`;

export default () => {
    return(
        <div>
        <HeroBg>
        <HeroLeft>
        </HeroLeft>
        <HeroRight>
          <img
            src="https://cdn.midjourney.com/69816c2b-399d-42a1-bc99-9f257ad5eb63/grid_0.png"
            className="h-screen w-full"
            alt=""
          />
        </HeroRight>
      </HeroBg>
      <GlassCard>
            <HeroTitle>Hi, My name is <br/><TitleColor>Lea Chefson</TitleColor></HeroTitle>
            <HeroSubTitles>
              <JobsTitlesCont>
                <JobTitle >Web developer</JobTitle>
              </JobsTitlesCont>
              <JobsTitlesCont>
                <JobTitle>Designer</JobTitle>
              </JobsTitlesCont>
              <JobsTitlesCont>
                <JobTitle >Front-end Developer</JobTitle>
              </JobsTitlesCont>
            </HeroSubTitles>

            <Introduction>
             Creating visually pleasing and engaging websites, presentations and illustrations. Originally from France, now based in Thailand.
			      Let me level up your virtual content with the French Touch!<br/>
			      One webpage can have a lot of different styles. See it by yourself : 
            </Introduction>
  
            <CTA>
              Hire me
            </CTA>
          </GlassCard>
      </div>
    
    )
}