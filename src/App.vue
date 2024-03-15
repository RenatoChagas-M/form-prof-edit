<script setup>
import { ref } from "vue";

const infoUser = ref({
  name: '',
  email: '',
  password: '',
  born: '',
  address: '',
  state: '',
  hobbies: '',
  progLang: '',
  bio: '',
})

const userCity = ref([""])

const showProfile = ref(false)

function saveprofile() {
  showProfile.value = true
}

</script>

<template>
  <main>
    <transition name="form" mode="out-in">
      <section v-if="showProfile" class="user-form">
        <div class="userSaved-informations">

          <div class="saved-ifnromation-tiitle">
            <p>Os Dados Informados:</p>
          </div>

          <div class="v-for-info">
            <p v-for="(value, key) of infoUser" :key="key">{{ key }}: {{ value }}</p>
          </div>

        </div>

        <div class="back-to-form">
          <button @click="showProfile = false">Back</button>
        </div>
      </section>


      <form v-else @submit.prevent="saveprofile()" validate>
        <div class="user-information">
          <div class="user-name">
            <input placeholder="Please state your name" type="text">
          </div>

          <div class="user-email">
            <input placeholder="Please state your email" type="text">
          </div>

          <div class="user-date-of-birth">
            <input placeholder="Please state your date of birth" type="text">
          </div>

          <div class="user-addres">
            <input placeholder="Please state your addres" type="text">
          </div>

          <div class="user-hobbies">

          </div>

          <div class="user-prog-lang">

          </div>

          <div class="biography">

          </div>
        </div>

        <div class="sendButon">
          <button class="save-send-button" type="submit">Send</button>
        </div>
      </form>

    </transition>
  </main>
</template>

<style scoped></style>
