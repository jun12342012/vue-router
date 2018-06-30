<template>
    <div id="app">
        <img src="./assets/logo.png"> <br>
        <div>
             <router-link to="/">首页</router-link>|
             <router-link to="/home">Home</router-link>|
             <router-link to="/home/hi1">Hi1页面1</router-link>|
             <router-link to="/home/hi2">Hi2页面2</router-link>|
             <router-link :to="{name:'hi1',params:{username:'jspang',ids:888}}">:to方法Hi1页面1</router-link>|
             <router-link :to="{name:'hi2'}">:to方法Hi2页面2</router-link>
             <router-link :to="{name:'duo1'}">:to方法duo1页面2</router-link>
             <br>
            

        </div>
        <p>路由的name: {{ $route.name }}</p>
        <router-view name='a'/>
        <router-view name='b'/>
        <router-view />

      
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
