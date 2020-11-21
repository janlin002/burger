<template>
    <div>
        <Navbar></Navbar>
        <Alert></Alert>
<div class="container-fluid">
  <div class="row">
       <Sidebar></Sidebar>
    </div>
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <router-view></router-view>
    </main>
  </div>
</div>
</template>

<script>

import Navbar from './backNavbar';
import Sidebar from './backSidebar';
import Alert from './AlertMessage';
// import Products from './pages/backProducts'
export default {
    components:{
        Navbar,
        Sidebar,
        Alert,
        // Products
    },
    created(){
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        this.$http.defaults.headers.common.Authorization = `${token}`;
    }
}
</script>