export default {
  data: () => ({
    leftDrawer: {
      isActive: true
    },
    rightDrawer: {
      isActive: false
    },
  }),
  methods: {
    toggleLeftDrawer() {
      this.leftDrawer.isActive = !this.leftDrawer.isActive
    },
    toggleRightDrawer() {
      this.rightDrawer.isActive = !this.rightDrawer.isActive
    },
  }
}