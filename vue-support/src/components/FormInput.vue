<template>
    <div class="row">
        <input  class="input"
                :class="inputClass"
                :name="name"
                :type="type"
                :value.prop="text"
                :placeholder="placeholder"
                @input="update"
        />
    </div>
</template>

<script>
export default {
    model: {
        prop: 'text',
        event: 'update',
    },
    props: {
        name: {
            type: String,
        },
        type: {
            type: String,
            default: 'text',
        },
        placeholder: {
            type: String,
        },
        invalid: {
            type: Boolean,
            default: false,
        },
        text: {
            required: true,
        },
    },
    computed: {
        inputClass() {
            return {
                'invalid': this.invalid,
            };
        },
    },
    methods: {
        update(event) {
            this.$emit('update', event.currentTarget.value);
        },
    },
}
</script>