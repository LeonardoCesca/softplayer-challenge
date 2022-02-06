import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import PropTypes from 'prop-types';

import Wrapper from "../index";

describe("Wrapper component", () => {

  it("should expected propTypes", () => {
    expect(Wrapper.propTypes).toEqual({
      children: PropTypes.node.isRequired
    })
  });

  it("should render child element", async () => {
    const children = <p datatest-id="teste">teste</p>;
    render(<Wrapper>{children}</Wrapper>);
    await waitFor(() => {
      setTimeout(() => {
        expect(screen.getByTestId('teste')).toBeCalled();
        expect(screen.getByText("teste")).toBeInTheDocument();
      }, 100)
    });
  });
});
