<template>
  <div class="home">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/layout/navbar/Navbar'
import { mapActions } from 'vuex'

export default {
  components: { Navbar },
  name: 'Home',
  methods: {
    ...mapActions({ setUser: 'user/setUser' })
  },
  created() {
    this.setUser()
  }
}
</script>
