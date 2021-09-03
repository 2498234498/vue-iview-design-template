<template>
  <Layout class="layout">
    <Header></Header>
    <Layout class="main">
      <Sider />
      <Content>
        <router-view />
      </Content>
    </Layout>
  </Layout>
</template>

<style lang="less" scoped>
.layout {
  height: 100%;
}
</style>
