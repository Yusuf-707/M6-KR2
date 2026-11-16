import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
const getTodosFunc = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15');
    return res.data
}
export const useTodosList = () => {
    return useQuery({
        queryKey: ['todos'],
        queryFn: getTodosFunc
    })
}