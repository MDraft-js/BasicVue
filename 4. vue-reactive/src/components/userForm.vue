<template>
  <div class="user-from">
    <div class="flex">
      <div class="form-fields">
        <h2>Информация о себе:</h2>
        <div class="form-group" v-for="(fieldValue, fieldLabel, index) in formFields" :key="index">
          <label :for="fieldLabel">{{ fieldLabel }}:</label>
          <input class="form-control" :id="fieldLabel" v-model="formFields[fieldLabel]">
        </div>
        <button type="submit" class="btn btn-primary">Сохранить</button>
      </div>
      <div class="user-info">
        <h2>Предпросмотр:</h2>
        <p v-for="(fieldValue, fieldLabel, index) in formFields" :key="index">{{ `${fieldLabel}: ${fieldValue}`}}</p>
      </div>
    </div>
    <div class="form-group">
      <label for="additionalField">Дополнительное поле:</label>
      <input class="form-control" id="additionalField" v-model="additionalField">
    </div>
    <button type="button" class="btn btn-success" @click="addNewField">Добавить</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      formFields: {
        firstName: '',
        secondName: '',
        lastName: ''
      },
      additionalField: ''
    }
  },
  methods: {
    addNewField() {
      this.formFields[this.additionalField] = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  width: 400px;
}
.form-fields {
  margin-right: 50px;
  margin-bottom: 50px;
}
html {
  font-family: 'Roboto', sans-serif;
  color: #474747;
}

h1, h2, h3, h4 {
  font-weight: 700;
  color: #333333;
  margin-top: 0;
}

.flex {
  display: flex;
}

.list-default {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.list-default > li {
    font-size: 16px;
    margin-bottom: 14px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 40px;
}

.form-group > .form-control {
  display: initial;
}
</style>