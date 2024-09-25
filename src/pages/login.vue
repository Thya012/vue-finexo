<template>

  <div class="glass-container">
    <div class=" login-box">
      <h2>Login</h2>
      <Form @submit="handleSubmit">
        <!-- <div v-if="error" class="alert alert-danger" role="alert">Error Login!</div>
    <div v-if="success" class="alert alert-success" role="alert">
      A simple success alert—check it out!
    </div> -->
        <Field type="email" name="email" v-model="email" :rules="isEmail" required placeholder="Email" />
        <div class="form-notch">

          <div class="form-notch-middle" style="padding-top: 20px; font-size: 10px;">
            <ErrorMessage name="email" class="alert alert-danger" />
          </div>
          <div class="form-notch-trailing"></div>
        </div>
      

        <Field type="password" name="password" :rules="passwordRule" v-model="password" required
          placeholder="Password" />


          <div class="form-notch">

<div class="form-notch-middle" style="padding-top: 20px; font-size: 10px;">
  <ErrorMessage name="password" class="alert alert-danger" />
</div>
<div class="form-notch-trailing"></div>
</div>


        <div class="options">

          <input type="checkbox" value="remember-me">
          <label>Remember me </label>
        </div>

        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p>Please <router-link href="/register">Register</router-link></p>
      </Form>

    </div>
  </div>


</template>
<script>
import axios from "axios";
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      email: "",
      password: "",
      error: false,
      success: false,
      isEmail: yup.string().required().email(),
      passwordRule: yup.string().min(8),
    };
  },
  methods: {
    resetInput() {
      this.email = "";
      this.password = "";
    },
    async handleSubmit() {
      try {
        // Code with potential error
        const reponse = await axios.post("/v1/auth/login", {
          email: this.email,
          password: this.password,
        });
        // Localstorage
        localStorage.setItem("accessToken", reponse.data.accessToken);
        this.resetInput();
        this.error = false;
        this.success = true;
      } catch (err) {
        this.resetInput();
        this.error = true;
        this.success = false;
        console.log("Error login");
      }
    },
  },
};
</script>
<style scoped>
.error {
  color: red;
}

* {
  margin: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;

}

.glass-container {
  widows: 300px;
  height: 400px;
  position: relative;
  z-index: 1;
  background: rgb(145, 192, 239);

  box-shadow: 0 4px 6px rgba(0, 0, 0, 1);
  border-radius: 10px;
  border: 2px solid #fff;
}

button {
  background: #fff;
  color: black;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 15px;
}

button:hover {
  background: transparent;
  color: white;
  outline: 1px solid #fff;
}

p {
  font-size: 12px;
  color: #fff;
  margin-top: 15px;
}

form {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

input {
  padding: 10px;
  margin-top: 25px;
  background: transparent;
  border: 1px solid #fff;
  font-size: 13px;
}

input::placeholder {
  color: #fff;
}

.glass-container::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: -1;
}

.login-box {
  max-width: 250px;
  margin: 0 auto;
  text-align: center;
}

h2 {
  color: #fff;
  margin-top: 30px;
  margin-bottom: -20px;
}

input:focus {
  outline: none;

}

.options {
  display: flex;
  align-items: center;
  margin-top: 15px;
  font-size: 12px;
  color: white;

}

.options input {
  margin-right: 5px;
  margin-top: 0px;
}

.options a {
  text-decoration: none;
  color: white;
  margin-left: auto;
}
</style>