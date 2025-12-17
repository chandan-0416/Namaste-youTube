import React from "react"
import Button from "./Button"

const ButtonsList = () => {
  return (
    <div className="flex">
    <Button name="All"/>
    <Button name="Gaming"/>
    <Button name="Songs"/>
    <Button name="Live"/>
    <Button name="Soccer"/>
    <Button name="Cricket"/>
    <Button name="News"/>
    <Button name="Science"/>
    <Button name="Maths"/>
    <Button name="Universe"/>
    <Button name="Astronomy"/>
    <Button name="Technologies"/>
    </div>
  );
};
export default ButtonsList;
