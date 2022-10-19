import { authAPI } from "../../../lib/API";

// feed 추가, 삭제, 수정, 가져오기
export const getFeed = async(project_id) => {
    const res = await authAPI.get(
        `/projects/${project_id}/boards`
    )
    return res
}


export const createFeed = async(project_id,contents) => {
    const res = await authAPI.post(
        `/projects/${project_id}/boards`,
        {
            content : contents
        }
    )
    return res
}


export const deleteFeed = async(board_id) => {
    await authAPI.delete(
        `/boards/${board_id}`
    )
}

export const patchFeed = async(feedId,content) => {
    const res = await authAPI.patch(
        `/boards/${feedId}`,
        {
            content : content
        }
    )
    return res
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
        `/board/${project_id}/comments`
    )
    return res
}

export const createComments = async(feedId,contents) => {
    const res = await authAPI.post(
        `/board/${feedId}/comments`,
        {
            content : contents
        }
    )
    return res
}

export const patchComments = async(feedId,contents) => {
    await authAPI.patch(
        `/boards/${feedId}/comments`,
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
