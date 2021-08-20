<template>
  <div id="app">
  <body class="d-flex flex-column h-100">
        <main class="flex-shrink-0">
            <!-- Navigation-->
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container px-5">
                    <a class="navbar-brand" href="/">PetSource</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                            <li v-if="!isLoggedIn()" class="nav-item"><a class="nav-link" href="/login">Login</a></li>
                            <li v-if="!isLoggedIn()" class="nav-item"><a class="nav-link" href="/signup">Sign-up</a></li>
                            <li v-if="isLoggedIn()" class="nav-item"><a class="nav-link" href="/about">Profile Page</a></li>
                            <li v-if="isLoggedIn()" class="nav-item"><a class="nav-link" href="/logout">Logout</a></li>
                            </li>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!-- Header-->
            <header class="bg-dark py-5">
                <div class="container px-5">
                    <div class="row gx-5 align-items-center justify-content-center">
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5 fw-bolder text-white mb-2">PetSource - a Modern Resource for new Pet Owners</h1>
                                <p class="lead fw-normal text-white-50 mb-4">Quickly keep track of pets, treats, and everything in between.</p>
                            </div>
                        </div>
                        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxk9kM-5UXc8_i5t7T8-06tDfRubQ8C26I6AYLSUbWmD4SvPz3lmxkSsMVmuAfbEIo_ZQ&usqp=CAU" alt="..." /></div>
                    </div>
                </div>
            </header>
            <router-view/>
            <!-- Features section-->
        </main>
        <!-- Footer-->
        <footer class="bg-dark py-4 mt-auto">
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; Your Website 2021</div></div>
                    <div class="col-auto">
                        <a class="link-light small" href="#!">Privacy</a>
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="#!">Terms</a>
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="#!">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
</body>
  </div>
</template>

<style>
</style>

<script>
export default {
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>