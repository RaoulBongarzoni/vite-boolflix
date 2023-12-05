<script>
export default {
    name: "SimpleCard",
    props: {
        obj: "object"

    }
}
</script>

<template>
    <div class="card-wrapper">
        <div>
            <h2>{{ obj.title }}</h2>
            <span>
                <p>{{ obj.original_title }}</p>

                <p>{{ obj.original_language }}</p>

                <p>{{ obj.vote_average }}</p>
            </span>

        </div>
    </div>
</template>


<style>
.card-wrapper {
    background-color: #333;
    border-radius: 10px;
}
</style>