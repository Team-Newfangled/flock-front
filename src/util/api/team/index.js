import axios from "axios";

export const getTeams = async(user_id) => {
    await axios.get(
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
                Authorization : window.localStorage.getItem('access-token')
            }
        }
    )
}

