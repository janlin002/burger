<template>
    <div>
         <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="sidebar-sticky pt-3">

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>管理員</span>
          <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link class="nav-link" to="/backboard/products">
            <i class="fas fa-box-open"></i>
            產品列表
            </router-link>
          </li>
          <li class="nav-item">
          <router-link class="nav-link" to="/backboard/coupons">
          <i class="fas fa-ticket-alt"></i>
            優惠卷
          </router-link>
          </li>
          
        </ul>
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>模擬功能</span>
          <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link class="nav-link" to="/customer_order">
              <i class="fab fa-shopify"></i>
              模擬訂單
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
</template>