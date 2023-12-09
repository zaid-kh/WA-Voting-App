import axios from "axios";
import { baseUrl } from "./API";

/** URL for users resource */
const url = `${baseUrl}/users`;

/** retreives an array of users */
export async function getUsers() {
  try {
    const response = await axios.get(url);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

/** retrieves certain user data
 * @param {Number} id
 */
export async function getUser(id) {
  try {
    const response = await axios.get(`${url}/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

/** updates user data
 * @param {Number} id
 * @param {Object} user
 */
export async function updateUser(id, user) {
  try {
    const response = await axios.put(`${url}/${id}`, user);
    console.log(response);
    return response.status;
  } catch (error) {
    console.error(error);
  }
}
