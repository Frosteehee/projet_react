
import './About.scss';
import BannerAbout from '../../components/Banner/BannerAbout';
import imgBanner from '../../assets/images/imgAbout.png';
import Collapse from '../../components/Collapse/Collapse';


function About() {
  // Définition des éléments à afficher dans les sections collapsibles
  const collapses = [
    { title: 'Section 1', text: 'Contenu de la section 1' },
   { title: 'Section 2', text: 'Contenu de la section 2' },
  
  ];

  return (
    <main>
      <BannerAbout img={imgBanner} alt="Vue sur les sapins et les montagnes" />
      <Collapse items={collapses} />
   
    </main>
  );
}

export default About;