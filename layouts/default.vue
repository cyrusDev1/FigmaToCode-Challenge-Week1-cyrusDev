<template>
    <Head>
        <Title>Dr. Matthew Anderson</Title>
    </Head>
    <HeaderComponent />
    <slot />
    <FooterComponent />
</template>
    
<script>
import HeaderComponent from '~/components/HeaderComponent.vue'
import FooterComponent from '~/components/FooterComponent.vue'

export default {
    data() {
        return {
        };
    },
    components: {
        HeaderComponent,
        FooterComponent
    }
}
</script>
    
<style></style>