<template>
  <div>
    <h1 class="font-weight-regular">
      Daftar
      <span class="font-weight-bold">Makanan</span>
    </h1>
    <div class="mt-10">
      <v-text-field
        outlined
        label="Cari Makanan Kesukaan Anda"
        append-icon="mdi-magnify"
      ></v-text-field>
    </div>
    <div class="d-flex flex-wrap justify-space-between">
      <CardFood v-for="food in foods" :key="food.id" :data="food"/>
    </div>
  </div>
</template>

<script>
import CardFood from "../../components/CardFood";
import { db } from "../../services/firebase.service";

export default {
  data() {
    return {
      foods: [],
    };
  },
  firestore:{
      foods: db.collection('foods')
  },
  components: { CardFood },
};
</script>
