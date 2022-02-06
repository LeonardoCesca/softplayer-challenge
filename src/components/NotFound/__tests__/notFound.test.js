import React from "react";
import { render, screen } from "@testing-library/react";
import PropTypes from 'prop-types';

import NotFound from "../index";

describe("NotFound component", () => {

  it("should expected propTypes", () => {
    expect(NotFound.propTypes).toEqual({
      text: PropTypes.string.isRequired
    })
  });
  it("should render child element", () => {
    const text = "Nenhuma busca encontrada.";
    render(<NotFound text={text}>{text}</NotFound>);
    expect(text).toEqual("Nenhuma busca encontrada.");
    expect(screen.getByText("Nenhuma busca encontrada.")).toBeInTheDocument();
  });
});
