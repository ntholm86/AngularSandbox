import { ID } from '@datorama/akita';

export type Todo = {
    id: ID;
    name: string;
    isComplete: boolean;
}

export function createTodo({ id, name }: Partial<Todo>) {
    return {
    id,
    name,
    isComplete: false
    } as Todo;
}