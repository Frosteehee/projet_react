import img from '../../assets/images/imgAbout.png'
import './Banner.scss'
const bannerAbout = () => {
  return (
    <div className="banner">
      <img src={img} alt="" className="bannerImg" />
      <div className="mask"></div>
    
    </div>
  );
};

export default bannerAbout;

