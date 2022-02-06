import React from "react";
import { render, screen } from "@testing-library/react";

import Loading from "../index";

describe("Loading component", () => {

  it("should render component", () => {
    render(<Loading />);
    expect(screen.getByText("Carregando...")).toBeInTheDocument();
  });
});
