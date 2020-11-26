<template>
    <div>
        <Navbar></Navbar>
        <div class="container-fulid">
      <img class="tophoto" src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" alt="">
        </div>
<div class="container pt-5">
    <div class="row">
        <div class="col-md-3">
        <div class="sticky-top p-2">
            <div class="list-group">
              <a href="#page1" data-toggle="list" class="list-group-item list-group-item-action active">全部</a>
                <a href="#page2" data-toggle="list" class="list-group-item list-group-item-action "><i class="fas fa-hamburger"></i>漢堡區</a>
                <a href="#page3" data-toggle="list" class="list-group-item list-group-item-action"><i class="fas fa-pizza-slice"></i>披薩區</a>
                <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true"><i class="fas fa-sign-out-alt"></i>即將上市，敬請期待</a>
            </div>
        </div>
    </div>
                  
                    
        
        <div class="col-md-9">
        <div class="row mt-4">
      <div class="col-md-4 mb-4 wei-grid-special0" v-for="item in products" :key="item.id" @click="getProduct(item.id)">
        <div class="card border-0 shadow-sm ">
          <div
            style="height: 150px; background-size: cover; background-position: center"
            :style="{backgroundImage:`url(${item.imageUrl})`}"
          ></div>
          <div class="card-body">
            <span class="badge badge-secondary float-right ml-2">{{item.category}}</span>
            <h5 class="card-title">
              <a href="#" class="text-dark">{{ item.title }}</a>
            </h5>
            <p class="card-text">{{ item.content }}</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <!-- 前者僅有顯示原價 -->
              <div class="h5" v-if="!item.price">{{ item.origin_price }}元</div>
              <!-- 後者僅顯示原價+優惠價 -->
              <del class="h6" v-if="item.price">{{ item.origin_price }}元</del>
              <div class="h5" v-if="item.price">{{ item.price }}元</div>
            </div>
          </div>
          <!-- <div class="card-footer d-flex"> -->
            <!-- <button
              type="button"
              class="btn btn-outline-secondary btn-sm"
              @click="getProduct(item.id)"
            >
              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
              查看更多
            </button> -->
            <!-- <button
              type="button"
              class="btn btn-outline-danger btn-sm ml-auto"
              @click="addtoCart(item.id)"
            >
              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
              加到購物車
            </button> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
                
         </div>
        </div>
    </div>

    <!-- modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-fluid" alt />
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-right">{{ product.description }}</footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
              <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
              <div class="h4" v-if="product.price">現在只要 {{ product.price }} 元</div>
            </div>
            <h5>選購：</h5>
            <select name class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num"> {{num}} {{product.unit}}</option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計
              <strong>{{ product.num * product.price }}</strong> 元
            </div>
            <button
              type="button"
              class="btn btn-primary"
              @click="addtoCart(product.id, product.num)"
            >
              <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
</template>

<script>
import $ from 'jquery';
import Navbar from './Navbar';
import Footer from './Footer'
export default {
    components:{
        Navbar,
        Footer
    },
    data(){
        return{
            products:[],
            product:{},
            cart:{},
            isLoading:false,
            status: {
                loadingItem: ""
            },
        }
    },
    methods:{
    getProducts() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        vm.products = response.data.products;
        console.log(response);
        vm.isLoading = false;
      });
    },
    getProduct(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      vm.status.loadingItem = id; 
      this.$http.get(url).then(response => {
        vm.product = response.data.product;
        $("#productModal").modal("show"); 
        console.log(response);
        vm.status.loadingItem = ""; 
      });
    },
    addtoCart(id, qty = 1) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty
      };
      this.$http.post(url, { data: cart }).then(response => {
        console.log(response);
        vm.status.loadingItem = "";
        vm.getCart();
        $("#productModal").modal("hide");
      });
    },
    getCart() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        vm.cart = response.data.data;
        console.log(response);
        vm.isLoading = false;
      });
    },
    removeCartItem(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(url).then(response => {
        vm.getCart();
        console.log(response);
        vm.isLoading = false;
      });
    },
    addCouponCode() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code
      };
      vm.isLoading = true;
      this.$http.post(url, { data: coupon }).then(response => {
        console.log(response);
        vm.getCart();
        vm.isLoading = false;
      });
    },
    },
    created(){
        this.getProducts();
    }
}
</script>

<style>
  .tophoto{
    background-position: center center;
    background-size:cover;
    max-height: 400px;
    width: 100%;
    object-fit: cover;
    
  }
.btn-cart{
	background-color: transparent;
	position: relative;
}
.btn-cart .badge{
	position: absolute;
	top: -1px;
	right: -1px;
}
.wei-grid-special0 {
position: relative;
overflow: hidden;
transition: box-shadow 300ms;
}

.wei-image5 {
width: 100%;
height: 100%;
}

.wei-grid-special0:hover {
box-shadow: 0 8px 10px rgba(0, 0, 0, 0.6);
}
</style>