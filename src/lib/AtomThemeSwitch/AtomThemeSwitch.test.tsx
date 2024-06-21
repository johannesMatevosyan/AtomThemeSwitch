import { render } from '@testing-library/react';
import { AtomThemeSwitch } from './AtomThemeSwitch';
import { describe, it, expect } from 'vitest';

describe(`Component: ${AtomThemeSwitch.name}`, () => {
    it("should render", () => {
      const { container } = render(<AtomThemeSwitch 
        designType='material'
        shape='square'></AtomThemeSwitch>);

      expect(container).toMatchInlineSnapshot(`
        <div>
          <label
            class="ats__switch material"
            title="light theme"
          >
            <input
              type="checkbox"
            />
            <span
              class="ats__slider square"
            >
              <span
                class="ats__slider-button"
              />
            </span>
          </label>
        </div>
      `);
    });
  });
