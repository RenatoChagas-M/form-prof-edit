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

const allStates = ref([
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
])

</script>

<template>
  <main>
    <transition name="form" mode="out-in">
      <section v-if="showProfile" class="user-form">
        <div class="userSaved-informations">

          <div class="saved-information-title">
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
            <input placeholder="Please state your name" type="text" required>
          </div>

          <div class="user-email">
            <input placeholder="Please state your email" type="email" required>
          </div>

          <div class="user-date-of-birth">
            <input placeholder="Please state your date of birth" type="date" required>
          </div>

          <div class="user-addres">
            <input placeholder="Please state your addres" type="text" required>
          </div>

          <div class="user-city">
            <input placeholder="Please state your city" type="text" required>
          </div>

          <div class="user-state">
            <label for="whichState">which stste do you live?</label>
            <select name="States">
              <option v-for=""></option>
            </select>
          </div>

          <div class="check-boxes">
            <div class="user-hobbies">
              <label for="hobbies">State your hobbies:</label>
              <input type="checkbox" value="read">Ler
              <input type="checkbox" value="study">Estudar
              <input type="checkbox" value="sports">Praticar esportes
              <input type="checkbox" value="watch">Asissistir Coisas
              <input type="checkbox" name="art">Arte
            </div>

            <div class="user-prog-lang">
              <label for="hobbies">State your hobbies:</label>
              <input type="checkbox" value="js">JavaScript
              <input type="checkbox" value="python">Python
              <input type="checkbox" value="vue">Vue
              <input type="checkbox" value="tp">TypesScript
            </div>
          </div>

          <div class="biography">
            <textarea name="bio" cols="50" rows="10" required></textarea>
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
