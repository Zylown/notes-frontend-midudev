import axios from "axios";
const baseUrl = "https://lazy-pink-deer-ring.cyclic.app/api/notes";
// const baseUrl = "http://localhost:3001/api/notes";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const request = axios.post(baseUrl, newObject, config);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const request = axios.put(`${baseUrl}/${id}`, newObject, config);
  return request.then((response) => response.data);
};

export default { getAll, create, update, setToken };

/*
//SEVASTIAN
import axios from "axios";

// const baseUrl = "https://jsonplaceholder.typicode.com/posts";
const baseUrl = "http://localhost:3001/api/notes";

export const getAllNotes = () => {
  return axios.get(baseUrl).then((response) => {
    const { data } = response;
    return data;
  });
};

export const createNote = ({ title, body, id, userId }) => {
  return axios.post(baseUrl, { title, body, id, userId }).then((response) => {
    return response.data;
    // setNotes([...notes, response.data]);
  });
};*/
