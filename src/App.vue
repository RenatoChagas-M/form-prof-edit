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
  {'nome':'Acre', 'sigla': 'AC'},
  {'nome':'Alagoas', 'sigla': 'AL'},
  {'nome':'Amapá', 'sigla': 'AP'},
  {'nome':'Amazonas', 'sigla': 'AM'},
  {'nome':'Bahia', 'sigla': 'BA'},
  {'nome':'Ceará', 'sigla': 'CE'},
  {'nome':'Distrito Federal', 'sigla': 'DF'},
  {'nome':'Espírito Santo', 'sigla': 'ES'},
  {'nome':'Goiás', 'sigla': 'GO'},
  {'nome':'Maranhão', 'sigla': 'MA'},
  {'nome':'Mato Grosso', 'sigla': 'MT'},
  {'nome':'Mato Grosso do Sul', 'sigla': 'MS'},
  {'nome':'Minas Gerais', 'sigla': 'MG'},
  {'nome':'Pará', 'sigla': 'PA'},
  {'nome':'Paraíba', 'sigla': 'PB'},
  {'nome':'Paraná', 'sigla': 'PR'},
  {'nome':'Pernambuco', 'sigla': 'PE'},
  {'nome':'Piauí', 'sigla': 'PI'},
  {'nome':'Rio de Janeiro', 'sigla': 'RJ'},
  {'nome':'Rio Grande do Norte', 'sigla': 'RN'},
  {'nome':'Rio Grande do Sul', 'sigla': 'RS'},
  {'nome':'Rondônia', 'sigla': 'RO'},
  {'nome':'Roraima', 'sigla': 'RR'},
  {'nome':'Santa Catarina', 'sigla': 'SC'},
  {'nome':'São Paulo', 'sigla': 'SP'},
  {'nome':'Sergipe', 'sigla': 'SE'},
  {'nome':'Tocantins', 'sigla': 'TO'}
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
              <option v-for="(value, index) of allStates" :key="index">{{value.sigla}}-{{value.nome}}</option>
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
