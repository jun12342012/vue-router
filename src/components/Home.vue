<template>
    <div>
        <h2>{{msg}}</h2>
        <router-view></router-view>
    </div>
    
</template>

<script>
export default {
    data () {
        return {
            msg:'this is index'
        }
    }
}
</script>

<style  >

</style>
