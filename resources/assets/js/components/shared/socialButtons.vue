<template>
    <div class="social-login text-center">
        <div class="sites-links">
            <a href="/redirect/google" class="login-btn social-btn google-login">
                <img src="/images/google.svg" alt=""> Continue with Google
            </a>
            <a href="/redirect/facebook" class="login-btn social-btn fb-login">
                <i class="fab fa-facebook"></i> Continue with Facebook
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "social-buttons"
    }
</script>
