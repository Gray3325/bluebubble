import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import 'bootstrap/dist/css/bootstrap.min.css'; //要加這行才會有bootstrap的樣式


export default function BootstrapDropdownMenu() {
    
  return (
    <>
      <DropdownButton id='dropdown-item-button' title='All Products'>
        <Dropdown.ItemText>Clothings</Dropdown.ItemText>
        <Dropdown.Item as='button' value={"Women"} onClick={e => this.handleInput(e, "value")}>Women</Dropdown.Item>
        <Dropdown.Item as='button'>Men</Dropdown.Item>
        <Dropdown.Item as='button'>Kid</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.ItemText>Kitchen supplies</Dropdown.ItemText>
        <Dropdown.Item as='button'>Mug</Dropdown.Item>
        <Dropdown.Item as='button'>Coasters</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.ItemText>Stationery</Dropdown.ItemText>
        <Dropdown.Item as='button'>Notebook</Dropdown.Item>
        <Dropdown.Item as='button'>Sticker</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.ItemText>Cellphone case</Dropdown.ItemText>
        <Dropdown.Item as='button'>iPhone case</Dropdown.Item>
        <Dropdown.Item as='button'>iPad case</Dropdown.Item>
        <Dropdown.Item as='button'>Macbook case</Dropdown.Item>
      </DropdownButton>
    </>
  );
}
