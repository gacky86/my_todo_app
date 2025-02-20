import { render, screen } from "@testing-library/react";
import App from "@/App";

test("renders hello world message", () => {
  render(<App />);
  expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
});
