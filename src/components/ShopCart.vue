<template>
    <div>
      <Navbar></Navbar>
         <div class="my-5 row justify-content-center">
        <validation-observer class="col-md-6" v-slot="{ invalid}">
        <form  @submit.prevent="createOrder">

        <validation-provider rules="required|email" v-slot="{ errors ,classes}">
          <div class="form-group">
            <label for="email">Email</label>
        <input id="email" type="email" name="email" v-model="form.user.email"
            class="form-control" :class="classes">
        <!-- 錯誤訊息 -->
        <span  class="invalid-feedback">{{ errors[0] }}</span>
          </div>
        <!-- 輸入框 -->
        
      </validation-provider>
      <validation-provider rules="required|alpha_spaces" v-slot="{ errors, classes }">
        <!-- 輸入框 -->
        <label for="username">收件人姓名</label>
        <input id="username" type="text" name="name" v-model="form.user.name"
          class="form-control" :class="classes">
        <!-- 錯誤訊息 -->
        <span class="invalid-feedback">{{ errors[0] }}</span>
      </validation-provider>


        <validation-provider rules="required|alpha_num" v-slot="{ errors, classes }">
        <!-- 輸入框 -->
        <label for="usertel">收件人電話</label>
        <input id="usertel" type="tel" name="tel" v-model="form.user.tel"
          class="form-control" :class="classes">
        <!-- 錯誤訊息 -->
        <span class="invalid-feedback">{{ errors[0] }}</span>
      </validation-provider>

      <validation-provider rules="required|alpha_spaces" v-slot="{ errors, classes }">
        <!-- 輸入框 -->
        <label for="email">收件人地址</label>
        <input id="useraddress" type="address" name="address" v-model="form.user.address"
          class="form-control" :class="classes">
        <!-- 錯誤訊息 -->
        <span class="invalid-feedback">{{ errors[0] }}</span>
      </validation-provider>

      <div class="form-group">
            <label for="comment">留言</label>
            <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
          </div>


      <div class="text-right">
        <button type="submit" class="btn btn-primary" :disabled="invalid">送出表單</button>
      </div>
      
        </form>
        </validation-observer>

      </div>
      <Footer></Footer>
    </div>
</template>

<script>
import Navbar from './Navbar';
import Footer from './Footer'
export default {
    components:{
        Navbar,
        Footer
    },
    data(){
      return{
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
    }
    }
  },
  methods:{
    createOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
      const order = vm.form;
      vm.isLoading = true;
          this.$http.post(url, { data: order }).then((response) => {
            console.log('訂單已建立', response);
            if (response.data.success) {
              vm.$router.push(`/pay/${response.data.orderId}`);
            }
            // vm.getCart();
            vm.isLoading = false;
          });
    },
  }
}
</script>

<style lang="">
.btn-cart{
	background-color: transparent;
	position: relative;
}
.btn-cart .badge{
	position: absolute;
	top: -1px;
	right: -1px;
}
</style>