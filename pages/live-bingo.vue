<template>
  <div class="bg-primary_bg min-h-screen pt-24 pb-12 lg:pt-28 lg:pb-16">
    <div class="container mx-auto px-4 lg:px-8 max-w-5xl">

      <!-- Hero -->
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        {{ page.h1 }}
      </h1>

      <div class="flex flex-col lg:flex-row lg:gap-10 mb-12 mt-6">
        <div class="lg:w-1/2 mb-6 lg:mb-0">
          <!-- Image placeholder: renders the asset if present, otherwise a styled block -->
          <img
            v-if="imageReady"
            :src="page.image"
            :alt="page.image_alt"
            class="w-full h-auto object-cover rounded-lg"
            @error="imageReady = false"
          >
          <div
            v-else
            class="w-full aspect-square rounded-lg flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-secondary_bg via-primary_bg to-secondary/30 border border-secondary/30"
          >
            <span class="text-5xl mb-3" aria-hidden="true">🐝</span>
            <span class="text-white text-2xl font-bold">Dab &amp; Blab Live</span>
            <span class="text-secondary text-lg mt-1">Every Friday · 8pm–10pm</span>
          </div>
        </div>
        <div class="lg:w-1/2">
          <p class="text-gray-200 text-lg leading-relaxed mb-6" v-html="page.intro"></p>
          <a
            :href="regLink"
            class="inline-block bg-secondary hover:brightness-110 text-primary_bg font-bold text-lg px-8 py-3 rounded-lg transition-all duration-200 shadow-lg"
            data-umami-event="cta-register"
            data-umami-event-placement="live-bingo-top"
          >
            {{ page.cta_text }}
          </a>
        </div>
      </div>

      <!-- What Is Live Bingo -->
      <section class="mb-12">
        <h2 class="text-2xl lg:text-3xl font-bold text-white mb-4">What Is Live Bingo?</h2>
        <div class="space-y-4">
          <p v-for="(p, i) in page.what_is_live_bingo" :key="i" class="text-gray-200 text-lg leading-relaxed" v-html="p"></p>
        </div>
      </section>

      <!-- What Is Dab & Blab Live -->
      <section class="mb-12">
        <h2 class="text-2xl lg:text-3xl font-bold text-white mb-4">What Is Dab &amp; Blab Live Bingo?</h2>
        <div class="space-y-4">
          <p v-for="(p, i) in page.what_is_dab_and_blab" :key="i" class="text-gray-200 text-lg leading-relaxed" v-html="p"></p>
        </div>
      </section>

      <!-- What to Expect -->
      <section class="mb-12">
        <h2 class="text-2xl lg:text-3xl font-bold text-white mb-4">What to Expect Every Friday Night</h2>
        <p class="text-gray-200 text-lg leading-relaxed mb-3">{{ page.what_to_expect.intro }}</p>
        <ul class="list-disc list-inside text-gray-200 text-lg mb-4 space-y-1">
          <li v-for="item in page.what_to_expect.items" :key="item">{{ item }}</li>
        </ul>
        <p class="text-gray-200 text-lg leading-relaxed">{{ page.what_to_expect.outro }}</p>
      </section>

      <!-- Weekly Shows -->
      <section class="mb-12">
        <h2 class="text-2xl lg:text-3xl font-bold text-white mb-4">The Weekly Live Bingo Shows</h2>
        <p class="text-gray-200 text-lg leading-relaxed mb-4">{{ page.shows.intro }}</p>

        <div class="bg-secondary_bg rounded-lg overflow-hidden mb-8">
          <table class="w-full">
            <thead>
              <tr class="bg-primary_bg">
                <th class="text-left px-4 py-2 text-secondary font-semibold">Week</th>
                <th class="text-left px-4 py-2 text-secondary font-semibold">Show</th>
                <th class="text-left px-4 py-2 text-secondary font-semibold">Key Value</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in page.shows.schedule"
                :key="row.show"
                class="border-t border-primary_bg"
              >
                <td class="px-4 py-2 text-gray-200">{{ row.week }}</td>
                <td class="px-4 py-2 text-white font-semibold">{{ row.show }}</td>
                <td class="px-4 py-2 text-gray-200">{{ row.value }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="space-y-6">
          <div v-for="(b, i) in page.shows.breakdowns" :key="i">
            <h3 class="text-xl lg:text-2xl font-bold text-secondary mb-2">{{ b.title }}</h3>
            <p class="text-gray-200 text-lg leading-relaxed" v-html="b.body"></p>
          </div>
        </div>
      </section>

      <!-- Mini-Games -->
      <section class="mb-12">
        <h2 class="text-2xl lg:text-3xl font-bold text-white mb-4">Cash-Prize Mini-Games</h2>
        <p class="text-gray-200 text-lg leading-relaxed mb-3">{{ page.mini_games.intro }}</p>
        <ul class="list-disc list-inside text-gray-200 text-lg mb-4 space-y-1">
          <li v-for="item in page.mini_games.items" :key="item">{{ item }}</li>
        </ul>
        <p v-if="page.mini_games.outro" class="text-gray-200 text-lg leading-relaxed">{{ page.mini_games.outro }}</p>
      </section>

      <!-- When & Where -->
      <section class="mb-12">
        <h2 class="text-2xl lg:text-3xl font-bold text-white mb-4">When &amp; Where to Play</h2>
        <div class="bg-secondary_bg rounded-lg overflow-hidden">
          <dl class="divide-y divide-primary_bg">
            <div
              v-for="row in page.when_where"
              :key="row.label"
              class="flex flex-col sm:flex-row sm:items-center px-4 py-3"
            >
              <dt class="font-semibold text-secondary sm:w-1/4">{{ row.label }}</dt>
              <dd class="text-gray-200 sm:w-3/4">{{ row.value }}</dd>
            </div>
          </dl>
        </div>
      </section>

      <!-- Why Play -->
      <section class="mb-12">
        <h2 class="text-2xl lg:text-3xl font-bold text-white mb-4">Why Play Live Bingo at Queen's Bingo?</h2>
        <p class="text-gray-200 text-lg leading-relaxed" v-html="page.why_play"></p>
      </section>

      <!-- FAQs -->
      <section class="mb-12">
        <h2 class="text-2xl lg:text-3xl font-bold text-white mb-4">Live Bingo FAQs</h2>
        <div class="space-y-2">
          <details
            v-for="(faq, i) in page.faqs"
            :key="i"
            class="bg-secondary_bg rounded-lg overflow-hidden group"
            @toggle="onFaqToggle($event, faq.q)"
          >
            <summary class="cursor-pointer px-4 py-3 font-semibold text-white hover:text-secondary">
              {{ faq.q }}
            </summary>
            <p class="px-4 pb-4 pt-1 text-gray-200 text-lg leading-relaxed" v-html="faq.a"></p>
          </details>
        </div>
      </section>

      <!-- Final CTA -->
      <div class="text-center mb-4">
        <p class="text-white text-xl font-semibold mb-5">{{ page.final_cta }}</p>
        <a
          :href="regLink"
          class="inline-block bg-secondary hover:brightness-110 text-primary_bg font-bold text-lg px-10 py-4 rounded-lg transition-all duration-200 shadow-lg"
          data-umami-event="cta-deposit"
          data-umami-event-placement="live-bingo-bottom"
        >
          {{ page.cta_text }}
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { regLink } from '~/composables/globalData';
import page from '~/content/live-bingo.js';

// Image placeholder: optimistically attempt the asset; the <img> @error
// handler falls back to the styled block if the file isn't there yet.
const imageReady = ref(Boolean(page.image));

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 30);
const onFaqToggle = (e, question) => {
  if (!e.target.open) return;
  window.umami?.track('faq-open', { page: 'live-bingo', question: slugify(question) });
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: page.faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

// Recurring Friday show — Event schema for rich results.
const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: "Dab & Blab Live — Live Bingo at Queen's Bingo",
  description: page.seo.description,
  eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  startDate: '2026-07-03T20:00:00+01:00',
  endDate: '2026-07-03T22:00:00+01:00',
  eventSchedule: {
    '@type': 'Schedule',
    repeatFrequency: 'P1W',
    byDay: 'https://schema.org/Friday',
    startTime: '20:00',
    endTime: '22:00',
    scheduleTimezone: 'Europe/London',
  },
  location: {
    '@type': 'VirtualLocation',
    url: 'https://play.queensbingo.com/live-bingo',
  },
  organizer: {
    '@type': 'Organization',
    name: "Queen's Bingo",
    url: 'https://play.queensbingo.com',
  },
};

useSeoMeta({
  title: page.seo.title,
  description: page.seo.description,
});

useHead({
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(faqJsonLd) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(eventJsonLd) },
  ],
});
</script>
