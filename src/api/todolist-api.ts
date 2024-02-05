import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': 'ccfb810e-d396-43d3-bd23-d75be8db7355',
    },
})

// export const todolistAPI = {
//     getTodolist() {
//         return instance.get<Array<TodolistType>>(`todo-lists`)
//     },
//     createTodolist(title: string) {
//         return instance.post<ResponseType<{ item: TodolistType }>>(`todo-lists`, {title})
//     },
//     updateTodolist(todolistId: string, title: string) {
//         return instance.put<ResponseType<{ item: TodolistType }>>(`todo-lists/${todolistId}`, {title})
//     },
//     deleteTodolist(todolistId: string) {
//         return instance.delete<ResponseType<{ item: TodolistType }>>(`todo-lists/${todolistId}`)
//     },
// }
class TodolistAPI {
    getTodolist() {
        return instance.get<Array<TodolistType>>(`todo-lists`)
    }

    createTodolist(title: string) {
        return instance.post<ResponseType<{ item: TodolistType }>>(`todo-lists`, {title})
    }

    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseType<{ item: TodolistType }>>(`todo-lists/${todolistId}`, {title})
    }

    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseType<{ item: TodolistType }>>(`todo-lists/${todolistId}`)
    }
}

export const todolistAPI = new TodolistAPI();


export const taskAPI = {
    getTask(todolistId: string) {
        return instance.get(`todo-lists/${todolistId}/tasks`)
    },
    createTask(todolistId: string, title: string) {
        return instance.post(`todo-lists/${todolistId}/tasks`, {title})
    },
    updateTask(todolistId: string, taskId: string, title: string) {
        debugger
        return instance.put(`todo-lists/${todolistId}/tasks/${taskId}`, {title})
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
}

export type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}
export type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}