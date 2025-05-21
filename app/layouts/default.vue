<template>
  <div class="max-w-lg mx-a p-4 b-5 b-teal b-solid b-rd-3xl shadow-xl md:p6 h-full flex-1 flex flex-col h-ful">
    <header>
        <div class="color-teal text-size-4xl md:text-size-6xl flex flex-items-center">
            <span class="i-material-symbols-shopping-cart" />
            <h1 class="font-heading fw-bold">Grocerace</h1>
            <button class="ml-a"><span class="i-material-symbols-menu" /></button>
        </div>
        <p class="my-4 text-size-xl">Shared shopping lists with real-time updates and points.</p>
    </header>
    <main class="h-full">
      <NuxtPage />
    </main>
  </div>
</template>