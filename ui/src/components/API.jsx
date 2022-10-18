const API = 'http://localhost:4000/api';

export const getAllTask = () => {
    return fetch(`${API}/tasks`, {
        method: "GET"
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            return err.json();
        });
};