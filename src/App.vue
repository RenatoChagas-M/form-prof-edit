<script setup>
import { ref, reactive } from "vue";

const infoUser = ref({
  name: '',
  email: '',
  password: '',
  born: '',
  address: '',
  state: '',
  progLang: '',
  bio: '',
})

const infoHobbies = ref([])

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
  avatar: undefined
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

    <div class="blur">

    </div>

    <aside>
      <transition name="form" mode="out-in">
        <section v-if="!showFormP1 && !showFormP2" class="user-form">
          <div class="userSaved-informations">

            <div class="saved-information-title">
              <p>Os Dados Informados:</p>
            </div>

            <div class="v-for-info">
              <img class="img-user" v-if="userImg.avatar" :src="userImg.avatar">
              <p v-for=" (value, key) of infoUser" :key="key">{{ key }}: {{ value }}</p>
              <div class="hobbie-row">
                <p>hobbies:</p>
                <p v-for="(value, key) of infoHobbies" :key="key"> {{ value }},</p>
              </div>
            </div>

          </div>

          <div class="back-to-form">
            <button @click="showFormP2 = !showFormP2">Back</button>
          </div>
        </section>

        <div v-else @submit.prevent="" validate class="two-forms">
          <transition>
            <form v-if="showFormP2" class="forms-p2">
              <div class="boxes-checks">
                <div class="check-boxes">
                  <div class="user-hobbies">
                    <label>State your hobbies:</label>
                    <div class="gap">
                      <input v-model="infoHobbies" class="input-write" type="checkbox" value="read">Ler
                    </div>
                    <div class="gap">
                      <input v-model="infoHobbies" class="input-write" type="checkbox" value="write">Escrever
                    </div>
                    <div class="gap">
                      <input v-model="infoHobbies" class="input-write" type="checkbox" value="draw">Desenhar
                    </div>
                    <div class="gap">
                      <input v-model="infoHobbies" class="input-write" type="checkbox" value="play">Jogar
                    </div>
                  </div>
                </div>

                <div class="user-prog-lang">
                  <label>State your favorite language:</label>
                  <div class="gap">
                    <input v-model="infoUser.progLang" class="input-write" type="radio" value="js">JavaScript
                  </div>
                  <div class="gap">
                    <input v-model="infoUser.progLang" class="input-write" type="radio" value="py">Python
                  </div>
                  <div class="gap">
                    <input v-model="infoUser.progLang" class="input-write" type="radio" value="java">Java
                  </div>
                  <div class="gap">
                    <input v-model="infoUser.progLang" class="input-write" type="radio" value="c">C
                  </div>
                </div>
              </div>

              <div class="profile-image">
                <input type="file" id="profileImg" accept="image/*" @input="saveProfileImg($event)">
              </div>

              <div class="biography">
                <textarea v-model="infoUser.bio" name="bio" cols="40" rows="8" required></textarea>
              </div>
              <div class="buttons">
                <div class="botao">
                  <button @click="alterarBooleano()">Voltar</button>
                </div>
                <div class="botao">
                  <button @click="showFormP2 = !showFormP2">Enviar</button>
                </div>
              </div>
            </form>

            <form v-else-if="showFormP1">

              <div class="tittle">
                <h1>Register</h1>
              </div>

              <div class="user-information">
                <div class="user-name above-inputs">
                  <input v-model="infoUser.name" placeholder="Please state your name" type="text" required>
                </div>

                <div class="user-email above-inputs">
                  <input v-model="infoUser.email" placeholder="Please state your email" type="email" required>
                </div>

                <div class="user-password above-inputs">
                  <input v-model="infoUser.password" placeholder="Please state your password" type="password" required>
                </div>

                <div class="user-verify-password above-inputs">
                  <input v-model="confirmPassword" placeholder="Please confirm your password" type="password" required>
                  <p v-if="infoUser.password !== confirmPassword">try again, passwords dont match</p>
                </div>

                <div class="user-born above-inputs">
                  <input v-model="infoUser.born" placeholder="Please state your born date" type="date" required>
                </div>

                <div class="user-address above-inputs">
                  <input class="buttons-f1" v-model="infoUser.address" placeholder="Please state your address" required>
                </div>

                <div class="user-city above-inputs">
                  <input v-model="userCity" placeholder="Please state your city" type="text" required>
                </div>

                <div class="user-states">
                  <select v-model="infoUser.state">
                    <option v-for="(value, index) of allStates" :key="index">{{ value.sigla
                      }}{{ value.name }}</option>
                  </select>
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

main {
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url(assets/images/e1519caf804117da6c0412380df0305b.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
}

aside {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 10px 0px rgb(0, 0, 0);
  width: 25vw;
  height: 70vh;
  padding: 20px;
  border-radius: 10px;
  z-index: 1;
}

.blur {
  backdrop-filter: blur(5px);
  width: 100vw;
  height: 100vh;
}

.user-information input,
user-states select {
  border-radius: 10px;
  border: 2px solid black;
  background-color: rgba(255, 255, 255, 0);
  width: 20vw;
  height: 4.5vh;
}

.user-information {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.above-inputs {
  margin: 5px 0px 15px 0px;
}

.tittle {
  display: flex;
  justify-content: center;
  align-items: center;
}

.sendButon {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.save-send-button {
  border-radius: 10px;
  border: 2px solid black;
  background-color: rgb(0, 0, 0);
  color: white;
  width: 5vw;
  height: 5vh;
}

.save-send-button:hover {
  transition: all 1s ease-in-out;
  background-color: rgb(255, 255, 255);
  color: black;
}

.user-prog-lang {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.forms-p2 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  height: 20vh;
  padding: 10px 20px 10px 20px;
}

.boxes-checks {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 250px;
}

.img-user {
  display: flex;
  border-radius: 50%;
  width: 200px;
  height: 200px;
}

.v-for-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
