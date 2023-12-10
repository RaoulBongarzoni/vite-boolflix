<script>
import "/node_modules/flag-icons/css/flag-icons.min.css"
export default {
    name: "SimpleCard",
    props: {
        obj: "object",



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

                <span id="flag" :class="'fi fi-' + obj.original_language">
                    <span id="original_lang">{{ obj.original_language.toUpperCase() }}</span>
                </span>


                <p>{{ obj.vote_average }}</p>

            </div>
        </div>
    </div>
</template>


<style>
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