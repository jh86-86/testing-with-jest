import {render,screen,cleanup} from '@testing-library/react';
import Todo from '../todo';

afterEach(()=>{
    cleanup(); //runs a clean up after each test
})

test('should render todo none completed todo', ()=>{
    const todo = {id:1 , title:'wash dishes', completed: false};
    render(<Todo todo={todo}/>);
    const todoElement= screen.getByTestId("todo-1");
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("wash dishes");
    expect(todoElement).not.toContainHTML('<strike>');

})
test('should render todo completed todo', ()=>{
    const todo = {id:2 , title:'wash car', completed: true};
    render(<Todo todo={todo}/>);
    const todoElement= screen.getByTestId("todo-2");
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("wash car");
    expect(todoElement).toContainHTML('<strike>');

})