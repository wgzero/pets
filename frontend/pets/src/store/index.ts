import { createStore } from 'vuex'

export interface showlistProps {
  id: number;
  desc: string;
  discountMoney: number,
  money: number,
  tag ?: string;
  type ?: string;
  sales ?: number,
  imgUrl: string ,
  num?: number,
}

// 用户信息
export interface UserProps {
  username: string,
  imgUrl ?: string
  nickName ?:string
}

export interface GlobalDataProps {
  shopList: showlistProps[]
  token: string
  userInfo: UserProps
}



export default createStore<GlobalDataProps>({
  state: {
    shopList: [],
    token: "",
    userInfo: {
      username: ""
    }
  },
  mutations: {
    setShowList(state, data){
      state.shopList.push(data)
    }
  },
  actions: {
  },
  modules: {
  }
})
