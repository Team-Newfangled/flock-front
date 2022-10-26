import { authAPI } from "../../../lib/API";


export const createProjects = (team_id,project_name) => {
    return authAPI.post(
        `/teams/${team_id}/projects`,
        {
            "name" : project_name
        }
    )
}

export const getProjects = async(team_id) => {
    const res = await authAPI.get(
        `/teams/${team_id}/projects/?page=0`
    )
    return res
}
export const getProjectsteam = async(project_id) => {
    const res = await authAPI.get(
        `/projects/${project_id}`
    )
    return res
}

export const deleteProject = async(project_id) => {
    const res = await authAPI.delete(
        `/projects/${project_id}`
    )
    return res
}

export const patchProject = async(project_id,project_name) => {
    const res = await authAPI.patch( 
        `/projects/${project_id}`,
        {
            "name" : project_name
        }
    )
    return res
}

// project 사진 추가 필요
export const patchProjectImg = async(project_id,content) => {
    const res = await authAPI.patch( 
        `/projects/${project_id}/image`,
        {
            "content" : content
        }
    )
    return res
}
// todo list

export const getTodoItems = async(project_id) => {
    const date = new Date();
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const res = await authAPI.get(
        `/projects/${project_id}/deadline?year=${year}&month=${month}`
    )
    return res
};

export const createTodoItems = async(project_id,todo_name) => {

    const res = await authAPI.post(
        `/projects/${project_id}/todo`,
        {
            "content" : todo_name
        }
    )
    return res
}

export const deleteTodoItems = async(todo_id) => {
    await authAPI.delete(
        `/todo/${todo_id}`
    )
}

export const putTodoItems = async(todo_id,content,end,start) => {
    const res = await authAPI.put(
        `/todo/${todo_id}`,
        {
            "content" : content,
            "end_date" : end,
            "start_date" : start
        }
    )
    return res
}

export const patchTodoItems = async(todo_id,state) => {
    const res = await authAPI.patch(
        `/todo/complete/${todo_id}`,
        {
            "complete" : state
        }
    )
    return res
}