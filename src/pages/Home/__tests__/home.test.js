import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Home from "../index";
import * as ReactRedux from "react-redux";
import config from '../../../configureStore';
import { MemoryRouter } from "react-router";
import Search from "../../../components/Search";

describe("Home page", () => {

  it("should render detail list", async () => {
    const useSelectorMock = jest.spyOn(ReactRedux, "useSelector").mockReturnValue([
      {
        characters: [
          {
            name: 'teste'
          }
        ],
        loading: false,
        isEdited: false,
      }
    ])
    const useDispatchMock = jest.spyOn(ReactRedux, "useDispatch");

    render(
      <ReactRedux.Provider store={config().store}>
        <MemoryRouter>
          <Home 
            characters={useSelectorMock} 
            loading={useSelectorMock}
            isEdited={useDispatchMock}
          />
        </MemoryRouter>
      </ReactRedux.Provider>
    )
    
    await waitFor(() => {
      setTimeout(() => {
        expect(screen.getByText('A.I.M')).toBeInTheDocument();
      }, 500);
    });
  });

  it("should set a input search value", async () => {
    const setSearch = jest.fn();

    <ReactRedux.Provider store={config().store}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </ReactRedux.Provider>
    
    await waitFor(() => {
      setTimeout(() => {
        fireEvent.change(
          screen.getByTestId('search', {
            target: {
              value: 'teste'
            }
          })
        )
        expect(setSearch).toHaveBeenCalledTimes(1);
      }, 500);
    });
  });
});
