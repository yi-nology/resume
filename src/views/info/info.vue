<template>
    <div class="info">
        <el-dialog
                title="请输入您要打开的简历ID（默认wangxiaowu）"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <el-input v-model="value" placeholder="请输入简历ID"></el-input>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="
        $router.push('/preview/'+value)
    ">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value:"wangxiaowu",
                dialogVisible: true
            };
        },
        methods: {
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(v => {
                        console.log(v)
                        done();
                    })
                    .catch(e => {
                        console.log(e)
                    });
            }
        }
    }
</script>
