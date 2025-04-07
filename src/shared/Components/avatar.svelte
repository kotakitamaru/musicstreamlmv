
<button >
    <img class="avatar" src="/covers/avatar.jpg">
</button>


<style>
    .avatar {
        background-color: plum;
        border-radius: 50%;
        height: 60px;
        width: 60px;
        cursor: pointer;
        object-fit: cover;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
    button{
        transition: transform 0.3s ;
    }

    button:hover{
        transform: scale(1.2);
    }
</style>
