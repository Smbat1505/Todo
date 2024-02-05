import React, {useEffect, useState} from 'react'
import axios from "axios"
import {taskAPI, todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolist().then((res) => {
            setState(JSON.stringify(res.data))
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const title = 'Todododo'
    useEffect(() => {
        todolistAPI.createTodolist(title).then(res => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const id = 'bc886cbb-cee9-4c7e-b93c-8e8baa858258'
    useEffect(() => {
        todolistAPI.deleteTodolist(id).then(res => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const id = '5f9cf554-1eb6-434b-bca2-3b811e66a9be'
    useEffect(() => {
        let title = 'Ho Ho Ho'
        todolistAPI.updateTodolist(id, title).then(res => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}


export const getTask = () => {
    const [state, setState] = useState<any>(null)
    let todolistId = '21a4c6cd-90b1-4529-88c4-f50d35873eb0'

    useEffect(() => {
        taskAPI.getTask(todolistId).then(res => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const createTask = () => {
    const [state, setState] = useState<any>(null)
    let title = 'Ho Hy Hu'
    let todolistId = '21a4c6cd-90b1-4529-88c4-f50d35873eb0'

    useEffect(() => {
        taskAPI.createTask(todolistId, title).then(res => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const deleteTask = () => {
    const [state, setState] = useState<any>(null)
    let todolistId = '21a4c6cd-90b1-4529-88c4-f50d35873eb0'
    let taskId = '3aecf889-67ea-49cd-8d58-65c6ce66779c'

    useEffect(() => {
        taskAPI.deleteTask(todolistId, taskId).then(res => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}


export const updateTask = () => {
    const [state, setState] = useState<any>(null)
    let title = 'Ho Ho Ho'
    let todolistId = '21a4c6cd-90b1-4529-88c4-f50d35873eb0'
    let taskId = '08cdaf56-6ddc-470b-a658-834d690ee9f6'

    useEffect(() => {
        debugger
        taskAPI.updateTask(todolistId, taskId, title).then(res => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}