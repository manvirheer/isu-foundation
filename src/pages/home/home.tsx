// Import necessary modules and components
import { PortableText } from '@portabletext/react'
import Container from '~/components/Container'
import AboutSectionTextContent from '~/components/home/aboutSectionTextContent';
import WorkWithUs from '~/components/home/WorkWithUs';
import HomePageComponent from '~/components/home/HomePage';
import ContactPage from '~/components/contact/ContactPageComponent';




// Homepage component
export default function HomePage() {
  return (
    <>
        {/* <ImageSlider />
        < AboutSectionTextContent />
        <WorkWithUs /> */}
        <HomePageComponent />
    </>
  )
}
