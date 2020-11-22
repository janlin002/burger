<template>
    <div>
        <Navbar></Navbar>
    <div class="container mb-5">
    <div class="row">
        <div class="col-sm-7 p-5 text-center">
            <img src="@/assets/52f07942-8734-4a79-8879-ac642131f701_200x200.png" alt="">
        </div>
        <div class="col-sm-5 d-flex justigy-content-center align-items-center mt-5">
            <div>
                <h2>關於我們...</h2>
                <hr>
                <p>The Lins' burger創立於2020年<br>
                是由兩個年輕人創立的美式餐廳，主打便宜又能吃得健康!且食材都是當天購買，絕不隔日使用</p>
            </div>
            </div>
        </div>
    </div>

      <div class="container-fulid bg-light text-center ">

          <div class="container text-center p-5">
              <h2 >顧客有話想說...</h2>
            </div>
        <div class="container text-center mt-4 pb-4">
          <div class="row">
            <div class="col-sm-4">
              <img src="https://randomuser.me/api/portraits/women/60.jpg"  class="bighead mb-4" alt="">
              <h4>汐止劉小姐</h4>
              <p>第一次看到這種價格，又是在臺北地區！，又是在臺北地區！要我每天吃都可以</p>
            </div>
            <div class="col-sm-4">
              <img src="https://randomuser.me/api/portraits/men/44.jpg"  class="bighead mb-4" alt="">
              <h4>內湖林先生</h4>
              <p>住內湖這麼久，居然不知道有這麼好吃的美式餐廳！實在感到羞愧</p>
            </div>
            <div class="col-sm-4">
              <img src="https://randomuser.me/api/portraits/women/44.jpg"  class="bighead mb-4" alt="">
              <h4>基隆邱小姐</h4>
              <p>這是我來內湖的唯一動力！每次來內湖必吃！</p>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fulid">
        <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="midphoto" alt="">
      </div>
    
  

      <div class="container text-center p-4">
          <h2>線上服務</h2>
          <br>
        </div>
            
      <div class="container text-center mb-5">
        <div class="row">
          <div class="col-sm-4">
            <i class="far fa-clock fa-5x mb-3"></i>
            <h4>服務時間</h4>
            <p>平日：10:00~22:00<br>假日：10:00~23:30</p>
            <p>每週二公休</p>
          </div>
          <div class="col-sm-4">
            <i class="fas fa-utensils fa-5x mb-3"></i>
            <h4>外送服務</h4>
            <p></p>
            <p>(02)2700-0000</p>
            <p>歡迎團體，公司訂餐</p>
          </div>
          <div class="col-sm-4">
            <i class="fas fa-map-marker-alt fa-5x mb-3"></i>
            <h4>門市地址</h4>
            <p>台北市內湖區</p>
          </div>
        </div>
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
    }
}
</script>


<style lang="">
      .bighead{
    border-radius: 50%;
  }
  .midphoto{
    background-position: center center;
    background-size:cover;
    max-height: 350px;
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
p{
    font-size: 18px;
}
</style>