import {Module} from 'vuex';
import IRootState from './type'
interface ILoginState{
    token:string
    userInfo:any
}

const loginModule:Module<ILoginState, IRootState> = {
    namespaced:true,
    state(){
        return{
            token:'',
            userInfo:[]
        }
    },
    actions:{
        accountLoginAction({commit},payload:any){
            console.log("sss")
        }
    }

}

export default  loginModule