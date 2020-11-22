<template>
    <div>
        <Navbar></Navbar>
        <div class="container text-center">
        <img src="@/assets/52f07942-8734-4a79-8879-ac642131f701_200x200.png" class="mb-4" alt="">
        <br>
        <h2>因應疫情，我們的外送服務有些調整，但並不影響品質，而是提高了衛生:</h2>
        <ul>
            <li>外送員在開始外送前，會量體溫，如體溫高於37.5者，不得外送。</li>
            <li>外送員全程戴口罩，結帳一率使用電子支付，減少肢體碰觸的機會。</li>
            <li>外送員在交予餐點前須先行消毒。</li>
            <li>感謝您的配合，配合防疫人人有責！</li>
        </ul>
        <router-link class="btn btn-dark" to="/main">繼續選購</router-link>
        
        <!-- <h5><i class="fas fa-thermometer-three-quarters fa-4x"></i>外送員在開始外送前，會量體溫，如體溫高於37.5者，不得外送</h5>
        <h5><i class="fas fa-head-side-mask fa-4x"></i>外送員全程戴口罩，結帳一率使用電子支付，減少肢體碰觸的機會</h5>
        <h5><i class="fas fa-hands-wash fa-4x"></i>外送員在交予餐點前須先行消毒</h5> -->
    </div>
    </div>
</template>

<script>
import Navbar from './Navbar';
import Footer from './Footer'
export default {
    components:{
        Navbar,
        Footer
    }
}
</script>

<style lang="">
    ul{
        
list-style-type:none;
    }
    li{
        font-size: 20px;
        line-height: 250%;
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
</style>