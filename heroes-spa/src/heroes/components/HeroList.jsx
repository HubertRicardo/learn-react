import PropTypes from "prop-types";

import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <>
      {heroes.map((heroe) => (
        <h1 key={heroe.id}>{heroe.alter_ego}</h1>
      ))}
    </>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
