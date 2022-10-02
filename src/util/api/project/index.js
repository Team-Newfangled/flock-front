import { authAPI } from "../../../lib/API";


export const createProjects = async({team_id,project_name}) => {
    const project_info = await authAPI.post(
        `/teams/${team_id}/projects`,
        {
            name : project_name
        }
    )
    return project_info
}

export const getProjects = async(team_id) => {
    await authAPI.get(
        `/projects/${team_id}`
    )
    .then((response) => {
        return response
    })
    .catch((error) => {
        return error
    })
}

export const deleteProject = async(project_id) => {
    await authAPI.post(
        `/projects/${project_id}`,
        {
            data : {
                project_id : project_id
            }
        }
    )
}

export const patchProject = async(project_id,project_name) => {
    await authAPI.patch( 
        `/projects/${project_id}`,
        {
            name : project_name
        }
    )
    .then((response) => {
        return response.name
    })
    .catch((error) => {
        return error
    })
}

// project 사진 추가 필요

// todo list

export const getTodoItems = async(project_id) => {
    await authAPI.get(
        `/projects/${project_id}/deadline`
    )
    .then((response) => {
        return response
    })
    .catch((error) => {
        return error
    })
};

export const createTodoItems = async(project_id,todo_name) => {
    await authAPI.post(
        `/projects/${project_id}/todo`,
        {
            content : todo_name
        }
    )
    .then((response) => {
        return response
    })
    .catch((error) => {
        return error
    })
}

export const deleteTodoItems = async(project_id) => {
    await authAPI.delete(
        `/todo/${project_id}`,
    )
}

export const putTodoItems = async(project_id,content,end,start) => {
    await authAPI.put(
        `/todo/${project_id}`,
        {
            content : content,
            end_date : end,
            start_date : start
        }
    )
    .then((response) => {
        return response
    })
    .catch((error) => {
        return error
    })
}

export const patchTodoItems = async(project_id,state) => {
    await authAPI.patch(
        `/todo/${project_id}`,
        {
            done : state
        }
    )
    .then((response) => {
        return response
    })
    .catch((error) => {
        return error
    })
}