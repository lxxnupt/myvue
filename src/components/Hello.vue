<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--<h2>Essential Links</h2>-->
    <!--<ul>-->
    <!--<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>-->
    <!--<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>-->
    <!--<li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>-->
    <!--<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>-->
    <!--<br>-->
    <!--<li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>-->
    <!--</ul>-->
    <!--<h2>Ecosystem</h2>-->
    <!--<ul>-->
    <!--<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>-->
    <!--<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>-->
    <!--<li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>-->
    <!--<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>-->
    <!--</ul>-->

    <!--<div id="xuanting">-->
      <!--<span :title="xuanting">-->
      <!--鼠标悬停此处几秒，-->
      <!--可以看到此处动态绑定的 title！-->
      <!--</span>-->
    <!--</div>-->

    <!--<div id="app-3">-->
      <!--<p v-if="seen">现在你可以看到我</p>-->
    <!--</div>-->

    <!--<div id="app-4">-->
      <!--<ol>-->
        <!--<li v-for="todo in todos">-->
          <!--{{ todo.text }}-->
        <!--</li>-->
      <!--</ol>-->
    <!--</div>-->

    <!--<div id="app-5">-->
      <!--<p>{{ message1 }}</p>-->
      <!--<button @click="reverseMessage()">翻转 message1</button>-->
    <!--</div>-->

    <!--<div id="app-6">-->
      <!--<p>{{ message1 }}</p>-->
      <!--<input v-model="message1">-->
    <!--</div>-->
    <div id="app-7">
      <ol>
        <!--
          现在我们为每个 todo-item 提供了 todo 对象，
          其中它的内容是动态的。
          我们还需要为每个组件提供一个 "key"，
          这将在之后详细解释。
        -->
        <todo-item
          v-for="item in groceryList"
          v-bind:todo="item"
          v-bind:key="item.id">
        </todo-item>
      </ol>
    </div>

    <div id="example">
      <p>初始 message 是："{{ message2 }}"</p>
      <p>计算后的翻转 message 是："{{ reversedMessage2 }}"</p>
    </div>

    <div id="demo">{{ fullName }}</div>

    <div class="static"
         v-bind:class="{ active: isActive, 'text-danger': hasError }">33
    </div>

    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input">
    </template>
    <button @click="togglelogin()">toggle login type</button>

    <ul id="example-1">
      <li v-for="item in items">
        {{ item.message }}
      </li>
    </ul>

    <ul id="example-2">
      <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>

    <div v-for="(value, key, index) in object">
      {{ index }}. {{ key }}: {{ value }}
    </div>

    <ul>
    <li v-for="n in evenNumbers">{{ n }}</li>
      <br>
    <li v-for="n in oddf(numbers)">{{ n }}</li>
    </ul>

    <div id="todo-list-example">
      <input
        v-model="newTodoText"
        v-on:keyup.enter="addNewTodo"
        placeholder="Add a todo"
      >
      <ul>
        <li
          is="todo-item2"
          v-for="(todo, index) in todoss"
          v-bind:key="todo.id"
          v-bind:title="todo.title"
          v-on:remove="todoss.splice(index, 1)"
        ></li>
      </ul>
    </div>

    <div id="event-1">
      <button v-on:click="counter += 1">增加 1</button>
      <p>这个按钮被点击了 {{ counter }} 次。</p>
    </div>

    <div id="event-2">
      <!-- `greet` 是在下面定义的方法名 -->
      <button v-on:click="greet">Greet</button>
    </div>

    <button v-on:click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>

    <input v-model="message3" placeholder="edit me">
    <p>Message is: {{ message3 }}</p>

    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message3 }}</p>
    <br>
    <textarea v-model="message3" placeholder="add multiple lines"></textarea>

    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>

    <div>
      <input type="checkbox" id="jack" value="vJack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="vJohn" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="vMike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>

    <div>
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>

    <div>
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>

    <select v-model="selected2">
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selected2 }}</span>

    <div>
      <simple-counter></simple-counter>
      <simple-counter></simple-counter>
      <simple-counter></simple-counter>
    </div>

    <child my-message="hello!"></child>

    <div>
      <input v-model="parentMsg">
      <br>
      <child v-bind:my-message="parentMsg"></child>
    </div>

    <div id="counter-event-example">
      <p>{{ total }}</p>
      <button-counter v-on:increment="incrementTotal"></button-counter>
      <button-counter v-on:increment="incrementTotal"></button-counter>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        parentMsg: '',
        selected2: 'A',
        options: [
          { text: 'One', value: 'A' },
          { text: 'Two', value: 'B' },
          { text: 'Three', value: 'C' }
        ],
        selected: '',
        picked: '',
        checkedNames: [],
        checked: '',
        message3: '',
        name: 'vuejs',
        counter: 0,
        newTodoText: '',
        todoss: [
          {
            id: 1,
            title: 'Do the dishes'
          },
          {
            id: 2,
            title: 'Take out the trash'
          },
          {
            id: 3,
            title: 'Mow the lawn'
          }
        ],
        nextTodoId: 4,
        numbers: [ 1, 2, 3, 4, 5 ],
        object: {
          firstName: 'John',
          lastName: 'Doe',
          age: 30
        },
        odd: false,
        loginType: 'username',
        isActive: true,
        hasError: false,
        xuanting: '页面加载于 ' + new Date().toLocaleString(),
        msg: 'Welcome to Your Vue.js App',
        seen: true,
        todos: [
          {text: '学习 JavaScript'},
          {text: '学习 Vue'},
          {text: '创建激动人心的代码'}
        ],
        message1: 'Hello Vue.js!',
        message2: 'Hello Vue.js2!',
        groceryList: [
          {id: 0, text: '蔬菜'},
          {id: 1, text: '奶酪'},
          {id: 2, text: '其他人类食物'}
        ],
        firstName: 'lu',
        lastName: 'xuxing',
        items: [
          { message: 'Foo' },
          { message: 'Bar' }
        ],
        parentMessage: 'Parent',
        total: 0
      }
    },
    watch: {},
    methods: {
      incrementTotal: function () {
        this.total += 1
      },
      warn (message, event) {
        // 现在我们可以访问原生事件对象
        if (event) event.preventDefault()
        alert(message)
      },
      greet (event) {
        // `this` 在方法里指当前 Vue 实例
        alert('Hello ' + this.name + '!')
        // `event` 是原生 DOM 事件
        if (event) {
          alert(event.target.tagName)
        }
      },
      addNewTodo () {
        this.todoss.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      },
      reverseMessage () {
        this.message1 = this.message1.split('').reverse().join('')
      },
      togglelogin () {
        let _this = this
        if (_this.odd === false) {
          _this.loginType = 'email'
          _this.odd = true
        } else {
          _this.loginType = 'username'
          _this.odd = false
        }
      },
      oddf (numbers) {
        return numbers.filter(function (number) {
          return number % 2 === 1
        })
      }
    },
    computed: {
      evenNumbers: function () {
        return this.numbers.filter(function (number) {
          return number % 2 === 0
        })
      },
      // 一个 computed 属性的 getter 函数
      reversedMessage2: function () {
        // `this` 指向 vm 实例
        return this.message2.split('').reverse().join('')
      },
      fullName: function () {
        return this.firstName + ' ' + this.lastName
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
