import { render, screen } from '@testing-library/react';
import { Greet } from './Greet';


describe("Greet", () => {
    test.skip('Greet returns correct', () => {
        render(<Greet />);
        const TextElement = screen.getByText('Hello')
        expect(TextElement).toBeInTheDocument();
    })
    describe('Nested', () => {
        test.only('Greet render name', () => {
            render(<Greet name='pershiba' />);
            const TextElement = screen.getByText('Hello pershiba')
            expect(TextElement).toBeInTheDocument();
        })
    })


})

describe.skip("Greet user", () => {
    test.skip('Greet returns correct', () => {
        render(<Greet />);
        const TextElement = screen.getByText('Hello')
        expect(TextElement).toBeInTheDocument();
    })
    test.only('Greet render name', () => {
        render(<Greet name='pershiba' />);
        const TextElement = screen.getByText('Hello pershiba')
        expect(TextElement).toBeInTheDocument();
    })
})

