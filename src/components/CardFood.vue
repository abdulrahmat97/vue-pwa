<template>
  <div>
    <v-card class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="250"
        :src="'img/foods/'+data.foto"
      ></v-img>

      <v-card-title>{{data.nama}}</v-card-title>

      <v-card-text>
        <div>
          <h4>{{data.nama}}</h4>
          <h4>Harga : {{data.harga | currency}}</h4>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="green darken-1" dark>
          <v-icon left dark>mdi-cart-outline</v-icon>
          Pesan
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
    props:['data']
};
</script>

<style>
</style>