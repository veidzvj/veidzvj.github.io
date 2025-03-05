<template>
  <div class="flex justify-center gap-9">
    <div class="w-32 h-32">
      <img
        src="../assets/images/profile-picture.jpeg"
        class="border border-solid border-primary rounded object-cover w-full h-full"
      />
    </div>
    <div class="flex flex-col justify-between">
      <div>
        <h1 class="text-2xl">João Victor Veidz</h1>
        <h5 class="text-secondary">Software Engineer</h5>
      </div>
      <div class="flex gap-2">
        <a
          href="https://github.com/evrwaq"
          target="_blank"
          class="cursor-pointer"
        >
          <img src="~/assets/icons/github.svg" alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/veidz/"
          target="_blank"
          class="cursor-pointer"
        >
          <img src="~/assets/icons/linkedin.svg" alt="Linkedin" />
        </a>
        <a href="" class="cursor-pointer">
          <img src="~/assets/icons/cv.svg" alt="Curriculum Vitae" />
        </a>
      </div>
    </div>
  </div>
</template>
