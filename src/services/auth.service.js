import BaseService from "./base.service"
import { TOKEN_NAME } from '@/configs'

export default class AuthService extends BaseService {

    static async auth(params) {
        return new Promise((resolve, reject) => {
            this.request()
                .post('/auth', params)
                .then(response => {
                    localStorage.setItem(TOKEN_NAME, response.data.token)
                    resolve(response)
                })
                .catch(error => reject(error.response))
        })
    }


    static async getMe() {
        // pode ser que o token ainda nem exista, então evitamos uma requisição para a API
        const token = await localStorage.getItem(TOKEN_NAME)

        if(!token) {
            return Promise.reject('Token Not Found')
        }

        return new Promise((resolve, reject) => {
            this.request({auth: true})
                .get('/me')
                .catch(error => { // quando cair no erro, vai deletar o token
                    localStorage.removeItem(TOKEN_NAME)
                    reject(error.response)
                }) 
        })
    }
}