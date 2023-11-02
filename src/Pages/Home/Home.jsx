import NavBar from "../../components/NavBar/NavBar";
import Main from "../../components/Main/Main";
import VideoSection from "../../components/VideoSection/VideoSection";
import Proses from "../../components/Proses/Proses";
import Goal from "../../components/Goal/Goal";
import Service from "../../components/Services/Service";
import Where from "../../components/Where/Where";
import AboutMetaNext from "../../components/AboutMetaNext/AboutMetaNext";
import Customer from "../../components/Customer/Customer";
import Blog from "../../components/Blogs/Blog";
import Concat from "../../components/Concat/Concat";
import CallUS from "../../components/CallUs/CallUS";
import Footer from "../../components/Footer/Footer";
export default function Home() {
  return (
    <>
      <NavBar />
      <Main />
      <VideoSection />
      <Proses />
      <Goal />
      <Service />
      <Where />
      <AboutMetaNext />
      <Customer />
      <Blog />
      <Concat />
      <CallUS />
      <Footer />
    </>
  );
}
