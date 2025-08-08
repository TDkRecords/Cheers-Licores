<script>
  import { onMount } from "svelte";
  import { db } from "$lib/assets/js/firebase";
  import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    updateDoc,
  } from "firebase/firestore";

  let nombre = "";
  let categoria = "";
  let descripcion = "";
  let imagen = "";
  let precio = "";
  let stock = "";
  let activo = true;
  let destacado = false;
  let mensaje = "";
  let productos = [];
  let productoEditando = null;

  // Cargar productos
  const cargarProductos = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    productos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };

  // Eliminar producto
  const eliminarProducto = async (id) => {
    if (confirm("¿Eliminar este producto?")) {
      await deleteDoc(doc(db, "productos", id));
      await cargarProductos();
    }
  };

  // Cargar producto en el formulario
  const editarProducto = (producto) => {
    productoEditando = producto;
    nombre = producto.nombre || "";
    categoria = producto.categoria || "";
    descripcion = producto.descripcion || "";
    imagen = producto.imagen || "";
    precio = producto.precio || "";
    stock = producto.stock || "";
    activo = producto.activo ?? true;
    destacado = producto.destacado ?? false;
  };

  // Guardar (agregar o actualizar)
  const guardarProducto = async () => {
    if (!nombre || !categoria || !precio || !imagen) {
      mensaje = "Por favor completa los campos obligatorios.";
      return;
    }

    const data = {
      nombre,
      categoria,
      descripcion,
      imagen,
      precio: Number(precio),
      stock: Number(stock),
      activo,
      destacado,
    };

    try {
      if (productoEditando) {
        const ref = doc(db, "productos", productoEditando.id);
        await updateDoc(ref, data);
        mensaje = "✅ Producto actualizado";
      } else {
        await addDoc(collection(db, "productos"), data);
        mensaje = "✅ Producto agregado";
      }

      limpiarFormulario();
      await cargarProductos();
    } catch (error) {
      console.error(error);
      mensaje = "❌ Error al guardar.";
    }
  };

  const limpiarFormulario = () => {
    nombre = categoria = descripcion = imagen = precio = stock = "";
    activo = true;
    destacado = false;
    productoEditando = null;
  };

  onMount(cargarProductos);
</script>

<section class="admin-page container-fluid py-5">
  <div class="row">
    <!-- Lista de productos -->
    <div class="col-md-8 mb-4">
      <h2 class="text-gold mb-4">🗂️ Productos añadidos</h2>

      {#if productos.length === 0}
        <p>No hay productos aún.</p>
      {:else}
        <div class="producto-lista container">
          {#each productos as producto}
            <div
              class="row align-items-center producto-item py-3 border-bottom"
            >
              <!-- Imagen -->
              <div class="col-12 col-md-2">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  class="img-fluid producto-img rounded"
                />
              </div>

              <!-- Información -->
              <div class="col-12 col-md-3 mb-2 mb-md-0">
                <h5>INFORMACIÓN</h5>
                <strong class="d-block fs-5">{producto.nombre}</strong>
                <div>
                  {producto.descripcion}
                </div>
                <span class="badge bg-secondary text-uppercase me-2">
                  {producto.categoria}
                </span>
                <span class="text-warning fw-bold">
                  ${producto.precio.toLocaleString()}
                </span>
              </div>

              <div class="col-12 col-md-3 mb-2 mb-md-0">
                <h5>ESTADO</h5>
                <div>
                  <code>Activo: {producto.activo ? "Sí" : "No"}</code>
                </div>
                <div>
                  <code>Destacado: {producto.destacado ? "Sí" : "No"}</code>
                </div>
                <div>
                  <code>Stock: {producto.stock}</code>
                </div>
              </div>
              <!-- Acciones -->
              <div class="col-12 col-md-3 text-md-end text-center">
                <button
                  on:click={() => editarProducto(producto)}
                  class="btn btn-outline-warning me-2 mb-2 mb-2 w-100"
                >
                  <i class="bi bi-pencil-fill me-1"></i> Actualizar
                </button>
                <button
                  on:click={() => eliminarProducto(producto.id)}
                  class="btn btn-outline-danger w-100"
                >
                  <i class="bi bi-trash-fill me-1"></i> Eliminar
                </button>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>

    <!-- Formulario -->
    <div class="col-md-4">
      <h2 class="text-gold">
        {productoEditando ? "✏️ Editar producto" : "➕ Agregar producto"}
      </h2>

      {#if mensaje}
        <div class="mensaje">{mensaje}</div>
      {/if}

      <!-- svelte-ignore a11y_label_has_associated_control -->
      <form on:submit|preventDefault={guardarProducto} class="form">
        <label>Nombre*</label>
        <input type="text" bind:value={nombre} required />

        <label>Categoría*</label>
        <input type="text" bind:value={categoria} required />

        <label>Descripción</label>
        <textarea bind:value={descripcion}></textarea>

        <label>Imagen (URL)*</label>
        <input type="url" bind:value={imagen} required />

        <label>Precio (COP)*</label>
        <input type="number" bind:value={precio} min="0" required />

        <label>Stock disponible</label>
        <input type="number" bind:value={stock} min="0" />

        <label
          ><input type="checkbox" bind:checked={activo} /> Producto activo</label
        >
        <label
          ><input type="checkbox" bind:checked={destacado} /> Producto destacado</label
        >

        <button type="submit" class="btn-agregar">
          {productoEditando ? "Guardar cambios" : "Agregar producto"}
        </button>
        {#if productoEditando}
          <button
            type="button"
            class="btn-cancelar"
            on:click={limpiarFormulario}>Cancelar</button
          >
        {/if}
      </form>
    </div>
  </div>
</section>

<style>
  .admin-page {
    background: #111;
    color: #eaeaea;
    min-height: 100vh;
  }

  .text-gold {
    color: #c9a14a;
  }

  .form label {
    font-weight: bold;
    margin-top: 1rem;
    color: #c9a14a;
  }

  .form input,
  .form textarea {
    width: 100%;
    padding: 0.6rem;
    background: #222;
    color: #fff;
    border: 1px solid #444;
    border-radius: 8px;
  }

  .form input:focus,
  .form textarea:focus {
    border-color: #c9a14a;
    outline: none;
  }

  .btn-agregar {
    margin-top: 1.5rem;
    background-color: #c9a14a;
    color: #111;
    padding: 0.7rem;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    width: 100%;
  }

  .btn-cancelar {
    margin-top: 1rem;
    background-color: #444;
    color: #fff;
    border: none;
    padding: 0.5rem;
    border-radius: 8px;
    width: 100%;
  }

  .mensaje {
    background: #222;
    border-left: 5px solid #c9a14a;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .producto-lista {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .producto-item {
    display: flex;
    align-items: center;
    background: #1a1a1a;
    border: 1px solid #333;
    padding: 1rem;
    border-radius: 10px;
    gap: 1rem;
  }

  .producto-img img {
    width: 80px;
    border-radius: 6px;
  }

  .producto-info {
    flex-grow: 1;
  }

  .producto-info .categoria {
    font-size: 0.85rem;
    color: #999;
  }

  .producto-actions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .btn-eliminar,
  .btn-actualizar {
    background: #b94444;
    color: white;
    border: none;
    padding: 0.5rem 0.8rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.85rem;
  }

  .btn-actualizar {
    background: #c9a14a;
    color: #111;
  }

  .btn-eliminar:hover {
    background: #e25555;
  }

  .btn-actualizar:hover {
    background: #f0d58c;
  }
</style>
