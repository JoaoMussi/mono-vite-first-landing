import { render } from '@testing-library/react';

import FirstLanding from './first-landing';

describe('FirstLanding', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FirstLanding />);
    expect(baseElement).toBeTruthy();
  });
});
