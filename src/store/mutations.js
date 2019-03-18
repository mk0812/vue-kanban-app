import * as types from './mutation-type'

export default {
	[types.AUTH_LOGIN] (state,payload){
		throw new Error('Auth')
	}
}