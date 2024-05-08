<script setup>
import { ref } from 'vue'



const count = ref(0)
</script>

<template>
  <section class="px-5 pt-10">
    <div class="bg-Blue text-[white] py-5 px-14 text-center rounded-lg text-lg">
      <p><span class="font-bold">Try it free 7 days</span> then $20/mo. thereafter </p>
    </div>
    <form action="" class="bg-[white] px-5 py-10 rounded-lg mt-5">
      <div>
        <label for="firstName" ><input type="text" placeholder="First name" class="border border-Gray w-full rounded-lg p-2 outline-Blue caret-Blue"></label>
      </div>
      <div class="mt-5">
        <label for="lastName" ><input type="text" placeholder="Last name" class="border border-Gray w-full rounded-lg p-2 outline-Blue caret-Blue"></label>
      </div>
      <div class="mt-5">
        <label for="email" ><input type="text" placeholder="Email address" class="border border-Gray w-full rounded-lg p-2 outline-Blue caret-Blue"></label>
      </div>
      <div class="mt-5">
        <label for="password" ><input type="text" placeholder="Password" class="border border-Gray w-full rounded-lg p-2 outline-Blue caret-Blue"></label>
      </div>
      <button class="text-center text-[white] bg-Green w-full py-3 rounded-lg mt-5 hover:bg-opacity-80">Claim your free trial</button>
      <p class="text-sm text-center py-5 text-grayishBlue">By clicking the button, you are agreeing to our <a href="" class="text-Red font-semibold hover:opacity-80">Terms and Services</a></p>
      <p class="text-xs text-Blue text-center">Challenge by <a href="#" class="text-Red font-semibold hover:opacity-80">Frontend Mentor</a>. Coded by <a href="#" class="text-Red font-semibold hover:opacity-80">oadaramola</a>.</p>
    </form>
  </section>
</template>
  

<style scoped>

</style>
