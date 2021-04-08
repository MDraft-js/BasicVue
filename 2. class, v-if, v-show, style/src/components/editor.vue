<template>
  <div class="root">
    <div class="flex">
      <div class="img-wrapper">
          <img v-show="isCatVisible" :class="imgFilters" src="../assets/cat.jpg" :style="imgStyles">
          <p v-if="!isCatVisible">Кот скоро вернётся :)</p>
        </div>
        <div class="controls">
          <h1>Шаверма-кот</h1>
          <button @click="isCatVisible = !isCatVisible" :class="!isCatVisible ? 'active' : ''">Показать\Спрятать</button>
          <button @click="imgFilters.sepia = !imgFilters.sepia" :class="imgFilters.sepia ? 'active' : ''">Сепия</button>
          <button @click="imgFilters.border = !imgFilters.border" :class="imgFilters.border ? 'active' : ''">Рамка</button>
          <button @click="imgFilters.small = !imgFilters.small" :class="imgFilters.small ? 'active' : ''">Уменьшить</button>
          <h2>Размер</h2>
          <div class="btn_group">
            <label>Ширина: {{ imgSizes.currentWidth }}</label>
            <input type="range" :value="imgSizes.currentWidth" @input="imgSizes.currentWidth = $event.target.value" :max="imgSizes.maxWidth">
            <label>Высота: {{ imgSizes.currentHeight }}</label>
            <input type="range" :value="imgSizes.currentHeight" @input="imgSizes.currentHeight = $event.target.value" :max="imgSizes.maxHeight">
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editor',
  data() {
    return {
      isCatVisible: true,
      imgFilters: {
        sepia: false,
        border: false,
        small: false
      },
      imgSizes: {
        maxWidth: 680,
        maxHeight: 480,
        currentWidth: 680,
        currentHeight: 480,
      }
    }
  },
  computed: {
    imgStyles() {
      return {
        width: `${this.imgSizes.currentWidth}px`,
        height: `${this.imgSizes.currentHeight}px`
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top: 40px;
}
.controls {
  margin-left: 20px;
}
.img-wrapper {
  width: 640px;
  height: 480px;
  background-color: #cecece;
}
img {
  transition: 0.2s ease;
}
img.sepia {
  filter: sepia(100%);
}
img.border {
  border: 5px dashed #464646
}
img.small {
  width: 400px !important;
}
button {
  margin-right: 10px;
}
button.active {
  background-color: #dbdbdb;
}
h2 {
  margin-bottom: 10px;
}
.btn-group {
  margin-bottom: 20px;
}
input[type="range"] {
  display: block;
}
</style>
