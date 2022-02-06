import React from "react";
import { render } from "@testing-library/react";
import PropTypes from 'prop-types';

import Title from "../index";

describe("Title component", () => {

  it("should expected propTypes", () => {
    expect(Title.propTypes).toEqual({
      children: PropTypes.node.isRequired
    })
  });

  it("should render child element", () => {
    const children = "Editar";
    render(<Title>{children}</Title>);
    expect(children).toEqual("Editar");
  });
});
