<template>
  <div class="hello">
    <a href="#" @click.prevent="signout">登出</a>
  </div>
</template>

<script>
import Navbar from './Navbar';


export default {
  components:{
    Navbar,
  },
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods:{
    signout(){
      const api = `${process.env.APIPATH}/logout`;
        const vm=this
        this.$http.post(api).then((response) => {
        console.log(response.data);
        if(response.data.success){
            vm.$router.push('/login') //登入成功效果
        }
    })
    }
  }
}
</script>
