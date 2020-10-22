<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <!-- First Name -->
      <b-form-group id="input-group-1" >
        <b-form-input
          id="input-1"
          v-model="form.firstName"
          required
          placeholder="İsim"
        ></b-form-input>
      </b-form-group>
      <!-- Last Name -->
      <b-form-group id="input-group-2" >
        <b-form-input
          id="input-2"
          v-model="form.lastName"
          required
          placeholder="Soyisim"
        ></b-form-input>
      </b-form-group>
      <!-- Address -->
      <b-form-group id="input-group-3" >
        <b-form-input
          id="input-3"
          v-model="form.address"
          required
          placeholder="Adres"
        ></b-form-input>
      </b-form-group>
      <!-- Cities -->
      <b-form-select id="input-group-4"
      v-model="form.city"
      :options="cities"
      class="mb-3"
      required
      ></b-form-select>
      <!-- Province -->
      <b-form-group id="input-group-5" >
        <b-form-input
          id="input-5"
          v-model="form.province"
          required
          placeholder="İlçe"
        ></b-form-input>
      </b-form-group>
    <!-- E-mail -->
      <b-form-group id="input-group-6">
        <b-form-input
          id="input-6"
          v-model="form.email"
          type="email"
          required
          placeholder="E-mail"
        ></b-form-input>
      </b-form-group>
      <!-- Buttons -->
      <b-button class="b-button mr-5 mb-3" type="submit" variant="primary">Submit</b-button>
      <b-button class="b-button mr-5 mb-3" type="reset" variant="danger">Reset</b-button>
    </b-form> 
  </div>
</template>

<script>

import {db} from '../firebase/db';

// Musteriler
var clientRef = db.ref('musteriler/');
var newClient = clientRef.push();


export default {
    data() {
      return {
        
        form: {
          firstName: '',
          lastName: '',
          address: '',
          city:'Adana',
          province:'',
          email: '',
        },
        cities : ['Adana', 'Adıyaman', 'Afyon', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin',
'Aydın', 'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale',
'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir',
'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Isparta', 'Mersin', 'İstanbul', 'İzmir', 
'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 
'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Rize', 'Sakarya',
'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak',
'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman', 'Kırıkkale', 'Batman', 'Şırnak',
'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Düzce'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        newClient.set(this.form);
        window.location.reload();
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.firstName = ''
        this.form.lastName = ''
        this.form.address = ''
        this.form.city = ''
        this.form.province = ''
        this.form.email = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>


<style lang="css" scoped>
  .modal {
      background-color: rgba(0, 0, 0, 0.7);
  }
</style>
