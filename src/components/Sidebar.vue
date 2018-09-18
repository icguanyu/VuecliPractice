<template>
  <div>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>管理員</span>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <router-link class="nav-link" to="/admin/products">產品管理</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/admin/orders">訂單管理</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/admin/coupon">優惠券</router-link>
              </li>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>模擬功能</span>
            </h6>
            <ul class="nav flex-column mb-2">
              <router-link class="nav-link" to="/customer_order">模擬訂單</router-link>
            </ul>
          </div>
        </nav>
  </div>
</template>

