import AboutFive from "../../Component/About/AboutFive";
import AboutFour from "../../Component/About/AboutFour";
import AboutOne from "../../Component/About/AboutOne";
import AboutThree from "../../Component/About/AboutThree";
import AboutTwo from "../../Component/About/AboutTwo";
import Footer from "../../Component/Footer/Footer";
import Services from "../../Component/Services/Services";
import Header from "../Header/Header";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <AboutOne></AboutOne>
            <AboutTwo></AboutTwo>
            <AboutThree></AboutThree>
            <AboutFour></AboutFour>
            <AboutFive></AboutFive>
            <Footer></Footer>
        </div>
    );
};

export default Home;