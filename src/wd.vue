<template >
	<!-- <div class="app text-3xl font-bold underline text-center">
		<button :class="`mic`" @click="ToggleMic">Record</button>
	</div> -->
	<div class="copy-area">
		<textarea autofocus placeholder="Text something..."  class="transcript block m-auto rounded-lg	border-slate-700 outline-0" v-model="transcript"></textarea>
		<button @click="handleCopyButtonClick" class="copy-button">
			<font-awesome-icon icon="fa-solid fa-copy" class=" left-1 " />
		</button>
	</div>
	<button type="button" @click="Save">Save</button>


</template>


<script setup>
import { ref, onMounted } from 'vue'
import Clipboard from 'clipboard';
let transcript = ref('')
const isRecording = ref(false)
const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition


let sr = new Recognition()
onMounted(() => {
  sr.lang = 'th-TH'
  sr.continous = true
	sr.continuous = true
	sr.interimResults = true
	sr.onstart = () => {
		console.log('SR Started')
		isRecording.value = true
	}
	sr.onend = () => {
		console.log('SR Stopped')
		isRecording.value = false
	}
	sr.onresult = (evt) => {

		const t = Array.from(evt.results)
			.map(result => result[0])
			.map(result => result.transcript)
			.join(' ')
		
		transcript.value = t
    console.log(transcript.value)
    localStorage.setItem("Text",transcript.value)
	}

})
const ToggleMic = () => {
	if (isRecording.value) {
		sr.stop()
	} else {
		sr.start()
	}
}

const handleCopyButtonClick=() => {
    let textToCopy = transcript.value;
    let clipboard = new Clipboard('.copy-button', {
      text: () => textToCopy
    });

    //Copy the selected text to the clipboard
    clipboard.on('success', function(e) {
      console.log('Copied to clipboard!');
    });
  }


</script>

<style scoped>
.copy-area textarea {
        resize: none;
		border: 0.1rem;
		border-style: inherit;
		height: 200px;
		width: 400px;
		padding: 1rem;
}



</style>
