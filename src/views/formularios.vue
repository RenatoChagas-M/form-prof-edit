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
const showFormP3 = ref(false)

function tradeSCreen2(){
  console.log("oi")
  showFormP2.value = !showFormP2.value
  showFormP3.value = !showFormP2.value
}

function tradeScreen1(){
  if(infoUser.value.password !== confirmPassword.value){
    alert("try again, passwords dont match")
  }
  else{
    showFormP1.value = !showFormP1.value
    showFormP2.value = !showFormP2.value
  }
}


</script>

<!--formulario abaixo-->
<template>
  <transition name="form" mode="out-in">
    <main>
      <form v-if="showFormP1" @submit.prevent="tradeScreen1" class="form1 flex justify-center items-center w-screen h-screen ">
        <section class="flex flex-col w-40/1 h-90/1 rounded-xl bg-blue-300 overflow-y-auto p-5 ">
          <div class="w-full h-auto p-5">
            <h1 class="text-5xl text-center">Register</h1>
          </div>
          <div class="flex flex-col justify-center items-center pt-10 gap-10">
            <div class="form1">
              <input v-model="infoUser.name" placeholder="Please state your name" type="text" required>
            </div>

            <div class="form1">
              <input v-model="infoUser.email" placeholder="Please state your email" type="email" required>
            </div>

            <div class="form1">
              <input v-model="infoUser.password" placeholder="Please state your password" type="password" required>
            </div>

            <div class="form1">
              <input v-model="confirmPassword" placeholder="Please confirm your password" type="password" required>
              <p v-if="infoUser.password !== confirmPassword">try again, passwords dont match</p>
            </div>

            <div class="form1">
              <input v-model="infoUser.born" placeholder="Please state your born date" type="date" required>
            </div>

            <div class="form1">
              <input class="" v-model="infoUser.address" placeholder="Please state your address" required>
            </div>

            <div class="form1">
              <input v-model="userCity" placeholder="Please state your city" type="text" required>
            </div>

            <div class="form1">
              <select v-model="infoUser.state">
                <option disabled selected>Estado</option>
                <option v-for="(value, index) of allStates" :key="index">{{ value.sigla
                  }}{{ value.name }}</option>
              </select>
            </div>
          </div>
          <div class="flex justify-center p-8 w-full h-auto :">
            <button type="submit" class="w-24 h-10 bg-black text-white rounded-2xl" > Proxima </button>
          </div>
        </section>
      </form>

      <div validate class="two-forms">
        <transition>
          <form v-if="showFormP2" @submit.prevent="tradeSCreen2"  class="flex justify-center items-center w-screen h-screen ">
            <section class="flex flex-col w-40/1 h-90/1 rounded-xl bg-blue-300 overflow-y-auto p-5 ">
              <div class="flex w-full justify-center gap-20">
                <div class="w-50/1 p-5 bg-blue-400 rounded-2xl">
                  <div class="text-xl">
                    <label>State your hobbies:</label>
                  </div>
                  <div class="">
                    <label class="">Read</label>
                    <input v-model="infoHobbies" class="input-write" type="checkbox" value="read">
                  </div>
                  <div class="">
                    <label class="">Write</label>
                    <input v-model="infoHobbies" class="input-write" type="checkbox" value="write">
                  </div>
                  <div class="">
                    <label class="">Draw</label>
                    <input v-model="infoHobbies" class="input-write" type="checkbox" value="draw">
                  </div>
                  <div class="">
                    <label class="">Play</label>
                    <input v-model="infoHobbies" class="input-write" type="checkbox" value="play">
                  </div>
                </div>

                <div class="w-50/1 p-5 bg-blue-400 rounded-2xl">
                  <div class="text-xl">
                    <label>State your favorite language:</label>
                  </div>
                  <div class="">
                    <label>JavaScript</label>
                    <input v-model="infoUser.progLang" class="input-write" type="radio" value="js">
                  </div>
                  <div class="">
                    <label class="">Python</label>
                    <input v-model="infoUser.progLang" class="input-write" type="radio" value="py">
                  </div>
                  <div class="">
                    <label class="">Java</label>
                    <input v-model="infoUser.progLang" class="input-write" type="radio" value="java">
                  </div>
                  <div class="">
                    <label class="">C</label>
                    <input v-model="infoUser.progLang" class="input-write" type="radio" value="c">
                  </div>
                </div>
              </div>

              <div class="flex justify-center items-center p-10">
                <div class="flex flex-col bg-blue-400 p-5 rounded-2xl">
                  <label class="">Avatar photo</label>
                  <input type="file" id="profileImg" accept="image/*" @input="saveProfileImg($event)">
                </div>
              </div>

              <div class="flex justify-center items-center w-full p-5">
                <div class="w-full p-5 bg-blue-400 rounded-2xl">
                  <textarea class="w-full rounded-2xl" v-model="infoUser.bio" name="bio" cols="40" rows="8"
                    required></textarea>
                </div>
              </div>

              <div class="flex justify-center gap-10 w-full p-5">
                <button type="submit" class="bg-blue-400 p-3 w-18 rounded-xl">Enviar</button>
                <button type="button" class="bg-blue-400 p-3 w-18 rounded-xl" @click="tradeScreen1()">Voltar</button>
              </div>
            </section>
          </form>

         

        </transition>
      </div>

      <form @submit.prevent="tradeSCreen2" class="form1 flex justify-center items-center w-screen h-screen ">
        <section class="flex flex-col justify-center items-center w-40/1 h-90/1 rounded-xl bg-blue-300 overflow-y-auto p-5">
          <div class="p-10 bg-blue-400 rounded-xl">
            <div class="">
              <p>Os Dados Informados:</p>
            </div>

            <div class="v-for-info">
              <img class="p-10" v-if="userImg.avatar" :src="userImg.avatar">
              <p class="p-1" v-for=" (value, key) of infoUser" :key="key">{{ key }}: {{ value }}</p>
              <div class="hobbie-row">
                <p class="p-1">hobbies:</p>
                <p class="p-1" v-for="(value, key) of infoHobbies" :key="key"> {{ value }},</p>
              </div>
            </div>
          </div>
          
          <div class="flex justify-center w-60 rounded-xl p-2 mt-2 bg-blue-400">
            <button class="w-60">Back</button>
          </div>
        </section>

      </form>
    </main>
  </transition>
  
</template>

<style scoped>
.form1 {
  width: 100%;
}

.form1 input,
.form1 select {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding-left: 10px;
}

.form2 {
  display: flex;
  gap: 20px;
}
</style>