<script>
	export default{
		el:"#login",
		data:{
			todos:[
				{text:"learn javascript"},
				{text:"learn vue.js"},
				{text:'build somethind Awesome'}
			],
			message:"hello jinxiao"
		},
		methods:{
			reverseMessage:function(){
				this.message = this.message.split('').reverse().join('');
			}
		}
	}
</script>

<template>
	<div>
		<h1>渲染列表</h1>
		<ul>
			<li v-for="todo in todos">
				{{todo.text}}
			</li>
		</ul>
		<h1>处理用户输入</h1>
		<p>{{ message }}</p>
		<button v-on:click="reverseMessage">Reverse Message</button>
	</div>
</template>