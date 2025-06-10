import * as React from "react";
import {
  Typography as Type,
  Button,
  TextField,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
} from "@mui/material";
import Form from "./components/Form";
import Cards from "./components/Cards";
import Modals from "./components/Modals";
import Containers from "./components/Containers";
import ListComponents from "./components/ListComponents";
import Accord from "./components/Accord";
import DrawerMenu from "./components/DrawerMenu";

function App() {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Type variant="h4">LOGO</Type>
          <Tabs
            sx={{ marginLeft: "auto" }}
            value={value}
            onChange={(e, val) => setValue(val)}
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Contact" />
          </Tabs>
        </Toolbar>
      </AppBar>
      {/* <Form/> */}
      <div styles={{ margintop: 300 }}>
        {/* <Cards /> */}
        {/* <Modals /> */}
        {/* <Containers/> */}
        {/* <ListComponents/> */}
        {/* <Accord/> */}
        <DrawerMenu/>
      </div>
    </div>
  );
}

export default App;
