import PropTypes from "prop-types";
import { CounterApp } from "./components/CounterApp";

export const App = () => {
  return <CounterApp value={12} />;
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};

App.defaultProps = {
  title: "no hay titulo",
};
