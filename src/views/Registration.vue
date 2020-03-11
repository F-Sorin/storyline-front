<template>
  <v-container>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="username"
      :counter="4"
      :rules="usernameRules"
      label="User name"
      required
    ></v-text-field>

    <v-text-field
      v-model="firstname"
      label="First name"
    ></v-text-field>

    <v-text-field
      v-model="lastname"
      label="Last name"
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="show1 ? 'text' : 'password'"
      name="input-10-1"
      label="Mot de passe"
      hint="At least 8 characters"
      counter
      @click:append="show1 = !show1"
    ></v-text-field>

    <v-text-field
      v-model="cpassword"
      :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="show2 ? 'text' : 'password'"
      name="input-10-1"
      label="Confirmation mot de passe"
      hint="At least 8 characters"
      counter
      @click:append="show2 = !show2"
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    username: '',
    usernameRules: [
      (v) => !!v || 'Username is required',
      (v) => (v && v.length >= 4) || 'Doit etre superieur à 4',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail requis',
      (v) => /.+@.+\..+/.test(v) || 'E-mail doit etre valide',
    ],
    firstname: '',
    lastname: '',
    password: '',
    cpassword: '',
    show1: false,
    show2: false,
    rules: {
      required: (value) => !!value || 'Required.',
      min: (v) => v.length >= 8 || 'Min 8 characters',
    },
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
  computed: {
    passwordConfirmationRule() {
      return () => (this.password === this.cpassword) || 'Password must match';
    },
  },
};
</script>

<style scoped>

</style>
