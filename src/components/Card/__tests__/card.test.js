import React from "react";
import { render, screen } from "@testing-library/react";
import PropTypes from 'prop-types';

import Card from "../index";
import { Provider } from "react-redux";
import config from '../../../configureStore';
import { MemoryRouter } from "react-router";

describe("Card component", () => {

  it("should expected propTypes", () => {
    expect(Card.propTypes).toEqual({
      cards: PropTypes.array.isRequired
    })
  });

  it("should render a cards", () => {
    const cards = [
      {
        id: 1017100,
        name: "A-Bomb (HAS)",
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16'
        }
      }
    ];
    render(
      <Provider store={config().store}>
        <MemoryRouter>
          <Card cards={cards} />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(cards[0].name)).toBeInTheDocument();
  });
});
