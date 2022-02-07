import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import Detail from "../index";
import * as ReactRedux from "react-redux";
import config from '../../../configureStore';
import { MemoryRouter } from "react-router";

describe("Detail page", () => {

beforeAll(() => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({
        id: ''
      })
    }));
});

  it("should render detail list", async () => {
    const useSelectorMock = jest.spyOn(ReactRedux, "useSelector").mockReturnValue([
      {
        id: 1009144,
        name: "A.I.M.",
        path: '',
        loading: false,

      }
    ])
    const useDispatchMock = jest.spyOn(ReactRedux, "useDispatch");

    render(
      <ReactRedux.Provider store={config().store}>
        <MemoryRouter>
          <Detail 
            detail={useSelectorMock} 
            loading={useSelectorMock}
            dispatch={useDispatchMock}
          />
        </MemoryRouter>
      </ReactRedux.Provider>
    )
    
    await waitFor(() => {
      setTimeout(() => {
        expect(screen.getByText('A.I.M')).toBeInTheDocument();
      }, 1000);
    });
  });
});
