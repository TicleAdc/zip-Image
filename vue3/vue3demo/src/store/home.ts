import {defineStore} from 'pinia'

export const useMain = defineStore('main', {
    state: () => {
        return {
            counter: 0,
            name: '随便写写测试pinia'
        }
    },

    getters: {
        doubleCount:(state) => {
            return state.counter*2
        }
    },

    actions: {
        increment() {
            this.counter++
        },
        randomizeCounter(){
            setTimeout(() => {
               this.counter = Math.round(Math.random()*100) 
            }, 0);
        }
    }
})