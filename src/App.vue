<template>
  <div id="app" class="container">
    <div class="col s12">
    <h1 class="col s6 mb-3">Müşteri Listesi</h1>
    <div class="col s6">
      <button @click.prevent="openModal" class="btn btn-primary mr-2 mb-3">
        Kayıt Ol
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/>
</svg>
        </button>
      <button @click.prevent="openSettings" class="btn btn-warning mb-3">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-gear" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"/>
  <path fill-rule="evenodd" d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"/>
</svg>
        Ayarlar
        </button>
    </div>
    </div>
     <SignUp v-if="modalOpen" />
     <Settings v-if="settingsOpen" />
    
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">İsim</th>
          <th scope="col">Soyisim</th>
          <th scope="col">Adres</th>
          <th scope="col">Şehir</th>
          <th scope="col">İlçe</th>
          <th scope="col">E-mail</th>
        </tr>
      </thead>
      
      <tbody v-for="(musteri,index) in musteriler" :key='index'>
        <tr>
          <td>{{musteri.firstName}}</td>
          <td>{{musteri.lastName}}</td>
          <td>{{musteri.address}}</td>
          <td>{{musteri.city}}</td>
          <td>{{musteri.province}}</td>
          <td>{{musteri.email}}</td>
        </tr>
      </tbody>
</table>
  </div>
</template>

<script>


import {db} from './firebase/db';
import SignUp from './components/SignUp';
import Settings from './components/Settings';

var clientRef = db.ref('musteriler');


export default {
  name: 'App',
  components : {
    SignUp,
    Settings,
  },
   firebase: {
    musteriler: clientRef,
  },
  data: ()=> {
        return {
            modalOpen: false,
            settingsOpen:false,
            musteriler:[],
        }
    },
    methods: {
        openModal() {
            this.modalOpen = !this.modalOpen;
        },
        openSettings(){
          this.settingsOpen = !this.settingsOpen;
        }    
    },
  
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
