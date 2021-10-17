import {UpperCasePipe} from './upper.pipe';

describe('upper Pipe testing',()=>{
const pipe= new UpperCasePipe();
it('pipe suit case',()=>{
    expect(pipe).toBeTruthy()
})
it('should return uppercase ',()=>{
    expect(pipe.transform('hello')).toBe('HELLO')
});
it('should return uppercase ',()=>{
    expect(pipe.transform('KARL')).toBe('KARL')
});
it('should not return lowercase',()=>{
    expect(pipe.transform('HELLO')).not.toBe('hello')
})
})