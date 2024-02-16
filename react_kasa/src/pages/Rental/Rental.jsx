
import locations from "../../data/locations.json"; // Import du fichier JSON
import Carousel from '../../components/Carousel/Carousel'; // Import du composant Carousel
import RentalPage from '../../components/RentalPage/RentalPage'; // Import du composant RentalPage


const Rental = () => {
    return (
        <main>
            <h1>Locations de logements</h1>
            {/* Afficher les détails de chaque location */}
            {locations.map((location, index) => (
                <div key={index}>
                    <RentalPage location={location} />
                    <Carousel slides={location.images} />
                </div>
            ))}
        </main>
    )
}

export default Rental;
