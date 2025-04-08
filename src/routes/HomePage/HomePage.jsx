import { useFetchData } from '../../useFetchData';
import renderMainSection from '../../utilities';

const HomePage = () => {
  const { products, error } = useFetchData();

  return renderMainSection(products, error);
};

export default HomePage;
