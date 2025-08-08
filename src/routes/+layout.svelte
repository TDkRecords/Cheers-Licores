<script>
  import Footer from "./../components/Footer.svelte";
  import Navbar from "./../components/Navbar.svelte";
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Navbar></Navbar>

{@render children?.()}

<Footer></Footer>
