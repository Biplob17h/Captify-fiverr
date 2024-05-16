/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import BarChartBox from "../../components/barChartBox/BarChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import TopBox from "../../components/topBox/TopBox";
import {
  barChartBoxRevenue,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import "./home.scss";

const HomePage = ({show}) => {
  return (
    <div className={`${show === "home" ? "" : "hidden"}`}>
    <div className="home mx-[40px]">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>

      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      {/* <div className="box box4">4</div> */}
      {/* <div className="box box5">
        {" "}
        <ChartBox {...chartBoxConversion} />
      </div> */}
      <div className="box box6">
        {" "}
        <ChartBox {...chartBoxRevenue} />
      </div>
      {/* <div className="box box7">Box 7</div> */}
      <div className="box box8"><BarChartBox  {...barChartBoxRevenue} /></div>
      {/* <div className="box box9">Box 9</div> */}
    </div>
     </div>
  );
};

export default HomePage;
