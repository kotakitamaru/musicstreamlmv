<script lang="ts">
let props = $props();
let { icon, href } = props;
</script>

<a class="{props.class || ''} iconButton" href={href}>
    <span class="material-icons">{@html icon}</span>
</a>

<style>
    .iconButton {
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .material-icons {
        font-size: 50px;
        transition: transform .2s;
    }

    .material-icons:hover{
        transform: scale(1.2);
    }
</style>
