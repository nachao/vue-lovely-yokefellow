<template>
    <div>
        <div>
            <h1>注册</h1>
            <p v-ly-click="'1001'">进入注册页面</p>
            <p v-ly-click="'1002'">输入账号</p>
            <p v-ly-click="'1003'">输入密码</p>
            <p v-ly-click="'1004'">发送短信</p>
            <p v-ly-click="'1005'">确认请求</p>
        </div>
        <div>
            <h1>远程控制查询</h1>
            <p v-ly-click="'1011'">进入远程控制页面</p>
        </div>
        <div>
            <h1>操作记录查询</h1>
            <p v-ly-click="'1021'">进入远程控制操作记录页面</p>
            <p v-ly-click="'1022'">主动查询远程控制操作记录页面</p>
        </div>
        <div>
            <h1>远程控制设置</h1>
            <p v-ly-click="'1201'">进入远程控制设置页面</p>
            <p v-ly-click="'1202'">远程控制设置新增分组</p>
            <p v-ly-click="'1203'">远程控制设置编辑分组</p>
            <p v-ly-click="'1204'">远程控制设置删除分组</p>
            <p v-ly-click="'1205'">远程控制设置调整参数顺序</p>
            <p v-ly-click="'1206'">远程控制设置调整参数分组</p>
            <p v-ly-click="'1207'">远程控制设置是否允许远程控制</p>
            <p v-ly-click="'1208'">远程控制设置是否允许业主远程控制</p>
            <p v-ly-click="'1209'">远程控制设置取值范围</p>
            <p v-ly-click="'1210'">远程控制设置默认值</p>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                title: 'Hello'
            }
        }
    }
</script>
<style>

</style>