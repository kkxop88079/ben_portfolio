<template>
    <div class="fixed top-0 left-0 text-white bg-main w-full overflow-x-hidden overflow-y-hidden">
        <div class="w-[1360px] m-auto font-main pt-4 flex justify-between">
            <div class="font-bold text-2xl">Sam chung.</div>
            <div class="flex flex-row text-base font-bold">
                <div class="mx-8 cursor-pointer"><h1>作品集</h1></div>
                <div class="mx-8 cursor-pointer"><h1>關於我</h1></div>
                <div class="ml-4">
                    <h1>履歷表</h1>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
h1::before {
    transform: scaleX(0);
    transform-origin: bottom right;
}

h1:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
}

h1::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: #7709ee;
    padding: 10px;
    z-index: -1;
    transition: transform .3s ease;
}

h1 {
    position: relative;
    padding: 10px;
}
</style>