<script>
	export default{
		el:"#app",
		data:{
			name:"jinxiao",
			age:"27"
		}
	}
</script>

<template>
	<div>
		<h1>姓名:{{name}}</h1>
		<h2>年龄:{{age}}</h2>
		<input v-model="name">
	</div>
</template>

<style lang="sass">
	$qwe:#098;
	body{
		background-color:$qwe;
		h1{
			background-color:#eee;
			color:red;
			// transform:translate(10%,10%);
		}
		h1:hover{
			color:blue;
		}
		h2{
			background-color:#666;
		}
	}
</style>