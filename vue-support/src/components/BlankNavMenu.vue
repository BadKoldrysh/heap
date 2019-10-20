<template>
    <nav class="menu">
        <router-link :to="{ name: 'blank-a' }" class="blank-item">Blank A</router-link>
        <router-link :to="{ name: 'blank-b' }" class="blank-item">Blank B</router-link>
        <router-link :to="{ name: 'blank-c' }" class="blank-item">Blank C</router-link>
    </nav>
</template>

<style lang="stylus" scoped>
@import '../style/imports';

.menu {
    .blank-item {
        color: $md-lime-200;
        background-color: $md-deep-orange-300;

        &:hover {
            color: $md-deep-orange-800;
        }
    }

    .router-link-active {
        border-bottom-color: $md-deep-orange-900;

        &:hover {
            color: $md-lime-200;
        }
    }
}

</style>