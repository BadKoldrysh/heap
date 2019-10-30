<template>
    <div class="app-layout">
        <header class="header">
            <div>
                <img src="../assets/logo.svg" class="img" />
            </div>
            <div>My shirt shop</div>
        </header>

        <NavMenu />
        <BlankNavMenu />
        <!-- Special component by vue-router -->
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<script>
import NavMenu from './NavMenu.vue';
import BlankNavMenu from './BlankNavMenu.vue';
export default {
    components: {
        NavMenu,
        BlankNavMenu,
    },
};
</script>

<style lang="stylus">
@import '../style/main';
</style>

<style lang="stylus" scoped>
.header {
    .img {
        width: 64px;
        height: 64px;
    }
}
</style>