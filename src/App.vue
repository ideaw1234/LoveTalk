<template>
	<body>
		<!-- This example requires Tailwind CSS v3.0+ -->
		<div class="isolate bg-white">
			<div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
				<svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
					viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3"
						d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
					<defs>
						<linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177"
							y2="474.645" gradientUnits="userSpaceOnUse">
							<stop stop-color="#9089FC"></stop>
							<stop offset="1" stop-color="#FF80B5"></stop>
						</linearGradient>
					</defs>
				</svg>
			</div>
			<div class="px-6 pt-6 lg:px-8">
				<div>
					<nav class="flex h-9 items-center justify-between" aria-label="Global">
						<div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
						  <a href="/" class="-m-1.5 p-1.5">
									<span class="sr-only">Your Company</span>
									<img class="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
										alt="">
								</a>
						</div>
						<!-- <div class=" lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
						  <router-link :to="'/about'"
							class="inline-block px-3 py-1.5  font-semibold text-gray-900 hover:text-indigo-400 ">About us</router-link>
						</div> -->
					</nav>
					<main>
						<div class="relative px-6 lg:px-8">
							<div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
								<div>
									<textarea v-model="Text2" class="inline-block resize-none form-control max-sm:w-[100%] max-md:w-[25%] w-[50%] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " id="exampleFormControlTextarea1" rows="7" placeholder="Your message"></textarea>
									<img v-if="showImage" class="inline-block max-sm:pt-4 md:w-[35%]  md:mb-[10.8rem]  md:ml-[3rem]  max-sm:w-[80rem]"  :src="imagePath" >
									<div
										class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
										<svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
											viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3"
												d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
											<defs>
												<linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49"
													x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
													<stop stop-color="#9089FC"></stop>
													<stop offset="1" stop-color="#FF80B5"></stop>
												</linearGradient>
											</defs>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
		<footer class="text-center text-white fixed bottom-0 w-[100%]" >
			<div class=" pt-9">
			  <div class="flex justify-center mb-3 pl-8">
				<a href="#!" class="mr-9 text-gray-800">
				  <svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fab"
					data-icon="facebook-f"
					class="svg-inline--fa fa-facebook-f w-2.5"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 320 512"
				  >
					<path
					  fill="currentColor"
					  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
					></path>
				  </svg>
				</a>
				<a href="#!" class="mr-9 text-gray-800">
				  <svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fab"
					data-icon="twitter"
					class="svg-inline--fa fa-twitter w-4"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				  >
					<path
					  fill="currentColor"
					  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
					></path>
				  </svg>
				</a>
	
				<a href="#!" class="mr-9 text-gray-800">
				  <svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fab"
					data-icon="instagram"
					class="svg-inline--fa fa-instagram w-3.5"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
				  >
					<path
					  fill="currentColor"
					  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
					></path>
				  </svg>
				</a>
			  </div>
			</div>
			<div class="text-center text-gray-700 p-4">
			  © 2022 Copyright:
			  <a class="text-gray-800" href="https://tailwind-elements.com/">Tailwind Elements</a>
			</div>
		</footer>
	</body>
	</template>
	
	<!-- <script setup>
	import { ref } from "@vue/reactivity";
	import { computed, onMounted } from "@vue/runtime-core";
	
	const Text = ref("")
	
	setInterval(()=>{
		console.log(Text.value)
		const imagePath = computed(()=>{
		if (Text.value == 'สวัสดี') {
		  return '../assets/img/test.png';
		} else {
		  return '/path/to/type2.jpg';
		}
	  }
	)
	},100000)
	const imagePath = computed(()=>{
		if (Text.value == 'สวัสดี') {
		  return '../assets/img/test.png';
		} else {
		  return '/path/to/type2.jpg';
		}
	  }
	)
	</script> -->
	<script>
	export default {
		data(){
			return{
				Text:"",
				Text2:"",
				showImage: false,
			}
		},
		watch:{
		  Text2(){
			this.Text = this.Text2
			console.log(this.Text)
		  }
		  
		},
		computed: {
		imagePath() {
		  console.log(this.Text)
			if (this.Text == 'สวัสดี') {
			  this.showImage = true
			return 'https://www.tripgether.com/wp-content/uploads/2021/08/5.jpg'
			}if (this.Text == 'วิวสวยจัง'){
			  this.showImage = true
			  return "https://s359.thaibuffer.com/pagebuilder/0da1a80c-061d-4af4-87b2-bd4b993d46b4.jpg"
			}else {
			  this.showImage = false
			}
			
		}
		},
	
		
	}
	</script> 
	
	<style>
	</style>