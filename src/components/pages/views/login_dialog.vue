<template>
  <div>
    <el-dialog
      title="账号登录"
      :visible.sync="show"
      append-to-body
      width="28%"
    >
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
        label-position="left"
      >
        <el-form-item label="用户名" label-width="100px" prop="username">
          <el-input v-model="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" type="password" label-width="100px" prop="password">
          <el-input v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="submitForm()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      loginForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入登录用户名', trigger: 'blur' },
          { min: 4, max: 18, message: '长度在4到18个字符', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'change' },
          { min: 4, max: 18, message: '长度在4到18个字符', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs['loginForm'].validate(valid => {
        if (valid) {
          alert('submit!');
          this.resetForm();
        } else {
          console.log('error submit!!');
        }
      });
    },
    resetForm() {
      this.$refs['loginForm'].resetFields();
      this.loginForm.username = '';
      this.loginForm.password = '';
    },
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
      this.resetForm();
    },
  },
};
</script>
<style lang="scss" scoped></style>
