import FeaturedRoom from '@/components/FeaturedRoom/FeaturedRoom';
import Gallery from '@/components/Gallery/Gallery';
import HeroSection from '@/components/HeroSection/HeroSection';
import NewsLetter from '@/components/NewsLetter/NewsLetter';
import PageSearch from '@/components/PageSearch/PageSearch';
import { getFeaturedRoom } from '@/libs(LIBRARY)/apis';
import Image from 'next/image'

const HOME = async () => {

  const featuredRoom = await getFeaturedRoom();


  console.log(featuredRoom);
  return(
      <>
        <HeroSection/>
        <PageSearch/>
        <FeaturedRoom featuredRoom={featuredRoom}/>
        <Gallery/>
        <NewsLetter/>
      </>
    )
};

export default HOME;
