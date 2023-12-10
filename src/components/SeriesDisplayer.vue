<script>

export default {
    name: "SimpleTVCard",
    props: {
        obj: "object",



    }

}
</script>


<template>
    <div>
        <div class="card">
            <h2>{{ obj.name }}</h2>

            <p>{{ obj.original_name }}</p>

            <span id="flag" :class="'fi fi-' + obj.original_language">
                <span id="original_lang">{{ obj.original_language.toUpperCase() }}</span>
            </span>

            <!--                 <span id="flag" :class="'fi fi-' + obj.original_language">
                    <span id="original_lang">{{ obj.original_language.toUpperCase() }}</span>
                </span> -->


            <p>{{ obj.vote_average }}</p>


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