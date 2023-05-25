<template>

    <div class="test">
      <div class="line-container">
        <div class="line-item" v-for="item in paints" :key="item.id">
          <img :class="item.enabled ? 'mask-group-icon' : 'mask-group-icon item-disabled'" alt="" :src="item.img" />

          <div class="child"></div>
          <div class="div1">«{{ item.name }}» {{ item.author }}</div>
          <template v-if="item.enabled">
            <div class="div2">
            <b class="b">{{ item.price }} $</b>
            <div class="div3">{{ item.price - item.discount }} $</div>
          </div>
          <button class="button" @click="switchItemInCart(item)">
            <div class="rectangle"></div>
            <b class="b1" v-if="item.loading">загрузка....</b>
            <b class="b1" v-else>{{ cart.items.indexOf(item.id) == -1 ? 'Купить' : 'В корзине' }}</b>
          </button>
          <div class="div4">
            <div class="rectangle1"></div>
            <div class="parent">
              <b class="b2">{{ cart.items.indexOf(item.id) == -1 ? 'Купить' : 'В корзине' }}</b>
              <div class="feathercheck">
                <div class="feathercheck-child"></div>
                <img class="vector-icon" alt="" src="../public/vector.svg" />
              </div>
            </div>
          </div>
          <div class="item"></div>
          </template>
          <template v-else>
            <div class="div16"><b class="b3"> {{ item.outOfSaleReason }} </b> </div>
          </template>
        </div>
      </div>
      <b class="b10">Картины эпохи Возрождения</b>
      <div class="test-child"></div>
      <div class="header">
        <div class="test-child"></div>
        <div class="div19">
          <div class="div20">Каталог</div>
          <div class="div21">О галерее</div>
          <div class="div22">Доставка</div>
          <div class="div23">Оплата</div>
          <div class="div24">Контакты</div>
        </div>
        <div class="div25">
          <div class="child4"></div>
          <div class="div26">Поиск по названию картины</div>
          <button class="group1">
            <div class="group-child"></div>
            <b class="b11">Найти</b>
          </button>
        </div>
        <div class="header-item"></div>
        <img class="logo-museum-2-icon" alt="" src="../public/logomuseum-2.svg" />
      </div>
      <div class="div27">
        <div class="child5"></div>
        <div class="container">
          <div class="b3">Каталог</div>
          <div class="div21">О галерее</div>
          <div class="div22">Доставка</div>
          <div class="div23">Оплата</div>
          <div class="div24">Контакты</div>
        </div>
        <img class="logo-museum-2-icon1" alt="" src="../public/logomuseum-21.svg" />
      </div>
      <div class="adres-white-parent">
        <div class="adres-white">
          <div class="feathercheck-child">
            <div class="div33">г. Воронеж, ул. Никитина, 119А</div>
            <div class="adress1">
              <div class="adress-child"></div>
              <img class="vector-icon2" alt="" src="../public/vector1.svg" />
            </div>
          </div>
        </div>
        <div class="phone-white">
          <div class="div34">+7 (495) 999-99-99</div>
          <div class="vector-parent">
            <img class="vector-icon3" alt="" src="../public/vector2.svg" />

            <div class="adress-child"></div>
          </div>
        </div>
      </div>
      <div class="bag-outline-parent">
        <img class="bag-outline-icon" alt="" src="../public/bagoutline.svg" />

        <div class="ellipse-parent">
          <div class="group-inner"></div>
          <div class="div35">{{ cart.items.length }}</div>
        </div>
      </div>
    </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'HomeView',
  props: {
  },
  data () {
    return {
    }
  },
  computed: mapState({
    paints: state => state.paints.map(el => { return { ...el, loading: false } }),
    cart: state => state.cart
  }),
  methods: {
    switchItemInCart: async function (item) {
      // включить лоадер
      item.loading = true
      const apiRquest = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
      if (apiRquest.data) {
        console.log(item.loading, apiRquest.data)
        if (this.cart.items.indexOf(item.id) !== -1) {
          this.$store.dispatch('removeItemFromCart', { item })
        } else {
          this.$store.dispatch('addItemTOCart', { item })
        }
        item.loading = false
      } else {
        console.log('api error')
        item.loading = false
      }
      // отправить запрос на сервер
      // если успешно - добавляем в корзину, если нет - хз
    }
  },
  mounted () {
    // this.loadData()
  }
}
</script>
