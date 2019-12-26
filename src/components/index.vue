
<template>
    <el-container style="border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <my-aside></my-aside>
        </el-aside>
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <my-head></my-head>
            </el-header>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>
<style>
.el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
}
.el-main{
  height: calc(100vh - 60px);
}
.el-container{
  width: 100%;
  height: 100%;
  border: 0!important;
}
.el-aside {
    color: #333;
}
</style>

<script>
import myAside from "../components/myaside/index"
import myHead from "../components/myhead/index"
export default {
  components: {
    myAside,myHead
  },
    data() {

        return {
        };
    }
};
</script>