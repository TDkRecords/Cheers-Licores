<footer class="footer mt-5 text-light pt-5 pb-3">
  <div class="container">
    <div class="row gy-4">
      <!-- Marca / Descripción -->
      <div class="col-md-3">
        <h5 class="text-uppercase fw-bold mb-3">🍷 Cheers Licores</h5>
        <p>
          Tu licorera premium con los mejores productos nacionales e importados.
          Celebramos contigo cada momento especial.
        </p>
      </div>

      <!-- Navegación rápida -->
      <div class="col-md-3">
        <h6 class="text-uppercase mb-3">Navegación</h6>
        <ul class="list-unstyled">
          <li>
            <a href="#productos" class="footer-link"
              ><i class="bi bi-bag me-2"></i>Productos</a
            >
          </li>
          <li>
            <a href="#nosotros" class="footer-link"
              ><i class="bi bi-info-circle me-2"></i>Nosotros</a
            >
          </li>
          <li>
            <a href="#comprar" class="footer-link"
              ><i class="bi bi-credit-card me-2"></i>Cómo Comprar</a
            >
          </li>
          <li>
            <a href="#contacto" class="footer-link"
              ><i class="bi bi-envelope me-2"></i>Contacto</a
            >
          </li>
        </ul>
      </div>

      <!-- Contacto -->
      <div class="col-md-3">
        <h6 class="text-uppercase mb-3">Contacto</h6>
        <ul class="list-unstyled">
          <li>
            <i class="bi bi-geo-alt-fill me-2"></i> Calle 123, Pasto, Colombia
          </li>
          <li><i class="bi bi-telephone-fill me-2"></i> +57 300 123 4567</li>
          <li>
            <i class="bi bi-envelope-fill me-2"></i> contacto@cheerslicores.com
          </li>
        </ul>
      </div>

      <!-- Horarios y redes -->
      <div class="col-md-3">
        <h6 class="text-uppercase mb-3">Horarios</h6>
        <p class="mb-2">
          <i class="bi bi-clock-fill me-2"></i>Lunes a Sábado: 10am - 8pm
        </p>
        <p class="mb-3">
          <i class="bi bi-clock-fill me-2"></i>Domingos: 11am - 5pm
        </p>

        <h6 class="text-uppercase mb-2">Síguenos</h6>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <div class="d-flex gap-3">
          <a href="https://instagram.com" target="_blank" class="social-icon"
            ><i class="bi bi-instagram"></i></a
          >
          <a href="https://facebook.com" target="_blank" class="social-icon"
            ><i class="bi bi-facebook"></i></a
          >
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            class="social-icon"><i class="bi bi-whatsapp"></i></a
          >
        </div>
      </div>
    </div>

    <!-- Divider -->
    <hr class="my-4" style="border-color: #333;" />

    <!-- Legal -->
    <div class="text-center small">
      <p class="mb-1">
        &copy; {new Date().getFullYear()} Cheers Licores. Todos los derechos reservados.
      </p>
      <p>
        <a href="/politicas" class="footer-link">Política de privacidad</a> |
        <a href="/terminos" class="footer-link">Términos de uso</a>
      </p>
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: #000;
    color: #eaeaea;
  }

  .footer-link {
    color: #c9a14a;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  .footer-link:hover {
    text-decoration: underline;
    color: #f0d58c;
    transform: translateX(3px);
  }

  .social-icon {
    color: #c9a14a;
    font-size: 1.5rem;
    transition:
      transform 0.3s ease,
      color 0.3s ease;
  }

  .social-icon:hover {
    transform: scale(1.2);
    color: #f0d58c;
  }

  .bi {
    vertical-align: middle;
  }
</style>
