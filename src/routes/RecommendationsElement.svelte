<script>
    let {image, label, href} = $props();
</script>

<a class="element" {href}>
    <img src="../{image}" alt={label} />
    <span>{label}</span>
</a>

<style>
    .element{

    }

    .element span{
        font-size: 1.5rem;
        color: #fff;
        display: block;
        overflow: clip;
        width: 15rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .element img{
        width: 15rem;
        height: 15rem;
        border-radius: 15px;
        background-color: #fff3b9;
        object-fit: cover;
        transition: transform .2s;
    }
    .element img:hover{
        transform: scale(1.1);
    }
</style>
