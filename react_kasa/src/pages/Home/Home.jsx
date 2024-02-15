{/*  page d'acceuil du site */}
import Cards from '../../components/Cards/Cards';
import BannerHome from '../../components/Banner/BannerHome';
const Home = () => {
    return (
        <div>
            <BannerHome />
            <h1>Home</h1>

            <Cards />
        </div>
    )
}

export default Home;