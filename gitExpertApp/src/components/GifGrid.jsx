import PropTypes from "prop-types";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  //   const [images, setImages] = useState([]);

  //   const getImages = async () => {
  //     const newImages = await getGifs(category);
  //     setImages(newImages);
  //   };

  //   useEffect(() => {
  //     getImages();
  //   }, []);

  return (
    <>
      <h3 className="text-4xl flex justify-center"> {category} </h3>
      {isLoading ? <h2>Cargando...</h2> : null}
      <div className="w-90">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
