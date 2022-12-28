<template>
	
	<div>
		<router-view/>
	</div>
	
</template>

<script setup>
import { ref } from '@vue/reactivity';
import axios from 'axios';
const image = ref("")
const remoteUrl = ref("")
const results = ref([])
const url = 'http://localhost:5000';

// axios.get(url).then((res) => {
//   // handle success
// 	results.value = res.data
// 	console.log(res);
// 	console.log(results.value)
// })
// .catch((error) => {
//   // handle errors
//   console.log("Error")
// });


</script>

<style>

</style>