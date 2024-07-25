import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', {
    state: () => ({
      count: 0,
      name:"this is apple"
    }),
    getters: {
      doubleCount: (state) => state.count * 2,
      status(){
        if(this.count >= 50){
          return "you are Pass"
        }else{
          return "you are Fail"
        }
      } 
       
    },
    actions:{
      increment() {
        this.count++
      },
      decrement() {
        this.count--
      }
     
    }
  })

  //for select user detail
export const useSelectUserStore = defineStore('counter', {
    state: () => ({
      userSelect:''
    }),
    getters: {

       
    },
    actions:{
     selectUserDetail(){
      this.useSelectUserStore
     }
     
    }
  })