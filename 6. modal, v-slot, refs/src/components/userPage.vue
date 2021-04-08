<template>
  <div class="root">
    <button @click="isModalOpen = !isModalOpen">Отправить что-нибудь</button>
    <modal v-if="isModalOpen" title="Пользовательское соглашение" @close="isModalOpen = false">
      <div class="information">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, repellendus fugit. Perferendis molestiae reiciendis magni minus, saepe voluptatem. Laborum temporibus quas eos minus placeat saepe nisi nesciunt distinctio optio fugit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, repellendus fugit. Perferendis molestiae reiciendis magni minus, saepe voluptatem. Laborum temporibus quas eos minus placeat saepe nisi nesciunt distinctio optio fugit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, repellendus fugit. Perferendis molestiae reiciendis magni minus, saepe voluptatem. Laborum temporibus quas eos minus placeat saepe nisi nesciunt distinctio optio fugit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, repellendus fugit. Perferendis molestiae reiciendis magni minus, saepe voluptatem. Laborum temporibus quas eos minus placeat saepe nisi nesciunt distinctio optio fugit.
        </p>
      </div>
      <!-- <template v-slot:footer>
        <button type="button" class="btn btn-secondary" @click="closeModal">Отмена 1</button>
        <button type="button" class="btn btn-primary">Сохранить 1</button>
      </template> -->
    </modal>
  </div>
</template>

<script>
import Modal from './modal'

export default {
  name: 'userPage',
  components: { Modal },
  data() {
    return {
      isModalOpen: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
