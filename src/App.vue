<script setup>

</script>

<template>
  <div class="w-screen h-screen bg-main text-maintext text-4xl flex justify-center items-center flex-col">
    <div class="mb-16 gont text-[100px] ">
      NIGHT
    </div>
    <div class="mb-10 gont2 text-[100px]">
      NIGHT
    </div>
    <div class="scale-up-ver-center border rounded-full text-base px-16 py-6">
      gogogo
    </div>
  </div>
</template>

<style>
.gont {
  font-family: supersize-bk, sans-serif;
  font-weight: 400;
  font-style: normal;
  opacity: 0;
  animation-name: gont;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  transition: transform 0.6s cubic-bezier(0, 0.55, 0.45, 1);

}

@keyframes gont {
  50% {
    opacity: 1;
    transform: translate(0px, -50px)
  }

  100% {
    opacity: 1;
    transform: translate(0px, 0px)
  }
}
@keyframes gont {
  0% {
    transform: scale(2);
  }

  50% {
    transform: scale(1);
  }
}
.gont2 {
  font-family: supersize-bk, sans-serif;
  font-weight: 400;
  font-style: normal;
  opacity: 0;
  animation-name: gont2;
  animation-duration: 1s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
  transition: transform 0.6s cubic-bezier(0, 0.55, 0.45, 1);
}

@keyframes gont2 {
  50% {
    opacity: 1;
    transform: translate(0px, -50px)
  }

  100% {

    opacity: 1;
    transform: translate(0px, 0px)
  }
}
@keyframes gont2 {
  0% {
    transform: scale(2);
  }

  50% {
    transform: scale(1);
  }
}
</style>


<script>
  (function (d) {
    var config = {
      kitId: 'asb7nqb',
      scriptTimeout: 3000,
      async: true
    },
      h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
  })(document);
</script>