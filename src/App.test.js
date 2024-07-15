import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Listing from './components/cp-listing/CpListing';

const articleData = [
  {
    "title": "Five Takeaways From Bidens News Conference",
  }
];

test('renders list of articles', () => {
  render(<Listing articleData={articleData} />);
  expect(screen.getByText((content, element) => content.includes('Five Takeaways From Bidens News Conference'))).toBeInTheDocument();
});
