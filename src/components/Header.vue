<template>
  <header class="header_section" style="background-color: ">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <a class="navbar-brand" href="/">
          <span> {{ appName }}</span>
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class=""> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="(item, index) in navs" :key="index"
              :class="{ active: $route.path == item.path }">
              <router-link :to=item.path class="nav-link">{{ $t(item.name) }} <span
                  class="sr-only">(current)</span></router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/login">
                <i class="fa fa-user" aria-hidden="true"></i> {{ $t('login') }}</router-link>
            </li>
            <li class="nav-item">

              <button @click="changeLocale('en')" id="changeLocale">  <img :src="imgs[currentImage]" id="img" alt="" height="20px"/>  </button>

            </li>
            <form class="form-inline">
              <button class="btn my-2 my-sm-0 nav_search-btn" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>


export default {
  data() {
   
    return {
      appName: process.env.VUE_APP_TITLE,
      currentImage:1,
      imgs:[
        "images/flat/united-states.svg","images/flat/cambodia.svg"
    ],
      navs: [{
        name: 'home', path: "/"
      },
      {
        name: "courses", path: "/courses"
      },
      {
        name: "about", path: "/about"
      },
      {
        name: "team", path: "/team"
      },
      {
        name: "service", path: "/service"
      },
        {
        name: "why", path: "/why"
      }]
    }
  },
  methods: {
    changeLocale() {
     //alert(this.currentImage)
      if (this.$i18n.locale == "en") {
        this.$i18n.locale = "khm";
        this.currentImage= 0;
      // alert(this.currentImage);
      } else{
        this.$i18n.locale = "en";
        this.currentImage = 1;
        //alert(this.currentImage);
      }
       
        
    }
  }
}
</script>