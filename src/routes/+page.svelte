<script>
  import { onMount } from "svelte";
  import { db } from "$lib/assets/js/firebase";
  import { collection, getDocs } from "firebase/firestore";
  import "$lib/assets/css/style.css";

  let productos = [];

  onMount(async () => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    productos = querySnapshot.docs.map((doc) => doc.data());
  });
</script>

<!-- HERO -->
<section class="hero">
  <div class="info-hero">
    <h1>Bienvenido a Cheers Licores</h1>
    <p class="lead mt-3">Tu licorera premium de confianza 🍾</p>
  </div>
</section>

<!-- PRODUCTOS -->
<section id="productos" class="container my-5">
  <h2 class="section-title text-center">Nuestros Productos</h2>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    {#each productos as producto}
      <div class="col">
        <div class="card h-100">
          <img
            src={producto.imagen}
            class="card-img-top"
            alt={producto.nombre}
            style="object-fit: cover; height: 250px;"
          />
          <div class="card-body">
            <h5 class="card-title">{producto.nombre}</h5>
            <p class="card-text">{producto.descripcion}</p>
            <span class="badge">{producto.categoria}</span>
          </div>
          <div
            class="card-footer d-flex justify-content-between align-items-center"
          >
            <strong class="text-success"
              >${producto.precio.toLocaleString()}</strong
            >
            <button class="btn btn-sm btn-buy">Comprar</button>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- NOSOTROS -->
<section id="nosotros" class="container my-5">
  <h2 class="section-title text-center">Sobre Nosotros</h2>
  <p class="text-center">
    En <strong>Cheers Licores</strong> ofrecemos una selección exclusiva de licores
    nacionales e importados, cuidando cada detalle para brindarte una experiencia
    única. Fundados en la pasión por el buen gusto, llevamos años acompañando tus
    celebraciones y momentos especiales.
  </p>
</section>

<!-- CÓMO COMPRAR -->
<section id="comprar" class="container my-5">
  <h2 class="section-title text-center">¿Cómo Comprar?</h2>
  <div class="row text-center">
    <div class="col-md-4 mb-4">
      <i class="bi bi-cart-check-fill fs-1 text-primary"></i>
      <h5 class="mt-3">1. Elige tu producto</h5>
      <p>Explora nuestra selección premium y encuentra tu licor favorito.</p>
    </div>
    <div class="col-md-4 mb-4">
      <i class="bi bi-credit-card-fill fs-1 text-primary"></i>
      <h5 class="mt-3">2. Paga fácil</h5>
      <p>Ofrecemos múltiples métodos de pago seguros.</p>
    </div>
    <div class="col-md-4 mb-4">
      <i class="bi bi-box-seam fs-1 text-primary"></i>
      <h5 class="mt-3">3. Recíbelo en casa</h5>
      <p>Envíos rápidos y discretos a todo el país.</p>
    </div>
  </div>
</section>

<!-- CONTACTO -->
<section id="contacto" class="container my-5">
  <h2 class="section-title text-center">Contacto</h2>
  <p class="text-center mb-4">
    ¿Tienes dudas? Contáctanos a través de nuestras redes o escríbenos por
    WhatsApp.
  </p>
  <div class="d-flex justify-content-center gap-3">
    <a
      href="https://wa.me/57XXXXXXXXXX"
      target="_blank"
      class="btn btn-success"
    >
      <i class="bi bi-whatsapp me-2"></i>WhatsApp
    </a>
    <a
      href="https://instagram.com/cheerslicores"
      target="_blank"
      class="btn btn-dark"
    >
      <i class="bi bi-instagram me-2"></i>Instagram
    </a>
    <a href="mailto:contacto@cheerslicores.com" class="btn btn-secondary">
      <i class="bi bi-envelope-fill me-2"></i>Email
    </a>
  </div>
</section>

<style>
  :global(body) {
    background-color: #0d0d0d;
    color: #eaeaea;
    font-family: "Segoe UI", sans-serif;
  }

  .hero {
    background-image: url("https://wallpapers.com/images/featured/alcohol-cy5i30jo6w0gnjxq.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #eaeaea;
    padding: 5rem 1rem;
    text-align: center;
  }

  .info-hero {
    background-color: rgba(15, 15, 15, 0.9);
    padding: 16px 0px;
    border-radius: 16px;
    margin: 0 auto;
  }

  .section-title {
    color: #c9a14a;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  .card {
    background-color: #1a1a1a;
    border: none;
    box-shadow: 0 4px 10px rgba(255, 255, 255, 0.05);
    transition: transform 0.2s ease-in-out;
    color: #eaeaea;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card-title {
    color: #c9a14a;
  }

  .badge {
    background-color: #c9a14a;
    color: #0d0d0d;
  }

  .btn-buy {
    background-color: #c9a14a;
    color: #0d0d0d;
    font-weight: 600;
  }

  .btn-buy:hover {
    background-color: #eaeaea;
    color: #0d0d0d;
  }
</style>
