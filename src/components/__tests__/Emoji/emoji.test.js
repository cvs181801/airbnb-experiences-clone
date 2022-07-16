import {render, screen, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'
import Emoji from '../../Emoji'
import * as React from 'react';

afterEach(()=> {
    cleanup();
})

test("should render heart emoji", ()=>{
    render(<Emoji/>)
    const heart = screen.getByTestId("anEmoji")
    expect(heart).toBeInTheDocument();
})