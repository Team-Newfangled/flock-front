import axios from "axios";
import { authAPI } from "../../../lib/API";

export const getTeams = async(user_id) => {
    const res = await authAPI.get(
        `/users/${user_id}/team`
    )
    return res
}

export const createTeams = async(team_name) => {
    await authAPI.post(
        '/teams',
        {
            name : team_name
        }
    )
    .then((response) => {
        return response
    })
    .catch((error) => {
        return error
    })
}

export const deleteTeam = async(team_id,user_id) => {
    await authAPI.delete(
        `/teams/${team_id}/expulsion/${user_id}`
    )
}


export const getTeamMembers = async(team_id) => {
    await authAPI.get(
        `/teams/${team_id}/members`
     )
     .then((response) => {
        return response
     })
     .catch((error) => {
        return error
     })
}

export const deleteTeamMembers = async(team_id,user_id) => {
    await authAPI.delete(
        `/teams/${team_id}/expulsion/${user_id}`
    )
}


