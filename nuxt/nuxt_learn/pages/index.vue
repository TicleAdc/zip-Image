<template>
  <Title>学习</Title>
    <div>
      <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger" @click="toPage">Danger</el-button>
      </el-row>
      <br />
      <el-row>
        <el-button :icon="Search" circle />
        <el-button type="primary" :icon="Edit" circle />
        <el-button type="success" :icon="Check" circle />
        <el-button type="info" :icon="Message" circle />
        <el-button type="warning" :icon="Star" circle />
        <el-button type="danger" :icon="Delete" circle />
      </el-row>
      <div>{{ index }}</div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
  } from "@element-plus/icons-vue";

  const index = 1

  function toPage () {
    navigateTo({
      path: '/home',
      params: {}
    })
  }

  </script>
  
  <style lang="scss" scoped>
  body {
    background-color: #000000;
  }
  </style>
  
  