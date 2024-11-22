<template>
    <nav class="navbar">
        <router-link to="/" class="navbarBrand">Ball in</router-link>
        <ul class="rightSideNav">
            <li class="rightNavItem">
                <router-link to="/about" class="navHome nav-link">關於</router-link>
            </li>
            <li class="rightNavItem">
                <router-link to="/analysis" class="navAnalysis nav-link">分析</router-link>
            </li>
            <li class="rightNavItem">
                <router-link to="/account" class="navAccount nav-link">帳號</router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    name: 'NavBar'
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: white;
}

.navbarBrand {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: white;
}

.rightSideNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
}

.rightNavItem {
    margin-left: 1rem;
}

.nav-link {
    text-decoration: none;
    color: white;
}
</style>