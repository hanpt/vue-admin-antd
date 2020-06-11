<template>
  <div class="login">
    <a-form-model ref="loginForm" class="login-form" :model="loginForm" :rules="rules">
      <a-form-model-item prop="user">
        <a-input v-model="loginForm.user" placeholder="用户名" allow-clear>
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item prop="password">
        <a-input-password v-model="loginForm.password" type="password" placeholder="密码" allow-clear>
          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
        </a-input-password>
      </a-form-model-item>
      <a-form-model-item>
        <a-button
          class="login-form-button"
          type="primary"
          @click="handleSubmit"
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
      rules: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          console.log(this.loginForm)
        } else {
          console.log('error submit!!')
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  position: relative;
  background: @colorBg;
}
.login-form {
  width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login-form-forgot {
  float: right;
}
.login-form-button {
  width: 100%;
}
</style>
