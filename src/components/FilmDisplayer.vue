<script>
import "/node_modules/flag-icons/css/flag-icons.min.css"
export default {
    name: "SimpleCard",
    props: {
        obj: "object",
        /* class: `fi fi-${obj.original_title}` */


    }, /* components: {
        class: `fi fi-${obj.original_title}`

    } */



}
</script>

<template>
    <div class="card-wrapper">
        <div>
            <h2>{{ obj.title }}</h2>
            <span>
                <p>{{ obj.original_title }}</p>

                <span id="flag" :class="'fi fi-' + obj.original_language">
                    <span id="original_lang">{{ obj.original_language.toUpperCase() }}</span>
                </span>


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




#flag {
    position: relative;

}

#original_lang {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    color: orangered;


}
</style>