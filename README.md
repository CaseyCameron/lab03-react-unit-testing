# lab03-react-unit-testing

lesson learned:
#### <span style="color: burlywood">Mocking Fetches</span>
Use the window object which has "fetch" functionality.
```
window.fetch = jest.fn();
window.fetch.mockResolvedValueOnce();
```
```jest.fn()``` creates a dummy function

```
window.fetch.mockResolvedValueOnce({
	json: async () => [{ id: 'p1', title: 'First post' }],
});
```
- Mocks a value once. 
- Returns an object. 
- Specify a json property which holds a value as a function. 
- The function will be async because .json() returns a new promise. 
- Then simulate a value that should be returned. In this case, an array with an object.
