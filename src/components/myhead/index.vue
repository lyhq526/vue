<template>
    <div>
        <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <span>{{userInfo.custName}}</span>
    </div>
</template>
<script>
export default {
    computed: {
        userInfo() {
            console.log(this.$store)
            return this.$store.state.userInfo
        },
    },
}
</script>