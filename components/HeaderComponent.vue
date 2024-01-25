<template>
    <header class="px-10 lg:px-28 py-6 bg-sky-50">
        <div class="z-0 flex justify-between items-center">
            <div>
                <div class="flex">
                    <span class="text-blue-500 text-3xl font-['sora'] font-bold">Doctor</span>
                    <div class="absolute">
                        <img class="relative left-24 bottom-6" src="../assets/img/icons/group.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="relative block hidden lg:block">
                <ul class="flex space-x-8">
                    <li><a class="text-blue-500 text-base" href="#">Home</a></li>
                    <li><a class="text-base text-slate-500" href="#">About</a></li>
                    <li><a class="text-base text-slate-500" href="#">Services</a></li>
                    <li><a class="text-base text-slate-500" href="#">Contact</a></li>
                </ul>
            </div>
            <div class="hidden lg:block">
                <div class="">
                    <a class="flex gap-2 justify-between items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-600 rounded-3xl shadow text-white text-lg font-semibold"
                        href="">
                        <img src="../assets/img/icons/message-circle.svg" alt="">
                        <span class="capitalize"> book now</span></a>
                </div>
            </div>
            <div class="hamburger-menu-icon cursor-pointer block lg:hidden" @click="openToggleMenu()">
                <img src="../assets/img/icons/menu.svg" alt="">
            </div>
        </div>
        <transition name="">
            <div v-if="showToggleMenu" @click="closeToggleMenu()" class="h-screen bg-black fixed inset-0 opacity-50 z-10">
            </div>
        </transition>
        <transition name="fade">
            <div v-if="showToggleMenu"
                class="menu-container opacity-100 rounded-lg mobile-nav inline-block justify-center fixed h-[70%] inset-0 z-20 space-y-8 block pt-3 pb-10 bg-blue-600 lg:hidden">
                <div class="hamburger-menu-icon cursor-pointer flex mt-2 justify-end mr-8 text-white block lg:hidden"
                    @click="closeToggleMenu()">
                    <img src="../assets/img/icons/close.svg" alt="">
                </div>
                <div class="relative block text-center">
                    <ul class="block space-y-6">
                        <li><a class="text-3xl text-white" href="#">Home</a></li>
                        <li><a class="text-3xl text-white" href="#">About</a></li>
                        <li><a class="text-3xl text-white" href="#">Services</a></li>
                        <li><a class="text-3xl text-white" href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="flex justify-center">
                    <div class="inline-block">
                        <a class="flex gap-2 px-8 py-3 bg-white rounded-3xl shadow text-blue-500 text-lg font-semibold"
                            href="">
                            <img src="../assets/img/icons/whatsapp-blue.svg" alt="">
                            <span class="capitalize"> book now</span></a>
                    </div>
                </div>
            </div>
        </transition>

    </header>
</template>
  
<script>
export default {
    data() {
        return {
            showToggleMenu: false,
        };
    },
    methods: {
        openToggleMenu() {
            this.showToggleMenu = true;
            console.log(this.showToggleMenu)
        },
        closeToggleMenu() {
            this.showToggleMenu = false;
        },

    },

};
</script>
<style>
 .fade-enter-active, .fade-leave-active {
    transition: 0.5s;
}

 
.fade-leave-to{
  transform: translateY(-100%);
}

</style>
  