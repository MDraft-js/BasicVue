<template>
    <div class="root">
        <label>
            Выберите кол-во продуктов:
            <button type="button" @click="minus">-</button><input type="number" :value="count" :min="minCount" :max="maxCount" /><button type="button" @click="plus">+</button>
        </label>
    </div>
</template>

<script>
export default {
    name: "helloComponent",
    data() {
        return {
            count: 1,
            minCount: 1,
            maxCount: 10
        }
    },
    methods: {
        plus() {
            if (this.count < this.maxCount) return this.count++
        },
        minus() {
            if (this.count > this.minCount) return this.count--
        }
    }
}
</script>