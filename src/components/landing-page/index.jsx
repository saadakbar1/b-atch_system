import Home from './home/Home';
import Advantages from './advantages/Advantages';
import Features from './features/Features';
import Customizable from './customizable/Customizable';
import Testimonal from './testimonal/Testimonal';
import Faq from './faq/Faq';
import Feedback from './feedback/Feedback';
import Pricing from './pricing/price';

const LandingPage = () => {
    return (
        <>
            <Home/>
            <Features />
            <Advantages />
            <Customizable />
            <Testimonal />
            <Feedback/>
            <Pricing />
            <Faq />
        </>
    )
}
export default LandingPage;