import Banner from './Banner'
import FeatureCards from './FeatureCards';
import  Features  from './Features';
import ProjectShowcase from './Project_Showcage';
import { Reviews } from './Review';
import WorkFlow from './WorkFlow';

const Home = () => {
  return (
    <div>
    <Banner />
      <FeatureCards />
      <WorkFlow />
      <Features />
      <ProjectShowcase />
      <Reviews/>
    </div>
  )
}

export default Home;