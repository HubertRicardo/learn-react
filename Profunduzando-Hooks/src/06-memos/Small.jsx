// import { memo } from 'react';
import PropTypes from "prop-types";

export const Small = ({ value }) => {
  console.log(" Me volví a dibujar :( ");

  return <small>{value}</small>;
};

Small.propTypes = {
  value: PropTypes.any,
};
