<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar color="primary" dark flat>
                        <v-toolbar-title>Connexion</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid">
                            <v-text-field
                                    label="Email"
                                    v-model="email"
                                    :rules="emailRules"
                                    :counter="30"
                                    required
                            ></v-text-field>
    <!--                               prepend-icon="person"-->

                            <v-text-field
                                    label="Mot de passe"
                                    v-model="password"
                                    :rules="passwordRules"
                                    :counter="30"
                                    required
                            ></v-text-field>
    <!--                              prepend-icon="lock"-->
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary"
                               :disabled="!valid"
                               @click="validate">
                            Se connecter
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    valid: true,
    email: '',
    emailRules: [
      (v) => !!v || 'L\'addresse mail est obligatoire',
      (v) => /.+@.+/.test(v) || 'L\'adresse mail doit être valide',
    ],
    password: '',
    passwordRules: [
      (v) => !!v || 'Le mot de passe est obligatoire',
      (v) => (v && v.length <= 30) || 'La longueur du mot de passe ne peut excéder 30 charactères',
    ],
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style scoped>

</style>
