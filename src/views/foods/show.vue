<template>
  <div>
    <div class="mt-10">
      <v-layout class="d-lg-flex" wrap>
        <v-flex lg6 md6 sm12>
          <v-card class="">
            <v-img
              :aspect-ratio="16 / 9"
              width="600"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
          </v-card>
        </v-flex>
        <v-flex lg6 md6 sm12 class="ml-10 mr-10">
          <h1 class="font-weight-bold pt-1">Sate</h1>
          <v-divider></v-divider>
          <div class="pt-5">
            <h2 class="font-weight-regular">
              Harga
              <span class="font-weight-bold">Rp.10000</span>
            </h2>
            <br />
            <v-text-field outlined label="Jumlah Pesanan"></v-text-field>
            <v-text-field outlined label="Keterangan"></v-text-field>
            <v-btn color="green darken-1" dark>
              <v-icon left dark>mdi-cart-outline</v-icon>
              Pesan
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>