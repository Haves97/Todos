import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Header from './components/Header/Header'


// describe("App", () => {
//   it("renders App component", () => {
//   });
// });

describe("App", () => {
  it("renders App component", () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });
});


describe("Header", () => {
  it("Get text 'todos'", () => {
    const { getByText } = render(<Header />);
    const linkElement = getByText(/todos/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe("Checkbox", () => {
  it("Checkbox click", () => {
    const { container } = render(<Che)
    // userEvent
  });
});