    import { render, screen } from '@testing-library/react';
import {Greet} from './Greet';


  

test('Greet returns correct',()=>{
    render(<Greet/>);
    const TextElement = screen.getByText('Hello')
    expect(TextElement).toBeInTheDocument();
})
test('Greet render with name',()=>{
    render(<Greet name='pershiba'/>);
    const TextElement = screen.getByText('Hello pershiba')
    expect(TextElement).toBeInTheDocument();
})