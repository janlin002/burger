<template>
    <div>
        <!-- 購物車介面 -->
    <div class="my-5 row justify-content-center">
      <div class="my-5 row justify-content-center">
        <table class="table">
          <thead>
            <th></th>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts" :key="item.id">
              <td class="align-middle">
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="removeCartItem(item.id)"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
              <td class="align-middle">
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">
                  已套用優惠券
                </div>
              </td>
              <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
              <td class="align-middle text-right">{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-right">總計</td>
              <td class="text-right">{{ cart.total }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-right text-success">折扣價</td>
              <td class="text-right text-success">{{ cart.final_total }}</td>
            </tr>
          </tfoot>
        </table>
        <div class="input-group mb-3 input-group-sm">
          <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼" />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">套用優惠碼</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 個資 -->
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
    </div>
</template>
<script>
export default {
    
}
</script>