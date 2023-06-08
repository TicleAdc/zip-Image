<template>
  <div>
    it's home page.
    <div>counter:{{ counter }}</div>
    <div>doubleCount: {{ doubleCount }}</div>
    <el-button @click="main.randomizeCounter()">counter(round)</el-button>
    <el-button type="primary" @click="main.increment()">counter++</el-button>

    <div>{{ name }}</div>
    <el-button type="primary" @click="amend()">修改</el-button>
  </div>
</template>

<script setup lang='ts'>
import {useMain} from '@/store/home'
import {storeToRefs} from 'pinia'

const main = useMain()

let {counter, name, doubleCount} = storeToRefs(main)

console.log(counter);

main.increment()

// counter = 999

const amend = () => {
    main.$patch((state) => {
        state.counter = 10,
        state.name = '你瞅啥'
    })
}


</script>

<style lang="scss"  scoped>
    
</style>
