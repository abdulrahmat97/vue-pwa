<template>
  <v-app>
    <v-app-bar app color="white" flat>
      <div class="d-flex align-center">Resto Linov</div>

      <div class="d-flex align-center ml-5">
        <v-btn text to='/'>Home</v-btn>
        <v-btn text to="/foods">Foods</v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn text>
        <v-icon left> mdi-cart-outline </v-icon>
        <span class="mr-2">Keranjang</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
