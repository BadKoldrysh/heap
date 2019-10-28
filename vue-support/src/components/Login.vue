<template>
    <main class="login">
        <h1>Please login to continue</h1>
        <form>
            <FormInput
                name="username"
                placeholder="Username"
                v-model="username"
            />
        </form>
    </main>
</template>

<script>
export default {
    data() {
        return {
            username: '',
        }
    },
}
</script>