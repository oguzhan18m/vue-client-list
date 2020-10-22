<template>
  <div class="col s12 drag">
      <div class="col s12">
            <p>Şehirleri sürükleyerek listeyi istediğiniz şekilde sıralandırabilirsiniz.</p>
      </div>
     <div class="col s12 mx-auto">
        <draggable v-model="citiesMap" class="draggable-container" @ended="onEnd" ghost-class='ghost' @start="drag = true"
        @end="drag = false">
            <transition-group  type="transition" name="flip-list">
                <div  class="sortable mx-auto" v-for="city in citiesMap" :key="city.order">
                    <strong>{{city.item.city}}</strong>
                </div>
            </transition-group>
        </draggable>

        <button class="btn btn-success mb-3" @click="onSort">Şehre Göre Sırala</button>
     </div>
  </div>
</template>

<script>

import {db} from '../firebase/db';
import draggable from 'vuedraggable'


// Musteriler Ref
var clientRef = db.ref('musteriler');

//Snapshot
clientRef.on("value", function (snapshot) {
    snapshot.forEach((item)=>{
        citiesInFirebaseClients.push(item.val())
    })
})
//Cities Array
var citiesInFirebaseClients=[];

  export default {
      components: {
            draggable,
        },
        data() {
            return {
                citiesMap : citiesInFirebaseClients.map((item, index)=>{
                    return {item , order : index+1}
                }),
            }
        },
    methods: {
      onEnd(evt) {
        evt.preventDefault();
      },
        onSort(evt) {
        evt.preventDefault();
        this.citiesMap = this.citiesMap.sort((a, b) => a - b);
        console.log(this.citiesMap);
        var tempArray = [];
        this.citiesMap.forEach((row)=> tempArray.push(row.item))
        console.log(tempArray);
        
        clientRef.set(tempArray);
    }
    }
  }
</script>


    <style lang="css" scoped>
        .modal {
          background-color: rgba(0, 0, 0, 0.7);
      }
      .draggable-container{
          margin-bottom: 5px;
          width: 100%;
      }
        .sortable{
            width: 30%;
            background: white;
            padding: 0.1em;
            cursor: move;
            border: 1px solid grey;
            margin: 0.5em 0;
        }
        .flip-list{
            transition: transform 0.5s;
        }
        .ghost{
            border-left: 6px solid rgb(19, 80, 160);
            box-shadow: 10px 10px 5px -1px grey;
            opacity: 0.7;
        }
        
    </style>
