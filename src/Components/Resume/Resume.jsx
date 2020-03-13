import React from "react";
import Button from "@material-ui/core/Button";
import resume from "../../assets/Larchenko Maria CV.pdf";

export default function Resume() {
  return <Button href={resume}>View resume</Button>;
}
