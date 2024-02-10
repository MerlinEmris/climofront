<template>
  <q-page class="flex flex-center bg-grey-2">
    <q-card class="q-pa-md shadow-2 my_card" bordered>
      <q-card-section class="text-center">
        <div class="text-grey-9 text-h5 text-weight-bold">Sign up</div>
      </q-card-section>
      <q-card-section>
        <q-input dense outlined v-model="email" label="Email Address"></q-input>
        <q-input
          class="q-mt-md"
          dense
          outlined
          v-model="username"
          label="Username"
        ></q-input>
        <q-input
          dense
          outlined
          class="q-mt-md"
          v-model="password"
          type="password"
          label="Password"
        ></q-input>
      </q-card-section>

      <q-card-section>
        <q-btn
          @click="registrationAction"
          style="border-radius: 8px"
          color="dark"
          rounded
          size="md"
          label="Sign up"
          no-caps
          class="full-width"
        ></q-btn>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { register } from "components/auth/services/authService";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "AuthRegistrationPage",
  setup() {
    const route = useRouter();
    const email = ref("");
    const username = ref("");
    const password = ref("");

    const registrationAction = async () => {
      try {
        await register(email.value, username.value, password.value).then(() => {
          route.push("/auth/login");
        });
      } catch (error) {
        console.log(error);
      }
    };

    return {
      email,
      password,
      registrationAction,
    };
  },
});
</script>
