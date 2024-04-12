<script setup lang="ts">
import MessageActionDropdown from '@/components/Dropdowns/MessageActionDropdown.vue'
import ReactionEmojiDropdown from '@/components/Dropdowns/ReactionEmojiDropdown.vue'
</script>

<template>
  <div class="w-full flex items-center justify-end">
    <div class="flex items-start gap-2.5">
      <div class="space-y-3 mt-5">
        <div>
          <MessageActionDropdown position="right" />
        </div>

        <div class="ml-1">
          <ReactionEmojiDropdown position="right" />
        </div>
      </div>

      <div
        class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-light-accent rounded-ee-xl rounded-s-xl dark:bg-dark-accent"
      >
        <div class="flex items-center justify-between space-x-2 rtl:space-x-reverse">
          <span class="text-xs font-normal text-gray-200">
            <i class="fa-solid fa-clock mr-1"></i>
            11:46
          </span>
          <span class="text-sm font-semibold text-white"> Bonnie Green </span>
        </div>

        <p class="text-sm font-normal py-2.5 text-white">
          That's awesome. I think our users will really appreciate the improvements.
        </p>

        <div class="grid gap-2.5 grid-cols-2 my-2.5">
          <div class="group relative">
            <div
              class="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"
            >
              <button
                data-tooltip-target="download-image-1"
                class="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50"
              >
                <svg
                  class="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                  />
                </svg>
              </button>
              <div
                id="download-image-1"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Download image
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <img
              src="https://media.istockphoto.com/id/1368965646/photo/multi-ethnic-guys-and-girls-taking-selfie-outdoors-with-backlight-happy-life-style-friendship.jpg?s=612x612&w=0&k=20&c=qYST1TAGoQGV_QnB_vMd4E8jdaQUUo95Sa2JaKSl_-4="
              class="rounded-lg"
            />
          </div>
          <div class="group relative">
            <div
              class="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"
            >
              <button
                data-tooltip-target="download-image-2"
                class="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50"
              >
                <svg
                  class="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                  />
                </svg>
              </button>
              <div
                id="download-image-2"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Download image
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <img
              src="https://t4.ftcdn.net/jpg/05/01/89/63/360_F_501896390_l5acKgYBwxrVBewEBfa0aWDruVtJWzD3.jpg"
              class="rounded-lg"
            />
          </div>
          <div class="group relative">
            <div
              class="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"
            >
              <button
                data-tooltip-target="download-image-3"
                class="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50"
              >
                <svg
                  class="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                  />
                </svg>
              </button>
              <div
                id="download-image-3"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Download image
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <img
              src="https://as1.ftcdn.net/v2/jpg/01/84/88/32/1000_F_184883286_arSVYOEqfEkq6ZnjhAqW4cNx7VlUgzm7.jpg"
              class="rounded-lg"
            />
          </div>
          <div class="group relative">
            <button
              class="absolute w-full h-full bg-gray-900/90 hover:bg-gray-900/50 transition-all duration-300 rounded-lg flex items-center justify-center"
            >
              <span class="text-xl font-medium text-white">+7</span>
              <div
                id="download-image"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Download image
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </button>
            <img
              src="https://as2.ftcdn.net/v2/jpg/01/62/40/13/1000_F_162401333_GSWJfJBW9S6FS0P5N0P6Ieyi14c53v9A.jpg"
              class="rounded-lg"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="text-xs text-right font-normal text-gray-200">
            Send
            <i class="fa-solid fa-eye ml-2"></i>
          </div>

          <div class="flex items-center space-x-1">
            <button
              type="button"
              class="flex items-center text-xs font-normal text-gray-500 dark:text-gray-400 bg-green-700 rounded-full px-3 py-1.5 space-x-2"
            >
              <span>👍</span>
              <span class="font-semibold text-dark-text dark:text-dark-text"> 2 </span>
            </button>
            <button
              type="button"
              class="flex items-center text-xs font-normal text-gray-500 dark:text-gray-400 bg-green-700 rounded-full px-3 py-1.5 space-x-2"
            >
              <span>😂</span>
              <span class="font-semibold text-dark-text dark:text-dark-text"> 2 </span>
            </button>
            <button
              type="button"
              class="flex items-center text-xs font-normal text-gray-500 dark:text-gray-400 bg-green-700 rounded-full px-3 py-1.5 space-x-2"
            >
              <span>😎</span>
              <span class="font-semibold text-dark-text dark:text-dark-text"> 2 </span>
            </button>
          </div>
        </div>
      </div>

      <img
        class="w-8 h-8 rounded-full"
        src="https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg"
        alt="Jese image"
      />
    </div>
  </div>
</template>
