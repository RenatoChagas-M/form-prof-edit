<script setup>
import { ref, reactive } from "vue";

const user = ref({
    name: '',
    email: '',
    password: '',
    born: '',
    address: '',
    state: '',
    linguagens: '',
    bio: '',
})

const cidadeUser = ref([""])

const estados = ref([
    { 'name': 'Acre', 'sigla': 'AC' },
    { 'name': 'Alagoas', 'sigla': 'AL' },
    { 'name': 'Amapá', 'sigla': 'AP' },
    { 'name': 'Amazonas', 'sigla': 'AM' },
    { 'name': 'Bahia', 'sigla': 'BA' },
    { 'name': 'Ceará', 'sigla': 'CE' },
    { 'name': 'Distrito Federal', 'sigla': 'DF' },
    { 'name': 'Espírito Santo', 'sigla': 'ES' },
    { 'name': 'Goiás', 'sigla': 'GO' },
    { 'name': 'Maranhão', 'sigla': 'MA' },
    { 'name': 'Mato Grosso', 'sigla': 'MT' },
    { 'name': 'Mato Grosso do Sul', 'sigla': 'MS' },
    { 'name': 'Minas Gerais', 'sigla': 'MG' },
    { 'name': 'Pará', 'sigla': 'PA' },
    { 'name': 'Paraíba', 'sigla': 'PB' },
    { 'name': 'Paraná', 'sigla': 'PR' },
    { 'name': 'Pernambuco', 'sigla': 'PE' },
    { 'name': 'Piauí', 'sigla': 'PI' },
    { 'name': 'Rio de Janeiro', 'sigla': 'RJ' },
    { 'name': 'Rio Grande do Norte', 'sigla': 'RN' },
    { 'name': 'Rio Grande do Sul', 'sigla': 'RS' },
    { 'name': 'Rondônia', 'sigla': 'RO' },
    { 'name': 'Roraima', 'sigla': 'RR' },
    { 'name': 'Santa Catarina', 'sigla': 'SC' },
    { 'name': 'São Paulo', 'sigla': 'SP' },
    { 'name': 'Sergipe', 'sigla': 'SE' },
    { 'name': 'Tocantins', 'sigla': 'TO' },
    { 'name': 'Estrangeiro', 'sigla': 'EX' }
])

const hobbiesSelecionado = ref([])

const linguagens = ref([' C#', ' Python', ' C++', ' JavaScript', ' PHP', ' Swift', ' Java', ' Go', ' SQL', ' Ruby'])

const confirmPassword = ref("")

const mostrarForms = ref(true)

</script>

<template>
    <main>
        <transition name="form" mode="out-in">
            <forms v-if="mostrarForms" class="flex justify-center items-center w-screen h-screen bg-green-500">
                <div class="flex flex-col w-40/1 h-95/1 rounded-xl bg-white overflow-y-auto">
                <div class="flex justify-center w-full p-5 font-poppins">
                    <h1 class="text-6xl">Forms</h1>
                </div>
                    <div class="flex flex-row w-full p-10">
                        <div class="w-45/1">
                            <input class="w-full" v-model="user.name" placeholder="Nome" type="text" required>
                        </div>
                        <div class="w-10/1"></div>
                        <div class="w-45/1">
                            <input class="w-full" v-model="user.email" placeholder="Email" type="email" required>
                        </div>
                    </div>

                    <div class="sobre-input">
                        <input class="input-css" v-model="user.password" placeholder="Senha" type="password" required>
                    </div>
                    <div class="sobre-input">
                        <input class="input-css" v-model="user.confirmPassword" placeholder="Confirme sua senha"
                            type="password" required>
                    </div>
                    <div class="sobre-input">
                        <input class="input-css" v-model="user.born" placeholder="Data de Nascimento" type="text"
                            onfocus="this.type='date'" required>
                    </div>
                    <div class="sobre-input">
                        <input class="input-css" v-model="user.address" placeholder="Endereço" type="text" required>
                    </div>
                    <div class="sobre-input">
                        <input class="input-css" v-model="user.cidadeUser" placeholder="Cidade" type="text" required>
                    </div>
                    <div class="sobre-input">
                        <select class="input-css" name="" id="">
                            <option disabled selected>Estado</option>
                            <option v-for="(value, index) in estados" :key="index" value="value.sigla">
                                {{ value.name }} - {{ value.sigla }}
                            </option>
                        </select>
                    </div>

                    <div class="sobre-input">
                        <input class="input-css" v-model="user.hobbies" placeholder="seu hobbie" type="text" required>
                    </div>


                    <div class="sobre-inputs-2">
                        <div class="">
                            <label for="">Linguagens de programação</label>
                        </div>
                        <div class="flex flex-wrap gap-5">
                            <div class="flex" v-for="(value, index) of linguagens" :key="index">
                                <label class="flex">
                                    {{ value }}
                                    <input type="checkbox" v-model="user.linguagens" :value="value">
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </forms>

            <!--Reultado Formulario-->

            <form v-else class="">

            </form>
        </transition>
    </main>
</template>

<style>

</style>