import axios from "axios";
import { authAPI } from "../../../lib/API";

export const getTeams = async(user_id) => {
    await authAPI.get(
        '/users/' + user_id + '/team'
    )
    .then((response) => {
        return response
    })
    .catch((error) => {
        return error
    })
}

export const createTeams = async(team_name) => {
    await axios.post(
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
    await axios.delete(
        '/teams/' + team_id + '/explusion/' + user_id,
        {
            header : {
                Authorization : `Bearer ${localStorage.getItem('access_token')}`
            }
        }
    )
}


export const getTeamMembers = async(team_id) => {
    await axios.get(
        '/teams/' + team_id + '/members'
     )
     .then((response) => {
        return response
     })
     .catch((error) => {
        return error
     })
}

export const deleteTeamMembers = async(team_id,user_id) => {
    await axios.delete(
        '/teams/' + team_id + '/explusion/' + user_id,
        {
            header : {
                Authorization : `Bearer ${localStorage.getItem('access_token')}`
            }
        }
    )
}