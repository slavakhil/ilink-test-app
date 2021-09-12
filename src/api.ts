import axios from "axios";

export const getSente = () => {
    return axios({
        url: 'http://109.194.37.212:9080/graphql',
        method: 'post',
        data: {
            query: `
      query getSentence{
        sentence
        {
          ru,
          en
        }
      }
    `
        }
    })
}