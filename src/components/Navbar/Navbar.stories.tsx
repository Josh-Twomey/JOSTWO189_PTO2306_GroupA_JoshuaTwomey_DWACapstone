import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./Navbar.presentation";

const meta = {
  title: "components/Navbar",
  component: Navbar,
  decorators: [
    (Story: any) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
};

export default meta;

export const Basic = {
  args: {},
};
