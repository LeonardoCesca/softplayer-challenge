import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import PropTypes from 'prop-types';

import List from "../index";

describe("List component", () => {

  it("should expected propTypes", () => {
    expect(List.propTypes).toEqual({
      list: PropTypes.array.isRequired
    })
  });

  it("should render a list", () => {
    const list = [
      {
        series: {
          items: [
            {
              name: 'Avengers: The Initiative (2007 - 2010)'
            }
          ]
        }
      }
    ];
    render(<List list={list} />);
    expect(screen.getByText('Avengers: The Initiative (2007 - 2010)')).toBeInTheDocument();
  });
});
