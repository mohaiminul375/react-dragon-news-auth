import Header from "../Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const newses = useLoaderData();
  // console.log(newses)
  return (
    <div className="font-poppins">
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        {/* news container */}
        <div className="md:col-span-2">
          {
            newses.map(news=><NewsCard key={news._id} news={news}></NewsCard>)
          }
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
