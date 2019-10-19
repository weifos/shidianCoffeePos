<template>
    <div class="f-pop" v-if="show">
        <div class="mask" @click="onMaskClick"></div>
        <slot name="content"></slot>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        show:{
            type:Boolean,
            default:false
        }
    },
    created() {
        
    },
    methods: {
        onMaskClick(){
            this.$emit("click")
        }
    },
}
</script>
<style lang="scss">
.f-pop{
    position: fixed;
    width: 74%;
    height: 100%;
    left: 26%;
    top: 0;

    .mask{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
    }

}
</style>