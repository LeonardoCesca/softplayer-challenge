import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import PropTypes from 'prop-types';

import Search from "../index";

describe("Wrapper component", () => {

  it("should expected propTypes", () => {
    expect(Search.propTypes).toEqual({
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired
    })
  });

  it("should change value on input", async () => {
    const onChange = jest.fn();
    render(<Search onChange={onChange} value="" />);

    await waitFor(() => {
      setTimeout(() => {
        fireEvent.change(screen.getByTestId("search"), {
          target: { value: "teste"}
        });
        expect(screen.getByText('teste')).toBeInTheDocument();
        expect(onChange).toHaveBeenCalledTimes(1);
      }, 1000);
    });
  });

});
