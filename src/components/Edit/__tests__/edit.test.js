import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import PropTypes from 'prop-types';

import Edit from "../index";
import { Provider } from "react-redux";
import config from '../../../configureStore';
import { MemoryRouter } from "react-router";

describe("Edit component", () => {

  it("should expected propTypes", () => {
    expect(Edit.propTypes).toEqual({
      selectedCard: PropTypes.object.isRequired
    })
  });

  it("should render a edit", async () => {
    const selectedCard = {
      id: 1017100,
      name: "A-Bomb (HAS)",
    }
    render(
      <Provider store={config().store}>
        <MemoryRouter>
          <Edit selectedCard={selectedCard} />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      setTimeout(() => {
        fireEvent.input(screen.getByTestId('edit'), {
          target: { value: selectedCard.name }
        })  
        expect(screen.getByText("A-Bomb (HAS)")).toBeInTheDocument();
      }, 100)
    });
  });

  it("should show a form when click on edit button", async () => {
    const selectedCard = {
      id: 1017100,
      name: "A-Bomb (HAS)",
    };
    const handleEdit = jest.fn();

    render(
      <Provider store={config().store}>
        <MemoryRouter>
          <Edit selectedCard={selectedCard} />
        </MemoryRouter>
      </Provider>
    );
    
    await waitFor(() => {
      setTimeout(() => {
        fireEvent.click(screen.getByTestId('edit-btn'));
        expect(screen.getByText('Editar')).toBeInTheDocument();
        expect(handleEdit).toHaveBeenCalled();
      }, 100)
    });
  });
});
