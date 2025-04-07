<script module lang="ts">

    type DropdownMenu = {
        open: () => void;
        close: () => void;
    }
    export const DropdownMenuController : DropdownMenu = {
        open: () => {
            throw new Error("DropdownMenu not initialized");
        },
        close: () => {
            throw new Error("DropdownMenu not initialized");
        }
    };
</script>

<script lang="ts">
    import { HelpControl } from "./help.svelte";

    let isOpen = $state<boolean>(false);
    DropdownMenuController.open = () => {
        isOpen = true
    };
    DropdownMenuController.close = () => {
        isOpen = false
    };
</script>

{#if isOpen}
    <div class="background" onclick={() => {isOpen = false}}>
        <ul class="dropdownContainer">
            <li onclick={() => console.log(':D')}>Item 1</li>
            <li>Item 1</li>
            <li class="delimiter"></li>
            <li onclick={HelpControl.open}>Help</li>
        </ul>
    </div>
{/if}

<style>
    .dropdownContainer {
        color: white;
        background-color: #282828;
        position: fixed;
        left: 0;
        top: 75px;
        z-index: 51;
        padding: 1rem 2rem;
        font-size: 2rem;
        border-radius: 0 0 1rem 0;
    }



    .dropdownContainer li {
        margin-block: 0.5rem;
        cursor: pointer;
        transition: transform 150ms;
    }

    .dropdownContainer li:hover {
        transform: scale(1.1);
    }

    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 50;
    }

    .delimiter {
        padding: 1rem 2rem;
    }
</style>