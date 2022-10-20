import { authAPI } from "../../../lib/API";

export const getTeams = async(user_id) => {
    const res = await authAPI.get(
        `/users/${user_id}/team`
    )
    return res
}

export const createTeams = async(team_name) => {
    const res =  await authAPI.post(
        '/teams',
        {
            "name" : team_name
        }
    )
    return res
}

export const deleteTeam = async(team_id,user_id) => {
    await authAPI.delete(
        `/teams/${team_id}/expulsion/${user_id}`
    )
}
export const deleteTeamMembers = async(team_id,user_id) => {
    await authAPI.delete(
        `/teams/${team_id}/expulsion/${user_id}`
    )
}
export const patchRecognize = async(team_id,user_id) => {
    const res = await authAPI.patch(
        `/teams/${team_id}/join`,
        {
            "member_id" : user_id
        }
    )
    return res
}
// team member
export const getTeamMembers = async(team_id) => {
    const res = await authAPI.get(
        `/teams/${team_id}/members`
    )
    return res
}
export const getTeamLeader = async(team_id) => {
    const res = await authAPI.get(
        `/teams/${team_id}/members`
    )
    return res
}
export const getWating = async(team_id)=> {
    const res = await authAPI.get(
        `/teams/${team_id}/waiting`
    )
    return res
}