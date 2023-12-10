<script>
import Rating from "./StarRating.vue"
import "/node_modules/flag-icons/css/flag-icons.min.css"
export default {
    name: "SimpleCard",
    props: {
        obj: "object",
    },
    components: {
        Rating
    }

}
</script>

<template>
    <div>
        <div class="card">


            <div>

                <h2>{{ obj.title }}</h2>
            </div>
            <div>

                <p>{{ obj.original_title }}</p>

                <span id="original_lang">{{ obj.original_language.toUpperCase() }}</span>


            </div>
            <div>
                <Rating :rate="obj.vote_average" />
            </div>
            <div class="poster">

                <img :src="'https://image.tmdb.org/t/p/w185/' + obj.poster_path" alt="">
            </div>
        </div>
    </div>
</template>


<style>
.poster {

    width: 185px;

}

.starActive {
    color: orange;
}

.horizontal {
    display: flex;
    flex-direction: row;

}

/* #flag {
    position: relative;

}

#original_lang {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    color: orangered;


} */
</style>