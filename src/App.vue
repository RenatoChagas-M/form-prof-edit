<script setup>
import { ref, reactive } from "vue";

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

const confirmPassword = ref("")

const userCity = ref([""])

const allStates = ref([
  { 'name': 'Estado', 'sigla': '' },
  { 'name': 'Acre', 'sigla': 'AC-' },
  { 'name': 'Alagoas', 'sigla': 'AL-' },
  { 'name': 'Amapá', 'sigla': 'AP-' },
  { 'name': 'Amazonas', 'sigla': 'AM-' },
  { 'name': 'Bahia', 'sigla': 'BA-' },
  { 'name': 'Ceará', 'sigla': 'CE-' },
  { 'name': 'Distrito Federal', 'sigla': 'DF-' },
  { 'name': 'Espírito Santo', 'sigla': 'ES-' },
  { 'name': 'Goiás', 'sigla': 'GO-' },
  { 'name': 'Maranhão', 'sigla': 'MA-' },
  { 'name': 'Mato Grosso', 'sigla': 'MT-' },
  { 'name': 'Mato Grosso do Sul', 'sigla': 'MS-' },
  { 'name': 'Minas Gerais', 'sigla': 'MG-' },
  { 'name': 'Pará', 'sigla': 'PA-' },
  { 'name': 'Paraíba', 'sigla': 'PB-' },
  { 'name': 'Paraná', 'sigla': 'PR-' },
  { 'name': 'Pernambuco', 'sigla': 'PE-' },
  { 'name': 'Piauí', 'sigla': 'PI-' },
  { 'name': 'Rio de Janeiro', 'sigla': 'RJ-' },
  { 'name': 'Rio Grande do Norte', 'sigla': 'RN-' },
  { 'name': 'Rio Grande do Sul', 'sigla': 'RS-' },
  { 'name': 'Rondônia', 'sigla': 'RO-' },
  { 'name': 'Roraima', 'sigla': 'RR-' },
  { 'name': 'Santa Catarina', 'sigla': 'SC-' },
  { 'name': 'São Paulo', 'sigla': 'SP-' },
  { 'name': 'Sergipe', 'sigla': 'SE-' },
  { 'name': 'Tocantins', 'sigla': 'TO-' },
  { 'name': 'Estrangeiro', 'sigla': 'EX-' }
])

const userImg = reactive({
  avatar: null
})

function saveProfileImg(e) {
  const target = e.target
  if (target && target.files && target.files.length > 0) {
    const file = target.files[0]
    userImg.avatar = URL.createObjectURL(file)
  }
}

const showFormP1 = ref(true)
const showFormP2 = ref(false)

const alterarBooleano = () => {
  showFormP1.value = !showFormP1.value
  showFormP2.value = !showFormP2.value
}

</script>

<template>
  <main>
    <aside>
      <transition name="form" mode="out-in">
        <section v-if="!showFormP1 && !showFormP2" class="user-form">
          <div class="userSaved-informations">

            <div class="saved-information-title">
              <p>Os Dados Informados:</p>
            </div>

            <div class="v-for-info">
              <p v-for="(value, key) of infoUser" :key="key">{{ key }}: {{ value }}</p>
            </div>

          </div>

          <div class="back-to-form">
            <button @click="showFormP2 = !showFormP2">Back</button>
          </div>
        </section>

        <div v-else @submit.prevent="" validate class="two-forms">
          <transition>
            <form v-if="showFormP2">

              <div class="check-boxes">
                <div class="user-hobbies">
                  <label for="hobbies">State your hobbies:</label>
                  <input type="checkbox" value="read">Ler
                  <input v-model="infoUser.hobbies" type="checkbox" value="study">Estudar
                  <input v-model="infoUser.hobbies" type="checkbox" value="play">Jogar
                  <input v-model="infoUser.hobbies" type="checkbox" value="watch">Assistir
                  <input v-model="infoUser.hobbies" type="checkbox" value="sporty">Esportes
                </div>

                <div class="user-prog-lang">
                  <label for="hobbies">State your favorite language:</label>
                  <input v-model="infoUser.progLang" type="radio" value="js">JavaScript
                  <input v-model="infoUser.progLang" type="radio" value="py">Python
                  <input v-model="infoUser.progLang" type="radio" value="java">Java
                  <input v-model="infoUser.progLang" type="radio" value="c">C
                </div>

              </div>

              <div class="profile-image">
                <input type="file" id="profileImg" accept="image/*" @change="saveProfileImg(e)">
              </div>

              <div class="biography">
                <textarea name="bio" cols="50" rows="10" required></textarea>
              </div>

              <div class="botao">
                <button @click="alterarBooleano()">Voltar</button>
              </div>
              <div class="botao">
                <button @click="showFormP2 = !showFormP2">Enviar</button>
              </div>


            </form>

            <form v-else-if="showFormP1">
              <div class="user-information">
                <div class="user-name">
                  <input v-model="infoUser.name" placeholder="Please state your name" type="text" required>
                </div>

                <div class="user-email">
                  <input v-model="infoUser.email" placeholder="Please state your email" type="email" required>
                </div>

                <div class="user-password">
                  <input v-model="infoUser.password" placeholder="Please state your password" type="password" required>
                </div>

                <div class="user-verify-password">
                  <input v-model="confirmPassword" placeholder="Please confirm your password" type="password" required>
                  <p v-if="infoUser.password !== confirmPassword">try again, passwords dont match</p>
                </div>

                <div class="user-born">
                  <input v-model="infoUser.born" placeholder="Please state your born date" type="date" required>
                </div>

                <div class="user-address">
                  <input v-model="infoUser.address" placeholder="Please state your address" type="text" required>
                </div>

                <div class="user-city">
                  <input v-model="userCity" placeholder="Please state your city" type="text" required>
                </div>
              </div>

              <div class="sendButon">
                <button class="save-send-button" @click="alterarBooleano()">Next</button>
              </div>
            </form>
          </transition>
        </div>
      </transition>
    </aside>
  </main>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main{
  align-items: center;
  display: flex;
  justify-content: end;
  width: 100vw;
  height: 100vh;
  background-image: url(assets/images/fundo-de-pintura-abstrata-com-pintura-em-aquarela-multicolorida-gerada-por-ia_188544-15558.avif);
  background-repeat: no-repeat;
  background-size: cover;
}

aside{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  margin: 0px 100px 0px 0px;
  width: 30vw;
  height: 40vh;
}
</style>
