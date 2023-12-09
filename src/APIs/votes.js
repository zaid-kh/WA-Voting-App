import axios from "axios";
import { baseUrl } from "./API";

/** URL for votes resource */
const url = `${baseUrl}/vote`;

/** retreives an array of votes */
export async function getVotes() {
  try {
    const response = await axios.get(url);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

/** creates new vote for certain user
 * @param {Number} userId
 * @param {String} option
 *
 */
export async function createVote(userId, option) {
  try {
    const data = { userId, option };
    const response = await axios.post(url, data);
    console.log(response);
    return response.status;
  } catch (error) {
    console.error(error);
  }
}
