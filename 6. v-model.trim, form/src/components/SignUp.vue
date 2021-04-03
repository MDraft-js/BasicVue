<template>
  <form class="sign-up">
    <div class="form-group">
      <label for="login">Логин:</label>
      <input id="login" class="form-control" v-model.trim="form.login">
    </div>
    <div class="form-group">
      <label for="login">Почта:</label>
      <input id="email" type="email" class="form-control" v-model.trim="form.email">
    </div>
    <div class="form-group">
      <label for="login">Пароль:</label>
      <input id="password" type="password" class="form-control" v-model.trim="form.password">
    </div>
    <div class="form-group">
      <label for="country">Страна проживания:</label>
      <select id="country" class="form-control" v-model="form.country">
        <option v-for="(country, index) in countries" :value="country.value" :key="index">{{country.label}}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="themes">Любимые темы:</label>
      <select id="themes" class="form-control" v-model="form.favouriteThemes" multiple>
        <option v-for="(theme, index) in themes" :value="theme.value" :key="index">{{theme.label}}</option>
      </select>
    </div>
    <div class="form-group form-check">
      <input type="checkbox" value="1" class="form-check-input" id="notification" v-model="form.agreeWithSendToMail">
      <label class="form-check-label" for="notification">Уведомлять меня о новых курсах</label>
    </div>
    <div class="form-group form-check">
      <input type="checkbox" value="2" class="form-check-input" id="notification2" v-model="form.agreeWithSendToMail">
      <label class="form-check-label" for="notification2">Уведомлять меня о новых курсах</label>
    </div>
    <div class="flex">
      <div class="form-check">
        <input class="form-check-input" type="radio" value="male" name="exampleRadios" id="male" v-model="form.gender">
        <label class="form-check-label" for="male">Мужчина</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" value="female" name="exampleRadios" id="female" v-model="form.gender">
        <label class="form-check-label" for="female">Женщина</label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Сохранить</button>
  </form>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      form: {
        login: '',
        email: '',
        password: '',
        country: 'Russia',
        gender: 'male',
        favouriteThemes: ['IT'],
        agreeWithSendToMail: [],
      },
      countries: [
        {
        label: 'Россия',
        value: 'Russia'
        }, 
        {
          label: 'Украина',
          value: 'Ukraine'
        },
        {
          label: 'США',
          value: 'USA'
      }],
      themes: [
        {
          label: 'Технологии',
          value: 'IT'
        },
        {
          label: 'Языки',
          value: 'languages'
        },
        {
          label: 'Математика',
          value: 'mathematics'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-control {
  width: 400px;
}
.form-check {
  margin-right: 10px;
}
button {
  margin-top: 15px;
}
</style>