<template>
    <div class="">
        <nav class="bg-primary_bg fixed z-10 py-4 shadow-lg items-center w-full">
          <div class="w-full md:px-0">
            <div class="container md:mx-auto grid grid-cols-3 items-center">
                <div class="left">
                  <div class="menu-btn items-center" id="menu-btn">
                        <img src="../assets/hamburgerMenu.svg" alt="Mobile Menu Button" class="w-9 h-9 pl-4 items-center">
                          <div class="menu bg-secondary_bg rounded text-left w-36 drop-shadow-[0_15px_15px_rgba(0,0,0,0.50)] transition duration-300 ease-in-out transform scale-0 origin-top" id="menu">
                            <NuxtLink to="/" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate?.home || 'Home' }}</NuxtLink>
                            <NuxtLink to="/promotions" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate?.promotions || 'Promotions' }}</NuxtLink>
                            <NuxtLink to="/compliance" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate?.legal || 'Legal' }}</NuxtLink>
                            <NuxtLink to="/all-games" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate?.all_games || 'All Games' }}</NuxtLink>
                            <NuxtLink to="/popular-games" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate?.popular_games || 'Popular Games' }}</NuxtLink>
                            <NuxtLink to="/slot-games" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate?.slot_games || 'Slot Games' }}</NuxtLink>
                            <NuxtLink to="/casino-games" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate?.casino_games || 'Casino Games' }}</NuxtLink>
                            <NuxtLink to="/jackpot-games" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate?.jackpot_games || 'Jackpot Games' }}</NuxtLink>
                            <NuxtLink to="/compliance/contact" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate?.contact || 'Contact' }}</NuxtLink>
                            <a :href="regLink" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate?.login || 'Login' }}</a>
                        </div>
                    </div>
                </div>
                <div class="">
                  <NuxtLink class="flex justify-center" to="/">
                    <img src="../static/queens-bingo-logo.svg" alt="Queens Bingo header Logo" class="" width="150" height="45">
                  </NuxtLink>
                </div>

               <div class="right">
                <ul class=" grid-cols-2 gap-6 hidden lg:flex right">
                  <li class="items-center">
                    <a :href="loginLink" class="login-btn">{{ msgTranslate?.login || 'Login' }}</a>
                  </li>
                  <li class="items-center">
                    <a :href="regLink" class="reg-btn">{{ msgTranslate?.sign_up || 'Sign Up' }}</a>
                  </li>
                </ul>
                <div class="flex lg:hidden right items-center pr-4">
                  <a :href="loginLink" class="cas-btn px-4">Login</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <slot />
        <SeoKit />
        <Footer />
        <CookieConsent />
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useAsyncData } from '#app';
import { msgTranslate, regLink, loginLink, loadLang } from '~/composables/globalData';
import CookieConsent from '~/components/CookieConsent.vue';
import SeoKit from '~/components/SeoKit.vue';

const menuIsOpen = ref(false);

onMounted(async () => {
  try {
    await loadLang();
  } catch (error) {
    console.error('Error loading translations:', error);
  }

  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');
  const outsideClickListener = (event) => {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
      menuIsOpen.value = false;
      updateMenu();
    }
  };

  menuBtn.addEventListener('click', () => {
    menuIsOpen.value = !menuIsOpen.value;
    updateMenu();
  });

  document.addEventListener('click', outsideClickListener);

  onUnmounted(() => {
    document.removeEventListener('click', outsideClickListener);
  });
});

function updateMenu() {
  const menu = document.getElementById('menu');
  if (menuIsOpen.value) {
    menu.style.transform = 'scale(1)';
  } else {
    menu.style.transform = 'scale(0)';
  }
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
}

.menu-item {
  display: block;
  line-height: 55px;
  font-size: 18px;
  font-weight: 100;
}
.router-link-active {
  color: #F99A42;
}
</style>