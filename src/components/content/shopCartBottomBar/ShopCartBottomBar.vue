<template>
    <div class="cart-bottom-bar">
        <div class="check-content">
            <check-btn :is-checked="isCheckedAll" class="check-btn" @click.native="checkClick"></check-btn>
            <span>全选</span>
        </div>
        <div class="price">
            合计：{{totalPrice}}
        </div>
        <div class="calculate" @click="calculate">
            去结算:({{checkedLength}})
        </div>
    </div>
</template>

<script>
import CheckBtn from '@/components/content/checkGoodsBtn/CheckGoodsBtn'
export default {
    name:'CartButtonBar',
    components: {
        CheckBtn,
    },
    computed: {
        totalPrice(){
            return '￥' + this.$store.getters.cartList.filter(item => {
                return item.checked
            }).reduce((preValue,item) => {
                return preValue + item.price * item.count
            },0).toFixed(2)
        },
        checkedLength(){
            return this.$store.state.cartList.filter(item => item.checked).length
        },
        isCheckedAll(){
             // 这个方法会遍历完
            // return !(this.$store.state.cartList.filter(item => !item.checked).length)
            // return !this.$store.state.cartList.find(item => !item.checked)
            // return this.$store.state.cartList.length !== 0 && this.$store.state.cartList.every(item => item.checked)
            return this.$store.state.cartList.length !== 0 && this.$store.state.cartList.length === this.$store.state.cartList.filter(item => item.checked).length
        }
    },
    methods: {
        checkClick(){
            if(this.isCheckedAll){
                //全部选中
                this.$store.state.cartList.forEach(item => 
                    item.checked = false);
            }else {// 有部分或者全部不选中
                this.$store.state.cartList.forEach(item => item.checked = true)
            }
        },
        calculate(){
            if(!this.isCheckedAll){
                this.$toast.show('请选择需要购买的商品', 2000)
            }
        }
    }
}
</script>

<style scoped>
    .cart-bottom-bar{
        height: 40px;
        background-color: #eee;
        position: relative;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
    }
    .check-content{
        display: flex;
        align-items: center;
        padding-left: 10px;
        
    }
    .check-btn{
        width: 20px;
        height: 20px;
        line-height: 20px;
        margin-right: 5px;
    }
    .price{
        margin-right: 20px;
        
    }
    .calculate{
        width: 90px;
        padding-right: 6px;
        padding-left: 6px;
        background-color: pink;
        color:#fff;
        text-align: center;
        
    }
</style>