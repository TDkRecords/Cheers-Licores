<script>
  import { onMount } from "svelte";

  let currentHash = "";

  onMount(() => {
    const updateHash = () => (currentHash = window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  });

  const navItems = [
    { label: "Productos", href: "#productos", icon: "bi-bag-check" },
    { label: "Nosotros", href: "#nosotros", icon: "bi-people-fill" },
    { label: "Cómo Comprar", href: "#comprar", icon: "bi-credit-card" },
    { label: "Contacto", href: "#contacto", icon: "bi-envelope" },
  ];
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<nav class="navbar navbar-expand-lg px-4">
  <a class="navbar-brand fw-bold" href="/">🍷 Cheers Licores</a>
  <button
    class="navbar-toggler text-white"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navContent"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navContent">
    <ul class="navbar-nav ms-auto">
      {#each navItems as item}
        <li class="nav-item">
          <a
            class="nav-link d-flex align-items-center gap-2 {item.href ===
            currentHash
              ? 'active'
              : ''}"
            href={item.href}
          >
            <i class={`bi ${item.icon}`}></i>
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  .navbar {
    background-color: #000;
  }

  .navbar-brand,
  .nav-link {
    color: #eaeaea !important;
    transition: all 0.3s ease;
  }

  .nav-link:hover {
    color: #c9a14a !important;
    transform: translateY(-2px);
  }

  .nav-link.active {
    color: #c9a14a !important;
    font-weight: bold;
    border-bottom: 2px solid #c9a14a;
  }

  .nav-item {
    margin-left: 1rem;
  }

  .bi {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }

  .nav-link:hover .bi {
    transform: scale(1.2);
  }
</style>
