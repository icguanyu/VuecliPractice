<template>
  <div class="hello">
    <a href="#" @click.prevent="logout">登出</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    logout(){
      const vm = this
      const api = `${process.env.APIPATH}/logout`
      this.$http.post(api).then((res)=>{
        //console.log(res.data)
        if(res.data.success){
          vm.$router.push('/signin')
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
