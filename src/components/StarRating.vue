<script>

export default {
    name: "Stars",
    props: {
        rate: "string",
    }

}

</script>


<template>
    <div class="horizontal">

        <div v-for="n in 5">
            <div v-if="n <= (Math.ceil(((rate) / 0.5) * 0.5) / 2)">
                <font-awesome-icon icon="fa-solid fa-star" class="starActive" />
            </div>
            <div v-else>
                <font-awesome-icon icon="fa-solid fa-star" />
            </div>
        </div>
    </div>
</template>
<style></style>