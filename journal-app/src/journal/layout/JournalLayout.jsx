import { Box, Toolbar } from "@mui/material";
import PropTypes from "prop-types";
import { NavBar, SideBar } from "../components";

const drawerWith = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWith={drawerWith} />
      <SideBar drawerWith={drawerWith} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

JournalLayout.propTypes = {
  children: PropTypes.object,
};
