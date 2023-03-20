import { useState } from "react";
import { Divider, Header, Input, Menu } from "semantic-ui-react";

const HeaderCOmponent = () => {
  const [, setState] = useState({ activeItem: "home" });
  const handleItemClick = (e, { name }) => setState({ activeItem: name });
  const { activeItem } = setState;
  
  return (
    <>
      <Header as="h1"></Header>
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="About Us"
          active={activeItem === "About Us"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Contact Us"
          active={activeItem === "Contact Us"}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
      <Divider />
    </>
  );
};
export default HeaderCOmponent;
