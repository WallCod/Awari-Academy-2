import axios from "axios";
import axiosMock from 'jest-mock-axios';

axios.default = axiosMock;

test('deve fazer uma requisição HTTP e retornar dados', async() => {
    axiosMock.get.mockResolvedValue({ data: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
    });

    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    expect(response.data).toEqual({ userId: 1,  id: 1, title: 'delectus aut autem', completed: false }
        
    );
});