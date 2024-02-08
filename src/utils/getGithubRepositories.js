import axios from "axios";
import githubApiURL from "./githubApiURL";

export const getRepositories = username =>
    axios.get(`${githubApiURL}/users/${username}/repos`)
        .then(response => response.data);