import ContactInfo from "../../components/ContactInfo";
import MyBanner from "../../components/MyBanner";
import MyFooter from "../../components/MyFooter";
import MyModal from "../../components/MyModal";
import AboutMe from "../AboutMe/AboutMe";
import Proyects from "../Proyects/Proyects";
/* import MySlider from "../../components/MySlider"; */
const Home = () => {
    return (
        <>
            <MyBanner />
            <AboutMe />
            <Proyects />
            {/* <MySlider /> */}
            <MyModal />
            <ContactInfo />
            <MyFooter />
            
        </>
    )
}
export default Home;