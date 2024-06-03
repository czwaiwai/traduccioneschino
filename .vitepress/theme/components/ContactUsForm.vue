<script setup>
import { ref } from 'vue'
import axios from 'axios'
const dialog = ref(false)
const message = ref('')
const submitHandle = (e) => {
    console.log(e.target)
    let form = new FormData(e.target)
    let sendData = {}
    form.forEach((val, key) => {
        sendData[key] = val
    })
    axios.post('/message', sendData).then((res) => {
        console.log(res)
        message.value = res.data.message
        dialog.value = true
    })
}

</script>
<template>
    <div>
        <v-dialog v-model="dialog" width="auto">
            <v-card max-width="400" :text="message" title="消息提醒">
                <template v-slot:actions>
                    <v-btn class="ms-auto" text="Ok" @click="dialog = false"></v-btn>
                </template>
            </v-card>
        </v-dialog>
        <form @submit.prevent.stop="submitHandle" class="pt-lg-4" method="post">
            <div class="twice-two">
                <input type="text" class="form-control" name="name" id="w3lName" placeholder="Name" required="">
                <input type="email" class="form-control" name="email" id="w3lSender" placeholder="Email" required="">
                <input type="text" class="form-control" name="subject" id="w3lSubject" placeholder="Subject"
                    required="">
            </div>

            <textarea name="message" class="form-control" id="w3lMessage" placeholder="Message" required=""></textarea>
            <div class="text-lg-center">
                <button type="submit" class="btn btn-primary btn-style mt-lg-5 mt-4">Send Message</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.btn-style {
    color:#FFF;
}
</style>