import { authAPI } from "../../../lib/API";

// feed 추가, 삭제, 수정, 가져오기
export const getFeed = async(project_id) => {
    const res = await authAPI.get(
        `/board/${project_id}`
    )
}


export const createFeed = async(project_id,contents) => {
    const res = await authAPI.post(
        `/board/${project_id}`,
        {
            content : contents
        }
    )
}


export const deleteFeed = async(board_id) => {
    await authAPI.delete(
        `/board/${board_id}`
    )
}

export const patchFeed = async(project_id,content) => {
    const res = await authAPI.patch(
        `/board/${project_id}`,
        {
            content : content
        }
    )
}

export const fileFeed = async(project_id,link) => {
    const res = await authAPI.post(
        `/boards/${project_id}/files`,
        {
            content : link
        }
    )
}

// 댓글 작성, 삭제, 수정

export const getComments = async(project_id) => {
    const res = await authAPI.get(
        `/boards/${project_id}/comments`
    )
}

export const createComments = async(project_id,contents) => {
    const res = await authAPI.post(
        `/boards/${project_id}/comments`,
        {
            content : contents
        }
    )
}

export const patchComments = async(project_id,contents) => {
    await authAPI.patch(
        `/boards/${project_id}/comments`,
        {
            content : contents
        }
    )
}

export const deleteComments = async(project_id) => {
    await authAPI.delete(
        `/comments/${project_id}`,
    )
}
