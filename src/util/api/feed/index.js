import axios from "axios";

// feed 추가, 삭제, 수정, 가져오기
export const getFeed = async(project_id) => {
    await axios.get(
        `/board/${project_id}`
    )
    .then((response) => {
        return response
    })
    .catch((error) => {
        return error
    })
}


export const createFeed = async(project_id,contents) => {
    await axios.post(
        `/board/${project_id}`,
        {
            content : contents
        }
    )
    .then((response) => {
        return response
    })
    .catch((error) => {
        return error
    })
}


export const deleteFeed = async(project_id) => {
    await axios.delete(
        `/board/${project_id}`,
        {
            header : {
                Authorization : `Bearer ${localStorage.getItem('access_token')}`
            }
        }
    )
}

export const patchFeed = async(project_id,content) => {
    await axios.patch(
        `/board/${project_id}`,
        {
            content : content
        }
    )
    .then((response) => {
        return response
    })
    .catch((error) => {
        return error
    })
}

export const fileFeed = async(project_id,link) => {
    await axios.post(
        `/boards/${project_id}/files`,
        {
            content : link
        }
    )
    .then((response) => {
        return response
    })
    .catch((error) => {
        return error
    })
}

// 댓글 작성, 삭제, 수정

export const getComments = async(project_id) => {
    await axios.get(
        `/boards/${project_id}/comments`
    )
    .then((response) => {
        return response
    })
    .catch((error) => {
        return error
    })
}

export const createComments = async(project_id,contents) => {
    await axios.post(
        `/boards/${project_id}/comments`,
        {
            content : contents
        }
    )
    .then((response) => {
        return response
    })
    .catch((error) => {
        return error
    })
}

export const patchComments = async(project_id,contents) => {
    await axios.patch(
        `/boards/${project_id}/comments`,
        {
            content : contents
        }
    )
}

export const deleteComments = async(project_id) => {
    await axios.delete(
        `/comments/${project_id}`,
        {
            header : {
                Authorization : `Bearer ${localStorage.getItem('access_token')}`
            }
        }
    )
}
