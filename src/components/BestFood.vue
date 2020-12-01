<template>
  <div>
    <div class="d-flex justify-space-between">
      <h3 class="title align-self-center">Best Foods</h3>
      <v-btn color="green align-self-center" dark to="/foods"
        ><v-icon left dark> mdi-eye </v-icon>Lihat Semua</v-btn
      >
    </div>
    <div class="d-flex justify-space-between">
      <CardFood v-for="item in bestfoods" :key="item.id" :data="item"/>
    </div>
  </div>
</template>

<script>
import CardFood from "../components/CardFood";
import { db } from "../services/firebase.service";
export default {
  data() {
    return {
      bestfoods: [],
    };
  },
  firestore:{
      bestfoods: db.collection('foods').limit(3)
  },
  components: { CardFood },
};
</script>

<style>
</style>