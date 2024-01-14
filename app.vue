<template>
  <div class="w-full h-full flex flex-col">
    <header class="border border-b-andalucia-green-dark bg-andalucia-green-light text-white p-4 fixed top-0 w-full z-10">
      <nav class="container mx-auto flex justify-between items-center">
        <h1 class="text-xl">Fermin D. Confianza</h1>
        <ul class="flex gap-4">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#valores">Nuestros valores</a></li>
          <li><a href="#fermin">Sobre Fermín</a></li>
          <li><a href="#info">Información de Campaña</a></li>
        </ul>
      </nav>
    </header>

    <main class="pt-10 pb-20 flex flex-col flex-1 overflow-auto h-100">
      <section id="inicio" class="mt-20 mb-20 p-10 rounded w-11/12 h-100 mx-auto bg-andalucia-gold-light">
        <div class="h-90" style="height:400px;">
          <h2 class="text-2xl text-andalucia-green-dark">La confianza que necesitas</h2>
        </div>
      </section>
      <section id="" class="py-10">
        <div id="valores">
          <h3 class="mx-10 text-3xl">Nuestros Valores</h3>
          <section id="valores" class="p-10">
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- Valor 1 -->
              <div class="bg-andalucia-green-dark p-6 rounded-lg shadow-lg">
                <h4 class="text-xl font-bold text-white">Andalucía Primero: Firmeza y Futuro</h4>
                <p class="text-white text-justify text-lg my-10">
                  Andalucía está en el epicentro de nuestro universo y no vamos a parar hasta llevarla hacia un futuro que
                  nos deslumbre! Con una firmeza que sacude los cimientos y un compromiso que quema como el sol andaluz,
                  ¡estamos en marcha hacia un mañana grandioso!
                </p>
              </div>

              <!-- Valor 2 -->
              <div class="bg-andalucia-gold-dark p-6 rounded-lg shadow-lg">
                <h4 class="text-xl font-bold text-white">Prosperidad Inquebrantable</h4>
                <p class="text-andalucia-gold-light text-justify text-lg my-10">
                  ¡Aquí no se rompe ni una sola fibra de nuestra inquebrantable determinación! Con el progreso económico
                  como un martillo que forja el futuro y la autosuficiencia regional como nuestro estandarte,
                  ¡alcanzaremos una prosperidad que hará temblar al mundo entero!
                </p>
              </div>

              <!-- Valor 3 -->
              <div class="bg-andalucia-green-light p-6 rounded-lg shadow-lg">
                <h4 class="text-xl font-bold text-andalucia-green-dark">Tradición y Revolución</h4>
                <p class="text-andalucia-green-dark text-justify text-lg my-10">
                  Somos como el vino de Jerez, madurados en la tradición y fermentando la revolución. Honramos nuestro
                  pasado con un brindis audaz hacia el futuro. ¡Andalucía, estamos dispuestos a incendiar el camino con la
                  chispa de la innovación y la llama de la tradición!
                </p>
              </div>

              <!-- Otros valores -->
              <!-- Añade aquí más cuadros según sea necesario -->
            </div>
          </section>
        </div>
      </section>

      <h3 id="fermin" class="mx-10 text-3xl text-left">Sobre Fermín</h3>
      <section class="container w-100 my-8 flex mx-auto flex-col text-justify gap-6 text-lg sm:px-20">
        <p class="text-2xl text-gray-600">
          Fermín, un ciudadano ruso, emigró a Andalucía en busca de un nuevo comienzo, escapando de las adversidades de su
          tierra natal. En Rusia, la vida era dura, y enfrentaba problemas inusuales con los osos, que eran una amenaza
          constante para él y su comunidad. Esta lucha constante contra la naturaleza hostil de Rusia forjó su carácter y
          su resistencia, preparándolo para desafíos aún mayores en su futuro.
        </p>
        <p class="text-2xl text-gray-600">
          Cuando llegó a Málaga, encontró un refugio en la cultura española, donde la fiesta y la celebración eran parte
          fundamental de la vida. La transición de la dureza rusa a la alegría andaluza fue un contraste asombroso, y
          Fermín se sumergió en esta nueva forma de vida con entusiasmo. Aquí, descubrió el valor de disfrutar el momento
          y compartir momentos de alegría con otros.
        </p>
        <p class="text-2xl text-gray-600">
          Sin embargo, su experiencia anterior en Rusia nunca se desvaneció por completo. En lugar de olvidarla, Fermín la
          utilizó como motivación para involucrarse en la vida política. Vio similitudes en la necesidad de resistir y
          enfrentar desafíos tanto en su tierra natal como en España. Su historia personal de superar obstáculos y
          encontrar la alegría en la vida se convirtió en la base de su compromiso político.
        </p>
        <p class="text-2xl text-gray-600">
          Fermín canalizó su pasión y determinación en la política, abogando por políticas que apoyaran el trabajo duro y
          la igualdad, inspirado por su historia de vida única que abarcaba desde la dura Rusia hasta la alegre Andalucía.
        </p>
        <p class="text-2xl text-gray-600">
          En resumen, las vivencias duras de Fermín, desde los problemas con los osos hasta los inviernos rusos
          implacables, moldearon su carácter y lo convirtieron en un hombre de confianza con un amor por tener la razón y
          un profundo conocimiento de una amplia variedad de temas. Su historia es una inspiración para todos nosotros.
        </p>
      </section>

      <h3 class="mx-10 text-3xl text-left">Información de Campaña</h3>
      <section id="info" class="container w-100 my-8 flex mx-auto flex-col text-justify gap-6 text-lg sm:px-20">
        <p class="text-2xl text-gray-600">
          Aquí tienes información de la campaña
        </p>
      </section>
    </main>
    <footer class="flex flex-row bg-andalucia-green-light text-white md:px-2 py-1 text-sm fixed bottom-0 w-full z-10">
      Copyright 2024, todos los derechos reservados. Cualquier paecido con la realidad es pura coincidencia.
    </footer>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initializeCountdown();
  },
  methods: {
    initializeCountdown() {
      const electionDate = new Date('2024-02-18').getTime();
      const countdownElement = document.getElementById('countdown');

      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = electionDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
          clearInterval(interval);
          countdownElement.innerText = '¡Ha llegado el día de las elecciones!';
        }
      }, 1000);
    }
  }
}
</script>

<style>
html,
body {
  /* Estilos para el body y el html */
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#__nuxt {
  /* Estilos para el contenedor de la aplicación */
  width: 100%;
  height: 100%;
}

p {
  margin-top: 10px;
  margin-bottom: 10px;
}</style>