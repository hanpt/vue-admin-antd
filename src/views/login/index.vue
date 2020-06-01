<template>
  <div class="login">
    <a-form-model class="login-form" :model="loginForm" @submit.native.prevent>
      <a-form-model-item>
        <a-input v-model="loginForm.user" placeholder="用户名" allow-clear>
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-input-password v-model="loginForm.password" type="password" placeholder="密码" allow-clear>
          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
        </a-input-password>
      </a-form-model-item>
      <a-form-model-item>
        <a-button
          class="login-form-button"
          type="primary"
          html-type="submit"
        >
          登录
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        user: '',
        password: '',
      },
    }
  },
  methods: {
    handleSubmit(e) {
      console.log('e: ', e)
    },
  },
}
</script>

<style lang="less" scoped>
.login-form {
  max-width: 300px;
}
.login-form-forgot {
  float: right;
}
.login-form-button {
  width: 100%;
}
</style>
