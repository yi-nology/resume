<template>
    <div id="app">
<!--            <img alt="Vue logo" src="./assets/logo.png">-->
<!--            <HelloWorld msg="欢迎来到墨菲易简历"/>-->
        <Resume msg="欢迎来到墨菲易简历"/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    // import HelloWorld from './components/HelloWorld.vue';
    import Resume from './components/resume/Resume.vue'
    @Component({
        components: {
            // HelloWorld,
            Resume,
        },
    })
    export default class App extends Vue {
    }
</script>

<style lang="scss">
    #app {
        /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
        line-height: 1.2em;
        background-color: #f3f3f3;
        background-image: url(./assets/soft_wallpaper.png);
        background-repeat: repeat;
        background-attachment: fixed;
        background-position: 0px 0px;
        color: #444;
        height: 100%;
        width: auto;
        /*margin-top: 60px;*/
    }
</style>
