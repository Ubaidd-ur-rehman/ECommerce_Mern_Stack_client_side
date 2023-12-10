import "./Banner.scss";
import BannerImg from "../../../assets/worldheadphones.png";
// import BannerImg from "../../../assets/banner-img.png";
// import BannerImg from "../../../assets/speaker.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
          Shop Beyond Boundaries Your Ultimate Online Marketplace
          Your Dream Products, Just a Click Away.
          </p>
          {/* ctas means 'call to action'  */}
          <div className="ctas">
            <div className="banner-cta">Read more</div>
            <div className="banner-cta vs">Shop Now</div>
          </div>
        </div>
        <img src={BannerImg} alt="" className="banner-img"/>
      </div>
    </div>
  );
};

export default Banner;
