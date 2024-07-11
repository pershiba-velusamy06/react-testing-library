import { render, screen } from '@testing-library/react';
import { Greet } from './Greet';


describe("Greet", () => {
    xit('Greet returns correct', () => {
        render(<Greet />);
        const TextElement = screen.getByText('Hello')
        expect(TextElement).toBeInTheDocument();
    })
    describe('Nested', () => {
        fit('Greet render name', () => {
            render(<Greet name='pershiba' />);
            const TextElement = screen.getByText('Hello pershiba')
            expect(TextElement).toBeInTheDocument();
        })
    })


})


