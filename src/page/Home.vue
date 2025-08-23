<script setup>
</script>

<template>
    <nav class="flex justify-between py-4 px-8 bg-slate-200/80 fixed top-0 right-0 left-0 h-16 shadow-md font-semibold">
        <div class="basis-2/12">
            <a>
                <h1 class="font-semibold text-green-500 text-xl">dinarwijaksono</h1>
            </a>
        </div>

        <div class="basis-8/12 flex justify-center items-center">
            <ul class="text-slate-700">
                <a target="#home">
                    <li class="inline-block mr-8 hover:text-green-500">Home</li>
                </a>

                <router-link to="about">
                    <li class="inline-block mr-8 hover:text-green-500">About</li>
                </router-link>
            </ul>
        </div>

        <div class="basis-2/12"></div>
    </nav>

    <section
        style="background-image: url('/img/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg'); background-position: center center; background-size: cover; background-repeat: no-repeat;"
        class="min-h-screen py-4 px-8 flex justify-center items-center text-slate-700">
        <div class="text-center text-white">
            <div style="background-image: url('/img/profile.jpeg'); background-size: cover; background-position: center center; background-repeat: no-repeat;"
                class="border-2 inline-block border-slate-700/50 shadow-xl rounded-full h-25 w-25 mb-2">
            </div>

            <p class="font-semibold text-xl text-green-500 mb-2 text-shadow-2xs text-shadow-green-700/30">Hallo Semua,
                saya</p>

            <h1 class="text-5xl font-semibold text-shadow-2xs text-shadow-slate-500/40">Dinar
                Wijaksono
            </h1>

            <p class="text-xl text-shadow-2xs text-shadow-slate-500/40"><span class="font-bold">Web Developer</span> |
                Frelancer
            </p>

            <p class="text-xl py-4 text-shadow-2xs text-shadow-slate-500/60">Lorem ipsum, dolor sit amet consectetur
                adipisicing.
            </p>

            <router-link to="/"
                class="inline-block shadow shadow-black/50 bg-green-500 hover:bg-green-400 text-white py-2 px-4 rounded-xl font-semibold text-sm">Hubungi
                saya</router-link>
        </div>


    </section>

    <section class="min-h-screen bg-red-300 py-4 px-8 pt-30 text-slate-700">

        <h1 class="text-slate-600 font-semibold text-3xl mb-4 text-center" id="about">Tentang saya</h1>

        <p class="my-4 text-center">Seorang web developer berpengalaman dalam membangun aplikasi berbasis web
            dengan fokus pada clean code, dan user experience. Menguasai PHP (Laravel), JavaScript (Vue), serta Tailwind
            CSS. Memiliki pengalaman dalam mengembangkan sistem berbasis MVC, API
            integration, hingga deployment di server/VPS.</p>

        <div class="flex">
            <div class="basis-6/12">

                <table class="table w-full text-lg">
                    <tr>
                        <td>Nama</td>
                        <td>:</td>
                        <td>Dinar Wijaksono</td>
                    </tr>

                    <tr>
                        <td>Email</td>
                        <td>:</td>
                        <td>dinarwijaksono11@gmail.com</td>
                    </tr>

                    <tr>
                        <td>Role</td>
                        <td>:</td>
                        <td>Web Developer (Fullstack)</td>
                    </tr>
                </table>

            </div>
        </div>

    </section>

</template>

<style scoped></style>
