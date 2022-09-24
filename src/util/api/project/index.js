import axios from "axios";


export const getProjects = async(team_id) => {
    await axios.get(
        '/projects/' + team_id
    )
    .then((response) => {
        return response
    })
    .catch((error) => {
        return error
    })
}

export const deleteProject = async(project_id) => {
    await axios.post(
        '/projects' + project_id,
        {
            header : {
                Authorization : window.localStorage.getItem('access_token')
            },
            data : {
                project_id : project_id
            }
        }
    )
}

export const patchProject = async(project_id,project_name) => {
    await axios.patch(
        '/projects' + project_id,
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
    await axios.get(
        '/projects/' + project_id + '/todo'
    )
    .then((response) => {
        return response
    })
    .catch((error) => {
        return error
    })
};

export const createTodoItems = async(project_id,project_name) => {
    await axios.post(
        '/projects/' + project_id + '/todo',
        {
            name : project_name
        }
    )
    .then((response) => {
        return response
    })
    .catch((error) => {
        return error
    })
}


