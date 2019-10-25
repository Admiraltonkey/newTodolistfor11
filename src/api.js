import axios from 'axios'


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/todo-lists",
    withCredentials: true,
    headers: {'API-KEY': '8f9a9157-3f30-4705-bd4d-ae08502514a2'}
});

export const api = {
    createTask(newTaskTitle, todolistId) {
        return instance.post(
            `/${todolistId}/tasks`,
            {title: newTaskTitle},
        )
    },
    createTodolist(title) {
        return instance.post(
            '',
            {title: title}
        )
    },
    getTodolist() {
        return instance.get('')
    },
    deleteTodolist(id) {
        return instance.delete(`/${id}`)
    },
    deleteTask(id) {
        return instance.delete(`tasks/${id}`)
    },
    updateTask(task) {
        return instance.put('/tasks', task)
    },
    getTasks(todoListId) {
        return instance.get(`/${todoListId}/tasks`,
        )
    },
    updateTitleTodolist(todoListId,title){
        return instance.put(`/${todoListId}`,{title:title})

    }
}