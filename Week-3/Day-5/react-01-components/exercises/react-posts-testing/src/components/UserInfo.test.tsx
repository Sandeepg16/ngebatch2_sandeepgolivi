/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import UserInfo from './UserInfo'

/* eslint-enable */

describe('Display UserInfo', () => {
  it('should render the user\'s name', () => {
    render(<UserInfo user ={{avatarUrl:'https://robohash.org/Fiona?size=60x60',name:'Fiona Worx'}}/>)
    const element = screen.getByText(/Fion/);
    expect(element).toHaveTextContent("Fiona Worx");
    expect(element).toBeInTheDocument()
    console.log("element",element);
  })
})
