<template>
  <div>
    <nav class="bg-primary_bg fixed z-10 py-4 shadow-lg items-center w-full">
      <div class="w-full md:px-0">
        <div class="container md:mx-auto grid grid-cols-3 items-center">
          
          <!-- LEFT: mobile menu -->
          <div class="left relative">
            <!-- Menu button -->
            <button
              id="menu-btn"
              @click.stop="toggleMenu"
              class="menu-btn items-center"
            >
              <img
                src="../assets/hamburgerMenu.svg"
                alt="Mobile Menu Button"
                class="w-9 h-9 pl-4 items-center"
              />
            </button>

            <!-- Dropdown menu -->
            <div
              id="menu"
              class="menu bg-cyan-950 rounded text-left w-36 drop-shadow-[0_15px_15px_rgba(0,0,0,0.50)] transition duration-300 ease-in-out origin-top"
              :class="menuIsOpen ? 'scale-100' : 'scale-0'"
              @click.stop
            >
              <NuxtLink to="/" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate.home }}</NuxtLink>
              <NuxtLink to="/promotions" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate.promotions }}</NuxtLink>
              <NuxtLink to="/compliance" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate.legal }}</NuxtLink>
              <NuxtLink to="/all-games" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate.all_games }}</NuxtLink>
              <NuxtLink to="/popular-games" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate.popular_games }}</NuxtLink>
              <NuxtLink to="/slot-games" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate.slot_games }}</NuxtLink>
              <NuxtLink to="/casino-games" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate.casino_games }}</NuxtLink>
              <NuxtLink to="/jackpot-games" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate.jackpot_games }}</NuxtLink>
              <NuxtLink to="/compliance/contact" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate.contact }}</NuxtLink>
              <a :href="regLink" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate.login }}</a>
            </div>
          </div>

          <!-- CENTER: logo -->
          <div>
            <NuxtLink class="flex justify-center" to="/">
              <img
                src="../static/queens-bingo-logo.svg"
                alt="Queens Bingo header Logo"
                width="150"
                height="45"
              />
            </NuxtLink>
          </div>

          <!-- RIGHT: desktop links -->
          <div class="right">
            <ul class="grid-cols-2 gap-6 hidden lg:flex">
              <li><a :href="loginLink" class="login-btn">{{ msgTranslate.login }}</a></li>
              <li><a :href="regLink" class="reg-btn">{{ msgTranslate.sign_up }}</a></li>
            </ul>
            <div class="flex lg:hidden pr-4">
              <a :href="loginLink" class="cas-btn px-4">Login</a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Close menu on outside click -->
    <div v-if="menuIsOpen" class="fixed inset-0 z-0" @click="closeMenu"></div>

    <slot />
    <SeoKit />
    <Footer />
    <CookieConsent />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { msgTranslate, regLink, loginLink } from '~/composables/globalData'

const menuIsOpen = ref(false)

function toggleMenu() {
  menuIsOpen.value = !menuIsOpen.value
}

function closeMenu() {
  menuIsOpen.value = false
}
</script>

<style>
.menu-btn {
  cursor: pointer;
  display: inline-block;
  position: relative;
}

.menu {
  display: block;
  position: absolute;
  min-width: 250px;
  transform: scale(0);
}

.menu-item {
  display: block;
  line-height: 55px;
  font-size: 18px;
  font-weight: 100;
}

.router-link-active {
  color: #80acd1;
}
</style>