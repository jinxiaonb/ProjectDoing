<script>
	export default{
		el:"#demo",
		data:{
			name:"demo"
		}
	}
</script>

<template>
	<div>
		<h1>姓名:{{name}}</h1>
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