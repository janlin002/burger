<template>
    <div>
        <div class="container-fulid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand bg-light" to="/main"><img src="@/assets/52f07942-8734-4a79-8879-ac642131f701_200x200.png" style="width:50px;height:50px"  alt="logo"></router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <router-link class="nav-link" to="/main">Home <span class="sr-only">(current)</span></router-link>
                </li>
                <!-- <li class="nav-item">
                  <a class="nav-link" to="/about">關於我們</a>
                </li> -->
                <li class="nav-item">
                <router-link class="nav-link" to="/about">
                  關於我們
                </router-link>
                </li>
                <!-- <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    產品分類
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">漢堡</a>
                    <a class="dropdown-item" href="#">pizza</a>
                    <a class="dropdown-item" href="#">單點</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">套餐</a>
                  </div>
                </li> -->
                <li class="nav-item">
                  <router-link class="nav-link" href="#" to="/menu">美味菜單</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link " href="#" to="/warning">防疫資訊</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link " href="#" to="/login">後台管控</router-link>
                </li>
              </ul>
              <!-- <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form> -->
              <!-- <button class="btn btn-sm btn-cart" data-toggle="dropdown" data-flip="false"> -->
                  <!-- <router-link class="btn btn-sm btn-cart" to="/cart">結帳
                  <router-link class="btn btn-sm btn-outline-danger" to="/cart">結帳  -->
                  <!-- <i class="fa fa-shopping-cart text-dark fa-2x" aria-hidcden="true"></i>  -->
                  <!-- <span class="badge badge-pill badge-danger">{{ cart.carts.length }}</span>
                </router-link>
              </button> -->

        <div class="dropdown ml-auto">
        <button class="btn btn-sm btn-cart" data-toggle="dropdown" data-flip="false">
          <i class="fa fa-shopping-cart text-dark fa-2x" aria-hidden="true"></i>
          <span class="badge badge-pill badge-danger">{{cart.carts.length}}</span>
          <!-- <span class="sr-only">unread messages</span> -->
        </button>

        <div class="dropdown-menu dropdown-menu-right p-3" style="min-width: 300px" data-offset="400" >
          <h6>已選擇商品</h6>
          <table class="table table-sm">
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id" v-if="cart.carts.length">
                <td class="align-middle text-center">
                  <!-- <a href="#" class="text-muted" @click.prevent="removeCart(item.id)">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                  </a> -->
                  <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item.id)">
                  <i class="far fa-trash-alt"></i>
                </button>
                </td>
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle">{{ item.qty }}{{item.product.unit}}</td>
                <td class="align-middle text-right">{{item.total}}</td>
              </tr>
            </tbody>
          </table>
          <router-link aria-hidden="true" to="/cart" class="text-light">
          <button class="btn btn-primary btn-block">
            
            <i class="fa fa-cart-plus">結帳去</i>
          </button>
          </router-link> 
        </div>
      </div>
            </div>
          </nav>
    </div>

    </div>
</template>

<script>
import $ from 'jquery';
export default {
  data(){
    return {
      // cart:{
      //   carts:[]
      // }
    }
  },
  methods:{
    getCart() {
      // const vm = this;
      // const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      // vm.isLoading = true;
      // this.$http.get(url).then(response => {
      //   vm.cart = response.data.data;
      //   console.log(response);
      //   vm.isLoading = false;
      // });
      this.$store.dispatch('getCart',);
    },
    removeCart(id){
    // const vm = this;
    //   const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
    //   vm.$store.state.isLoading = true;
    //   this.$http.delete(url).then(response => {
    //     vm.getCart();
    //     console.log(response);
    //     vm.$store.state.isLoading = false;
    //   });
    this.$store.dispatch('removeCart',id);
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
  },
  computed:{
    cart(){
      return this.$store.state.cart;
    }
  }
  
  }

</script>
<style scoped>
.navbar-brand {
  padding-top:0rem;
  padding-bottom:0rem;
  font-size: 0rem;
  box-shadow: inset 0px 0 0 rgba(0, 0, 0, .25);
}
li{
  font-size: 15px;
}
</style>